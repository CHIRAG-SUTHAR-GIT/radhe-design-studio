# -*- coding: utf-8 -*-
"""Turn one equirectangular panorama into the three files the viewer needs.

    python scripts/make-pano.py "C:/path/KITCHEN.png" living-room

Writes assets/pano/<name>-8k.jpg, -4k.jpg and -thumb.webp. The source should
be equirectangular (2:1). Masters straight out of a renderer are often 60MB+;
these are the web-sized copies the viewer actually loads.
"""
import os
import sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   'assets', 'pano')


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 1
    src, name = sys.argv[1], sys.argv[2]
    im = Image.open(src).convert('RGB')
    w, h = im.size
    if abs(w / h - 2) > 0.02:
        print(f'warning: {w}x{h} is not 2:1 — the panorama will look stretched')

    os.makedirs(OUT, exist_ok=True)
    made = []
    # 8192 is the max texture size on effectively every desktop GPU, 4096 on
    # mobile. Staying at or under the limit avoids a main-thread rescale.
    for label, size, quality in (('8k', (8192, 4096), 84), ('4k', (4096, 2048), 86)):
        p = os.path.join(OUT, f'{name}-{label}.jpg')
        im.resize(size, Image.LANCZOS).save(p, 'JPEG', quality=quality,
                                            optimize=True, progressive=True)
        made.append(p)
    p = os.path.join(OUT, f'{name}-thumb.webp')
    im.resize((1200, 600), Image.LANCZOS).save(p, 'WEBP', quality=82, method=6)
    made.append(p)

    for p in made:
        print(f'{os.path.getsize(p) / 1e6:6.2f} MB  {os.path.relpath(p)}')
    print(f'\nAdd a scene in admin/tours.html with file name: {name}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
