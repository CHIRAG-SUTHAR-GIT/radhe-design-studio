/* ═══════════════════════════════════════════════════════════════════
   Radhe Design Studio — studio desk
   ═══════════════════════════════════════════════════════════════════
   Leads, projects, quotations and the material catalogue.

   WHERE THE DATA LIVES. Everything is held in this browser, under one
   key in localStorage. That is a deliberate consequence of how the site
   is hosted: GitHub Pages serves static files and runs no code, so
   there is nowhere on the server to keep a record. What follows from
   that, plainly:

     · the data is on THIS device and THIS browser only — it does not
       follow you to your phone, and a colleague on another machine sees
       an empty desk
     · clearing site data clears the studio's records
     · the passcode below keeps a passer-by out of the screen. It is not
       access control: the page and its code are public, so anyone who
       knows the URL can open the file. Do not treat it as security.

   So: Settings → Backup writes a dated JSON of everything. Use it. When
   the site moves to the Hostinger plan the repo is already set up for
   (PHP + MySQL — see database.sql), `Store` below is the only thing
   that has to change: swap its four methods for fetch calls and the
   rest of the app is unaffected.
   ═══════════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  const CAT = window.RDS_CATALOGUE;
  const KEY = 'rds.desk.v1';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const today = () => new Date().toISOString().slice(0, 10);

  /* ── Money ───────────────────────────────────────────────────────
     Indian grouping (12,34,567) and words in lakh and crore, because
     that is what a client here reads and what a quotation must state
     in words to be worth anything in a dispute. */
  const money = (n) => '₹' + Math.round(Number(n) || 0).toLocaleString('en-IN');
  const money2 = (n) => (Number(n) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const under100 = (n) => n < 20 ? ONES[n] : (TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : ''));
  const under1000 = (n) => (n >= 100 ? ONES[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + under100(n % 100) : '') : under100(n));

  function words(amount) {
    let n = Math.floor(Math.abs(Number(amount) || 0));
    const paise = Math.round((Math.abs(amount) - n) * 100);
    if (n === 0 && !paise) return 'Zero Rupees Only';
    const parts = [];
    const crore = Math.floor(n / 10000000); n %= 10000000;
    const lakh = Math.floor(n / 100000); n %= 100000;
    const thousand = Math.floor(n / 1000); n %= 1000;
    if (crore) parts.push(under1000(crore) + ' Crore');
    if (lakh) parts.push(under1000(lakh) + ' Lakh');
    if (thousand) parts.push(under1000(thousand) + ' Thousand');
    if (n) parts.push(under1000(n));
    let out = parts.join(' ').trim() + ' Rupees';
    if (paise) out += ' and ' + under100(paise) + ' Paise';
    return out + ' Only';
  }

  /* ── Store ───────────────────────────────────────────────────────
     The seam. Everything above it is the app; everything below it is
     where the record happens to be kept today. */
  const Store = {
    read() {
      try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        /* A quota error, a private window, a browser set to block site
           data — all reach here. Losing the screen too would leave no
           way to export what is still in memory, so carry on with what
           we have and say so once. */
        console.warn('[desk] could not read the record:', e);
        return null;
      }
    },
    write(data) {
      try {
        localStorage.setItem(KEY, JSON.stringify(data));
        return true;
      } catch (e) {
        console.warn('[desk] could not save:', e);
        toast('Could not save — the browser refused. Take a backup from Settings now.');
        return false;
      }
    }
  };

  const blankState = () => ({
    version: 1,
    company: {
      name: 'Radhe Design Studio',
      tagline: 'Interior architecture',
      address: 'A-1111, Money Plant High Street, Jagatpur Road,\nSarkhej – Gandhinagar Highway, nr. BSNL Office,\nGota, Ahmedabad, Gujarat 382470',
      phone: '', email: 'radhesuthar1107@gmail.com', web: 'www.radhedesignstudio.com',
      gstin: '', pan: '',
      bank: 'Bank name / A/c no. / IFSC — set this in Settings',
      quotePrefix: 'RDS/Q', financialYear: '2026-27', nextNumber: 1,
      gstMode: 'cgst-sgst', gstRate: 18, validityDays: 15,
      overheadPct: 12,
      milestones: [
        ['On confirmation of order', 40],
        ['On material reaching site', 30],
        ['On completion of installation', 25],
        ['On handover', 5]
      ],
      terms: [
        'Rates are inclusive of material and labour unless stated otherwise against the line.',
        'Quantities are provisional and will be measured on site; billing is on actual measurement.',
        'Payment: 40% on order confirmation, 30% on material reaching site, 25% on installation, 5% on handover.',
        'Any item not listed in this schedule is not part of the quoted scope.',
        'Electrical, plumbing and civil work beyond the listed scope will be quoted separately.',
        'Client to provide water, electricity and safe storage at site during execution.',
        'Delivery period will be confirmed on receipt of the confirmed order and advance.',
        'This quotation is valid for the period stated above; rates are subject to revision after that.'
      ]
    },
    leads: [], quotes: [], rates: {}, matRates: {}, wastage: {}, seq: {}
  });

  let S = Store.read() || blankState();
  /* An older backup may predate a field added later; filling the gaps on
     load keeps the app from reading undefined all over the place. */
  S = Object.assign(blankState(), S);
  S.company = Object.assign(blankState().company, S.company || {});

  const save = () => Store.write(S);

  let toastTimer = 0;
  function toast(msg) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  /* ── Catalogue lookup, with the studio's own rates over the top ── */
  const allItems = () => CAT.groups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.name, groupId: g.id })));
  const itemIndex = Object.fromEntries(allItems().map((i) => [i.id, i]));
  const rateOf = (id) => (S.rates[id] !== undefined ? Number(S.rates[id]) : (itemIndex[id] ? itemIndex[id].rate : 0));

  /* ── Quotation arithmetic ────────────────────────────────────────
     One function, used by the builder, the list and the document, so
     the number on screen and the number on the page cannot drift. */
  function totals(q) {
    let sub = 0, optional = 0;
    (q.rooms || []).forEach((r) => (r.lines || []).forEach((l) => {
      const amt = (Number(l.qty) || 0) * (Number(l.rate) || 0);
      /* An optional line is priced and printed but not carried into the
         total — it is not ordered until it is accepted. */
      if (l.optional) optional += amt; else sub += amt;
    }));
    const discount = q.discountType === 'pct'
      ? sub * (Number(q.discount) || 0) / 100
      : (Number(q.discount) || 0);
    const afterDiscount = Math.max(0, sub - discount);
    const gstRate = Number(q.gstRate ?? S.company.gstRate) || 0;
    const gst = q.gstApplicable === false ? 0 : afterDiscount * gstRate / 100;
    const beforeRound = afterDiscount + gst;
    const grand = Math.round(beforeRound);
    return {
      sub, optional, discount, afterDiscount, gstRate, gst,
      half: gst / 2, rounding: grand - beforeRound, grand
    };
  }
  const roomTotal = (r) => (r.lines || []).reduce((t, l) => t + (l.optional ? 0 : (Number(l.qty) || 0) * (Number(l.rate) || 0)), 0);

  /* ── Material take-off ───────────────────────────────────────────
     What the studio has to BUY to build what the client is being
     quoted. Every priced line is expanded through its consumption
     norm, the specification chosen on that line substitutes what the
     norm assumed, wastage is carried by category, and the whole job is
     aggregated into one purchase list.

     Optional lines are excluded — they are not ordered until they are
     accepted. */
  const MAT = window.RDS_MATERIALS;
  const matIndex = Object.fromEntries(MAT.MATERIALS.map((m) => [m.id, m]));
  const matRate = (id) => (S.matRates[id] !== undefined ? Number(S.matRates[id])
    : (matIndex[id] ? matIndex[id].rate : 0));
  const wastageOf = (cat) => (S.wastage[cat] !== undefined ? Number(S.wastage[cat])
    : (MAT.WASTAGE[cat] || 0));

  function takeOff(q) {
    const acc = {};        /* matId -> { qty, from: Map(room -> qty) } */
    let labour = 0;
    const add = (id, qty, roomName) => {
      if (!matIndex[id] || !(qty > 0)) return;
      const a = acc[id] || (acc[id] = { qty: 0, from: {} });
      a.qty += qty;
      a.from[roomName] = (a.from[roomName] || 0) + qty;
    };

    (q.rooms || []).forEach((room) => {
      (room.lines || []).forEach((line) => {
        if (line.optional) return;
        const rc = MAT.RECIPES[line.itemId];
        const qty = Number(line.qty) || 0;
        if (!rc || !qty) return;
        labour += (rc.labour || 0) * qty;

        /* Work on a copy — a substitution must never edit the shared norm. */
        let mats = rc.mats.map(([id, per]) => [id, per]);
        Object.values(line.spec || {}).forEach((choice) => {
          const ops = MAT.SUBS[choice];
          if (!ops) return;
          ops.forEach(([op, a, b]) => {
            if (op === 'swap') {
              mats = mats.map(([id, per]) => (id === a ? [b, per] : [id, per]));
            } else if (op === 'drop') {
              mats = mats.filter(([id]) => id !== a);
            } else if (op === 'add') {
              const hit = mats.find(([id]) => id === a);
              if (hit) hit[1] += b; else mats.push([a, b]);
            }
          });
        });
        mats.forEach(([id, per]) => add(id, per * qty, room.name));
      });
    });

    /* Consumables ride on the joinery material actually being bought. */
    let joineryValue = 0;
    Object.entries(acc).forEach(([id, a]) => {
      const mm = matIndex[id];
      if (mm && MAT.CONSUMABLE_BASE.includes(mm.cat)) joineryValue += a.qty * matRate(id);
    });
    if (joineryValue > 0) {
      MAT.CONSUMABLES.forEach(([id, per1000]) =>
        add(id, per1000 * joineryValue / 1000, 'Workshop consumables'));
    }

    const rows = Object.entries(acc).map(([id, a]) => {
      const mm = matIndex[id];
      const waste = wastageOf(mm.cat);
      const order = a.qty * (1 + waste / 100);
      const rate = matRate(id);
      return {
        id, name: mm.name, cat: mm.cat, unit: mm.unit, note: mm.note,
        net: a.qty, waste, order, rate, amount: order * rate,
        from: Object.entries(a.from).sort((x, y) => y[1] - x[1])
      };
    }).sort((a, b) => a.cat.localeCompare(b.cat) || b.amount - a.amount);

    const material = rows.reduce((t, r) => t + r.amount, 0);
    const byCat = {};
    rows.forEach((r) => { byCat[r.cat] = (byCat[r.cat] || 0) + r.amount; });

    const t = totals(q);
    const overheadPct = Number(S.company.overheadPct) || 0;
    const overhead = (material + labour) * overheadPct / 100;
    const cost = material + labour + overhead;
    /* Margin is measured against the value BEFORE tax — GST is collected,
       not earned, and counting it as revenue flatters every job. */
    const revenue = t.afterDiscount;
    return {
      rows, byCat, material, labour, overhead, overheadPct, cost, revenue,
      margin: revenue - cost,
      marginPct: revenue > 0 ? (revenue - cost) / revenue * 100 : 0
    };
  }

  function nextQuoteNo() {
    const c = S.company;
    const n = String(c.nextNumber || 1).padStart(3, '0');
    return `${c.quotePrefix}/${c.financialYear}/${n}`;
  }

  /* ══ VIEWS ══════════════════════════════════════════════════════ */
  const views = {};
  let toQuote = null, toGroup = 'all', toRoom = 'all';
  let route = 'dashboard';
  let openQuoteId = null;

  function go(r, id) {
    route = r;
    if (id !== undefined) openQuoteId = id;
    render();
    scrollTo({ top: 0 });
  }

  function render() {
    $$('.nav-item').forEach((b) => b.classList.toggle('is-on', b.dataset.route === route));
    const counts = { leads: S.leads.length, quotes: S.quotes.length };
    $$('.nav-item[data-count]').forEach((b) => { b.querySelector('b').textContent = counts[b.dataset.count] || ''; });
    const v = views[route] || views.dashboard;
    $('#view').innerHTML = v.html();
    $('#title').textContent = v.title;
    $('#actions').innerHTML = v.actions ? v.actions() : '';
    if (v.wire) v.wire();
  }

  /* ── Dashboard ─────────────────────────────────────────────────── */
  views.dashboard = {
    title: 'Dashboard',
    html() {
      const open = S.leads.filter((l) => !['Won', 'Lost'].includes(l.stage));
      const won = S.leads.filter((l) => l.stage === 'Won');
      const quoted = S.quotes.reduce((t, q) => t + totals(q).grand, 0);
      const wonValue = won.reduce((t, l) => t + (Number(l.value) || 0), 0);
      const closed = S.leads.filter((l) => ['Won', 'Lost'].includes(l.stage)).length;
      const rate = closed ? Math.round(won.length / closed * 100) : 0;

      const dueList = S.leads
        .filter((l) => l.followUp && !['Won', 'Lost'].includes(l.stage))
        .sort((a, b) => a.followUp.localeCompare(b.followUp))
        .slice(0, 8);

      const byStage = CAT.stages.map((st) => ({ st, n: S.leads.filter((l) => l.stage === st).length }))
        .filter((x) => x.n);

      return `
        <div class="grid g4" style="margin-bottom:.9rem">
          ${stat('Open enquiries', open.length, `${S.leads.length} in all`)}
          ${stat('Quotations issued', S.quotes.length, money(quoted) + ' quoted')}
          ${stat('Won', won.length, money(wonValue))}
          ${stat('Conversion', rate + '%', closed ? `of ${closed} closed` : 'nothing closed yet')}
        </div>
        <div class="grid g2">
          <div class="card">
            <div class="card__head"><h3>Follow-ups due</h3></div>
            ${dueList.length ? `<div class="t-wrap"><table><tbody>${dueList.map((l) => {
              const late = l.followUp < today();
              return `<tr data-open-lead="${l.id}" style="cursor:pointer">
                <td><b>${esc(l.name)}</b><div class="line__spec">${esc(l.stage)}</div></td>
                <td class="num"><span class="pill ${late ? 'pill--hot' : ''}">${esc(l.followUp)}</span></td>
              </tr>`; }).join('')}</tbody></table></div>`
              : `<div class="empty">Nothing due.<br><span style="font-size:.8rem">Set a follow-up date on an enquiry and it will appear here.</span></div>`}
          </div>
          <div class="card">
            <div class="card__head"><h3>Pipeline</h3></div>
            ${byStage.length ? `<div class="t-wrap"><table><tbody>${byStage.map((x) =>
              `<tr><td>${esc(x.st)}</td><td class="num">${x.n}</td></tr>`).join('')}</tbody></table></div>`
              : `<div class="empty">No enquiries yet.<br><span style="font-size:.8rem">Add one from the Enquiries screen.</span></div>`}
          </div>
        </div>`;
    },
    wire() {
      $$('[data-open-lead]').forEach((tr) => tr.onclick = () => editLead(tr.dataset.openLead));
    }
  };
  const stat = (label, value, sub) =>
    `<div class="card stat"><span>${esc(label)}</span><b>${esc(value)}</b><em>${esc(sub || '')}</em></div>`;

  /* ── Enquiries ─────────────────────────────────────────────────── */
  let leadFilter = 'open';
  views.leads = {
    title: 'Enquiries',
    actions: () => `<button class="btn btn--go" id="add-lead">+ New enquiry</button>`,
    html() {
      const list = S.leads.filter((l) =>
        leadFilter === 'all' ? true :
        leadFilter === 'won' ? l.stage === 'Won' :
        leadFilter === 'lost' ? l.stage === 'Lost' :
        !['Won', 'Lost'].includes(l.stage))
        .sort((a, b) => (b.created || '').localeCompare(a.created || ''));

      return `
        <div class="row" style="margin-bottom:.8rem">
          ${['open', 'won', 'lost', 'all'].map((f) =>
            `<button class="btn btn--sm ${leadFilter === f ? 'btn--go' : ''}" data-filter="${f}">${f[0].toUpperCase() + f.slice(1)}</button>`).join('')}
          <span class="spacer" style="margin-left:auto;color:var(--ink-3);font-size:.78rem">${list.length} shown</span>
        </div>
        <div class="card card__body--flush">
          ${list.length ? `<div class="t-wrap"><table>
            <thead><tr><th>Client</th><th>Property</th><th>Stage</th><th>Source</th>
              <th class="num">Value</th><th>Follow-up</th><th></th></tr></thead>
            <tbody>${list.map((l) => `<tr>
              <td><b>${esc(l.name)}</b><div class="line__spec">${esc(l.phone || '')}${l.phone && l.email ? ' · ' : ''}${esc(l.email || '')}</div></td>
              <td>${esc(l.property || '—')}<div class="line__spec">${esc(l.area ? l.area + ' sq.ft' : '')}</div></td>
              <td><span class="pill ${l.stage === 'Won' ? 'pill--won' : l.stage === 'Lost' ? 'pill--lost' : 'pill--cool'}">${esc(l.stage)}</span></td>
              <td>${esc(l.source || '—')}</td>
              <td class="num">${l.value ? money(l.value) : '—'}</td>
              <td>${l.followUp ? `<span class="pill ${l.followUp < today() && !['Won','Lost'].includes(l.stage) ? 'pill--hot' : ''}">${esc(l.followUp)}</span>` : '—'}</td>
              <td class="num"><button class="btn btn--sm" data-edit="${l.id}">Open</button></td>
            </tr>`).join('')}</tbody></table></div>`
            : `<div class="empty"><b>No enquiries here yet</b>Every quotation starts from one. Add the first.</div>`}
        </div>`;
    },
    wire() {
      $('#add-lead').onclick = () => editLead(null);
      $$('[data-filter]').forEach((b) => b.onclick = () => { leadFilter = b.dataset.filter; render(); });
      $$('[data-edit]').forEach((b) => b.onclick = () => editLead(b.dataset.edit));
    }
  };

  function editLead(id) {
    const l = id ? S.leads.find((x) => x.id === id) : null;
    const d = l || { id: uid(), name: '', phone: '', email: '', property: '', area: '', source: '',
      stage: 'New enquiry', value: '', followUp: '', address: '', notes: '', created: today() };

    modal({
      title: l ? 'Enquiry — ' + esc(d.name) : 'New enquiry',
      body: `
        <div class="grid g2">
          <label class="f"><span>Client name</span><input type="text" id="l-name" value="${esc(d.name)}" placeholder="Full name"></label>
          <label class="f"><span>Phone</span><input type="tel" id="l-phone" value="${esc(d.phone)}" placeholder="+91"></label>
          <label class="f"><span>Email</span><input type="email" id="l-email" value="${esc(d.email)}"></label>
          <label class="f"><span>Source</span><select id="l-source">
            <option value="">—</option>${CAT.sources.map((s) => `<option ${d.source === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
          </select></label>
          <label class="f"><span>Property type</span><select id="l-property">
            <option value="">—</option>${CAT.propertyTypes.map((p) => `<option ${d.property === p.name ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}
          </select></label>
          <label class="f"><span>Carpet area (sq.ft)</span><input type="number" id="l-area" class="num" value="${esc(d.area)}"></label>
          <label class="f"><span>Stage</span><select id="l-stage">
            ${CAT.stages.map((s) => `<option ${d.stage === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
          </select></label>
          <label class="f"><span>Expected value (₹)</span><input type="number" id="l-value" class="num" value="${esc(d.value)}"></label>
          <label class="f"><span>Next follow-up</span><input type="date" id="l-follow" value="${esc(d.followUp)}"></label>
          <label class="f"><span>Enquiry date</span><input type="date" id="l-created" value="${esc(d.created)}"></label>
        </div>
        <label class="f" style="margin-top:.8rem"><span>Site address</span><textarea id="l-address">${esc(d.address)}</textarea></label>
        <label class="f" style="margin-top:.8rem"><span>Notes</span><textarea id="l-notes" placeholder="Site visit observations, what they asked for, what was promised…">${esc(d.notes)}</textarea></label>`,
      foot: `${l ? '<button class="btn btn--kill" id="l-del">Delete</button><span style="flex:1"></span>' : ''}
        ${l ? '<button class="btn" id="l-quote">Start a quotation</button>' : ''}
        <button class="btn" data-close>Cancel</button>
        <button class="btn btn--go" id="l-save">Save</button>`,
      wire(close) {
        $('#l-save').onclick = () => {
          const name = $('#l-name').value.trim();
          if (!name) { toast('A name is the one thing an enquiry needs.'); $('#l-name').focus(); return; }
          Object.assign(d, {
            name, phone: $('#l-phone').value.trim(), email: $('#l-email').value.trim(),
            source: $('#l-source').value, property: $('#l-property').value,
            area: $('#l-area').value, stage: $('#l-stage').value, value: $('#l-value').value,
            followUp: $('#l-follow').value, created: $('#l-created').value || today(),
            address: $('#l-address').value.trim(), notes: $('#l-notes').value.trim()
          });
          if (!l) S.leads.push(d);
          save(); close(); render(); toast('Saved.');
        };
        if (l) {
          $('#l-del').onclick = () => {
            if (!confirm(`Delete the enquiry from ${d.name}? Any quotation made for them stays.`)) return;
            S.leads = S.leads.filter((x) => x.id !== d.id);
            save(); close(); render(); toast('Deleted.');
          };
          $('#l-quote').onclick = () => { close(); newQuote(d); };
        }
      }
    });
  }

  /* ── Quotations ────────────────────────────────────────────────── */
  views.quotes = {
    title: 'Quotations',
    actions: () => `<button class="btn btn--go" id="add-quote">+ New quotation</button>`,
    html() {
      const list = [...S.quotes].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      return `<div class="card card__body--flush">
        ${list.length ? `<div class="t-wrap"><table>
          <thead><tr><th>No.</th><th>Client</th><th>Property</th><th class="num">Rooms</th>
            <th class="num">Lines</th><th class="num">Value</th><th>Date</th><th>Status</th><th></th></tr></thead>
          <tbody>${list.map((q) => {
            const t = totals(q);
            const lines = (q.rooms || []).reduce((n, r) => n + (r.lines || []).length, 0);
            return `<tr>
              <td style="font-family:var(--mono);font-size:.78rem">${esc(q.no)}${q.rev ? ' <span class="pill">Rev ' + esc(q.rev) + '</span>' : ''}</td>
              <td><b>${esc(q.client && q.client.name)}</b></td>
              <td>${esc(q.client && q.client.property || '—')}</td>
              <td class="num">${(q.rooms || []).length}</td>
              <td class="num">${lines}</td>
              <td class="num"><b>${money(t.grand)}</b></td>
              <td>${esc(q.date)}</td>
              <td><span class="pill ${q.status === 'Approved' ? 'pill--won' : q.status === 'Rejected' ? 'pill--lost' : ''}">${esc(q.status || 'Draft')}</span></td>
              <td class="num row" style="flex-wrap:nowrap;justify-content:flex-end">
                <button class="btn btn--sm" data-build="${q.id}">Edit</button>
                <button class="btn btn--sm" data-doc="${q.id}">Document</button>
              </td></tr>`; }).join('')}</tbody></table></div>`
          : `<div class="empty"><b>No quotations yet</b>Build one from an enquiry, or start a blank.</div>`}
      </div>`;
    },
    wire() {
      $('#add-quote').onclick = () => newQuote(null);
      $$('[data-build]').forEach((b) => b.onclick = () => go('build', b.dataset.build));
      $$('[data-doc]').forEach((b) => b.onclick = () => go('doc', b.dataset.doc));
    }
  };

  function newQuote(lead) {
    const q = {
      id: uid(),
      no: nextQuoteNo(),
      rev: '',
      date: today(),
      validUntil: '',
      status: 'Draft',
      client: {
        leadId: lead ? lead.id : '',
        name: lead ? lead.name : '',
        phone: lead ? lead.phone : '',
        email: lead ? lead.email : '',
        address: lead ? lead.address : '',
        property: lead ? lead.property : '',
        area: lead ? lead.area : ''
      },
      rooms: [],
      discount: 0, discountType: 'pct',
      gstApplicable: true, gstRate: S.company.gstRate,
      notes: ''
    };
    const d = new Date();
    d.setDate(d.getDate() + (Number(S.company.validityDays) || 15));
    q.validUntil = d.toISOString().slice(0, 10);

    S.company.nextNumber = (Number(S.company.nextNumber) || 1) + 1;
    S.quotes.push(q);
    save();
    go('build', q.id);
  }

  /* ── The builder ───────────────────────────────────────────────── */
  views.build = {
    title: 'Build quotation',
    actions() {
      return `<button class="btn" id="b-back">All quotations</button>
        <button class="btn" id="b-room">+ Room</button>
        <button class="btn btn--go" id="b-doc">Document &rarr;</button>`;
    },
    html() {
      const q = S.quotes.find((x) => x.id === openQuoteId);
      if (!q) return `<div class="empty"><b>That quotation is gone</b>It may have been deleted.</div>`;
      const t = totals(q);

      return `
        <div class="card" style="margin-bottom:.9rem">
          <div class="card__head"><h3>${esc(q.no)}</h3>
            <span class="spacer"></span>
            <select id="q-status" style="width:auto">
              ${['Draft', 'Sent', 'Approved', 'Rejected', 'Revised'].map((s) =>
                `<option ${q.status === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
            </select>
          </div>
          <div class="card__body grid g4">
            <label class="f"><span>Client</span><input type="text" id="q-name" value="${esc(q.client.name)}"></label>
            <label class="f"><span>Phone</span><input type="tel" id="q-phone" value="${esc(q.client.phone)}"></label>
            <label class="f"><span>Property</span><select id="q-property"><option value="">—</option>
              ${CAT.propertyTypes.map((p) => `<option ${q.client.property === p.name ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}
            </select></label>
            <label class="f"><span>Carpet area (sq.ft)</span><input type="number" class="num" id="q-area" value="${esc(q.client.area)}"></label>
            <label class="f"><span>Quotation no.</span><input type="text" id="q-no" value="${esc(q.no)}"></label>
            <label class="f"><span>Revision</span><input type="text" id="q-rev" value="${esc(q.rev)}" placeholder="A / B"></label>
            <label class="f"><span>Date</span><input type="date" id="q-date" value="${esc(q.date)}"></label>
            <label class="f"><span>Valid until</span><input type="date" id="q-valid" value="${esc(q.validUntil)}"></label>
          </div>
          <div class="card__body" style="border-top:1px solid var(--hair)">
            <label class="f"><span>Site address</span><textarea id="q-address" style="min-height:52px">${esc(q.client.address)}</textarea></label>
          </div>
        </div>

        ${(q.rooms || []).length ? q.rooms.map((r, ri) => roomHtml(q, r, ri)).join('') : `
          <div class="card"><div class="empty">
            <b>No rooms yet</b>Add a room, then pick materials into it. Or drop in a standard set for the property type.
            <div class="row" style="justify-content:center;margin-top:.9rem">
              <button class="btn btn--go" id="b-room2">+ Add a room</button>
              <button class="btn" id="b-preset">Use standard rooms</button>
            </div>
          </div></div>`}

        ${(q.rooms || []).length ? `
        <div class="card" style="margin-top:.9rem">
          <div class="card__head"><h3>Totals</h3></div>
          <div class="card__body grid g4" style="align-items:end">
            <label class="f"><span>Discount</span><input type="number" class="num" id="q-disc" value="${esc(q.discount)}"></label>
            <label class="f"><span>Discount type</span><select id="q-disctype">
              <option value="pct" ${q.discountType === 'pct' ? 'selected' : ''}>Percent</option>
              <option value="amt" ${q.discountType === 'amt' ? 'selected' : ''}>Amount</option>
            </select></label>
            <label class="f"><span>GST</span><select id="q-gst">
              <option value="1" ${q.gstApplicable !== false ? 'selected' : ''}>Applicable</option>
              <option value="0" ${q.gstApplicable === false ? 'selected' : ''}>Not applicable</option>
            </select></label>
            <label class="f"><span>GST rate %</span><input type="number" class="num" id="q-gstrate" value="${esc(q.gstRate)}"></label>
          </div>
          <div class="card__body grid g2" style="border-top:1px solid var(--hair);align-items:start">
            <div class="doc-tot" style="width:100%;margin:0">
              <div><span>Sub-total</span><b>${money(t.sub)}</b></div>
              ${t.optional ? `<div><span>Optional items (not in total)</span><b>${money(t.optional)}</b></div>` : ''}
              ${t.discount ? `<div><span>Less discount</span><b>− ${money(t.discount)}</b></div>` : ''}
              ${t.gst ? `<div><span>GST @ ${t.gstRate}%</span><b>${money(t.gst)}</b></div>` : ''}
              <div class="is-grand"><span>Total</span><b>${money(t.grand)}</b></div>
            </div>
            ${costPanel(q)}
          </div>
        </div>` : ''}`;
    },
    wire() {
      const q = S.quotes.find((x) => x.id === openQuoteId);
      if (!q) return;
      const back = $('#b-back'); if (back) back.onclick = () => go('quotes');
      const doc = $('#b-doc'); if (doc) doc.onclick = () => go('doc', q.id);
      const addRoom = () => { q.rooms.push({ id: uid(), name: 'New room', lines: [] }); save(); render(); };
      const r1 = $('#b-room'); if (r1) r1.onclick = addRoom;
      const r2 = $('#b-room2'); if (r2) r2.onclick = addRoom;
      const pre = $('#b-preset'); if (pre) pre.onclick = () => presetRooms(q);

      const bind = (sel, fn) => { const el = $(sel); if (el) el.onchange = () => { fn(el.value); save(); render(); }; };
      bind('#q-status', (v) => q.status = v);
      bind('#q-no', (v) => q.no = v);
      bind('#q-rev', (v) => q.rev = v);
      bind('#q-date', (v) => q.date = v);
      bind('#q-valid', (v) => q.validUntil = v);
      bind('#q-name', (v) => q.client.name = v);
      bind('#q-phone', (v) => q.client.phone = v);
      bind('#q-property', (v) => q.client.property = v);
      bind('#q-area', (v) => q.client.area = v);
      bind('#q-address', (v) => q.client.address = v);
      bind('#q-disc', (v) => q.discount = Number(v) || 0);
      bind('#q-disctype', (v) => q.discountType = v);
      bind('#q-gst', (v) => q.gstApplicable = v === '1');
      bind('#q-gstrate', (v) => q.gstRate = Number(v) || 0);
      const to = $('#q-takeoff');
      if (to) to.onclick = () => { toQuote = q.id; go('materials'); };

      $$('[data-room-name]').forEach((el) => el.onchange = () => {
        const r = q.rooms.find((x) => x.id === el.dataset.roomName);
        if (r) { r.name = el.value; save(); render(); }
      });
      $$('[data-room-del]').forEach((b) => b.onclick = () => {
        const r = q.rooms.find((x) => x.id === b.dataset.roomDel);
        if (!r) return;
        if (r.lines.length && !confirm(`Remove "${r.name}" and its ${r.lines.length} line(s)?`)) return;
        q.rooms = q.rooms.filter((x) => x.id !== r.id); save(); render();
      });
      $$('[data-room-add]').forEach((b) => b.onclick = () => picker(q, b.dataset.roomAdd));
      const moveRoom = (id, by) => {
        const n = q.rooms.findIndex((x) => x.id === id);
        const to = n + by;
        if (n < 0 || to < 0 || to >= q.rooms.length) return;
        q.rooms.splice(to, 0, q.rooms.splice(n, 1)[0]);
        save(); render();
      };
      $$('[data-room-up]').forEach((b) => b.onclick = () => moveRoom(b.dataset.roomUp, -1));
      $$('[data-room-down]').forEach((b) => b.onclick = () => moveRoom(b.dataset.roomDown, 1));
      $$('[data-room-copy]').forEach((b) => b.onclick = () => {
        const n = q.rooms.findIndex((x) => x.id === b.dataset.roomCopy);
        const src = q.rooms[n];
        if (!src) return;
        /* A deep copy with fresh ids — sharing line objects would make
           editing the copy change the original. */
        q.rooms.splice(n + 1, 0, {
          id: uid(), name: src.name + ' (copy)',
          lines: src.lines.map((l) => ({ ...l, id: uid(), spec: { ...l.spec } }))
        });
        save(); render(); toast('Room duplicated.');
      });
      $$('[data-line-copy]').forEach((b) => b.onclick = () => {
        const [rid, lid] = b.dataset.lineCopy.split('|');
        const r = q.rooms.find((x) => x.id === rid);
        const n = r ? r.lines.findIndex((x) => x.id === lid) : -1;
        if (n < 0) return;
        r.lines.splice(n + 1, 0, { ...r.lines[n], id: uid(), spec: { ...r.lines[n].spec } });
        save(); render();
      });
      $$('[data-line-edit]').forEach((b) => b.onclick = () => {
        const [rid, lid] = b.dataset.lineEdit.split('|');
        const r = q.rooms.find((x) => x.id === rid);
        const l = r && r.lines.find((x) => x.id === lid);
        if (l) lineDialog(q, r, l);
      });
      $$('[data-line-del]').forEach((b) => b.onclick = () => {
        const [rid, lid] = b.dataset.lineDel.split('|');
        const r = q.rooms.find((x) => x.id === rid);
        if (!r) return;
        r.lines = r.lines.filter((x) => x.id !== lid); save(); render();
      });
      $$('[data-qty]').forEach((el) => el.onchange = () => {
        const [rid, lid] = el.dataset.qty.split('|');
        const r = q.rooms.find((x) => x.id === rid);
        const l = r && r.lines.find((x) => x.id === lid);
        if (l) { l.qty = Number(el.value) || 0; save(); render(); }
      });
      $$('[data-rate]').forEach((el) => el.onchange = () => {
        const [rid, lid] = el.dataset.rate.split('|');
        const r = q.rooms.find((x) => x.id === rid);
        const l = r && r.lines.find((x) => x.id === lid);
        if (l) { l.rate = Number(el.value) || 0; save(); render(); }
      });
    }
  };

  /* What this quotation costs to build, live, while it is being built.
     Shown only to the studio — it is not on anything the client sees. */
  function costPanel(q) {
    const T = takeOff(q);
    const tone = T.marginPct >= 25 ? 'var(--green)' : T.marginPct >= 15 ? 'var(--amber)' : 'var(--red)';
    return `<div class="doc-tot" style="width:100%;margin:0">
      <div><span>Material to buy</span><b>${money(T.material)}</b></div>
      <div><span>Labour</span><b>${money(T.labour)}</b></div>
      <div><span>Overhead @ ${T.overheadPct}%</span><b>${money(T.overhead)}</b></div>
      <div><span>Cost to build</span><b>${money(T.cost)}</b></div>
      <div class="is-grand" style="color:${tone}"><span>Margin</span>
        <b>${money(T.margin)} · ${T.marginPct.toFixed(1)}%</b></div>
      <div style="border:0;padding-top:.5rem">
        <span style="color:var(--ink-3);font-size:.72rem">Against ${money(T.revenue)} before tax</span>
        <button class="btn btn--sm" id="q-takeoff">See the take-off</button></div>
    </div>`;
  }

  function roomHtml(q, r, ri) {
    return `<div class="room">
      <div class="room__head">
        <span style="color:var(--ink-3);font-family:var(--mono);font-size:.75rem">${String(ri + 1).padStart(2, '0')}</span>
        <input type="text" data-room-name="${r.id}" value="${esc(r.name)}">
        <span class="spacer"></span>
        <span class="room__total">${money(roomTotal(r))}</span>
        <button class="btn btn--sm btn--icon" data-room-up="${r.id}" title="Move up" ${ri === 0 ? 'disabled' : ''}>&uarr;</button>
        <button class="btn btn--sm btn--icon" data-room-down="${r.id}" title="Move down">&darr;</button>
        <button class="btn btn--sm" data-room-copy="${r.id}">Duplicate</button>
        <button class="btn btn--sm" data-room-add="${r.id}">+ Add material</button>
        <button class="btn btn--sm btn--kill" data-room-del="${r.id}">Remove</button>
      </div>
      ${r.lines.length ? `<div class="t-wrap"><table>
        <thead><tr><th style="width:44%">Item &amp; specification</th><th>Unit</th>
          <th class="num" style="width:88px">Qty</th><th class="num" style="width:104px">Rate</th>
          <th class="num">Amount</th><th></th></tr></thead>
        <tbody>${r.lines.map((l) => `<tr class="line" ${l.optional ? 'style="opacity:.62"' : ''}>
          <td><div class="line__name">${esc(l.name)}${l.optional ? ' <span class="pill">Optional</span>' : ''}</div>
            ${specLine(l) ? `<div class="line__spec">${specLine(l)}</div>` : ''}
            ${l.remark ? `<div class="line__spec"><b>Note:</b> ${esc(l.remark)}</div>` : ''}</td>
          <td>${esc(l.unit)}</td>
          <td><input type="number" step="0.01" class="num" data-qty="${r.id}|${l.id}" value="${esc(l.qty)}"></td>
          <td><input type="number" class="num" data-rate="${r.id}|${l.id}" value="${esc(l.rate)}"></td>
          <td class="num"><b>${money((Number(l.qty) || 0) * (Number(l.rate) || 0))}</b></td>
          <td class="num" style="white-space:nowrap">
            <button class="btn btn--sm btn--icon" data-line-edit="${r.id}|${l.id}" title="Edit specification">Spec</button>
            <button class="btn btn--sm btn--icon" data-line-copy="${r.id}|${l.id}" title="Duplicate line">&plus;</button>
            <button class="btn btn--sm btn--icon btn--kill" data-line-del="${r.id}|${l.id}" title="Remove line">×</button>
          </td></tr>`).join('')}</tbody></table></div>`
        : `<div class="empty" style="padding:1.2rem">Nothing in this room yet.</div>`}
    </div>`;
  }

  const specLine = (l) => Object.entries(l.spec || {})
    .filter(([, v]) => v)
    .map(([k, v]) => `<b>${esc(k)}:</b> ${esc(v)}`).join(' &nbsp;·&nbsp; ');

  function presetRooms(q) {
    const pt = CAT.propertyTypes.find((p) => p.name === q.client.property);
    const kind = pt ? pt.kind : 'residential';
    const rooms = CAT.roomSets[kind] || CAT.roomSets.residential;
    modal({
      title: 'Standard rooms — ' + kind,
      body: `<p style="margin-top:0;color:var(--ink-2);font-size:.85rem">
          Tick the rooms this job actually has. You can rename any of them afterwards.</p>
        <div class="grid g3">${rooms.map((r, n) =>
          `<label style="display:flex;gap:.45rem;align-items:center;font-size:.84rem">
            <input type="checkbox" value="${esc(r)}" ${n < 6 ? 'checked' : ''}> ${esc(r)}</label>`).join('')}</div>`,
      foot: `<button class="btn" data-close>Cancel</button><button class="btn btn--go" id="pr-add">Add rooms</button>`,
      wire(close) {
        $('#pr-add').onclick = () => {
          $$('.modal input[type=checkbox]:checked').forEach((c) =>
            q.rooms.push({ id: uid(), name: c.value, lines: [] }));
          save(); close(); render(); toast('Rooms added.');
        };
      }
    });
  }

  /* ── Material picker ───────────────────────────────────────────── */
  let pickGroup = CAT.groups[0].id;
  function picker(q, roomId) {
    const room = q.rooms.find((r) => r.id === roomId);
    if (!room) return;

    const paint = () => {
      const g = CAT.groups.find((x) => x.id === pickGroup) || CAT.groups[0];
      $('#pick-items').innerHTML =
        (g.note ? `<div class="note" style="margin:.2rem .3rem .6rem">${esc(g.note)}</div>` : '') +
        g.items.map((it) => `<button class="picker__item" data-pick="${it.id}">
          <span>${esc(it.name)}</span><em>${esc(it.unit)}</em><b>${money(rateOf(it.id))}</b></button>`).join('');
      $$('[data-pick]').forEach((b) => b.onclick = () => {
        const it = itemIndex[b.dataset.pick];
        const line = {
          id: uid(), itemId: it.id, name: it.name, unit: it.unit,
          qty: 1, rate: rateOf(it.id), spec: {}, remark: ''
        };
        it.specs.forEach((s) => line.spec[s.label] = '');
        room.lines.push(line);
        save();
        closeModal();
        render();
        lineDialog(q, room, line);
      });
      $$('.picker__group').forEach((b) => b.classList.toggle('is-on', b.dataset.group === pickGroup));
    };

    modal({
      wide: true,
      title: 'Add material — ' + esc(room.name),
      flush: true,
      body: `<div class="picker">
        <div class="picker__groups">${CAT.groups.map((g) =>
          `<button class="picker__group ${g.id === pickGroup ? 'is-on' : ''}" data-group="${g.id}">${esc(g.name)}</button>`).join('')}</div>
        <div class="picker__items" id="pick-items"></div>
      </div>`,
      foot: `<button class="btn" data-close>Done</button>`,
      wire() {
        $$('.picker__group').forEach((b) => b.onclick = () => { pickGroup = b.dataset.group; paint(); });
        paint();
      }
    });
  }

  /* ── Specification dialog ──────────────────────────────────────── */
  function lineDialog(q, room, line) {
    const it = itemIndex[line.itemId] || { specs: [], unit: line.unit };
    modal({
      title: esc(line.name),
      body: `
        <div class="grid g3" style="margin-bottom:.9rem">
          <label class="f"><span>Unit</span><select id="ln-unit">
            ${CAT.UNITS.map((u) => `<option ${line.unit === u ? 'selected' : ''}>${esc(u)}</option>`).join('')}
          </select></label>
          <label class="f"><span>Quantity</span><input type="number" step="0.01" class="num" id="ln-qty" value="${esc(line.qty)}"></label>
          <label class="f"><span>Rate (₹)</span><input type="number" class="num" id="ln-rate" value="${esc(line.rate)}"></label>
        </div>
        ${it.specs.length ? `<div class="grid g2">${it.specs.map((s, n) => `
          <label class="f"><span>${esc(s.label)}</span>
            <select data-spec="${n}">
              <option value="">— not specified —</option>
              ${s.options.map((o) => `<option ${line.spec[s.label] === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}
            </select></label>`).join('')}</div>`
          : `<div class="note">This line carries no preset specification. Use the note below to describe it.</div>`}
        <label class="f" style="margin-top:.9rem" title="Priced and printed, but not carried into the total">
          <span>Scope</span>
          <select id="ln-optional">
            <option value="0" ${line.optional ? '' : 'selected'}>Included in the quoted total</option>
            <option value="1" ${line.optional ? 'selected' : ''}>Optional — priced but not in the total</option>
          </select></label>
        <label class="f" style="margin-top:.9rem"><span>Line note (prints on the quotation)</span>
          <input type="text" id="ln-remark" value="${esc(line.remark)}" placeholder="e.g. shutters up to 8ft height only"></label>
        <label class="f" style="margin-top:.9rem"><span>Description shown to the client</span>
          <input type="text" id="ln-name" value="${esc(line.name)}"></label>`,
      foot: `<button class="btn" data-close>Cancel</button><button class="btn btn--go" id="ln-save">Save line</button>`,
      wire(close) {
        $('#ln-save').onclick = () => {
          line.unit = $('#ln-unit').value;
          line.qty = Number($('#ln-qty').value) || 0;
          line.rate = Number($('#ln-rate').value) || 0;
          line.remark = $('#ln-remark').value.trim();
          line.optional = $('#ln-optional').value === '1';
          line.name = $('#ln-name').value.trim() || line.name;
          it.specs.forEach((s, n) => {
            const sel = $(`[data-spec="${n}"]`);
            if (sel) line.spec[s.label] = sel.value;
          });
          save(); close(); render();
        };
      }
    });
  }

  /* ── The document ──────────────────────────────────────────────
     Laid out one A4 page at a time, measured.

     Why not just let the browser break it: a quotation is a numbered
     document. If the schedule flows across pages on its own, the
     footers land wherever the section happens to end, so "Page 2 of 5"
     is a lie on four of them, and a room's rows get cut with no header
     on the page that continues it. So the content is measured into
     pages here: every page gets a true number, and a room that runs
     over repeats its heading marked (contd.).

     Printing goes through the browser rather than a PDF library on
     purpose — it keeps live, selectable, searchable text at the
     printer's own resolution. A canvas route would hand the client a
     picture of a quotation. */
  views.doc = {
    title: 'Quotation document',
    actions: () => `<button class="btn" id="d-back">Back to builder</button>
      <button class="btn btn--go" id="d-print">Save as PDF / Print</button>`,
    html: () => `<div id="doc-mount"></div>`,
    wire() {
      const q = S.quotes.find((x) => x.id === openQuoteId);
      const b = $('#d-back'); if (b) b.onclick = () => go('build', openQuoteId);
      const p = $('#d-print'); if (p) p.onclick = () => window.print();
      const mount = $('#doc-mount');
      if (!q) { mount.innerHTML = `<div class="empty"><b>That quotation is gone</b></div>`; return; }
      mount.appendChild(buildDoc(q));
    }
  };

  const node = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  function buildDoc(q) {
    const c = S.company;
    const t = totals(q);
    const rooms = (q.rooms || []).filter((r) => (r.lines || []).length);
    const lines = rooms.reduce((n, r) => n + r.lines.length, 0);

    const doc = document.createElement('div');
    doc.className = 'doc';
    doc.id = 'doc';
    document.body.appendChild(doc);  /* measured while attached, then moved */

    /* One page's usable height, read from a real box rather than
       hardcoded, so a different zoom or device pixel ratio cannot make
       the measurement disagree with the layout. */
    let page = null, body = null, limit = 0;
    const pages = [];
    const openPage = () => {
      page = node('<div class="sheet"><div class="sheet__body"></div></div>');
      doc.appendChild(page);
      body = page.firstElementChild;
      const cs = getComputedStyle(page);
      const probe = node('<div style="height:297mm"></div>');
      doc.appendChild(probe);
      limit = probe.getBoundingClientRect().height
        - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      probe.remove();
      pages.push(page);
      return body;
    };
    const overflows = () => body.getBoundingClientRect().height > limit;
    /* Append, and if it does not fit, start a fresh page and put it
       there instead. Returns the body it ended up in. */
    const place = (elm) => {
      body.appendChild(elm);
      if (overflows() && body.children.length > 1) { elm.remove(); openPage(); body.appendChild(elm); }
      return body;
    };

    openPage();

    /* ── Page 1 · letterhead, client, then the schedule ── */
    place(node(`<header class="doc-head">
      <div>
        <div class="doc-mark">Radhe<br><b>Design Studio</b></div>
        <div class="doc-rule"></div>
        <div style="margin-top:5pt;font-size:7.6pt;color:#6f6b64">${esc(c.tagline)}</div>
      </div>
      <div class="spacer" style="font-size:7.8pt;color:#4f4c46;white-space:pre-line">${esc(c.address)}
${esc([c.phone, c.email, c.web].filter(Boolean).join('  ·  '))}
${c.gstin ? 'GSTIN ' + esc(c.gstin) : ''}</div></header>`));

    place(node(`<h1 style="margin-top:9mm">Quotation</h1>`));
    place(node(`<dl class="doc-meta">
      <div><dt>Quotation no.</dt><dd>${esc(q.no)}${q.rev ? ' · Rev ' + esc(q.rev) : ''}</dd></div>
      <div><dt>Date</dt><dd>${esc(q.date)}</dd></div>
      <div><dt>Valid until</dt><dd>${esc(q.validUntil || '—')}</dd></div>
      <div><dt>Scope</dt><dd>${rooms.length} room${rooms.length === 1 ? '' : 's'} · ${lines} line${lines === 1 ? '' : 's'}</dd></div>
    </dl>`));

    place(node(`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8mm;padding:4mm 0;border-top:.6pt solid #ddd9d2;border-bottom:.6pt solid #ddd9d2">
      <div><h3>Quotation for</h3>
        <div style="margin-top:2pt;font-size:10pt;font-weight:600">${esc(q.client.name || '—')}</div>
        <div style="font-size:8.4pt;color:#4f4c46">${esc([q.client.phone, q.client.email].filter(Boolean).join('  ·  '))}</div>
        <div style="margin-top:3pt;font-size:8.4pt;color:#4f4c46;white-space:pre-line">${esc(q.client.address)}</div></div>
      <div><h3>Property</h3>
        <div style="margin-top:2pt;font-size:10pt">${esc(q.client.property || '—')}</div>
        ${q.client.area ? `<div style="font-size:8.4pt;color:#4f4c46">${esc(q.client.area)} sq.ft carpet area</div>` : ''}</div>
    </div>`));

    /* A client reads the shape of the job before the detail of it, so
       the rooms are summarised before the schedule that explains them. */
    if (rooms.length > 1) {
      place(node(`<section class="doc-room" style="margin-top:7mm">
        <h2>Summary<em>${money(t.sub)}</em></h2>
        <table><thead><tr><th style="width:8%">#</th><th>Room</th>
          <th class="num" style="width:14%">Lines</th><th class="num" style="width:22%">Amount</th></tr></thead>
        <tbody>${rooms.map((r, n) => `<tr><td>${n + 1}</td><td><b>${esc(r.name)}</b></td>
          <td class="num">${r.lines.length}</td><td class="num">${money2(roomTotal(r))}</td></tr>`).join('')}
        </tbody></table></section>`));
    }

    const SCHED_HEAD = `<thead><tr><th style="width:6%">#</th><th style="width:48%">Description</th>
      <th style="width:9%">Unit</th><th class="num" style="width:11%">Qty</th>
      <th class="num" style="width:12%">Rate</th><th class="num" style="width:14%">Amount</th></tr></thead>`;

    /* A room is placed heading-first, then row by row. When a row will
       not fit, the page closes and the heading is repeated so the
       continuation is never a stack of orphan rows. */
    rooms.forEach((r) => {
      let sec = node(`<section class="doc-room"><h2>${esc(r.name)}<em>${money(roomTotal(r))}</em></h2>
        <table>${SCHED_HEAD}<tbody></tbody></table></section>`);
      place(sec);
      let tb = sec.querySelector('tbody');
      r.lines.forEach((l, n) => {
        const tr = node(`<tr><td>${n + 1}</td>
          <td><b>${esc(l.name)}</b>${specLine(l) ? `<div class="doc-spec">${specLine(l)}</div>` : ''}
            ${l.remark ? `<div class="doc-spec">${esc(l.remark)}</div>` : ''}</td>
          <td>${esc(l.unit)}</td><td class="num">${money2(l.qty)}</td>
          <td class="num">${money2(l.rate)}</td>
          <td class="num">${money2((Number(l.qty) || 0) * (Number(l.rate) || 0))}</td></tr>`);
        tb.appendChild(tr);
        if (overflows()) {
          tr.remove();
          if (!tb.children.length) sec.remove();   /* heading alone at the foot */
          openPage();
          sec = node(`<section class="doc-room"><h2>${esc(r.name)} <span style="font-weight:400;color:#8d8981">(contd.)</span><em>${money(roomTotal(r))}</em></h2>
            <table>${SCHED_HEAD}<tbody></tbody></table></section>`);
          body.appendChild(sec);
          tb = sec.querySelector('tbody');
          tb.appendChild(tr);
        }
      });
    });

    /* Optional lines are printed where they can be seen and priced, but
       kept out of the total so the figure the client signs is the
       figure they are committing to. */
    const optionals = rooms.flatMap((r) => r.lines.filter((l) => l.optional).map((l) => ({ r, l })));
    if (optionals.length) {
      place(node(`<section class="doc-room" style="margin-top:6mm">
        <h2>Optional — not included in the total<em>${money(t.optional)}</em></h2>
        <table><thead><tr><th style="width:22%">Room</th><th>Description</th><th style="width:9%">Unit</th>
          <th class="num" style="width:11%">Qty</th><th class="num" style="width:12%">Rate</th>
          <th class="num" style="width:14%">Amount</th></tr></thead>
        <tbody>${optionals.map(({ r, l }) => `<tr><td>${esc(r.name)}</td>
          <td><b>${esc(l.name)}</b>${specLine(l) ? `<div class="doc-spec">${specLine(l)}</div>` : ''}</td>
          <td>${esc(l.unit)}</td><td class="num">${money2(l.qty)}</td>
          <td class="num">${money2(l.rate)}</td>
          <td class="num">${money2((Number(l.qty) || 0) * (Number(l.rate) || 0))}</td></tr>`).join('')}
        </tbody></table></section>`));
    }

    const tot = node(`<div><div class="doc-tot">
      <div><span>Sub-total</span><span>${money2(t.sub)}</span></div>
      ${t.discount ? `<div><span>Less discount${q.discountType === 'pct' ? ' (' + q.discount + '%)' : ''}</span><span>− ${money2(t.discount)}</span></div>
      <div><span>Taxable value</span><span>${money2(t.afterDiscount)}</span></div>` : ''}
      ${t.gst ? (c.gstMode === 'igst'
        ? `<div><span>IGST @ ${t.gstRate}%</span><span>${money2(t.gst)}</span></div>`
        : `<div><span>CGST @ ${t.gstRate / 2}%</span><span>${money2(t.half)}</span></div>
           <div><span>SGST @ ${t.gstRate / 2}%</span><span>${money2(t.half)}</span></div>`) : ''}
      ${Math.abs(t.rounding) > 0.004 ? `<div><span>Rounding</span><span>${t.rounding > 0 ? '+' : '−'} ${money2(Math.abs(t.rounding))}</span></div>` : ''}
      <div class="is-grand"><span>Total</span><span>${money(t.grand)}</span></div>
    </div><div class="doc-words"><b>In words:</b> ${esc(words(t.grand))}</div></div>`);
    place(tot);

    /* ── The specification annexure, on its own page ── */
    const specRooms = rooms.map((r) => ({ r, rows: r.lines.filter((l) => specLine(l) || l.remark) }))
      .filter((x) => x.rows.length);
    if (specRooms.length) {
      openPage();
      body.appendChild(node(`<h1>Specification schedule</h1>`));
      body.appendChild(node(`<p style="color:#4f4c46;font-size:8.6pt;max-width:130mm">
        Every material, brand and finish carried in the rates on the previous pages. Anything not named here
        has not been priced, and will be quoted separately once it is chosen.</p>`));
      specRooms.forEach(({ r, rows }) => {
        let sec = node(`<section class="doc-room"><h2>${esc(r.name)}</h2><table><tbody></tbody></table></section>`);
        place(sec);
        let tb = sec.querySelector('tbody');
        rows.forEach((l) => {
          const tr = node(`<tr><td style="width:34%"><b>${esc(l.name)}</b></td>
            <td>${Object.entries(l.spec || {}).filter(([, v]) => v)
              .map(([k, v]) => `<div><span style="color:#8d8981">${esc(k)}</span> — ${esc(v)}</div>`).join('')}
              ${l.remark ? `<div style="margin-top:2pt">${esc(l.remark)}</div>` : ''}</td></tr>`);
          tb.appendChild(tr);
          if (overflows()) {
            tr.remove();
            if (!tb.children.length) sec.remove();
            openPage();
            sec = node(`<section class="doc-room"><h2>${esc(r.name)} <span style="font-weight:400;color:#8d8981">(contd.)</span></h2><table><tbody></tbody></table></section>`);
            body.appendChild(sec);
            tb = sec.querySelector('tbody');
            tb.appendChild(tr);
          }
        });
      });
    }

    /* ── Terms and acceptance, on its own page ── */
    openPage();
    body.appendChild(node(`<h1>Terms &amp; acceptance</h1>`));
    place(node(`<ol class="doc-terms" style="margin-top:6mm;padding-left:14pt">
      ${(c.terms || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`));
    const ms = (c.milestones || []).filter((x) => x && x[0]);
    if (ms.length) {
      const pct = ms.reduce((n, x) => n + (Number(x[1]) || 0), 0);
      place(node(`<div style="margin-top:8mm"><h3>Payment schedule</h3>
        <table style="margin-top:3pt"><thead><tr><th>Stage</th>
          <th class="num" style="width:14%">%</th><th class="num" style="width:22%">Amount</th></tr></thead>
        <tbody>${ms.map(([label, p]) => `<tr><td>${esc(label)}</td>
          <td class="num">${Number(p) || 0}%</td>
          <td class="num">${money2(t.grand * (Number(p) || 0) / 100)}</td></tr>`).join('')}</tbody>
        <tfoot><tr><th>Total</th><th class="num">${pct}%</th>
          <th class="num">${money2(t.grand * pct / 100)}</th></tr></tfoot></table>
        ${pct !== 100 ? `<div style="margin-top:3pt;font-size:7.6pt;color:#b23b2e">
          The stages add up to ${pct}%, not 100%. Correct this in Settings before the quotation is sent.</div>` : ''}
      </div>`));
    }
    if (q.notes) place(node(`<div style="margin-top:7mm"><h3>Notes for this quotation</h3>
      <div style="margin-top:2pt;font-size:8.6pt;white-space:pre-line">${esc(q.notes)}</div></div>`));
    if (c.bank) place(node(`<div style="margin-top:8mm"><h3>Payment details</h3>
      <div style="margin-top:2pt;font-size:8.6pt;white-space:pre-line">${esc(c.bank)}</div></div>`));
    place(node(`<div class="doc-sign">
      <div><b>For ${esc(c.name)}</b><div style="margin-top:12mm;color:#8d8981">Authorised signatory</div></div>
      <div><b>Accepted by the client</b><div style="margin-top:12mm;color:#8d8981">Name, signature &amp; date</div></div>
    </div>`));

    /* Numbers last, when the count is finally known. */
    pages.forEach((pg, n) => pg.appendChild(node(
      `<div class="doc-foot"><span>${esc(c.name)} · ${esc(q.no)}${q.rev ? ' Rev ' + esc(q.rev) : ''}</span>
       <span>Page ${n + 1} of ${pages.length}</span></div>`)));

    doc.remove();
    return doc;
  }

  /* ── Materials take-off ──────────────────────────────────────── */
  views.materials = {
    title: 'Materials',
    actions: () => `<button class="btn" id="t-csv">Download CSV</button>
      <button class="btn btn--go" id="t-print">Purchase list &rarr;</button>`,
    html() {
      if (!S.quotes.length) return `<div class="empty"><b>Nothing to take off yet</b>
        A take-off is worked out from a quotation. Build one first.</div>`;
      const q = S.quotes.find((x) => x.id === toQuote) || S.quotes[0];
      toQuote = q.id;
      const T = takeOff(q);
      const cats = [...new Set(T.rows.map((r) => r.cat))];
      const roomNames = [...new Set(T.rows.flatMap((r) => r.from.map(([n]) => n)))];
      const shown = T.rows.filter((r) => (toGroup === 'all' || r.cat === toGroup)
        && (toRoom === 'all' || r.from.some(([n]) => n === toRoom)));
      const shownTotal = shown.reduce((t, r) => t + r.amount, 0);

      return `
        <div class="row" style="margin-bottom:.9rem">
          <label class="f" style="min-width:20rem"><span>Quotation</span>
            <select id="t-quote">${S.quotes.map((x) => `<option value="${x.id}" ${x.id === q.id ? 'selected' : ''}>
              ${esc(x.no)} — ${esc(x.client.name || 'unnamed')} (${money(totals(x).grand)})</option>`).join('')}</select></label>
        </div>

        <div class="grid g4" style="margin-bottom:.9rem">
          ${stat('Material to buy', money(T.material), T.rows.length + ' items')}
          ${stat('Labour', money(T.labour), 'site + workshop')}
          ${stat('Cost incl. overhead', money(T.cost), T.overheadPct + '% overhead')}
          ${stat('Gross margin', money(T.margin), T.marginPct.toFixed(1) + '% of ' + money(T.revenue))}
        </div>

        ${T.marginPct < 15 ? `<div class="note" style="margin-bottom:.9rem;border-color:var(--red);background:var(--red-soft)">
          <b>Margin is ${T.marginPct.toFixed(1)}%.</b> At this level a single site revision or a rate rise puts the
          job under water. Check the rates before this quotation goes out.</div>` : ''}

        <div class="row" style="margin-bottom:.7rem">
          <button class="btn btn--sm ${toGroup === 'all' ? 'btn--go' : ''}" data-tg="all">All trades</button>
          ${cats.map((c) => `<button class="btn btn--sm ${toGroup === c ? 'btn--go' : ''}" data-tg="${esc(c)}">${esc(c)} · ${money(T.byCat[c])}</button>`).join('')}
        </div>
        <div class="row" style="margin-bottom:.9rem">
          <span class="hz__kick" style="color:var(--ink-3);font-size:.58rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase">Room</span>
          <button class="btn btn--sm ${toRoom === 'all' ? 'btn--go' : ''}" data-tr="all">Whole job</button>
          ${roomNames.map((n) => `<button class="btn btn--sm ${toRoom === n ? 'btn--go' : ''}" data-tr="${esc(n)}">${esc(n)}</button>`).join('')}
        </div>

        <div class="card card__body--flush"><div class="t-wrap"><table>
          <thead><tr><th style="width:26%">Material</th><th>Unit</th>
            <th class="num">Net</th><th class="num">Waste</th><th class="num">To buy</th>
            <th class="num">Rate</th><th class="num">Amount</th><th>Used in</th></tr></thead>
          <tbody>${shown.map((r) => `<tr>
            <td><b>${esc(r.name)}</b><div class="line__spec">${esc(r.cat)}${r.note ? ' · ' + esc(r.note) : ''}</div></td>
            <td>${esc(r.unit)}</td>
            <td class="num" style="color:var(--ink-3)">${fmtQty(r.net)}</td>
            <td class="num" style="color:var(--ink-3)">${r.waste}%</td>
            <td class="num"><b>${fmtQty(r.order)}</b></td>
            <td class="num">${money(r.rate)}</td>
            <td class="num"><b>${money(r.amount)}</b></td>
            <td class="line__spec">${r.from.map(([n, v]) => esc(n) + ' ' + fmtQty(v)).join(' · ')}</td>
          </tr>`).join('')}</tbody>
          <tfoot><tr><th colspan="6" style="text-align:right">${toGroup === 'all' && toRoom === 'all' ? 'Total material' : 'Shown'}</th>
            <th class="num">${money(shownTotal)}</th><th></th></tr></tfoot>
        </table></div></div>`;
    },
    wire() {
      const sel = $('#t-quote');
      if (sel) sel.onchange = () => { toQuote = sel.value; toGroup = 'all'; toRoom = 'all'; render(); };
      $$('[data-tg]').forEach((b) => b.onclick = () => { toGroup = b.dataset.tg; render(); });
      $$('[data-tr]').forEach((b) => b.onclick = () => { toRoom = b.dataset.tr; render(); });
      const csv = $('#t-csv');
      if (csv) csv.onclick = () => {
        const q = S.quotes.find((x) => x.id === toQuote);
        if (!q) return;
        const T = takeOff(q);
        const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
        const head = ['Trade', 'Material', 'Unit', 'Net qty', 'Wastage %', 'Qty to buy', 'Rate', 'Amount', 'Used in'];
        const rows = T.rows.map((r) => [r.cat, r.name, r.unit, r.net.toFixed(3), r.waste,
          r.order.toFixed(3), r.rate, Math.round(r.amount),
          r.from.map(([n, v]) => n + ' ' + v.toFixed(2)).join('; ')].map(cell).join(','));
        rows.push('');
        rows.push([cell('TOTAL MATERIAL'), '', '', '', '', '', '', cell(Math.round(T.material))].join(','));
        rows.push([cell('LABOUR'), '', '', '', '', '', '', cell(Math.round(T.labour))].join(','));
        rows.push([cell('OVERHEAD ' + T.overheadPct + '%'), '', '', '', '', '', '', cell(Math.round(T.overhead))].join(','));
        rows.push([cell('TOTAL COST'), '', '', '', '', '', '', cell(Math.round(T.cost))].join(','));
        download(`take-off-${q.no.replace(/[^\w]+/g, '-')}-${today()}.csv`,
          [head.map(cell).join(','), ...rows].join('\n'), 'text/csv');
        toast('Take-off downloaded.');
      };
      const pr = $('#t-print');
      if (pr) pr.onclick = () => go('purchase', toQuote);
    }
  };

  /* Quantities that are read and acted on: a sheet count to two places,
     a screw count whole. */
  const fmtQty = (n) => {
    const v = Number(n) || 0;
    if (v >= 100) return Math.round(v).toLocaleString('en-IN');
    if (v >= 10) return v.toFixed(1);
    return v.toFixed(2);
  };

  /* ── Purchase list document ────────────────────────────────────── */
  views.purchase = {
    title: 'Purchase list',
    actions: () => `<button class="btn" id="p-back">Back to materials</button>
      <button class="btn btn--go" id="p-print">Save as PDF / Print</button>`,
    html: () => `<div id="doc-mount"></div>`,
    wire() {
      const b = $('#p-back'); if (b) b.onclick = () => go('materials');
      const p = $('#p-print'); if (p) p.onclick = () => window.print();
      const q = S.quotes.find((x) => x.id === openQuoteId) || S.quotes.find((x) => x.id === toQuote);
      const mount = $('#doc-mount');
      if (!q) { mount.innerHTML = `<div class="empty"><b>No quotation selected</b></div>`; return; }
      mount.appendChild(buildPurchase(q));
    }
  };

  function buildPurchase(q) {
    const c = S.company;
    const T = takeOff(q);
    const doc = document.createElement('div');
    doc.className = 'doc'; doc.id = 'doc';
    document.body.appendChild(doc);

    let page = null, body = null, limit = 0;
    const pages = [];
    const openPage = () => {
      page = node('<div class="sheet"><div class="sheet__body"></div></div>');
      doc.appendChild(page); body = page.firstElementChild;
      const cs = getComputedStyle(page);
      const probe = node('<div style="height:297mm"></div>');
      doc.appendChild(probe);
      limit = probe.getBoundingClientRect().height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      probe.remove(); pages.push(page); return body;
    };
    const overflows = () => body.getBoundingClientRect().height > limit;
    const place = (elm) => {
      body.appendChild(elm);
      if (overflows() && body.children.length > 1) { elm.remove(); openPage(); body.appendChild(elm); }
    };
    openPage();

    place(node(`<header class="doc-head">
      <div><div class="doc-mark">Radhe<br><b>Design Studio</b></div><div class="doc-rule"></div>
        <div style="margin-top:5pt;font-size:7.6pt;color:#6f6b64">Material take-off — internal</div></div>
      <div class="spacer" style="font-size:7.8pt;color:#4f4c46;white-space:pre-line">${esc(c.address)}</div>
    </header>`));
    place(node(`<h1 style="margin-top:8mm">Purchase list</h1>`));
    place(node(`<dl class="doc-meta">
      <div><dt>Against quotation</dt><dd>${esc(q.no)}${q.rev ? ' Rev ' + esc(q.rev) : ''}</dd></div>
      <div><dt>Client</dt><dd>${esc(q.client.name || '—')}</dd></div>
      <div><dt>Site</dt><dd>${esc(q.client.property || '—')}</dd></div>
      <div><dt>Prepared</dt><dd>${today()}</dd></div>
    </dl>`));
    place(node(`<p style="font-size:8.4pt;color:#4f4c46;max-width:135mm">
      Quantities include the wastage carried against each trade. Bought-out goods carry none.
      This is an estimate from the studio's consumption norms, not a cutting list — check it against
      site measurement before an order is placed.</p>`));

    const cats = [...new Set(T.rows.map((r) => r.cat))];
    const HEAD = `<thead><tr><th style="width:42%">Material</th><th style="width:10%">Unit</th>
      <th class="num" style="width:13%">Qty to buy</th><th class="num" style="width:15%">Rate</th>
      <th class="num" style="width:20%">Amount</th></tr></thead>`;

    cats.forEach((cat) => {
      const rows = T.rows.filter((r) => r.cat === cat);
      const sum = rows.reduce((t, r) => t + r.amount, 0);
      let sec = node(`<section class="doc-room"><h2>${esc(cat)}<em>${money(sum)}</em></h2>
        <table>${HEAD}<tbody></tbody></table></section>`);
      place(sec);
      let tb = sec.querySelector('tbody');
      rows.forEach((r) => {
        const tr = node(`<tr><td><b>${esc(r.name)}</b>${r.note ? `<div class="doc-spec">${esc(r.note)}</div>` : ''}</td>
          <td>${esc(r.unit)}</td><td class="num">${fmtQty(r.order)}</td>
          <td class="num">${money2(r.rate)}</td><td class="num">${money2(r.amount)}</td></tr>`);
        tb.appendChild(tr);
        if (overflows()) {
          tr.remove();
          if (!tb.children.length) sec.remove();
          openPage();
          sec = node(`<section class="doc-room"><h2>${esc(cat)} <span style="font-weight:400;color:#8d8981">(contd.)</span><em>${money(sum)}</em></h2>
            <table>${HEAD}<tbody></tbody></table></section>`);
          body.appendChild(sec); tb = sec.querySelector('tbody'); tb.appendChild(tr);
        }
      });
    });

    place(node(`<div><div class="doc-tot">
      <div><span>Material</span><span>${money2(T.material)}</span></div>
      <div><span>Labour</span><span>${money2(T.labour)}</span></div>
      <div><span>Overhead @ ${T.overheadPct}%</span><span>${money2(T.overhead)}</span></div>
      <div class="is-grand"><span>Cost to build</span><span>${money(T.cost)}</span></div>
      <div style="margin-top:6pt"><span>Quoted (before tax)</span><span>${money2(T.revenue)}</span></div>
      <div><span>Gross margin</span><span>${money(T.margin)} · ${T.marginPct.toFixed(1)}%</span></div>
    </div></div>`));

    pages.forEach((pg, n) => pg.appendChild(node(
      `<div class="doc-foot"><span>${esc(c.name)} · Purchase list · ${esc(q.no)} · INTERNAL</span>
       <span>Page ${n + 1} of ${pages.length}</span></div>`)));
    doc.remove();
    return doc;
  }

  /* ── Catalogue screen ──────────────────────────────────────────── */
  let catGroup = CAT.groups[0].id;
  views.catalogue = {
    title: 'Catalogue',
    actions: () => `<button class="btn" id="c-reset">Reset my rates</button>`,
    html() {
      const g = CAT.groups.find((x) => x.id === catGroup) || CAT.groups[0];
      return `
        <div class="note" style="margin-bottom:.9rem">
          These are <b>your</b> rates. The figures shipped with the app are starting points for the Ahmedabad
          market, not a price list — edit them here and every new line picks up your number.
          A quotation keeps the rate it was built with, so re-pricing here never rewrites a quotation already sent.
        </div>
        <div class="row" style="margin-bottom:.8rem">
          ${CAT.groups.map((x) => `<button class="btn btn--sm ${x.id === catGroup ? 'btn--go' : ''}" data-cg="${x.id}">${esc(x.name)}</button>`).join('')}
        </div>
        <div class="card card__body--flush"><div class="t-wrap"><table>
          <thead><tr><th style="width:34%">Item</th><th>Unit</th><th class="num" style="width:120px">Your rate</th>
            <th class="num">Default</th><th>Specification fields</th></tr></thead>
          <tbody>${g.items.map((it) => `<tr>
            <td><b>${esc(it.name)}</b>${it.note ? `<div class="line__spec">${esc(it.note)}</div>` : ''}</td>
            <td>${esc(it.unit)}</td>
            <td><input type="number" class="num" data-rate-for="${it.id}" value="${esc(rateOf(it.id))}"></td>
            <td class="num" style="color:var(--ink-3)">${money(it.rate)}</td>
            <td class="line__spec">${it.specs.map((s) => esc(s.label) + ' (' + s.options.length + ')').join(' · ') || '—'}</td>
          </tr>`).join('')}</tbody></table></div></div>`;
    },
    wire() {
      $$('[data-cg]').forEach((b) => b.onclick = () => { catGroup = b.dataset.cg; render(); });
      $$('[data-rate-for]').forEach((el) => el.onchange = () => {
        S.rates[el.dataset.rateFor] = Number(el.value) || 0; save(); toast('Rate saved.');
      });
      $('#c-reset').onclick = () => {
        if (!confirm('Drop your edited rates and go back to the shipped defaults?')) return;
        S.rates = {}; save(); render(); toast('Back to defaults.');
      };
    }
  };

  /* ── Settings ──────────────────────────────────────────────────── */
  views.settings = {
    title: 'Settings',
    html() {
      const c = S.company;
      return `
        <div class="note" style="margin-bottom:.9rem">
          <b>Where this data lives.</b> Everything on this desk is stored in this browser, on this device.
          The site is served as static files, so there is no server to keep a record on — that means it does not
          follow you to your phone, a colleague sees an empty desk, and clearing site data clears the lot.
          <b>Take a backup below, regularly.</b>
        </div>
        <div class="grid g2">
          <div class="card"><div class="card__head"><h3>Studio</h3></div><div class="card__body grid">
            <label class="f"><span>Name</span><input type="text" id="s-name" value="${esc(c.name)}"></label>
            <label class="f"><span>Tagline</span><input type="text" id="s-tag" value="${esc(c.tagline)}"></label>
            <label class="f"><span>Address</span><textarea id="s-addr">${esc(c.address)}</textarea></label>
            <div class="grid g2">
              <label class="f"><span>Phone</span><input type="tel" id="s-phone" value="${esc(c.phone)}"></label>
              <label class="f"><span>Email</span><input type="email" id="s-email" value="${esc(c.email)}"></label>
              <label class="f"><span>Website</span><input type="text" id="s-web" value="${esc(c.web)}"></label>
              <label class="f"><span>GSTIN</span><input type="text" id="s-gstin" value="${esc(c.gstin)}"></label>
            </div>
            <label class="f"><span>Payment details printed on the quotation</span><textarea id="s-bank">${esc(c.bank)}</textarea></label>
          </div></div>

          <div class="card"><div class="card__head"><h3>Quotation defaults</h3></div><div class="card__body grid">
            <div class="grid g2">
              <label class="f"><span>Number prefix</span><input type="text" id="s-prefix" value="${esc(c.quotePrefix)}"></label>
              <label class="f"><span>Financial year</span><input type="text" id="s-fy" value="${esc(c.financialYear)}"></label>
              <label class="f"><span>Next number</span><input type="number" class="num" id="s-next" value="${esc(c.nextNumber)}"></label>
              <label class="f"><span>Valid for (days)</span><input type="number" class="num" id="s-valid" value="${esc(c.validityDays)}"></label>
              <label class="f"><span>GST rate %</span><input type="number" class="num" id="s-gstrate" value="${esc(c.gstRate)}"></label>
              <label class="f"><span>GST split</span><select id="s-gstmode">
                <option value="cgst-sgst" ${c.gstMode === 'cgst-sgst' ? 'selected' : ''}>CGST + SGST (within Gujarat)</option>
                <option value="igst" ${c.gstMode === 'igst' ? 'selected' : ''}>IGST (outside Gujarat)</option>
              </select></label>
            </div>
            <div style="color:var(--ink-3);font-size:.76rem">Next quotation will be numbered <b style="color:var(--ink)">${esc(nextQuoteNo())}</b></div>
            <label class="f"><span>Terms — one per line</span><textarea id="s-terms" style="min-height:190px">${esc((c.terms || []).join('\n'))}</textarea></label>
          </div></div>
        </div>

        <div class="card" style="margin-top:.9rem"><div class="card__head"><h3>Costing</h3></div>
          <div class="card__body grid g2">
            <label class="f"><span>Overhead on material + labour (%)</span>
              <input type="number" class="num" id="s-overhead" value="${esc(c.overheadPct)}"></label>
            <div>
              <span style="display:block;margin-bottom:.28rem;color:var(--ink-3);font-size:.58rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase">Wastage carried by trade (%)</span>
              <div class="grid g2" style="gap:.4rem">${Object.keys(MAT.WASTAGE).map((cat) =>
                `<label style="display:grid;grid-template-columns:minmax(0,1fr) 62px;gap:.4rem;align-items:center;font-size:.76rem">
                  <span>${esc(cat)}</span>
                  <input type="number" class="num" data-waste="${esc(cat)}" value="${esc(wastageOf(cat))}"></label>`).join('')}</div>
            </div>
          </div>
          <div class="card__body" style="border-top:1px solid var(--hair)">
            <span style="display:block;margin-bottom:.4rem;color:var(--ink-3);font-size:.58rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase">Payment stages</span>
            <div id="s-milestones" class="grid" style="gap:.4rem">${(c.milestones || []).map((mstn, n) =>
              `<div class="row" style="flex-wrap:nowrap">
                <input type="text" data-ms-label="${n}" value="${esc(mstn[0])}">
                <input type="number" class="num" style="width:80px" data-ms-pct="${n}" value="${esc(mstn[1])}">
                <button class="btn btn--sm btn--kill btn--icon" data-ms-del="${n}">×</button>
              </div>`).join('')}</div>
            <button class="btn btn--sm" id="s-ms-add" style="margin-top:.5rem">+ Add a stage</button>
          </div>
        </div>

        <div class="card" style="margin-top:.9rem"><div class="card__head"><h3>Backup &amp; restore</h3></div>
          <div class="card__body row">
            <button class="btn btn--go" id="s-export">Download backup (JSON)</button>
            <button class="btn" id="s-csv">Export enquiries (CSV)</button>
            <label class="btn" style="cursor:pointer">Restore from backup<input type="file" id="s-import" accept="application/json,.json" hidden></label>
            <span style="flex:1"></span>
            <button class="btn btn--kill" id="s-wipe">Erase everything</button>
          </div>
        </div>

        <div class="row row--end" style="margin-top:.9rem"><button class="btn btn--go" id="s-save">Save settings</button></div>`;
    },
    wire() {
      $('#s-save').onclick = () => {
        const c = S.company;
        c.name = $('#s-name').value.trim(); c.tagline = $('#s-tag').value.trim();
        c.address = $('#s-addr').value; c.phone = $('#s-phone').value.trim();
        c.email = $('#s-email').value.trim(); c.web = $('#s-web').value.trim();
        c.gstin = $('#s-gstin').value.trim(); c.bank = $('#s-bank').value;
        c.quotePrefix = $('#s-prefix').value.trim(); c.financialYear = $('#s-fy').value.trim();
        c.nextNumber = Number($('#s-next').value) || 1;
        c.validityDays = Number($('#s-valid').value) || 15;
        c.gstRate = Number($('#s-gstrate').value) || 0;
        c.gstMode = $('#s-gstmode').value;
        c.terms = $('#s-terms').value.split('\n').map((x) => x.trim()).filter(Boolean);
        c.overheadPct = Number($('#s-overhead').value) || 0;
        $$('[data-waste]').forEach((el) => { S.wastage[el.dataset.waste] = Number(el.value) || 0; });
        c.milestones = $$('[data-ms-label]').map((el, n) =>
          [el.value.trim(), Number($(`[data-ms-pct="${n}"]`).value) || 0]).filter((x) => x[0]);
        save(); render(); toast('Settings saved.');
      };
      const msAdd = $('#s-ms-add');
      if (msAdd) msAdd.onclick = () => {
        S.company.milestones = [...(S.company.milestones || []), ['New stage', 0]];
        save(); render();
      };
      $$('[data-ms-del]').forEach((b) => b.onclick = () => {
        S.company.milestones = (S.company.milestones || []).filter((x, n) => String(n) !== b.dataset.msDel);
        save(); render();
      });
      $('#s-export').onclick = () => {
        download(`radhe-desk-${today()}.json`, JSON.stringify(S, null, 2), 'application/json');
        toast('Backup downloaded.');
      };
      $('#s-csv').onclick = () => {
        const head = ['Name', 'Phone', 'Email', 'Property', 'Area', 'Stage', 'Source', 'Value', 'Follow-up', 'Enquiry date', 'Notes'];
        const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
        const rows = S.leads.map((l) => [l.name, l.phone, l.email, l.property, l.area, l.stage,
          l.source, l.value, l.followUp, l.created, l.notes].map(cell).join(','));
        download(`radhe-enquiries-${today()}.csv`, [head.join(','), ...rows].join('\n'), 'text/csv');
        toast('CSV downloaded.');
      };
      $('#s-import').onchange = (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const fr = new FileReader();
        fr.onload = () => {
          try {
            const data = JSON.parse(fr.result);
            if (!data || !Array.isArray(data.leads) || !Array.isArray(data.quotes))
              throw new Error('That file is not a studio backup.');
            if (!confirm(`Restore ${data.leads.length} enquiries and ${data.quotes.length} quotations? This replaces what is on the desk now.`)) return;
            S = Object.assign(blankState(), data);
            S.company = Object.assign(blankState().company, data.company || {});
            save(); render(); toast('Restored.');
          } catch (err) {
            alert('Could not read that file.\n\n' + err.message);
          }
          e.target.value = '';
        };
        fr.readAsText(f);
      };
      $('#s-wipe').onclick = () => {
        if (!confirm('Erase every enquiry, quotation and rate on this desk?')) return;
        if (!confirm('There is no undo. Have you downloaded a backup?')) return;
        S = blankState(); save(); go('dashboard'); toast('Desk cleared.');
      };
    }
  };

  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /* ── Modal plumbing ────────────────────────────────────────────── */
  function modal({ title, body, foot, wire, wide, flush }) {
    const m = $('#modal');
    m.innerHTML = `<div class="modal__box ${wide ? 'modal__box--wide' : ''}">
      <div class="modal__head"><h3>${title}</h3><span class="spacer"></span>
        <button class="btn btn--sm" data-close>Close</button></div>
      <div class="modal__body ${flush ? 'modal__body--flush' : ''}">${body}</div>
      ${foot ? `<div class="modal__foot">${foot}</div>` : ''}
    </div>`;
    m.hidden = false;
    $$('[data-close]', m).forEach((b) => b.onclick = closeModal);
    m.onclick = (e) => { if (e.target === m) closeModal(); };
    if (wire) wire(closeModal);
    const first = m.querySelector('input, select, textarea');
    if (first) first.focus();
  }
  function closeModal() { const m = $('#modal'); m.hidden = true; m.innerHTML = ''; }
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ── Boot ──────────────────────────────────────────────────────── */
  $$('.nav-item').forEach((b) => b.onclick = () => go(b.dataset.route));
  $('#theme').onclick = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('rds.desk.theme', next); } catch (e) { /* private window */ }
  };
  try {
    const th = localStorage.getItem('rds.desk.theme');
    if (th) document.documentElement.dataset.theme = th;
  } catch (e) { /* private window — the default theme stands */ }

  window.RDS_DESK = { state: () => S, totals, takeOff, words, fmtQty };
  render();
})();
