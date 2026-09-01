/* ═══════════════════════════════════════════════════════════════════
   Radhe Design Studio — purchase materials & consumption norms
   ═══════════════════════════════════════════════════════════════════
   The catalogue prices what the CLIENT buys — a square foot of base
   unit. This file describes what the STUDIO buys to build it: the
   sheets, the litres, the pairs and the pins.

   Two tables.

   MATERIALS is the purchase master — everything that leaves a shop
   with a bill, in the unit it is actually bought in (a sheet is 8×4 =
   32 sq.ft, a coil of wire is 90m), at a rate you edit.

   RECIPES is the consumption norm: for ONE unit of a catalogue item,
   how much of each material it eats. So `kit-base` is quoted per sq.ft
   of elevation and consumes 0.075 of a 19mm sheet, 1.3 running feet of
   edge band, twelve pins and a third of a pair of hinges per sq.ft.

   These norms are the standard allowances used on site here, and they
   are estimates, not a cutting list. They carry the wastage a job
   really has — offcuts, breakage, the sheet you ruin — through the
   WASTAGE table by category. Check the first take-off against a real
   purchase and edit the numbers: both the rates and the norms are
   yours to change.
   ═══════════════════════════════════════════════════════════════════ */

window.RDS_MATERIALS = (function () {

  const m = (id, name, cat, unit, rate, note) => ({ id, name, cat, unit, rate, note });

  /* A sheet is 8×4 = 32 sq.ft throughout. */
  const MATERIALS = [
    /* ── Boards & sheets ────────────────────────────────────────── */
    m('ply19bwp', 'BWP plywood 710 — 19mm', 'Boards & sheets', 'Sheet', 3450, '8×4 = 32 sq.ft'),
    m('ply12bwp', 'BWP plywood 710 — 12mm', 'Boards & sheets', 'Sheet', 2350),
    m('ply6bwp', 'BWP plywood 710 — 6mm', 'Boards & sheets', 'Sheet', 1350),
    m('ply19bwr', 'BWR plywood — 19mm', 'Boards & sheets', 'Sheet', 2650),
    m('ply12bwr', 'BWR plywood — 12mm', 'Boards & sheets', 'Sheet', 1850),
    m('mdf18', 'MDF — 18mm', 'Boards & sheets', 'Sheet', 1850),
    m('mdf12', 'MDF — 12mm', 'Boards & sheets', 'Sheet', 1300),
    m('mdf6', 'MDF — 6mm', 'Boards & sheets', 'Sheet', 750),
    m('hdhmr18', 'HDHMR — 18mm', 'Boards & sheets', 'Sheet', 2950),
    m('prelam18', 'Pre-laminated particle board — 18mm', 'Boards & sheets', 'Sheet', 1450),
    m('wpc18', 'WPC board — 18mm', 'Boards & sheets', 'Sheet', 2850),
    m('pvc18', 'PVC board — 18mm', 'Boards & sheets', 'Sheet', 2450),
    m('gyp125', 'Gypsum board 12.5mm (Gyproc)', 'Boards & sheets', 'Sheet', 780),
    m('cemboard', 'Fibre cement board 8mm', 'Boards & sheets', 'Sheet', 1150),

    /* ── Surfacing & edging ─────────────────────────────────────── */
    m('lam1', 'Laminate 1mm — 8×4', 'Surfacing & edging', 'Sheet', 1450),
    m('lam08', 'Laminate 0.8mm — 8×4', 'Surfacing & edging', 'Sheet', 1050),
    m('acrylic', 'Acrylic sheet — 8×4', 'Surfacing & edging', 'Sheet', 5800),
    m('veneer', 'Veneer sheet — 8×4', 'Surfacing & edging', 'Sheet', 3200),
    m('membrane', 'PVC membrane foil', 'Surfacing & edging', 'Sq.ft', 68),
    m('edge2', 'PVC edge band 2mm', 'Surfacing & edging', 'R.ft', 9),
    m('edge08', 'PVC edge band 0.8mm', 'Surfacing & edging', 'R.ft', 5),
    m('mirror5', 'Mirror 5mm', 'Surfacing & edging', 'Sq.ft', 105),
    m('glass8t', 'Toughened glass 8mm', 'Surfacing & edging', 'Sq.ft', 150),
    m('glass12t', 'Toughened glass 12mm', 'Surfacing & edging', 'Sq.ft', 260),
    m('lacglass', 'Lacquered glass 5mm', 'Surfacing & edging', 'Sq.ft', 150),
    m('corian-sheet', 'Solid surface sheet (Corian type)', 'Surfacing & edging', 'Sq.ft', 620),

    /* ── Cabinet hardware ───────────────────────────────────────── */
    m('hinge-sc', 'Soft close hinge', 'Cabinet hardware', 'Pair', 165),
    m('hinge-ord', 'Auto-close hinge', 'Cabinet hardware', 'Pair', 95),
    m('chan-tandem', 'Tandem box soft close 450mm', 'Cabinet hardware', 'Set', 1300),
    m('chan-tele', 'Telescopic channel soft close 450mm', 'Cabinet hardware', 'Pair', 480),
    m('chan-ball', 'Ball bearing channel', 'Cabinet hardware', 'Pair', 280),
    m('liftup', 'Lift-up flap system', 'Cabinet hardware', 'Set', 1850),
    m('handle-prof', 'Profile / G-profile handle', 'Cabinet hardware', 'R.ft', 240),
    m('handle-ss', 'SS cabinet handle', 'Cabinet hardware', 'Nos', 180),
    m('knob', 'Cabinet knob', 'Cabinet hardware', 'Nos', 130),
    m('minifix', 'Minifix cam & dowel', 'Cabinet hardware', 'Set', 14),
    m('dowel', 'Wooden dowel 8mm', 'Cabinet hardware', 'Nos', 2),
    m('shelf-pin', 'Shelf support pin', 'Cabinet hardware', 'Nos', 4),
    m('hangrod', 'Wardrobe hanging rod + brackets', 'Cabinet hardware', 'R.ft', 180),
    m('slide-sys', 'Sliding wardrobe track set', 'Cabinet hardware', 'Set', 5200),
    m('corner-brk', 'L-bracket / corner brace', 'Cabinet hardware', 'Nos', 18),
    m('kacc', 'Kitchen accessory (pullout / basket / tray)', 'Cabinet hardware', 'Nos', 2650),
    m('wd-acc', 'Wardrobe internal accessory', 'Cabinet hardware', 'Nos', 2400),
    m('bed-hydraulic', 'Hydraulic bed lift fitting', 'Cabinet hardware', 'Set', 2400),
    m('power-hub', 'Table power hub / pop-up box', 'Cabinet hardware', 'Nos', 4800),

    /* ── Door & window hardware ─────────────────────────────────── */
    m('flushdoor32', 'Flush door shutter blank 32mm', 'Door & window', 'Nos', 2450),
    m('door-veneer-set', 'Main door leaf (bought)', 'Door & window', 'Nos', 27500),
    m('doorframe-sal', 'Sal wood frame section', 'Door & window', 'R.ft', 195),
    m('doorframe-wpc', 'WPC door frame section', 'Door & window', 'R.ft', 240),
    m('lock-mortise', 'Mortise lock set', 'Door & window', 'Set', 2300),
    m('lock-digital', 'Digital / smart lock', 'Door & window', 'Nos', 12500),
    m('handle-lever', 'Lever handle on rose', 'Door & window', 'Pair', 1350),
    m('handle-pull', 'Pull handle', 'Door & window', 'Nos', 1700),
    m('hinge-butt', 'SS butt hinge 4"', 'Door & window', 'Nos', 180),
    m('hinge-bb', 'Ball bearing hinge 5"', 'Door & window', 'Nos', 320),
    m('door-hw', 'Door ironmongery (bolt / closer / stopper)', 'Door & window', 'Nos', 430),
    m('door-seal', 'Door seal / gasket', 'Door & window', 'R.ft', 45),
    m('upvc-profile', 'UPVC window profile + fittings', 'Door & window', 'Sq.ft', 330),
    m('alu-section', 'Aluminium section', 'Door & window', 'Kg', 285),
    m('mosquito-mesh', 'SS mosquito mesh', 'Door & window', 'Sq.ft', 85),
    m('glass-fitting', 'Glass patch fitting / spider', 'Door & window', 'Nos', 520),

    /* ── Adhesives & sealants ───────────────────────────────────── */
    m('fev-sh', 'Synthetic resin adhesive (Fevicol SH)', 'Adhesives & sealants', 'Kg', 210),
    m('fev-marine', 'Marine adhesive', 'Adhesives & sealants', 'Kg', 280),
    m('contact-adh', 'Contact adhesive (for laminate)', 'Adhesives & sealants', 'Kg', 240),
    m('pu-adh', 'PU / D3 adhesive', 'Adhesives & sealants', 'Kg', 420),
    m('silicone', 'Silicone sealant', 'Adhesives & sealants', 'Tube', 240),
    m('acrylic-seal', 'Acrylic sealant', 'Adhesives & sealants', 'Tube', 120),

    /* ── Fasteners & sundries — the pin end ─────────────────────── */
    m('screw-6x25', 'Wood screw 6×25mm', 'Fasteners & sundries', 'Nos', 1.1),
    m('screw-8x38', 'Wood screw 8×38mm', 'Fasteners & sundries', 'Nos', 1.8),
    m('screw-8x50', 'Wood screw 8×50mm', 'Fasteners & sundries', 'Nos', 2.4),
    m('screw-dw25', 'Drywall screw 25mm', 'Fasteners & sundries', 'Nos', 0.9),
    m('screw-dw41', 'Drywall screw 41mm', 'Fasteners & sundries', 'Nos', 1.2),
    m('nail-1', 'Wire nail 1"', 'Fasteners & sundries', 'Kg', 110),
    m('nail-2', 'Wire nail 2"', 'Fasteners & sundries', 'Kg', 105),
    m('pin-f30', 'Air nailer pin F30 (brad)', 'Fasteners & sundries', 'Nos', 0.22),
    m('pin-panel', 'Panel pin 3/4"', 'Fasteners & sundries', 'Kg', 180),
    m('staple10', 'Staple 10mm', 'Fasteners & sundries', 'Nos', 0.14),
    m('plug6', 'Wall plug 6mm (gitti)', 'Fasteners & sundries', 'Nos', 1.4),
    m('plug8', 'Wall plug 8mm', 'Fasteners & sundries', 'Nos', 2.2),
    m('anchor8', 'Dash / anchor fastener 8mm', 'Fasteners & sundries', 'Nos', 12),
    m('sandpaper', 'Emery / sandpaper sheet', 'Fasteners & sundries', 'Nos', 14),
    m('masking', 'Masking tape', 'Fasteners & sundries', 'Roll', 55),
    m('thinner', 'Thinner', 'Fasteners & sundries', 'Litre', 130),
    m('cotton-waste', 'Cotton waste', 'Fasteners & sundries', 'Kg', 90),
    m('wood-filler', 'Wood filler / putty', 'Fasteners & sundries', 'Kg', 160),
    m('blade', 'Cutter / saw blade (consumable)', 'Fasteners & sundries', 'Nos', 180),
    m('welding', 'Welding rod & consumables', 'Fasteners & sundries', 'Kg', 22),
    m('stitch-sundry', 'Stitching sundries — thread, hooks, tape', 'Fasteners & sundries', 'Sq.ft', 9),
    m('debris', 'Debris removal & tipping', 'Fasteners & sundries', 'Sq.ft', 6),

    /* ── Paint & polish ─────────────────────────────────────────── */
    m('primer-wood', 'Wood primer', 'Paint & polish', 'Litre', 280),
    m('melamine', 'Melamine polish + hardener', 'Paint & polish', 'Litre', 620),
    m('pu-paint', 'PU paint + hardener + thinner', 'Paint & polish', 'Litre', 950),
    m('duco', 'Duco / NC lacquer', 'Paint & polish', 'Litre', 480),
    m('wall-putty', 'Wall putty', 'Paint & polish', 'Kg', 20),
    m('primer-wall', 'Wall primer', 'Paint & polish', 'Litre', 190),
    m('emulsion', 'Interior emulsion', 'Paint & polish', 'Litre', 340),
    m('emulsion-lux', 'Premium emulsion (Royale)', 'Paint & polish', 'Litre', 620),
    m('ext-emulsion', 'Exterior emulsion (Apex)', 'Paint & polish', 'Litre', 420),
    m('enamel', 'Enamel paint', 'Paint & polish', 'Litre', 320),
    m('texture-mat', 'Texture / designer finish material', 'Paint & polish', 'Sq.ft', 55),
    m('wallpaper-mat', 'Wallpaper', 'Paint & polish', 'Sq.ft', 68),

    /* ── Ceiling system ─────────────────────────────────────────── */
    m('gi-ceiling', 'GI ceiling / intermediate channel', 'Ceiling system', 'R.ft', 11),
    m('gi-perimeter', 'GI perimeter channel', 'Ceiling system', 'R.ft', 9),
    m('gi-suspender', 'Ceiling suspender + soffit cleat', 'Ceiling system', 'Nos', 12),
    m('joint-compound', 'Gypsum jointing compound', 'Ceiling system', 'Kg', 30),
    m('joint-tape', 'Jointing tape', 'Ceiling system', 'Roll', 120),
    m('pop-powder', 'POP powder', 'Ceiling system', 'Bag', 300),
    m('wpc-ceil-panel', 'WPC ceiling panel', 'Ceiling system', 'Sq.ft', 62),
    m('grid-tile', 'Mineral fibre ceiling tile', 'Ceiling system', 'Sq.ft', 42),
    m('grid-tee', 'T-grid section', 'Ceiling system', 'R.ft', 12),
    m('acoustic-panel', 'Acoustic panel', 'Ceiling system', 'Sq.ft', 195),

    /* ── Civil & tiling ─────────────────────────────────────────── */
    m('cement', 'Cement (OPC 53)', 'Civil & tiling', 'Bag', 420),
    m('sand', 'River / M sand', 'Civil & tiling', 'Cft', 55),
    m('brick', 'Clay brick', 'Civil & tiling', 'Nos', 7.5),
    m('aac-block', 'AAC block 4"', 'Civil & tiling', 'Nos', 40),
    m('tile-adh', 'Tile adhesive', 'Civil & tiling', 'Bag', 480),
    m('grout', 'Tile grout', 'Civil & tiling', 'Kg', 120),
    m('spacer', 'Tile spacer', 'Civil & tiling', 'Nos', 0.6),
    m('vit-tile', 'Vitrified tile', 'Civil & tiling', 'Sq.ft', 52),
    m('wall-tile', 'Ceramic wall tile', 'Civil & tiling', 'Sq.ft', 34),
    m('marble-slab', 'Marble slab', 'Civil & tiling', 'Sq.ft', 175),
    m('granite-slab', 'Granite slab', 'Civil & tiling', 'Sq.ft', 110),
    m('quartz-slab', 'Quartz / engineered stone', 'Civil & tiling', 'Sq.ft', 320),
    m('wood-floor', 'Laminate wooden flooring plank', 'Civil & tiling', 'Sq.ft', 112),
    m('underlay', 'Foam underlay', 'Civil & tiling', 'Sq.ft', 12),
    m('carpet-tile', 'Carpet tile', 'Civil & tiling', 'Sq.ft', 72),
    m('waterproof', 'Waterproofing compound', 'Civil & tiling', 'Kg', 145),
    m('epoxy-mat', 'Epoxy flooring material', 'Civil & tiling', 'Sq.ft', 62),
    m('skirt-mdf', 'MDF skirting 75mm', 'Civil & tiling', 'R.ft', 34),
    m('alu-skirt', 'Aluminium groove skirting', 'Civil & tiling', 'R.ft', 190),
    m('ms-steel', 'MS / SS section', 'Civil & tiling', 'Kg', 82),

    /* ── Electrical & lighting ──────────────────────────────────── */
    m('wire15', 'Wire 1.5 sq.mm — 90m coil', 'Electrical & lighting', 'Coil', 1950),
    m('wire25', 'Wire 2.5 sq.mm — 90m coil', 'Electrical & lighting', 'Coil', 3100),
    m('wire40', 'Wire 4 sq.mm — 90m coil', 'Electrical & lighting', 'Coil', 4800),
    m('conduit25', 'PVC conduit 25mm', 'Electrical & lighting', 'R.ft', 13),
    m('conduit20', 'PVC conduit 20mm', 'Electrical & lighting', 'R.ft', 9),
    m('mod-box', 'Modular box (GI)', 'Electrical & lighting', 'Nos', 55),
    m('switch-plate', 'Modular plate + frame', 'Electrical & lighting', 'Nos', 260),
    m('switch-mod', 'Switch / socket module', 'Electrical & lighting', 'Nos', 105),
    m('mcb', 'MCB', 'Electrical & lighting', 'Nos', 240),
    m('rccb', 'RCCB', 'Electrical & lighting', 'Nos', 1500),
    m('db-box', 'Distribution board enclosure', 'Electrical & lighting', 'Nos', 1500),
    m('led-strip', 'LED strip', 'Electrical & lighting', 'R.ft', 38),
    m('led-profile', 'Aluminium LED profile', 'Electrical & lighting', 'R.ft', 72),
    m('led-driver', 'LED driver', 'Electrical & lighting', 'Nos', 320),
    m('cob-spot', 'COB spot light', 'Electrical & lighting', 'Nos', 300),
    m('track-light', 'Magnetic track + fittings', 'Electrical & lighting', 'R.ft', 1150),
    m('deco-light', 'Decorative light fitting', 'Electrical & lighting', 'Nos', 4400),
    m('fan', 'Ceiling fan', 'Electrical & lighting', 'Nos', 4100),
    m('ac-split', 'Split AC unit', 'Electrical & lighting', 'Nos', 29500),
    m('ac-kit', 'AC copper piping & drain kit', 'Electrical & lighting', 'Set', 3200),
    m('smart-device', 'Home automation device', 'Electrical & lighting', 'Nos', 8200),
    m('signage-mat', 'Signage material', 'Electrical & lighting', 'Sq.ft', 430),

    /* ── Plumbing & sanitaryware ────────────────────────────────── */
    m('cpvc-pipe', 'CPVC pipe 1/2"', 'Plumbing & sanitary', 'R.ft', 42),
    m('cpvc-fit', 'CPVC fitting', 'Plumbing & sanitary', 'Nos', 68),
    m('pvc-drain', 'PVC drainage pipe 4"', 'Plumbing & sanitary', 'R.ft', 95),
    m('wc-unit', 'Water closet', 'Plumbing & sanitary', 'Nos', 9200),
    m('cistern', 'Concealed cistern + frame', 'Plumbing & sanitary', 'Nos', 7800),
    m('basin-unit', 'Wash basin', 'Plumbing & sanitary', 'Nos', 6000),
    m('cp-set', 'CP fittings set', 'Plumbing & sanitary', 'Set', 9600),
    m('shower-set', 'Shower system', 'Plumbing & sanitary', 'Set', 13500),
    m('angle-valve', 'Angle valve', 'Plumbing & sanitary', 'Nos', 650),
    m('floor-drain', 'Floor drain / grating', 'Plumbing & sanitary', 'Nos', 560),
    m('geyser', 'Water heater', 'Plumbing & sanitary', 'Nos', 6800),
    m('bath-acc', 'Bathroom accessory', 'Plumbing & sanitary', 'Nos', 1150),
    m('bath-mirror', 'Bathroom mirror', 'Plumbing & sanitary', 'Nos', 4800),

    /* ── Appliances & bought-out ────────────────────────────────── */
    m('chimney', 'Chimney', 'Appliances & bought-out', 'Nos', 15500),
    m('hob', 'Hob', 'Appliances & bought-out', 'Nos', 11500),
    m('sink', 'Kitchen sink', 'Appliances & bought-out', 'Nos', 5900),
    m('kfaucet', 'Kitchen faucet', 'Appliances & bought-out', 'Nos', 3900),
    m('builtin-appl', 'Built-in appliance', 'Appliances & bought-out', 'Nos', 21000),
    m('sofa', 'Sofa', 'Appliances & bought-out', 'Nos', 52000),
    m('dining-tbl', 'Dining table', 'Appliances & bought-out', 'Nos', 44000),
    m('chair', 'Chair', 'Appliances & bought-out', 'Nos', 7600),
    m('occ-table', 'Occasional table', 'Appliances & bought-out', 'Nos', 11500),
    m('office-chair', 'Office chair', 'Appliances & bought-out', 'Nos', 9000),
    m('ws-system', 'Workstation system components', 'Appliances & bought-out', 'Nos', 16500),
    m('pod', 'Phone booth / meeting pod', 'Appliances & bought-out', 'Nos', 108000),
    m('glass-part', 'Glass partition system', 'Appliances & bought-out', 'Sq.ft', 380),
    m('3d-render', 'Outsourced 3D render', 'Appliances & bought-out', 'Nos', 1800),

    /* ── Soft goods ─────────────────────────────────────────────── */
    m('curtain-fab', 'Curtain fabric', 'Soft goods', 'Sq.ft', 62),
    m('curtain-lining', 'Curtain lining', 'Soft goods', 'Sq.ft', 28),
    m('curtain-track', 'Curtain track / rod', 'Soft goods', 'R.ft', 118),
    m('blind-fab', 'Blind fabric + mechanism', 'Soft goods', 'Sq.ft', 72),
    m('uphol-fab', 'Upholstery fabric', 'Soft goods', 'Sq.ft', 88),
    m('foam40', 'Foam 40 density', 'Soft goods', 'Sq.ft', 52),
    m('rug', 'Rug / carpet', 'Soft goods', 'Sq.ft', 150),
    m('mattress', 'Mattress', 'Soft goods', 'Nos', 12500),
    m('linen-set', 'Bed linen set', 'Soft goods', 'Set', 2900),
    m('cushion', 'Cushion + filler', 'Soft goods', 'Nos', 520)
  ];

  /* Wastage carried on purchase, by category. Sheet goods lose the most
     to offcuts; a bought-out chimney loses nothing. */
  const WASTAGE = {
    'Boards & sheets': 8, 'Surfacing & edging': 8, 'Cabinet hardware': 2,
    'Door & window': 2, 'Adhesives & sealants': 5, 'Fasteners & sundries': 6,
    'Paint & polish': 5, 'Ceiling system': 6, 'Civil & tiling': 6,
    'Electrical & lighting': 4, 'Plumbing & sanitary': 3,
    'Appliances & bought-out': 0, 'Soft goods': 6
  };

  /* labour = ₹ per one unit of the catalogue item (site + workshop). */
  const R = {};
  const r = (id, labour, mats) => { R[id] = { labour, mats }; };

  /* ── Modular kitchen ────────────────────────────────────────── */
  r('kit-base', 240, [['ply19bwp', .075], ['ply12bwp', .028], ['lam1', .085], ['edge2', 1.3],
    ['contact-adh', .13], ['fev-sh', .09], ['screw-8x38', 5], ['pin-f30', 12], ['hinge-sc', .32],
    ['chan-tele', .10], ['handle-prof', .22], ['minifix', 1.2], ['shelf-pin', .8],
    ['sandpaper', .12], ['silicone', .02]]);
  r('kit-wall', 225, [['ply19bwp', .068], ['ply12bwp', .026], ['lam1', .082], ['edge2', 1.2],
    ['contact-adh', .12], ['fev-sh', .08], ['screw-8x38', 4.5], ['pin-f30', 11], ['hinge-sc', .35],
    ['liftup', .06], ['handle-prof', .20], ['plug8', 1.2], ['sandpaper', .10]]);
  r('kit-tall', 280, [['ply19bwp', .095], ['ply12bwp', .030], ['lam1', .100], ['edge2', 1.5],
    ['contact-adh', .15], ['fev-sh', .10], ['screw-8x38', 6], ['pin-f30', 14], ['hinge-sc', .30],
    ['kacc', .02], ['handle-prof', .18], ['sandpaper', .14]]);
  r('kit-loft', 190, [['ply19bwp', .060], ['ply12bwp', .022], ['lam1', .070], ['edge2', 1.0],
    ['contact-adh', .10], ['fev-sh', .07], ['screw-8x38', 4], ['pin-f30', 9], ['hinge-sc', .25],
    ['sandpaper', .08]]);
  r('kit-counter', 180, [['granite-slab', 2.2], ['silicone', .12], ['cement', .03], ['sand', .05]]);
  r('kit-splash', 65, [['wall-tile', 1.05], ['tile-adh', .035], ['grout', .12], ['spacer', 3]]);
  r('kit-sink', 450, [['sink', 1], ['silicone', .4]]);
  r('kit-faucet', 280, [['kfaucet', 1], ['cpvc-fit', 2]]);
  r('kit-chimney', 1200, [['chimney', 1], ['plug8', 4], ['screw-8x50', 4]]);
  r('kit-hob', 600, [['hob', 1], ['silicone', .3]]);
  r('kit-acc', 220, [['kacc', 1], ['screw-6x25', 8]]);
  r('kit-profile', 60, [['led-profile', 1], ['led-strip', 1], ['led-driver', .08], ['screw-6x25', 2]]);
  r('kit-appl', 900, [['builtin-appl', 1]]);

  /* ── Wardrobes & bedroom ────────────────────────────────────── */
  r('wd-open', 235, [['ply19bwp', .072], ['ply12bwp', .028], ['lam1', .088], ['edge2', 1.3],
    ['contact-adh', .13], ['fev-sh', .09], ['screw-8x38', 5], ['pin-f30', 12], ['hinge-sc', .30],
    ['chan-tele', .06], ['handle-prof', .20], ['hangrod', .10], ['minifix', 1.2],
    ['shelf-pin', 1], ['sandpaper', .12]]);
  r('wd-slide', 280, [['ply19bwp', .072], ['ply12bwp', .030], ['lam1', .090], ['edge2', 1.0],
    ['contact-adh', .14], ['fev-sh', .09], ['screw-8x38', 5], ['pin-f30', 12], ['slide-sys', .012],
    ['handle-prof', .10], ['hangrod', .10], ['sandpaper', .12]]);
  r('wd-walkin', 310, [['ply19bwp', .085], ['ply12bwp', .030], ['lam1', .100], ['edge2', 1.5],
    ['contact-adh', .15], ['fev-sh', .10], ['screw-8x38', 6], ['pin-f30', 14], ['hangrod', .20],
    ['led-strip', .30], ['led-profile', .30], ['led-driver', .03], ['shelf-pin', 1.4]]);
  r('wd-int', 200, [['wd-acc', 1], ['screw-6x25', 8]]);
  r('wd-loft', 190, [['ply19bwp', .060], ['ply12bwp', .022], ['lam1', .070], ['edge2', 1.0],
    ['contact-adh', .10], ['fev-sh', .07], ['screw-8x38', 4], ['pin-f30', 9], ['hinge-sc', .25]]);
  r('bed-unit', 3200, [['ply19bwp', 1.6], ['ply12bwp', .6], ['lam1', 1.1], ['veneer', .3],
    ['edge2', 26], ['contact-adh', 2.2], ['fev-sh', 1.6], ['screw-8x50', 40], ['pin-f30', 180],
    ['uphol-fab', 22], ['foam40', 20], ['bed-hydraulic', 1], ['pu-paint', 1.2], ['sandpaper', 3]]);
  r('bed-side', 700, [['ply19bwp', .35], ['ply12bwp', .12], ['lam1', .28], ['edge2', 7],
    ['contact-adh', .5], ['fev-sh', .35], ['chan-tele', 1], ['handle-ss', 1],
    ['screw-8x38', 12], ['pin-f30', 40], ['sandpaper', .8]]);
  r('bed-dress', 245, [['ply19bwp', .072], ['ply12bwp', .026], ['lam1', .086], ['edge2', 1.3],
    ['contact-adh', .13], ['fev-sh', .09], ['mirror5', .35], ['chan-tele', .12],
    ['handle-prof', .20], ['screw-8x38', 5], ['pin-f30', 12]]);
  r('bed-study', 230, [['ply19bwp', .070], ['ply12bwp', .024], ['lam1', .085], ['edge2', 1.3],
    ['contact-adh', .12], ['fev-sh', .085], ['chan-tele', .10], ['handle-prof', .20],
    ['screw-8x38', 5], ['pin-f30', 12]]);

  /* ── Living, TV & storage ───────────────────────────────────── */
  r('lv-tv', 250, [['ply19bwp', .075], ['ply12bwp', .028], ['lam1', .085], ['edge2', 1.3],
    ['contact-adh', .13], ['fev-sh', .09], ['hinge-sc', .30], ['chan-tele', .12],
    ['handle-prof', .22], ['screw-8x38', 5], ['pin-f30', 12], ['sandpaper', .12]]);
  r('lv-tvback', 175, [['mdf18', .055], ['wpc18', .030], ['veneer', .050], ['contact-adh', .09],
    ['fev-sh', .06], ['pin-f30', 14], ['screw-6x25', 4], ['plug8', 1.5], ['led-strip', .25],
    ['led-profile', .25], ['led-driver', .02], ['pu-paint', .05], ['sandpaper', .10]]);
  r('lv-crock', 260, [['ply19bwp', .075], ['ply12bwp', .028], ['lam1', .080], ['glass8t', .25],
    ['edge2', 1.3], ['contact-adh', .13], ['fev-sh', .09], ['hinge-sc', .30], ['handle-prof', .20],
    ['led-strip', .20], ['led-profile', .20], ['led-driver', .02], ['screw-8x38', 5], ['pin-f30', 12]]);
  r('lv-shoe', 230, [['ply19bwp', .070], ['ply12bwp', .026], ['lam1', .084], ['edge2', 1.3],
    ['contact-adh', .12], ['fev-sh', .085], ['hinge-sc', .30], ['handle-prof', .20],
    ['screw-8x38', 5], ['pin-f30', 12]]);
  r('lv-pooja', 420, [['ply19bwp', .080], ['veneer', .090], ['mdf6', .060], ['contact-adh', .14],
    ['fev-sh', .12], ['pu-paint', .09], ['led-strip', .25], ['led-profile', .25],
    ['led-driver', .02], ['screw-8x38', 6], ['pin-f30', 18], ['sandpaper', .20]]);
  r('lv-bar', 290, [['ply19bwp', .078], ['ply12bwp', .028], ['lam1', .090], ['glass8t', .12],
    ['edge2', 1.4], ['contact-adh', .14], ['fev-sh', .10], ['hinge-sc', .25], ['led-strip', .20],
    ['led-profile', .20], ['screw-8x38', 5], ['pin-f30', 13]]);
  r('lv-part', 260, [['mdf18', .060], ['ms-steel', .6], ['pu-paint', .06], ['contact-adh', .05],
    ['screw-8x38', 4], ['plug8', 1.5], ['sandpaper', .10]]);

  /* ── False ceiling ──────────────────────────────────────────── */
  r('cl-gyp', 26, [['gyp125', .033], ['gi-ceiling', 1.1], ['gi-perimeter', .32],
    ['gi-suspender', 0.35], ['screw-dw25', 5], ['anchor8', 0.35], ['joint-compound', 0.12],
    ['joint-tape', .012], ['wall-putty', 0.35]]);
  r('cl-gypd', 42, [['gyp125', .045], ['gi-ceiling', 1.30], ['gi-perimeter', .45],
    ['gi-suspender', 0.45], ['screw-dw25', 7], ['anchor8', 0.45], ['joint-compound', 0.16],
    ['joint-tape', .018], ['wall-putty', 0.45]]);
  r('cl-pop', 34, [['pop-powder', .06], ['gi-ceiling', 0.9], ['screw-dw25', 10],
    ['anchor8', 0.3], ['joint-tape', .010]]);
  r('cl-cove', 62, [['gyp125', .050], ['gi-ceiling', 1.0], ['screw-dw25', 6],
    ['joint-compound', 0.15], ['wall-putty', 0.4]]);
  r('cl-wpc', 45, [['wpc-ceil-panel', 1.05], ['gi-ceiling', .50], ['screw-dw25', 8], ['silicone', .02]]);
  r('cl-grid', 28, [['grid-tile', 1.02], ['grid-tee', 1.10], ['gi-perimeter', .25], ['anchor8', .50]]);
  r('cl-wood', 120, [['mdf18', .050], ['veneer', .045], ['contact-adh', .08], ['fev-sh', .05],
    ['pin-f30', 12], ['pu-paint', .05], ['gi-ceiling', 0.6], ['screw-dw25', 8]]);

  /* ── Wall finishes ──────────────────────────────────────────── */
  r('wl-emul', 9, [['wall-putty', 0.42], ['primer-wall', 0.008], ['emulsion', 0.014],
    ['sandpaper', .06], ['masking', .004]]);
  r('wl-tex', 45, [['texture-mat', 1], ['primer-wall', .010], ['masking', .010]]);
  r('wl-paper', 34, [['wallpaper-mat', 1.10], ['fev-sh', .03], ['primer-wall', .008]]);
  r('wl-panel', 165, [['mdf18', .050], ['wpc18', .028], ['veneer', .045], ['contact-adh', .08],
    ['fev-sh', .05], ['pin-f30', 14], ['plug8', 1.5], ['screw-6x25', 4], ['pu-paint', .05],
    ['sandpaper', .09]]);
  r('wl-primer', 12, [['wall-putty', 0.3], ['primer-wall', .012], ['ext-emulsion', 0.016], ['sandpaper', .05]]);
  r('wl-acou', 95, [['acoustic-panel', 1.02], ['fev-sh', .03], ['pin-f30', 8], ['screw-6x25', 3]]);

  /* ── Flooring ───────────────────────────────────────────────── */
  r('fl-vit', 35, [['vit-tile', 1.05], ['tile-adh', .030], ['grout', .09], ['spacer', 2.5], ['cement', .01]]);
  r('fl-marble', 95, [['marble-slab', 1.05], ['cement', .05], ['sand', .08], ['grout', .06]]);
  r('fl-gran', 62, [['granite-slab', 1.05], ['cement', .05], ['sand', .08]]);
  r('fl-wood', 45, [['wood-floor', 1.05], ['underlay', 1.05], ['alu-skirt', .10]]);
  r('fl-carpet', 28, [['carpet-tile', 1.05], ['fev-sh', .02]]);
  r('fl-epoxy', 55, [['epoxy-mat', 1.05], ['primer-wall', .010]]);
  r('fl-skirt', 26, [['skirt-mdf', 1.05], ['fev-sh', .02], ['pin-f30', 4], ['pu-paint', .01]]);
  r('fl-water', 24, [['waterproof', .12], ['cement', .02]]);

  /* ── Doors, windows & hardware ──────────────────────────────── */
  r('dr-flush', 850, [['flushdoor32', 1], ['lam1', .60], ['contact-adh', .50], ['edge2', 16],
    ['hinge-butt', 3], ['screw-6x25', 24], ['sandpaper', .60]]);
  r('dr-main', 2400, [['door-veneer-set', 1], ['pu-paint', 1.4], ['hinge-bb', 4],
    ['screw-8x50', 24], ['sandpaper', 2]]);
  r('dr-frame', 95, [['doorframe-sal', 1.05], ['screw-8x50', 1.6], ['plug8', 1.6],
    ['pu-paint', .03], ['sandpaper', .10]]);
  r('dr-lock', 350, [['lock-mortise', 1], ['screw-6x25', 8]]);
  r('dr-handle', 180, [['handle-lever', 1], ['screw-6x25', 6]]);
  r('dr-digital', 900, [['lock-digital', 1], ['screw-6x25', 10]]);
  r('dr-hinge', 45, [['hinge-butt', 1], ['screw-6x25', 6]]);
  r('dr-misc', 90, [['door-hw', 1], ['screw-6x25', 6], ['plug6', 2]]);
  r('wn-upvc', 85, [['upvc-profile', 1], ['glass8t', .55], ['mosquito-mesh', .35],
    ['silicone', .05], ['anchor8', .35]]);
  r('wn-alu', 78, [['alu-section', .55], ['glass8t', .95], ['silicone', .06], ['anchor8', .30]]);
  r('wn-glass', 110, [['glass12t', 1], ['glass-fitting', .12], ['silicone', .06]]);

  /* ── Curtains, blinds & soft furnishing ─────────────────────── */
  r('cu-curtain', 42, [['curtain-fab', 1.15], ['curtain-lining', .90], ['stitch-sundry', 1]]);
  r('cu-track', 55, [['curtain-track', 1.05], ['plug8', 1.2], ['screw-6x25', 2.4]]);
  r('cu-blind', 34, [['blind-fab', 1.05], ['plug6', .6], ['screw-6x25', 1.2]]);
  r('cu-pelmet', 85, [['ply19bwp', .030], ['lam1', .030], ['contact-adh', .05],
    ['pin-f30', 8], ['screw-6x25', 3]]);
  r('sf-uphol', 78, [['uphol-fab', 1.05], ['foam40', 0.6], ['staple10', 26], ['fev-sh', .02]]);
  r('sf-cushion', 180, [['cushion', 1]]);
  r('sf-rug', 12, [['rug', 1]]);
  r('sf-mattress', 0, [['mattress', 1]]);
  r('sf-linen', 0, [['linen-set', 1]]);

  /* ── Lighting & electrical ──────────────────────────────────── */
  r('el-point', 260, [['wire15', .012], ['conduit20', 11], ['mod-box', 1], ['switch-mod', .8],
    ['plug6', 4], ['screw-6x25', 4]]);
  r('el-switch', 180, [['switch-plate', 1], ['switch-mod', 3], ['mod-box', 1], ['screw-6x25', 4]]);
  r('el-db', 1400, [['db-box', 1], ['mcb', 8], ['rccb', 1], ['wire40', .08]]);
  r('lt-cove', 55, [['led-strip', 1], ['led-profile', 1], ['led-driver', .08],
    ['wire15', .004], ['screw-6x25', 2]]);
  r('lt-spot', 140, [['cob-spot', 1], ['wire15', .006], ['screw-6x25', 2]]);
  r('lt-track', 260, [['track-light', 1], ['led-driver', .20], ['screw-6x25', 3], ['plug6', 3]]);
  r('lt-decor', 450, [['deco-light', 1], ['plug8', 3], ['screw-8x38', 3]]);
  r('el-fan', 350, [['fan', 1], ['anchor8', 1]]);
  r('el-ac', 3500, [['ac-split', 1], ['ac-kit', 1], ['anchor8', 4], ['cpvc-fit', 2]]);
  r('el-smart', 900, [['smart-device', 1], ['wire15', .010]]);

  /* ── Bathrooms ──────────────────────────────────────────────── */
  r('bt-wc', 1400, [['wc-unit', 1], ['cistern', 0.5], ['silicone', .30], ['cpvc-fit', 3], ['anchor8', 4]]);
  r('bt-basin', 900, [['basin-unit', 1], ['angle-valve', 2], ['cpvc-fit', 3], ['silicone', .25], ['plug8', 4]]);
  r('bt-cp', 1100, [['cp-set', 1], ['cpvc-fit', 6], ['angle-valve', 2]]);
  r('bt-shower', 1200, [['shower-set', 1], ['cpvc-pipe', 8], ['cpvc-fit', 5]]);
  r('bt-vanity', 280, [['wpc18', .075], ['pvc18', .028], ['lam1', .085], ['edge2', 1.3],
    ['contact-adh', .13], ['fev-marine', .10], ['hinge-sc', .30], ['chan-tele', .10],
    ['handle-prof', .20], ['granite-slab', .35], ['silicone', .05], ['screw-8x38', 5], ['pin-f30', 12]]);
  r('bt-mirror', 450, [['bath-mirror', 1], ['plug8', 4], ['screw-6x25', 4]]);
  r('bt-glass', 130, [['glass12t', 1], ['glass-fitting', .10], ['silicone', .05]]);
  r('bt-tile', 45, [['wall-tile', 1.05], ['tile-adh', .035], ['grout', .11], ['spacer', 3]]);
  r('bt-acc', 180, [['bath-acc', 1], ['plug6', 4], ['screw-6x25', 4]]);
  r('bt-geyser', 700, [['geyser', 1], ['anchor8', 4], ['cpvc-fit', 4], ['angle-valve', 2]]);

  /* ── Loose furniture ────────────────────────────────────────── */
  r('fn-sofa', 0, [['sofa', 1]]);
  r('fn-dining', 0, [['dining-tbl', 1]]);
  r('fn-chair', 0, [['chair', 1]]);
  r('fn-table', 0, [['occ-table', 1]]);
  r('fn-office', 0, [['office-chair', 1]]);

  /* ── Office & commercial ────────────────────────────────────── */
  r('of-ws', 2200, [['prelam18', .90], ['ws-system', 1], ['edge2', 34], ['screw-8x38', 40],
    ['chan-tele', 3], ['handle-ss', 3], ['minifix', 24]]);
  r('of-cabin', 9500, [['ply19bwp', 5.5], ['veneer', 2.2], ['lam1', 1.6], ['edge2', 90],
    ['contact-adh', 6], ['fev-sh', 4.5], ['pu-paint', 4], ['chan-tele', 6], ['hinge-sc', 8],
    ['handle-prof', 12], ['screw-8x50', 120], ['pin-f30', 500]]);
  r('of-conf', 7000, [['ply19bwp', 4.2], ['veneer', 1.8], ['lam1', 1.2], ['edge2', 60],
    ['contact-adh', 4.5], ['fev-sh', 3.2], ['pu-paint', 3.2], ['ms-steel', 28],
    ['power-hub', 1], ['screw-8x50', 90], ['pin-f30', 380]]);
  r('of-recep', 6000, [['ply19bwp', 3.4], ['corian-sheet', 22], ['veneer', 1.2],
    ['contact-adh', 3.2], ['fev-sh', 2.4], ['pu-paint', 2.2], ['led-strip', 14],
    ['led-profile', 14], ['led-driver', 1.2], ['signage-mat', 6], ['screw-8x50', 70], ['pin-f30', 300]]);
  r('of-storage', 230, [['prelam18', .075], ['ply12bwp', .024], ['lam1', .060], ['edge2', 1.3],
    ['contact-adh', .10], ['fev-sh', .08], ['hinge-sc', .30], ['handle-ss', .30],
    ['screw-8x38', 5], ['pin-f30', 12]]);
  r('of-booth', 6500, [['pod', 1]]);
  r('of-signage', 180, [['signage-mat', 1], ['led-strip', .40], ['led-driver', .05],
    ['screw-6x25', 4], ['plug6', 4]]);

  /* ── Civil & preparatory ────────────────────────────────────── */
  r('cv-demo', 40, [['debris', 1]]);
  r('cv-brick', 55, [['brick', 5.5], ['cement', .06], ['sand', .12]]);
  r('cv-plaster', 20, [['cement', .035], ['sand', .10]]);
  r('cv-plumb', 1100, [['cpvc-pipe', 14], ['cpvc-fit', 8], ['pvc-drain', 3], ['cement', .06]]);
  r('cv-mstruct', 55, [['ms-steel', 1], ['welding', .06], ['enamel', .012], ['primer-wood', .008]]);
  r('cv-mirror', 90, [['mirror5', 1], ['mdf6', .03], ['fev-sh', .03], ['silicone', .04]]);

  /* ── Surfaces bought loose ──────────────────────────────────── */
  r('sr-lam', 0, [['lam1', 1]]);
  r('sr-ven', 0, [['veneer', 1]]);
  r('sr-acr', 0, [['acrylic', 1]]);
  r('sr-corian', 260, [['corian-sheet', 1], ['pu-adh', .05]]);

  /* ── Fees carry no material ─────────────────────────────────── */
  r('fe-design', 0, []);
  r('fe-3d', 0, [['3d-render', 1]]);
  r('fe-pm', 0, []);
  r('fe-turnkey', 0, []);

  /* ── Substitutions ───────────────────────────────────────────────
     A recipe describes the DEFAULT build. The specification chosen on a
     line changes what is actually bought: BWR instead of BWP, acrylic
     instead of laminate, a PU finish instead of a laminate one. Without
     this the take-off would order plywood for a job specified in WPC.

     Keyed by the exact option text in the catalogue, so a spec option
     and its substitution cannot drift apart silently — the validator
     below fails on any key that is not a real option.

       swap  replace one material with another, keeping the quantity
       add   add a material at this quantity per unit of the item
       drop  remove a material this specification does not use          */
  const SUBS = {
    /* Carcass */
    'BWR plywood — 19mm': [['swap', 'ply19bwp', 'ply19bwr'], ['swap', 'ply12bwp', 'ply12bwr']],
    'HDHMR board — 18mm': [['swap', 'ply19bwp', 'hdhmr18'], ['swap', 'ply12bwp', 'mdf12']],
    'MDF — 18mm': [['swap', 'ply19bwp', 'mdf18'], ['swap', 'ply12bwp', 'mdf12']],
    'WPC board — 18mm': [['swap', 'ply19bwp', 'wpc18'], ['swap', 'ply12bwp', 'mdf12']],
    'PVC board — 18mm': [['swap', 'ply19bwp', 'pvc18'], ['swap', 'ply12bwp', 'pvc18']],
    'Pre-laminated particle board — 18mm': [['swap', 'ply19bwp', 'prelam18'],
      ['swap', 'ply12bwp', 'prelam18'], ['drop', 'lam1'], ['drop', 'contact-adh']],
    'BWP plywood 710 — 12mm': [['swap', 'ply19bwp', 'ply12bwp']],
    'Marine ply BWP': [['swap', 'ply19bwp', 'ply19bwp']],
    'Stainless steel': [['swap', 'ply19bwp', 'ms-steel'], ['drop', 'lam1'], ['drop', 'contact-adh']],

    /* Shutter & surface finish */
    'Laminate 0.8mm': [['swap', 'lam1', 'lam08']],
    'Acrylic high gloss (Senosan / Rehau)': [['swap', 'lam1', 'acrylic'], ['add', 'edge08', 1.2]],
    'High gloss': [['swap', 'lam1', 'acrylic']],
    'PU matt finish': [['drop', 'lam1'], ['drop', 'contact-adh'],
      ['add', 'mdf6', .06], ['add', 'primer-wood', .03], ['add', 'pu-paint', .06], ['add', 'sandpaper', .20]],
    'PU high gloss': [['drop', 'lam1'], ['drop', 'contact-adh'],
      ['add', 'mdf6', .06], ['add', 'primer-wood', .04], ['add', 'pu-paint', .08], ['add', 'sandpaper', .28]],
    'Duco paint': [['drop', 'lam1'], ['drop', 'contact-adh'],
      ['add', 'mdf6', .06], ['add', 'primer-wood', .03], ['add', 'duco', .07], ['add', 'sandpaper', .22]],
    'Membrane / PVC foil': [['swap', 'lam1', 'membrane'], ['swap', 'ply19bwp', 'mdf18']],
    'Membrane': [['swap', 'lam1', 'membrane']],
    'Natural veneer + melamine': [['swap', 'lam1', 'veneer'], ['add', 'melamine', .05], ['add', 'sandpaper', .18]],
    'Natural veneer + PU': [['swap', 'lam1', 'veneer'], ['add', 'pu-paint', .06], ['add', 'sandpaper', .20]],
    'Veneer + PU': [['swap', 'lam1', 'veneer'], ['add', 'pu-paint', .06]],
    'Lacquered glass': [['swap', 'lam1', 'lacglass']],
    'Glass + aluminium profile': [['swap', 'lam1', 'glass8t'], ['add', 'alu-section', .05]],
    'Melamine': [['add', 'melamine', .05]],

    /* Cabinet hardware */
    'Ordinary auto-close': [['swap', 'hinge-sc', 'hinge-ord']],
    'Hettich tandem box soft close': [['swap', 'chan-tele', 'chan-tandem']],
    'Hafele tandem box': [['swap', 'chan-tele', 'chan-tandem']],
    'Ball bearing channel': [['swap', 'chan-tele', 'chan-ball']],
    'Roller channel': [['swap', 'chan-tele', 'chan-ball']],
    'SS cabinet handle 4"': [['swap', 'handle-prof', 'handle-ss'], ['swap', 'handle-prof', 'handle-ss']],
    'SS cabinet handle 8"': [['swap', 'handle-prof', 'handle-ss']],
    'Knob': [['swap', 'handle-prof', 'knob'], ['swap', 'handle-lever', 'knob']],
    'Push-to-open (no handle)': [['drop', 'handle-prof']],
    'Leather pull': [['swap', 'handle-prof', 'handle-ss']],
    'Brass antique handle': [['swap', 'handle-prof', 'handle-ss']],

    /* Counters & stone */
    'Quartz (Caesarstone / Kalinga)': [['swap', 'granite-slab', 'quartz-slab']],
    'Quartz': [['swap', 'granite-slab', 'quartz-slab']],
    'Italian marble': [['swap', 'granite-slab', 'marble-slab']],
    'Marble': [['swap', 'granite-slab', 'marble-slab']],
    'Corian / solid surface': [['swap', 'granite-slab', 'corian-sheet']],
    'Corian': [['swap', 'granite-slab', 'corian-sheet']],
    'Tile clad': [['swap', 'granite-slab', 'wall-tile'], ['add', 'tile-adh', .04]],

    /* Paint */
    'Asian Paints Royale': [['swap', 'emulsion', 'emulsion-lux']],
    'Asian Paints Royale Aspira': [['swap', 'emulsion', 'emulsion-lux']],
    'Dulux Velvet Touch': [['swap', 'emulsion', 'emulsion-lux']],

    /* Doors, frames & ironmongery */
    'WPC frame': [['swap', 'doorframe-sal', 'doorframe-wpc']],
    'Solid core WPC': [['swap', 'flushdoor32', 'wpc18']],
    'PVC door': [['swap', 'flushdoor32', 'pvc18']],
    'Pull handle 12"': [['swap', 'handle-lever', 'handle-pull']],
    'Pull handle 24"': [['swap', 'handle-lever', 'handle-pull']],
    'Pull handle 36"': [['swap', 'handle-lever', 'handle-pull']],
    'Ball bearing hinge': [['swap', 'hinge-butt', 'hinge-bb']],
    'SS butt hinge 5"': [['swap', 'hinge-butt', 'hinge-bb']],
    'Door seal / gasket': [['add', 'door-seal', 3]],

    /* Civil */
    'AAC block 4"': [['swap', 'brick', 'aac-block'], ['add', 'brick', -4.5]],
    '9" brick wall': [['add', 'brick', 5.5], ['add', 'cement', .04]],

    /* Electrical */
    '16A socket': [['swap', 'wire15', 'wire25'], ['swap', 'conduit20', 'conduit25']],
    'AC point': [['swap', 'wire15', 'wire40'], ['swap', 'conduit20', 'conduit25']],
    'Geyser point': [['swap', 'wire15', 'wire25'], ['swap', 'conduit20', 'conduit25']],

    /* Bathroom */
    'Floor drain / grating': [['add', 'floor-drain', 1]],
    'Frameless 12mm toughened': [['swap', 'glass8t', 'glass12t']],
    'Double glazed with blinds': [['swap', 'glass12t', 'glass-part']]
  };

  /* ── Workshop consumables ────────────────────────────────────────
     A blade, a litre of thinner, a kilo of filler and a bag of cotton
     waste belong to no single line — a workshop burns them in
     proportion to how much joinery it is making. Forcing them into
     every recipe would be a fiction; leaving them out would mean the
     take-off under-orders every time.

     So they are carried on the joinery material value, per ₹1,000 of
     it, and they only appear once there is joinery to make. */
  const CONSUMABLE_BASE = ['Boards & sheets', 'Surfacing & edging'];
  const CONSUMABLES = [
    ['blade', 0.010], ['thinner', 0.022], ['cotton-waste', 0.030], ['wood-filler', 0.038],
    ['nail-1', 0.012], ['nail-2', 0.010], ['pin-panel', 0.014], ['dowel', 0.55],
    ['corner-brk', 0.22], ['screw-dw41', 1.10], ['acrylic-seal', 0.020],
    ['ply6bwp', 0.011], ['cemboard', 0.004]
  ];

  return { MATERIALS, RECIPES: R, WASTAGE, SUBS, CONSUMABLES, CONSUMABLE_BASE };
})();
