/* ═══════════════════════════════════════════════════════════════════
   Radhe Design Studio — material & works catalogue
   ═══════════════════════════════════════════════════════════════════
   Every line a quotation can carry lives here: what it is, how it is
   measured, what it costs to start from, and the specification choices
   that have to be made before it can be ordered.

   RATES ARE STARTING DEFAULTS for the Ahmedabad market, not a price
   list. They are meant to be edited — the Catalogue screen writes your
   own rates over these and keeps them, and a quotation stores the rate
   it was made with, so re-pricing the catalogue never silently rewrites
   a quotation already sent.

   Unit conventions used through the trade here:
     Sq.ft   carcass and shutter area, ceilings, flooring, painting
     R.ft    anything measured along a run — counters, cornice, skirting
     Nos     countable pieces — handles, lights, sanitaryware
     Set     a fitted assembly quoted as one — a hob + chimney, a lock set
     Job     a scope quoted whole — a design fee, a civil scope
   ═══════════════════════════════════════════════════════════════════ */

window.RDS_CATALOGUE = (function () {
  const UNITS = ['Sq.ft', 'R.ft', 'Nos', 'Set', 'Pair', 'Sq.m', 'Litre', 'Kg', 'Job', 'Lump sum'];

  /* Carcass, shutter and hardware choices recur across every joinery
     item, so they are written once and referenced by name. */
  const CARCASS = ['BWP plywood 710 — 19mm', 'BWP plywood 710 — 12mm', 'BWR plywood — 19mm',
    'HDHMR board — 18mm', 'MDF — 18mm', 'WPC board — 18mm', 'PVC board — 18mm',
    'Pre-laminated particle board — 18mm'];

  const SHUTTER = ['Laminate 1mm (Merino / Greenlam / Century)', 'Laminate 0.8mm',
    'Acrylic high gloss (Senosan / Rehau)', 'PU matt finish', 'PU high gloss',
    'Membrane / PVC foil', 'Natural veneer + melamine', 'Natural veneer + PU',
    'Lacquered glass', 'Fluted / louvered profile', 'Duco paint', 'Glass + aluminium profile'];

  const HINGE = ['Hettich soft close', 'Hafele soft close', 'Ebco soft close', 'Blum soft close',
    'Godrej soft close', 'Ordinary auto-close'];

  const CHANNEL = ['Hettich tandem box soft close', 'Hettich telescopic soft close',
    'Hafele tandem box', 'Ebco telescopic soft close', 'Ball bearing channel', 'Roller channel'];

  const HANDLE = ['Profile / G-profile (concealed)', 'Gola profile', 'SS cabinet handle 4"',
    'SS cabinet handle 8"', 'Brass antique handle', 'Leather pull', 'Knob', 'Push-to-open (no handle)'];

  const EDGE = ['PVC edge band 2mm', 'PVC edge band 0.8mm', 'Acrylic edge band', 'Aluminium lipping'];

  const g = (id, name, note, items) => ({ id, name, note, items });
  const i = (id, name, unit, rate, specs, note) => ({ id, name, unit, rate, specs: specs || [], note });
  const s = (label, options) => ({ label, options });

  const groups = [

    /* ══ 1 · MODULAR KITCHEN ════════════════════════════════════ */
    g('kitchen', 'Modular kitchen', 'Carcass and shutter measured on elevation area; counters on running feet.', [
      i('kit-base', 'Base unit', 'Sq.ft', 1450, [
        s('Carcass', CARCASS), s('Shutter finish', SHUTTER), s('Hinges', HINGE),
        s('Drawer channels', CHANNEL), s('Handle', HANDLE), s('Edge band', EDGE)
      ]),
      i('kit-wall', 'Wall unit', 'Sq.ft', 1350, [
        s('Carcass', CARCASS), s('Shutter finish', SHUTTER), s('Hinges', HINGE),
        s('Lift-up system', ['Hettich lift-up', 'Hafele lift-up', 'Gas lift', 'Side hinge (none)']),
        s('Handle', HANDLE)
      ]),
      i('kit-tall', 'Tall unit / larder', 'Sq.ft', 1650, [
        s('Carcass', CARCASS), s('Shutter finish', SHUTTER), s('Hinges', HINGE),
        s('Internals', ['Tall unit pullout (Hettich)', 'Tall unit pullout (Hafele)', 'Fixed shelves', 'Wicker baskets'])
      ]),
      i('kit-loft', 'Loft / overhead storage', 'Sq.ft', 1150, [s('Carcass', CARCASS), s('Shutter finish', SHUTTER)]),
      i('kit-counter', 'Countertop', 'R.ft', 1200, [
        s('Material', ['Granite — black galaxy', 'Granite — steel grey', 'Granite — local', 'Quartz (Caesarstone / Kalinga)',
          'Italian marble', 'Corian / solid surface', 'Stainless steel', 'Tile clad']),
        s('Edge profile', ['Bullnose', 'Half bullnose', 'Mitred 40mm', 'Pencil', 'Square']),
        s('Thickness', ['18mm', '20mm', 'Mitred to 40mm', 'Mitred to 60mm'])
      ]),
      i('kit-splash', 'Backsplash / dado', 'Sq.ft', 320, [
        s('Material', ['Ceramic tile', 'Vitrified tile', 'Toughened lacquered glass', 'Quartz slab', 'Granite slab', 'Mosaic'])
      ]),
      i('kit-sink', 'Sink', 'Nos', 9500, [
        s('Type', ['SS single bowl', 'SS single bowl + drainboard', 'SS double bowl', 'Quartz / granite composite', 'Undermount SS', 'Farmhouse']),
        s('Brand', ['Franke', 'Nirali', 'Carysil', 'Kohler', 'Hindware', 'Futura', 'Local'])
      ]),
      i('kit-faucet', 'Kitchen faucet', 'Nos', 6500, [
        s('Type', ['Single lever swan neck', 'Pull-out spray', 'Sensor', 'Wall mounted', 'Table mounted']),
        s('Brand', ['Jaquar', 'Kohler', 'Grohe', 'Cera', 'Hindware', 'Parryware'])
      ]),
      i('kit-chimney', 'Chimney', 'Nos', 24000, [
        s('Type', ['Auto-clean 60cm', 'Auto-clean 90cm', 'Filterless 90cm', 'Island', 'Built-in / concealed']),
        s('Brand', ['Elica', 'Faber', 'Glen', 'Hindware', 'Bosch', 'Kaff']),
        s('Suction', ['1000 m³/hr', '1200 m³/hr', '1500 m³/hr'])
      ]),
      i('kit-hob', 'Hob', 'Nos', 18000, [
        s('Type', ['3 burner', '4 burner', '5 burner', 'Induction', 'Domino']),
        s('Brand', ['Elica', 'Faber', 'Glen', 'Bosch', 'Kaff', 'Prestige']),
        s('Top', ['Toughened glass', 'Stainless steel'])
      ]),
      i('kit-acc', 'Kitchen accessory', 'Nos', 4200, [
        s('Accessory', ['Cutlery tray', 'Bottle pullout', 'Oil pullout', 'Corner carousel', 'Magic corner',
          'Le-Mans corner', 'Plate rack', 'Wicker basket', 'Detergent holder', 'Waste bin (pullout)',
          'Thali basket', 'Grain trolley', 'Cup & saucer basket', 'Pantry pullout']),
        s('Brand', ['Hettich', 'Hafele', 'Ebco', 'Sleek', 'Godrej', 'Local SS'])
      ]),
      i('kit-profile', 'Under-cabinet profile light', 'R.ft', 380, [
        s('Type', ['Aluminium profile + LED strip', 'Sensor profile light', 'Surface LED batten'])
      ]),
      i('kit-appl', 'Built-in appliance', 'Nos', 32000, [
        s('Appliance', ['Built-in oven', 'Microwave', 'Dishwasher', 'Refrigerator (built-in)', 'Wine chiller', 'Coffee machine']),
        s('Brand', ['Bosch', 'Siemens', 'Faber', 'Elica', 'IFB', 'Samsung', 'LG'])
      ])
    ]),

    /* ══ 2 · WARDROBES & BEDROOM JOINERY ═══════════════════════ */
    g('wardrobe', 'Wardrobes & bedroom joinery', 'Measured on shutter elevation area, floor to loft.', [
      i('wd-open', 'Openable wardrobe', 'Sq.ft', 1400, [
        s('Carcass', CARCASS), s('Shutter finish', SHUTTER), s('Hinges', HINGE),
        s('Handle', HANDLE), s('Internals', ['Standard shelves + hanging', 'Drawers + hanging + shelves',
          'Full hanging', 'Shelves only', 'Custom layout'])
      ]),
      i('wd-slide', 'Sliding wardrobe', 'Sq.ft', 1700, [
        s('Carcass', CARCASS), s('Shutter finish', SHUTTER),
        s('Sliding system', ['Hettich SlideLine', 'Hafele sliding', 'Ebco sliding', 'Aluminium profile track', 'Bottom roller']),
        s('Shutter panels', ['2 panel', '3 panel', '4 panel'])
      ]),
      i('wd-walkin', 'Walk-in wardrobe / open system', 'Sq.ft', 1900, [
        s('Carcass', CARCASS), s('Finish', SHUTTER),
        s('System', ['Open modular with profile lights', 'Glass shutter modules', 'Mixed open + shuttered'])
      ]),
      i('wd-int', 'Wardrobe internal accessory', 'Nos', 3800, [
        s('Accessory', ['Trouser rack', 'Tie & belt rack', 'Pullout drawer unit', 'Mirror (fitted)', 'Safe locker',
          'Pullout basket', 'Hanging rod with light', 'Ironing board (fold)', 'Shoe rack pullout', 'Jewellery insert']),
        s('Brand', ['Hettich', 'Hafele', 'Ebco', 'Local'])
      ]),
      i('wd-loft', 'Wardrobe loft', 'Sq.ft', 1150, [s('Carcass', CARCASS), s('Shutter finish', SHUTTER)]),
      i('bed-unit', 'Bed', 'Nos', 46000, [
        s('Size', ['King 6×6.5', 'Queen 5×6.5', 'Single 3×6', 'Custom']),
        s('Storage', ['Hydraulic lift storage', 'Box storage (drawer)', 'No storage']),
        s('Headboard', ['Upholstered', 'Veneer + PU', 'Laminate', 'Fluted panel', 'Cane / rattan']),
        s('Carcass', CARCASS)
      ]),
      i('bed-side', 'Bedside table', 'Nos', 9500, [s('Finish', SHUTTER), s('Type', ['Floating', 'Floor standing', 'With drawers'])]),
      i('bed-dress', 'Dresser / vanity unit', 'Sq.ft', 1450, [s('Carcass', CARCASS), s('Finish', SHUTTER),
        s('Mirror', ['Plain mirror', 'LED backlit mirror', 'Beveled mirror', 'No mirror'])]),
      i('bed-study', 'Study / work table', 'Sq.ft', 1350, [s('Carcass', CARCASS), s('Finish', SHUTTER),
        s('Top', ['Laminate', 'Veneer + PU', 'Quartz', 'Solid wood'])])
    ]),

    /* ══ 3 · LIVING, TV & STORAGE JOINERY ══════════════════════ */
    g('living', 'Living, TV & storage joinery', null, [
      i('lv-tv', 'TV unit — lower storage', 'Sq.ft', 1500, [
        s('Carcass', CARCASS), s('Finish', SHUTTER), s('Handle', HANDLE), s('Channels', CHANNEL)
      ]),
      i('lv-tvback', 'TV back panelling', 'Sq.ft', 950, [
        s('Finish', ['WPC louvers', 'Charcoal fluted panel', 'Veneer + PU', 'Laminate', 'PU groove panel',
          'Stone cladding', 'Italian marble', 'Textured paint', 'Mirror + panel', 'Fabric acoustic panel']),
        s('Lighting', ['Concealed profile light', 'Cove light', 'Spot lights', 'None'])
      ]),
      i('lv-crock', 'Crockery / display unit', 'Sq.ft', 1550, [
        s('Carcass', CARCASS), s('Finish', SHUTTER),
        s('Shutters', ['Glass + profile', 'Solid', 'Open shelves', 'Mixed']),
        s('Lighting', ['Profile light per shelf', 'Spot light', 'None'])
      ]),
      i('lv-shoe', 'Shoe rack / foyer unit', 'Sq.ft', 1350, [s('Carcass', CARCASS), s('Finish', SHUTTER),
        s('Internals', ['Shoe rack pullout', 'Fixed shelves', 'Bench + storage'])]),
      i('lv-pooja', 'Pooja unit', 'Sq.ft', 1900, [
        s('Material', ['Solid teak carved', 'Sheesham wood', 'Marble', 'Ply + veneer + PU', 'Corian backlit', 'Brass inlay']),
        s('Features', ['Jali panel + backlight', 'Drawer for samagri', 'Bell hanging', 'Doors', 'Open'])
      ]),
      i('lv-bar', 'Bar unit', 'Sq.ft', 1750, [s('Carcass', CARCASS), s('Finish', SHUTTER),
        s('Features', ['Wine rack', 'Glass hanger', 'Backlit bottle display', 'Mini fridge cutout'])]),
      i('lv-part', 'Partition / jali screen', 'Sq.ft', 1250, [
        s('Material', ['MS + wood', 'CNC cut MDF', 'WPC jali', 'Brass / SS rods', 'Glass + profile', 'Solid wood slats'])
      ])
    ]),

    /* ══ 4 · FALSE CEILING ═════════════════════════════════════ */
    g('ceiling', 'False ceiling', 'Measured on plan area; cornice and coves on running feet.', [
      i('cl-gyp', 'Gypsum false ceiling — plain', 'Sq.ft', 85, [
        s('Board', ['Gyproc / Saint-Gobain', 'India Gypsum', 'USG Boral']),
        s('Framing', ['GI channel (Gyproc)', 'GI channel (local)', 'Wooden batten']),
        s('Finish', ['2 coat putty ready for paint', 'Putty + primer'])
      ]),
      i('cl-gypd', 'Gypsum false ceiling — designed / multi-level', 'Sq.ft', 130, [
        s('Design', ['Single drop with cove', 'Two level', 'Curved / island', 'Coffered', 'Floating panel']),
        s('Board', ['Gyproc / Saint-Gobain', 'India Gypsum', 'USG Boral'])
      ]),
      i('cl-pop', 'POP false ceiling', 'Sq.ft', 95, [s('Type', ['Plain', 'Designed', 'Cornice work'])]),
      i('cl-cove', 'Cove / pelmet box', 'R.ft', 210, [s('Type', ['Gypsum cove', 'POP cove', 'Wooden pelmet', 'Profile channel cove'])]),
      i('cl-wpc', 'WPC / PVC panel ceiling', 'Sq.ft', 165, [s('Finish', ['Wood grain', 'Solid colour', 'Louver profile'])]),
      i('cl-grid', 'Grid ceiling (office)', 'Sq.ft', 110, [
        s('Tile', ['Mineral fibre (Armstrong)', 'Gypsum tile', 'Metal tile', 'Acoustic tile']),
        s('Grid', ['T-grid exposed 24mm', 'Concealed grid'])
      ]),
      i('cl-wood', 'Wooden / veneer ceiling feature', 'Sq.ft', 480, [
        s('Finish', ['Veneer + PU', 'Solid wood rafter', 'Fluted WPC', 'Laminate'])
      ])
    ]),

    /* ══ 5 · WALL FINISHES & PAINTING ══════════════════════════ */
    g('walls', 'Wall finishes & painting', null, [
      i('wl-emul', 'Interior emulsion painting', 'Sq.ft', 26, [
        s('Paint', ['Asian Paints Royale', 'Asian Paints Royale Aspira', 'Asian Paints Apcolite', 'Berger Silk',
          'Nerolac Impressions', 'Dulux Velvet Touch', 'Indigo']),
        s('Sheen', ['Matt', 'Soft sheen', 'Silk / satin', 'Gloss']),
        s('Preparation', ['2 coat putty + primer + 2 coat paint', '1 coat putty + primer + 2 coat', 'Repaint over existing'])
      ]),
      i('wl-tex', 'Texture / designer finish', 'Sq.ft', 130, [
        s('Finish', ['Royale Play texture', 'Stucco', 'Venetian plaster', 'Lime plaster', 'Metallic',
          'Concrete finish', 'Sand texture', 'Stencil'])
      ]),
      i('wl-paper', 'Wallpaper', 'Sq.ft', 145, [
        s('Type', ['Imported vinyl', 'Non-woven', 'Customised digital print', 'Fabric backed', 'Peel & stick']),
        s('Includes', ['Material + adhesive + labour', 'Labour only (material by client)'])
      ]),
      i('wl-panel', 'Wall panelling', 'Sq.ft', 780, [
        s('Material', ['WPC fluted panel', 'Charcoal louvers', 'PU groove MDF', 'Veneer + PU', 'Laminate',
          'Fabric upholstered', 'Mirror + beading', 'Stone / marble cladding', 'Cane / rattan']),
        s('Beading', ['Aluminium profile', 'PU beading', 'None'])
      ]),
      i('wl-primer', 'Exterior painting', 'Sq.ft', 34, [
        s('Paint', ['Apex Ultima', 'Apex', 'Berger Weathercoat', 'Nerolac Excel']),
        s('Preparation', ['Putty + primer + 2 coat', 'Primer + 2 coat'])
      ]),
      i('wl-acou', 'Acoustic wall treatment', 'Sq.ft', 420, [
        s('Type', ['Fabric wrapped panel', 'Polyester fibre panel', 'Perforated MDF', 'Wooden slat acoustic'])
      ])
    ]),

    /* ══ 6 · FLOORING ══════════════════════════════════════════ */
    g('floor', 'Flooring & skirting', 'Material plus laying unless noted otherwise.', [
      i('fl-vit', 'Vitrified tile flooring', 'Sq.ft', 145, [
        s('Brand', ['Kajaria', 'Somany', 'Nitco', 'Simpolo', 'Varmora', 'Asian Granito', 'Johnson']),
        s('Size', ['600×600', '800×800', '600×1200', '800×1600', '1200×1800 (slab)']),
        s('Finish', ['Glossy', 'Matt', 'Carving', 'Wood finish', 'Double charge', 'GVT / PGVT']),
        s('Scope', ['Material + laying', 'Laying only'])
      ]),
      i('fl-marble', 'Marble flooring', 'Sq.ft', 420, [
        s('Stone', ['Italian marble', 'Statuario', 'Makrana', 'Ambaji', 'Katni', 'Banswara', 'Onyx']),
        s('Scope', ['Material + laying + polish', 'Laying + polish only'])
      ]),
      i('fl-gran', 'Granite flooring', 'Sq.ft', 260, [s('Stone', ['Black galaxy', 'Steel grey', 'Tan brown', 'Local'])]),
      i('fl-wood', 'Wooden flooring', 'Sq.ft', 320, [
        s('Type', ['Laminate 8mm (AC4)', 'Laminate 12mm (AC5)', 'Engineered wood', 'SPC click', 'Vinyl plank', 'Solid teak']),
        s('Brand', ['Pergo', 'Action Tesa', 'Greenlam Clicksters', 'Square Foot', 'Welspun', 'Local'])
      ]),
      i('fl-carpet', 'Carpet / carpet tile', 'Sq.ft', 180, [
        s('Type', ['Carpet tile 500×500', 'Broadloom carpet', 'Nylon loop pile', 'Wall to wall'])
      ]),
      i('fl-epoxy', 'Epoxy / IPS flooring', 'Sq.ft', 190, [s('Type', ['Self-levelling epoxy', 'Epoxy coating', 'IPS with groove', 'Micro-topping'])]),
      i('fl-skirt', 'Skirting', 'R.ft', 95, [
        s('Material', ['Matching tile', 'Granite', 'Marble', 'MDF + PU (75mm)', 'PVC', 'Aluminium groove skirting', 'Shadow gap'])
      ]),
      i('fl-water', 'Waterproofing', 'Sq.ft', 85, [
        s('System', ['Dr. Fixit membrane', 'Asian Paints SmartCare', 'Fosroc', 'Brick bat coba', 'PU coating'])
      ])
    ]),

    /* ══ 7 · DOORS, WINDOWS & HARDWARE ═════════════════════════ */
    g('doors', 'Doors, windows & hardware', 'Shutters by area or piece; ironmongery by piece or set.', [
      i('dr-flush', 'Internal door shutter', 'Nos', 9500, [
        s('Core', ['Flush door (BWP)', 'Flush door (BWR)', 'Solid core WPC', 'PVC door', 'HDF moulded']),
        s('Finish', ['Laminate both sides', 'Membrane', 'Veneer + PU', 'Duco paint', 'Pre-laminated']),
        s('Size', ['32"×82"', '36"×84"', '30"×80"', 'Custom'])
      ]),
      i('dr-main', 'Main door', 'Nos', 42000, [
        s('Type', ['Solid teak carved', 'Teak veneer + PU', 'Engineered door + veneer', 'Steel security door',
          'Double leaf', 'Pivot door']),
        s('Finish', ['Melamine', 'PU matt', 'PU gloss', 'Natural polish'])
      ]),
      i('dr-frame', 'Door frame / chowkhat', 'R.ft', 420, [
        s('Material', ['Sal wood', 'Teak wood', 'WPC frame', 'Granite frame', 'MS frame', 'Aluminium'])
      ]),
      i('dr-lock', 'Mortise lock set', 'Set', 4800, [
        s('Brand', ['Godrej', 'Yale', 'Dorset', 'Europa', 'Hettich', 'Hafele', 'Ozone']),
        s('Type', ['Mortise with both side key', 'Baby latch', 'Bathroom lock', 'Dead bolt', 'Privacy lock'])
      ]),
      i('dr-handle', 'Door handle', 'Pair', 2600, [
        s('Style', ['Lever on rose', 'Lever on plate', 'Pull handle 12"', 'Pull handle 24"', 'Pull handle 36"',
          'Knob', 'Flush pull (sliding)']),
        s('Finish', ['Stainless steel satin', 'Matt black', 'Antique brass', 'Rose gold', 'Chrome', 'Gun metal', 'Brushed gold']),
        s('Brand', ['Godrej', 'Yale', 'Dorset', 'Europa', 'Hafele', 'Hettich', 'Ozone', 'Enox'])
      ]),
      i('dr-digital', 'Digital / smart lock', 'Nos', 18500, [
        s('Brand', ['Yale', 'Godrej', 'Qubo', 'Hafele', 'Dorset', 'Ozone']),
        s('Access', ['Fingerprint + PIN + card + key', 'Fingerprint + PIN', 'Wi-Fi / app enabled', 'Face recognition'])
      ]),
      i('dr-hinge', 'Door hinge', 'Nos', 320, [
        s('Type', ['SS butt hinge 4"', 'SS butt hinge 5"', 'Ball bearing hinge', 'Concealed hinge', 'Pivot hinge']),
        s('Finish', ['SS satin', 'Matt black', 'Antique brass'])
      ]),
      i('dr-misc', 'Door ironmongery', 'Nos', 850, [
        s('Item', ['Tower bolt', 'Aldrop', 'Door closer', 'Floor spring', 'Magnetic door catcher', 'Door stopper',
          'Peephole / door viewer', 'Safety chain', 'Kick plate', 'Letter plate', 'Door seal / gasket']),
        s('Brand', ['Godrej', 'Dorset', 'Ozone', 'Hafele', 'Europa', 'Local'])
      ]),
      i('wn-upvc', 'UPVC window', 'Sq.ft', 620, [
        s('Brand', ['Fenesta', 'Aparna Venster', 'Encraft', 'Prominance', 'Local profile']),
        s('Type', ['2 track sliding', '3 track sliding', 'Casement', 'Tilt & turn', 'Fixed']),
        s('Glass', ['5mm clear', '5mm toughened', 'Double glazed (DGU)', 'Frosted', 'Tinted', 'Laminated']),
        s('Mesh', ['With mosquito mesh', 'Without mesh'])
      ]),
      i('wn-alu', 'Aluminium window / glazing', 'Sq.ft', 540, [
        s('System', ['Jindal slimline', 'Domal section', 'Slim profile (minimal)', 'Structural glazing']),
        s('Glass', ['6mm toughened', '8mm toughened', '12mm toughened', 'DGU', 'Laminated'])
      ]),
      i('wn-glass', 'Glass partition', 'Sq.ft', 720, [
        s('Type', ['Frameless 12mm toughened', 'Aluminium framed', 'Double glazed with blinds', 'Fluted glass', 'Wired / reeded']),
        s('Film', ['None', 'Frosted film', 'Digital print film', 'Switchable smart glass'])
      ])
    ]),

    /* ══ 8 · CURTAINS, BLINDS & SOFT FURNISHING ════════════════ */
    g('soft', 'Curtains, blinds & soft furnishings', 'Curtains measured on finished fabric area; blinds on opening area.', [
      i('cu-curtain', 'Curtains', 'Sq.ft', 210, [
        s('Fabric', ['Cotton', 'Linen', 'Cotton-linen blend', 'Velvet', 'Jacquard', 'Silk / faux silk',
          'Sheer / net', 'Blackout fabric', 'Printed', 'Embroidered']),
        s('Lining', ['Blackout lining', 'Dim-out lining', 'Cotton lining', 'No lining']),
        s('Heading', ['Eyelet', 'Pinch pleat (French)', 'Pencil pleat', 'Ripple fold / wave', 'Tab top', 'Rod pocket']),
        s('Layers', ['Sheer + main', 'Main only', 'Sheer only', 'Triple layer']),
        s('Scope', ['Fabric + stitching + installation', 'Stitching + installation only'])
      ]),
      i('cu-track', 'Curtain track / rod', 'R.ft', 320, [
        s('Type', ['Aluminium track (manual)', 'Motorised track', 'SS rod 25mm', 'Wooden rod', 'Ceiling recessed track']),
        s('Motor', ['Somfy', 'Dooya', 'Zemismart', 'Not motorised'])
      ]),
      i('cu-blind', 'Blinds', 'Sq.ft', 180, [
        s('Type', ['Roller blind', 'Zebra / duo blind', 'Roman blind', 'Venetian (aluminium)', 'Venetian (wooden)',
          'Vertical blind', 'Honeycomb / cellular', 'Bamboo / chick']),
        s('Fabric', ['Sunscreen 3%', 'Sunscreen 5%', 'Dim-out', 'Blackout', 'Printed']),
        s('Operation', ['Chain', 'Cordless spring', 'Motorised'])
      ]),
      i('cu-pelmet', 'Pelmet / valance box', 'R.ft', 380, [s('Finish', ['Laminate', 'Veneer + PU', 'Upholstered', 'Gypsum recess'])]),
      i('sf-uphol', 'Upholstery (re-covering)', 'Sq.ft', 260, [
        s('Fabric', ['Cotton', 'Linen', 'Velvet', 'Leatherette', 'Genuine leather', 'Chenille', 'Boucle']),
        s('Foam', ['32 density', '40 density', 'Memory foam top', 'Existing foam retained'])
      ]),
      i('sf-cushion', 'Cushions & bolsters', 'Nos', 1400, [s('Type', ['16×16 cushion', '18×18 cushion', '20×20 cushion', 'Bolster', 'Floor cushion'])]),
      i('sf-rug', 'Rug / carpet (loose)', 'Sq.ft', 340, [
        s('Type', ['Hand tufted wool', 'Machine made', 'Jute / natural fibre', 'Silk blend', 'Shaggy', 'Flatweave dhurrie'])
      ]),
      i('sf-mattress', 'Mattress', 'Nos', 24000, [
        s('Brand', ['Kurlon', 'Sleepwell', 'Duroflex', 'Wakefit', 'Springfit', 'Peps']),
        s('Type', ['Pocketed spring', 'Bonnel spring', 'Memory foam', 'Latex', 'Orthopaedic foam']),
        s('Size', ['King 72×78', 'Queen 60×78', 'Single 36×72', 'Custom'])
      ]),
      i('sf-linen', 'Bed linen set', 'Set', 6500, [s('Type', ['Cotton 300TC', 'Cotton 400TC', 'Sateen', 'Linen', 'Percale'])])
    ]),

    /* ══ 9 · LIGHTING & ELECTRICAL ═════════════════════════════ */
    g('electrical', 'Lighting & electrical', null, [
      i('el-point', 'Electrical point (wiring)', 'Nos', 950, [
        s('Point type', ['Light point', '5A socket', '16A socket', 'AC point', 'Geyser point', 'TV / data point',
          'Fan point', 'Two-way switching']),
        s('Wire', ['Polycab', 'Finolex', 'Havells', 'RR Kabel', 'KEI']),
        s('Conduit', ['Concealed PVC (Precision / AKG)', 'Casing capping', 'Existing conduit'])
      ]),
      i('el-switch', 'Modular switch plate', 'Nos', 2400, [
        s('Brand', ['Legrand Arteor', 'Legrand Myrius', 'Schneider Livia', 'Schneider Zencelo', 'Anchor Roma',
          'Havells Crabtree', 'GM', 'Wipro']),
        s('Plate size', ['2 module', '4 module', '6 module', '8 module', '12 module', '18 module']),
        s('Finish', ['White', 'Matt black', 'Champagne gold', 'Graphite', 'Glass finish'])
      ]),
      i('el-db', 'Distribution board & MCBs', 'Nos', 12500, [
        s('Brand', ['Legrand', 'Schneider', 'Havells', 'ABB', 'Hager']),
        s('Ways', ['8 way', '12 way', '16 way', '24 way']),
        s('Protection', ['MCB only', 'MCB + RCCB', 'MCB + RCBO + SPD'])
      ]),
      i('lt-cove', 'Cove / profile LED', 'R.ft', 320, [
        s('Strip', ['2835 warm white', '5050 RGB', 'COB strip (dotless)', 'Tunable white']),
        s('CRI', ['CRI 80+', 'CRI 90+', 'CRI 95+']),
        s('Profile', ['Aluminium recessed profile', 'Surface profile', 'No profile (concealed in cove)']),
        s('Driver', ['Constant voltage 12V', 'Constant voltage 24V', 'Dimmable driver'])
      ]),
      i('lt-spot', 'Spot / downlight', 'Nos', 1250, [
        s('Type', ['COB spot 7W', 'COB spot 12W', 'Surface spot', 'Adjustable gimbal', 'Trimless recessed', 'Wall washer']),
        s('Brand', ['Philips', 'Wipro', 'Havells', 'Syska', 'Jaquar', 'Corvi', 'Osram']),
        s('Colour temp', ['2700K warm', '3000K warm white', '4000K neutral', '6500K cool'])
      ]),
      i('lt-track', 'Magnetic track light', 'R.ft', 2200, [s('Type', ['Recessed track', 'Surface track', 'Suspended track']), s('Fittings', ['Spot', 'Linear', 'Grille', 'Mixed'])]),
      i('lt-decor', 'Decorative light fitting', 'Nos', 8500, [
        s('Type', ['Chandelier', 'Pendant (single)', 'Pendant cluster', 'Wall sconce', 'Table lamp', 'Floor lamp',
          'Picture light', 'Outdoor bollard', 'Gate light']),
        s('Source', ['Imported', 'Indian designer', 'Jaipur / Moradabad craft', 'Standard'])
      ]),
      i('el-fan', 'Ceiling fan', 'Nos', 6500, [
        s('Brand', ['Atomberg', 'Havells', 'Crompton', 'Orient', 'Usha', 'Luminous']),
        s('Type', ['BLDC energy saving', 'Standard induction', 'Designer', 'Ceiling fan with light'])
      ]),
      i('el-ac', 'Air conditioning', 'Nos', 42000, [
        s('Type', ['Split 1 ton', 'Split 1.5 ton', 'Split 2 ton', 'Cassette', 'Ducted', 'VRF indoor unit']),
        s('Brand', ['Daikin', 'Mitsubishi', 'Voltas', 'Blue Star', 'LG', 'Hitachi', 'Carrier']),
        s('Star rating', ['3 star', '5 star', 'Inverter'])
      ]),
      i('el-smart', 'Home automation', 'Nos', 14500, [
        s('Scope', ['Smart switch module (per room)', 'Voice assistant integration', 'Smart curtain control',
          'Smart lighting scenes', 'Video door phone', 'CCTV (per camera)', 'Motion sensors']),
        s('Platform', ['Alexa', 'Google Home', 'Apple HomeKit', 'Wipro', 'Syska', 'Schneider Wiser'])
      ])
    ]),

    /* ══ 10 · BATHROOM ═════════════════════════════════════════ */
    g('bath', 'Bathrooms', null, [
      i('bt-wc', 'Water closet', 'Nos', 18500, [
        s('Type', ['Wall hung + concealed cistern', 'Floor mounted one-piece', 'Two-piece EWC', 'Smart / bidet seat']),
        s('Brand', ['Jaquar', 'Kohler', 'Cera', 'Hindware', 'Parryware', 'Toto', 'Duravit', 'Roca'])
      ]),
      i('bt-basin', 'Wash basin', 'Nos', 11500, [
        s('Type', ['Counter top', 'Under counter', 'Wall hung', 'Table top', 'Pedestal', 'Semi-recessed']),
        s('Material', ['Ceramic', 'Vitreous china', 'Stone / marble', 'Glass', 'Corian']),
        s('Brand', ['Jaquar', 'Kohler', 'Cera', 'Hindware', 'Parryware', 'Toto'])
      ]),
      i('bt-cp', 'CP fittings', 'Set', 16500, [
        s('Set', ['Basin mixer + waste', 'Diverter + overhead + hand shower', 'Health faucet + angle valves',
          'Bath tub filler', 'Complete bathroom set']),
        s('Brand', ['Jaquar', 'Kohler', 'Grohe', 'Hansgrohe', 'Cera', 'Hindware', 'Parryware']),
        s('Finish', ['Chrome', 'Matt black', 'Rose gold', 'Brushed gold', 'Gun metal', 'Antique brass'])
      ]),
      i('bt-shower', 'Shower system', 'Set', 22000, [
        s('Type', ['Rain shower 8"', 'Rain shower 12"', 'Ceiling mounted rain shower', 'Shower panel', 'Body jets']),
        s('Brand', ['Jaquar', 'Kohler', 'Grohe', 'Hindware'])
      ]),
      i('bt-vanity', 'Vanity unit', 'Sq.ft', 1650, [
        s('Carcass', ['Marine ply BWP', 'WPC board', 'PVC board', 'Stainless steel']),
        s('Finish', SHUTTER),
        s('Counter', ['Granite', 'Quartz', 'Marble', 'Corian', 'Nano white'])
      ]),
      i('bt-mirror', 'Bathroom mirror', 'Nos', 8500, [
        s('Type', ['LED backlit', 'LED with demister', 'Beveled plain', 'Framed', 'Smart mirror']),
        s('Shape', ['Rectangle', 'Round', 'Arch', 'Custom'])
      ]),
      i('bt-glass', 'Shower partition', 'Sq.ft', 780, [
        s('Type', ['Frameless 10mm toughened', 'Frameless 12mm toughened', 'Framed sliding', 'Fixed panel']),
        s('Hardware', ['SS 304 matt black', 'SS 304 chrome', 'Brushed gold'])
      ]),
      i('bt-tile', 'Bathroom wall tiling', 'Sq.ft', 175, [
        s('Brand', ['Kajaria', 'Somany', 'Simpolo', 'Nitco', 'Varmora', 'Johnson']),
        s('Size', ['300×600', '300×900', '600×1200', 'Mosaic', 'Subway 75×300']),
        s('Scope', ['Material + laying', 'Laying only'])
      ]),
      i('bt-acc', 'Bathroom accessory', 'Nos', 2200, [
        s('Item', ['Towel rail', 'Towel ring', 'Robe hook', 'Soap dish', 'Paper holder', 'Grab bar',
          'Shelf', 'Shower niche', 'Floor drain / grating']),
        s('Brand', ['Jaquar', 'Kohler', 'Cera', 'Hindware', 'Ozone'])
      ]),
      i('bt-geyser', 'Water heater', 'Nos', 12500, [
        s('Type', ['Storage 15L', 'Storage 25L', 'Instant 3L', 'Gas geyser', 'Heat pump']),
        s('Brand', ['AO Smith', 'Racold', 'Bajaj', 'Havells', 'Venus'])
      ])
    ]),

    /* ══ 11 · LOOSE FURNITURE ══════════════════════════════════ */
    g('furniture', 'Loose furniture', 'Supplied, or made to the studio drawing.', [
      i('fn-sofa', 'Sofa', 'Nos', 78000, [
        s('Size', ['2 seater', '3 seater', 'L-shape', 'U-shape', 'Modular sectional', 'Recliner']),
        s('Upholstery', ['Fabric', 'Leatherette', 'Genuine leather', 'Velvet', 'Boucle']),
        s('Frame', ['Seasoned teak', 'Sheesham', 'Engineered wood + ply', 'MS frame']),
        s('Source', ['Made to studio drawing', 'Brand supplied'])
      ]),
      i('fn-dining', 'Dining table', 'Nos', 68000, [
        s('Seats', ['4 seater', '6 seater', '8 seater', '10 seater']),
        s('Top', ['Italian marble', 'Granite', 'Solid wood', 'Veneer + PU', 'Glass', 'Sintered stone']),
        s('Base', ['Solid wood', 'MS powder coated', 'SS gold finish', 'Stone pedestal'])
      ]),
      i('fn-chair', 'Chair', 'Nos', 12500, [
        s('Type', ['Dining chair', 'Accent chair', 'Bar stool', 'Lounge chair', 'Bench']),
        s('Upholstery', ['Fabric', 'Leatherette', 'Leather', 'Cane', 'Unupholstered'])
      ]),
      i('fn-table', 'Occasional table', 'Nos', 18500, [s('Type', ['Centre table', 'Side table', 'Nest of tables', 'Console'])]),
      i('fn-office', 'Office seating', 'Nos', 14500, [
        s('Type', ['Task chair (mesh)', 'Executive chair', 'Visitor chair', 'Ergonomic high back', 'Stool']),
        s('Brand', ['Featherlite', 'Godrej Interio', 'Wipro Furniture', 'Herman Miller', 'Steelcase', 'Local'])
      ])
    ]),

    /* ══ 12 · OFFICE & COMMERCIAL ══════════════════════════════ */
    g('office', 'Office & commercial', null, [
      i('of-ws', 'Workstation', 'Nos', 32000, [
        s('Layout', ['Linear 4ft', 'Linear 5ft', 'L-type', 'Cluster of 4', 'Cluster of 6', 'Bench system']),
        s('Top', ['Pre-laminated 25mm', 'Post-formed', 'Veneer + PU', 'Compact laminate']),
        s('Screen', ['Fabric tackboard', 'Glass screen', 'Acrylic screen', 'No screen']),
        s('Storage', ['Mobile pedestal 3 drawer', 'Fixed pedestal', 'No pedestal']),
        s('Raceway', ['Under-table wire manager', 'Vertical raceway', 'Floor box + grommet'])
      ]),
      i('of-cabin', 'Cabin furniture', 'Set', 145000, [
        s('Scope', ['Table + credenza + storage', 'Table only', 'Table + back unit + display']),
        s('Finish', ['Veneer + PU', 'Laminate', 'Duco', 'Mixed veneer & laminate'])
      ]),
      i('of-conf', 'Conference table', 'Nos', 125000, [
        s('Seats', ['6 seater', '8 seater', '10 seater', '12 seater', '16 seater']),
        s('Top', ['Veneer + PU', 'Laminate', 'Glass', 'Sintered stone']),
        s('Power', ['Pop-up power hub', 'Flip box', 'Cable grommet', 'None'])
      ]),
      i('of-recep', 'Reception desk', 'Nos', 95000, [
        s('Finish', ['Corian backlit', 'Veneer + PU', 'Stone clad', 'Laminate', 'Fluted panel']),
        s('Signage', ['Backlit acrylic logo', 'SS letters', 'Brass letters', 'Vinyl', 'None'])
      ]),
      i('of-storage', 'Office storage', 'Sq.ft', 1350, [
        s('Type', ['Open filing', 'Shuttered storage', 'Lockers', 'Pantry unit']),
        s('Carcass', CARCASS), s('Finish', SHUTTER)
      ]),
      i('of-booth', 'Phone booth / pod', 'Nos', 165000, [s('Type', ['Single phone booth', 'Two person meeting pod', 'Four person pod'])]),
      i('of-signage', 'Signage & graphics', 'Sq.ft', 850, [
        s('Type', ['Backlit acrylic', '3D SS letters', 'Vinyl on glass', 'Wall graphics / manifestation', 'Neon flex', 'Digital print'])
      ])
    ]),

    /* ══ 13 · CIVIL & PREPARATORY WORK ═════════════════════════ */
    g('civil', 'Civil & preparatory work', 'Site work that has to happen before joinery can start.', [
      i('cv-demo', 'Demolition & debris removal', 'Sq.ft', 45, [s('Scope', ['Full strip out', 'Partial', 'Tile removal only', 'Wall breaking'])]),
      i('cv-brick', 'Brickwork / block work', 'Sq.ft', 165, [s('Type', ['4" brick wall', '9" brick wall', 'AAC block 4"', 'Gypsum partition', 'Cement board partition'])]),
      i('cv-plaster', 'Plastering', 'Sq.ft', 48, [s('Type', ['Internal 12mm', 'External 20mm', 'Gypsum plaster', 'POP punning'])]),
      i('cv-plumb', 'Plumbing work', 'Nos', 3800, [
        s('Scope', ['Per point — supply', 'Per point — drainage', 'Full bathroom rough-in', 'Kitchen rough-in']),
        s('Pipes', ['Astral CPVC', 'Supreme CPVC', 'Ashirvad', 'Prince', 'Finolex'])
      ]),
      i('cv-mstruct', 'MS / SS fabrication', 'Kg', 185, [
        s('Item', ['Railing', 'Staircase', 'Pergola', 'Grill', 'Frame / support structure', 'Loft platform']),
        s('Finish', ['Powder coated', 'Duco paint', 'SS 304 mirror', 'SS 304 matt', 'Anti-rust primer + enamel'])
      ]),
      i('cv-mirror', 'Mirror & glass work', 'Sq.ft', 420, [
        s('Type', ['5mm plain mirror', 'Beveled mirror', 'Antique / tinted mirror', 'Back-painted glass', 'Fluted glass'])
      ])
    ]),

    /* ══ 14 · SURFACES REFERENCE ═══════════════════════════════ */
    g('surface', 'Surfaces — laminates, veneers & acrylics', 'Priced per sheet where bought loose; otherwise carried in the joinery rate.', [
      i('sr-lam', 'Laminate sheet 8×4', 'Nos', 1450, [
        s('Brand', ['Merino', 'Greenlam', 'Century Mica', 'Royale Touche', 'Advance', 'Virgo', 'Sundek', 'Formica', 'Archidply']),
        s('Thickness', ['0.8mm', '1mm', '1.5mm', 'Compact 6mm']),
        s('Finish', ['Suede / SF', 'Matt', 'High gloss', 'Textured wood grain', 'Solid colour', 'Metallic', 'Anti-fingerprint'])
      ]),
      i('sr-ven', 'Veneer sheet 8×4', 'Nos', 3200, [
        s('Species', ['Teak', 'Walnut', 'Oak', 'Ash', 'Rosewood', 'Ebony', 'Reconstituted', 'Smoked oak']),
        s('Cut', ['Crown cut', 'Quarter cut', 'Rotary', 'Book matched'])
      ]),
      i('sr-acr', 'Acrylic sheet 8×4', 'Nos', 5800, [
        s('Brand', ['Senosan', 'Rehau', 'Merino Gloss', 'Greenlam', 'Aristo']),
        s('Finish', ['High gloss', 'Matt / anti-scratch', 'Metallic'])
      ]),
      i('sr-corian', 'Solid surface (Corian type)', 'Sq.ft', 1450, [
        s('Brand', ['DuPont Corian', 'LG Hi-Macs', 'Hanex', 'Staron', 'Indian solid surface']),
        s('Use', ['Counter', 'Backlit panel', 'Reception fascia', 'Vanity top'])
      ])
    ]),

    /* ══ 15 · DESIGN & PROJECT MANAGEMENT ══════════════════════ */
    g('fees', 'Design & project management', 'Charged as a fee, not against material.', [
      i('fe-design', 'Interior design fee', 'Sq.ft', 95, [
        s('Stage', ['Concept + layout', 'Concept to GFC drawings', 'Full design + 3D + GFC', 'Design + execution drawings + site']),
        s('Deliverables', ['Layouts + elevations', '+ 3D views', '+ Working / GFC set', '+ Material board & BOQ'])
      ]),
      i('fe-3d', '3D visualisation', 'Nos', 6500, [s('Type', ['Still render per view', 'Walkthrough per minute', '360° panorama per room', 'VR ready'])]),
      i('fe-pm', 'Project management & supervision', 'Job', 0, [
        s('Basis', ['Percentage of project value', 'Monthly retainer', 'Per site visit', 'Included in turnkey'])
      ]),
      i('fe-turnkey', 'Turnkey execution charge', 'Job', 0, [s('Basis', ['Percentage of works value', 'Fixed lump sum'])])
    ])
  ];

  /* ── Property types and the rooms each one usually carries ──── */
  const propertyTypes = [
    { id: '1bhk', name: '1 BHK apartment', kind: 'residential' },
    { id: '2bhk', name: '2 BHK apartment', kind: 'residential' },
    { id: '3bhk', name: '3 BHK apartment', kind: 'residential' },
    { id: '4bhk', name: '4 BHK apartment', kind: 'residential' },
    { id: 'penthouse', name: 'Penthouse / duplex', kind: 'residential' },
    { id: 'villa', name: 'Villa / bungalow', kind: 'residential' },
    { id: 'studio', name: 'Studio apartment', kind: 'residential' },
    { id: 'office-small', name: 'Office — small / startup', kind: 'office' },
    { id: 'office-corp', name: 'Office — corporate floor', kind: 'office' },
    { id: 'clinic', name: 'Clinic / consulting rooms', kind: 'office' },
    { id: 'restaurant', name: 'Restaurant', kind: 'hospitality' },
    { id: 'cafe', name: 'Café / QSR', kind: 'hospitality' },
    { id: 'hotel', name: 'Hotel / lounge', kind: 'hospitality' },
    { id: 'retail', name: 'Retail store', kind: 'retail' },
    { id: 'salon', name: 'Salon / spa', kind: 'retail' }
  ];

  const roomSets = {
    residential: ['Foyer / entrance', 'Living room', 'Dining', 'Kitchen', 'Utility / wash', 'Master bedroom',
      'Bedroom 2', 'Bedroom 3', 'Bedroom 4', 'Kids room', 'Guest bedroom', 'Study', 'Pooja room',
      'Master bathroom', 'Common bathroom', 'Powder room', 'Balcony', 'Terrace', 'Staircase', 'Store'],
    office: ['Reception', 'Waiting lounge', 'Workstation area', 'MD cabin', 'Manager cabin', 'Conference room',
      'Meeting room', 'Pantry', 'Server / UPS room', 'Store', 'Washroom', 'Corridor', 'Breakout area'],
    hospitality: ['Entrance & facade', 'Dining hall', 'Private dining', 'Bar', 'Kitchen (back of house)',
      'Wash area', 'Washroom', 'Reception / cash', 'Outdoor seating', 'Corridor'],
    retail: ['Shopfront & facade', 'Display area', 'Trial rooms', 'Cash counter', 'Store room', 'Staff area', 'Washroom']
  };

  const stages = ['New enquiry', 'Contacted', 'Site visit done', 'Design in progress',
    'Quotation sent', 'Negotiation', 'Won', 'Lost', 'On hold'];

  const sources = ['Website enquiry', 'Instagram', 'Referral — client', 'Referral — architect',
    'Walk-in', 'Google search', 'JustDial / Housing', 'Exhibition', 'Repeat client', 'Other'];

  return { UNITS, groups, propertyTypes, roomSets, stages, sources, CARCASS, SHUTTER, HINGE, CHANNEL, HANDLE };
})();
