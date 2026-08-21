/* ═══════════════════════════════════════════════════════════════════════
   RADHE 360 — panorama viewer

   Renders an equirectangular panorama by raycasting in a fragment shader
   against a single full-screen triangle. There is no sphere mesh and no
   depth displacement, which is what makes it smooth: one texture fetch
   per pixel, nothing to rebuild when the view changes.

   Controls are the pointer and nothing else — drag to look, wheel or
   pinch to zoom. No buttons.
   ═══════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const VERT = `
    attribute vec2 aPos;
    varying vec2 vNdc;
    void main() {
      vNdc = aPos;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }`;

  const FRAG = `
    precision highp float;
    varying vec2 vNdc;
    uniform sampler2D uTex;
    uniform mat3 uRot;
    uniform float uHalfFov;   // tan of half the vertical field of view
    uniform float uAspect;
    const float PI = 3.14159265359;

    void main() {
      // Ray through this pixel in camera space, then rotated into world space.
      vec3 dir = normalize(vec3(vNdc.x * uAspect * uHalfFov, vNdc.y * uHalfFov, -1.0));
      dir = uRot * dir;

      // World direction to equirectangular coordinates.
      float u = atan(dir.x, -dir.z) / (2.0 * PI) + 0.5;
      float v = acos(clamp(dir.y, -1.0, 1.0)) / PI;
      gl_FragColor = texture2D(uTex, vec2(u, v));
    }`;

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const DEG = Math.PI / 180;

  function compile(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(sh) || 'shader failed');
    }
    return sh;
  }

  /* Hamilton product, quaternions as [w, x, y, z]. */
  function mul(a, b) {
    return [
      a[0]*b[0] - a[1]*b[1] - a[2]*b[2] - a[3]*b[3],
      a[0]*b[1] + a[1]*b[0] + a[2]*b[3] - a[3]*b[2],
      a[0]*b[2] - a[1]*b[3] + a[2]*b[0] + a[3]*b[1],
      a[0]*b[3] + a[1]*b[2] - a[2]*b[1] + a[3]*b[0]
    ];
  }

  function slerp(a, b, t, dot) {
    if (dot > 0.9995) {                    // nearly aligned: lerp and renormalise
      const o = a.map((v, i) => v + (b[i] - v) * t);
      const n = Math.hypot(o[0], o[1], o[2], o[3]) || 1;
      return o.map((v) => v / n);
    }
    const th = Math.acos(dot), s = Math.sin(th);
    const wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
    return a.map((v, i) => v * wa + b[i] * wb);
  }

  /* Quaternion to the column-major 3x3 the shader multiplies a ray by. */
  function matFromQuat([w, x, y, z]) {
    return new Float32Array([
      1 - 2*(y*y + z*z), 2*(x*y + w*z),     2*(x*z - w*y),
      2*(x*y - w*z),     1 - 2*(x*x + z*z), 2*(y*z + w*x),
      2*(x*z + w*y),     2*(y*z - w*x),     1 - 2*(x*x + y*y)
    ]);
  }

  /* Yaw/pitch to a row-major 3x3 the shader can multiply a ray by. */
  function rotation(yaw, pitch) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    // Rotate about Y (yaw) then about the camera's X (pitch).
    return new Float32Array([
      cy, 0, -sy,
      sy * sp, cp, cy * sp,
      sy * cp, -sp, cy * cp
    ]);
  }

  class Pano {
    constructor(canvas) {
      this.canvas = canvas;
      const opts = { antialias: false, alpha: false, depth: false, stencil: false,
                     powerPreference: 'high-performance', preserveDrawingBuffer: false };
      this.gl = canvas.getContext('webgl', opts) || canvas.getContext('experimental-webgl', opts);
      if (!this.gl) throw new Error('WebGL unavailable');

      this.yaw = 0;
      this.pitch = 0;
      this.fov = 75 * DEG;
      this.minFov = 28 * DEG;
      this.maxFov = 100 * DEG;
      this.dirty = true;
      this.ready = false;
      this.gyro = null;
      this.quat = null;
      this.yawOffset = 0;

      this._initGL();
      this._initInput();
      this._resize();
      addEventListener('resize', () => this._resize(), { passive: true });
      addEventListener('orientationchange', () => setTimeout(() => this._resize(), 200));
      this._loop = this._loop.bind(this);
      requestAnimationFrame(this._loop);
    }

    _initGL() {
      const gl = this.gl;
      const prog = gl.createProgram();
      gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) || 'link failed');
      }
      gl.useProgram(prog);
      this.prog = prog;

      // One oversized triangle covers the viewport with no seam down the middle.
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, 'aPos');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      this.uRot = gl.getUniformLocation(prog, 'uRot');
      this.uHalfFov = gl.getUniformLocation(prog, 'uHalfFov');
      this.uAspect = gl.getUniformLocation(prog, 'uAspect');
      gl.uniform1i(gl.getUniformLocation(prog, 'uTex'), 0);

      this.tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      // A single dark pixel until the panorama arrives, so nothing flashes.
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE,
        new Uint8Array([12, 12, 14]));
    }

    /* The largest tier this GPU can upload without the browser rescaling it
       on the main thread — that rescale is a visible stall on big panoramas. */
    static maxTexture() {
      try {
        const c = document.createElement('canvas');
        const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
        return gl ? gl.getParameter(gl.MAX_TEXTURE_SIZE) : 4096;
      } catch { return 4096; }
    }

    load(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.onload = () => {
          const gl = this.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.tex);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
          // Equirect panoramas are power-of-two, so repeat wrap and mipmaps
          // are both available: the seam closes and zooming out stops aliasing.
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
          gl.generateMipmap(gl.TEXTURE_2D);
          const aniso = gl.getExtension('EXT_texture_filter_anisotropic')
            || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
          if (aniso) {
            gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT,
              Math.min(8, gl.getParameter(aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT)));
          }
          this.ready = true;
          this.dirty = true;
          resolve(img);
        };
        img.onerror = () => reject(new Error('panorama failed to load'));
        img.src = src;
      });
    }

    _resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = Math.round(this.canvas.clientWidth * dpr);
      const h = Math.round(this.canvas.clientHeight * dpr);
      if (!w || !h) return;
      if (this.canvas.width !== w || this.canvas.height !== h) {
        this.canvas.width = w;
        this.canvas.height = h;
        this.gl.viewport(0, 0, w, h);
      }
      this.dirty = true;
    }

    _initInput() {
      const el = this.canvas;
      const pointers = new Map();
      let lastX = 0, lastY = 0, pinchDist = 0, dragging = false;

      // Inertia: a flick keeps drifting and eases out, which is most of what
      // makes a panorama feel smooth rather than stuck to the finger.
      this.velYaw = 0;
      this.velPitch = 0;

      const look = (dx, dy) => {
        // Scale by field of view so the drag feels identical at every zoom.
        const k = this.fov / this.canvas.clientHeight;
        if (this.gyro) { this.yawOffset -= dx * k; this.dirty = true; return; }
        this.yaw -= dx * k;
        this.pitch = clamp(this.pitch - dy * k, -85 * DEG, 85 * DEG);
        this.velYaw = -dx * k;
        this.velPitch = -dy * k;
        this.dirty = true;
      };

      el.addEventListener('pointerdown', (e) => {
        el.setPointerCapture?.(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 1) {
          dragging = true;
          lastX = e.clientX; lastY = e.clientY;
          this.velYaw = this.velPitch = 0;
        } else if (pointers.size === 2) {
          const [a, b] = [...pointers.values()];
          pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
        }
      });

      el.addEventListener('pointermove', (e) => {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pointers.size === 2) {
          // Two fingers: pinch to zoom, and never also pan.
          const [a, b] = [...pointers.values()];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (pinchDist > 0) this.zoomBy(pinchDist / d);
          pinchDist = d;
          return;
        }
        if (!dragging) return;
        look(e.clientX - lastX, e.clientY - lastY);
        lastX = e.clientX; lastY = e.clientY;
      }, { passive: true });

      const release = (e) => {
        pointers.delete(e.pointerId);
        if (pointers.size < 2) pinchDist = 0;
        if (!pointers.size) dragging = false;
      };
      el.addEventListener('pointerup', release);
      el.addEventListener('pointercancel', release);
      el.addEventListener('lostpointercapture', release);

      el.addEventListener('wheel', (e) => {
        e.preventDefault();
        this.zoomBy(Math.exp(e.deltaY * 0.0012));
      }, { passive: false });

      // Stops the page from bouncing or the browser from pinch-zooming
      // the document instead of the panorama.
      el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
      el.addEventListener('gesturestart', (e) => e.preventDefault());
    }

    zoomBy(factor) {
      this.fov = clamp(this.fov * factor, this.minFov, this.maxFov);
      this.dirty = true;
    }

    /* ── Device orientation ──────────────────────────────────────────
       Reading pitch straight off beta is what breaks the up/down axis: as
       the phone passes vertical, beta folds back and alpha flips 180, so
       the view snaps round. Deriving yaw and pitch from Euler angles at all
       reintroduces the same gimbal problem.

       So the orientation stays a quaternion end to end. It is smoothed by
       slerping toward the new reading — which has no angle-wrap seam, and
       so needs no unwrapping — and handed to the shader as a full rotation
       matrix. Nothing is ever decomposed, so there is no pole to cross. */
    startGyro() {
      if (this.gyro) return false;
      let q = null;                       // smoothed orientation

      const handler = (e) => {
        if (e.alpha == null || e.beta == null || e.gamma == null) return;

        const sa = (screen.orientation && screen.orientation.angle
                    || window.orientation || 0) * DEG;

        /* Euler order is YXZ over (beta, alpha, -gamma) — the arrangement
           the browser actually reports. Getting this wrong swaps the axes:
           tilting the phone up and down turns the view sideways instead. */
        const x = e.beta * DEG, y = e.alpha * DEG, zc = -e.gamma * DEG;
        const c1 = Math.cos(x / 2), s1 = Math.sin(x / 2);
        const c2 = Math.cos(y / 2), s2 = Math.sin(y / 2);
        const c3 = Math.cos(zc / 2), s3 = Math.sin(zc / 2);
        let t = [
          c1 * c2 * c3 + s1 * s2 * s3,    // w
          s1 * c2 * c3 + c1 * s2 * s3,    // x
          c1 * s2 * c3 - s1 * c2 * s3,    // y
          c1 * c2 * s3 - s1 * s2 * c3     // z
        ];

        // Look out of the back of the device rather than through the screen.
        t = mul(t, [Math.SQRT1_2, -Math.SQRT1_2, 0, 0]);
        // Undo the screen rotation so landscape behaves like portrait.
        t = mul(t, [Math.cos(-sa / 2), 0, 0, Math.sin(-sa / 2)]);

        if (!q) { q = t; }
        else {
          // Adaptive slerp: barely follow sub-degree tremor, open up for a
          // deliberate turn. angle is the shortest rotation between the two.
          let dot = q[0]*t[0] + q[1]*t[1] + q[2]*t[2] + q[3]*t[3];
          if (dot < 0) { t = t.map((v) => -v); dot = -dot; }
          const angle = 2 * Math.acos(Math.min(1, Math.abs(dot)));
          const rate = angle < 0.004 ? 0            // ~0.2 deg: hand tremor
                     : angle < 0.02  ? 0.10
                     : angle < 0.10  ? 0.28
                     : 0.55;
          if (rate) q = slerp(q, t, rate, dot);
        }

        this.quat = q;
        this.dirty = true;
      };

      addEventListener('deviceorientation', handler, { passive: true });
      this.gyro = handler;
      return true;
    }

    stopGyro() {
      if (!this.gyro) return;
      removeEventListener('deviceorientation', this.gyro);
      this.gyro = null;
      // Hand the current view back to the pointer without a jump.
      if (this.quat) {
        const m = matFromQuat(this.quat);
        const fx = -m[6], fy = -m[7], fz = -m[8];   // camera looks down -Z
        this.yaw = Math.atan2(fx, -fz) + this.yawOffset;
        this.pitch = clamp(Math.asin(clamp(fy, -1, 1)), -85 * DEG, 85 * DEG);
        this.quat = null;
        this.yawOffset = 0;
      }
    }

    _loop() {
      requestAnimationFrame(this._loop);

      // Glide after a flick, unless the gyro is driving.
      if (!this.gyro && (Math.abs(this.velYaw) > 1e-5 || Math.abs(this.velPitch) > 1e-5)) {
        this.yaw += this.velYaw;
        this.pitch = clamp(this.pitch + this.velPitch, -85 * DEG, 85 * DEG);
        this.velYaw *= 0.93;
        this.velPitch *= 0.93;
        this.dirty = true;
      }

      // Only paint when something moved: a still panorama costs nothing.
      if (!this.dirty || !this.ready) return;
      this.dirty = false;

      const gl = this.gl;
      let m;
      if (this.quat) {
        m = matFromQuat(this.quat);
        if (this.yawOffset) {
          // Spin the device orientation about world up by the dragged offset.
          const c = Math.cos(this.yawOffset), s2 = Math.sin(this.yawOffset);
          const y = new Float32Array([c, 0, -s2, 0, 1, 0, s2, 0, c]);
          const o = new Float32Array(9);
          for (let col = 0; col < 3; col++)
            for (let row = 0; row < 3; row++)
              o[col * 3 + row] = y[row] * m[col * 3] + y[3 + row] * m[col * 3 + 1]
                               + y[6 + row] * m[col * 3 + 2];
          m = o;
        }
      } else {
        m = rotation(this.yaw, this.pitch);
      }
      gl.uniformMatrix3fv(this.uRot, false, m);
      gl.uniform1f(this.uHalfFov, Math.tan(this.fov / 2));
      gl.uniform1f(this.uAspect, this.canvas.width / this.canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
  }

  window.RadhePano = Pano;
})();
