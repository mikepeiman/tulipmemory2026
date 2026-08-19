/**
 * Tulip Electronics — product catalogue
 *
 * SOURCE OF TRUTH: "Memory product  parts.docx" (Bill Peiman, received 2026-08).
 * Every price, part number, control list and stock note below is transcribed
 * from that document. Nothing in this file is invented.
 *
 * PROVENANCE RULES — please keep these:
 *   - `source: 'bill'`      = transcribed from Bill's price list. Trust it.
 *   - `source: 'research'`  = found elsewhere (reseller listings, manuals).
 *                             NOT yet confirmed by Bill. Do not present as fact.
 *   - `needsBill: [...]`    = open question. Anything listed here is missing,
 *                             ambiguous, or contradictory in the source.
 *   - `copyStatus: 'draft'` = marketing copy written by Mike/Claude, not Bill.
 *                             Bill left Section 2 of the questionnaire blank, so
 *                             no product descriptions have been author-approved.
 *
 * Bill did not answer the per-product blocks (name / one-liner / capacity list /
 * OEM replacements). Those fields are therefore either derived from the price
 * list or marked draft. Do not silently upgrade a draft to confirmed.
 *
 * All prices are US dollars, list, per Bill's header: "All prices in US$".
 */

/* ------------------------------------------------------------------ *
 * Types
 * ------------------------------------------------------------------ */

export type FamilyId = 'fanuc' | 'yasnac' | 'mitsubishi';

export type Provenance = 'bill' | 'research';

/** Storage technology the original control used. Drives page copy. */
export type StorageType = 'bubble' | 'sram' | 'flash-from' | 'unspecified';

export interface Family {
  id: FamilyId;
  /** Brand as customers say it, not as the OEM writes it. */
  label: string;
  /** OEM's own brand name where it differs. */
  oemLabel?: string;
  blurb: string;
  copyStatus: 'draft' | 'approved';
}

export interface Motherboard {
  partNumber: string;
  /** Which control this motherboard belongs to, per Bill's list. */
  control: string;
}

/**
 * An OEM memory module that the Tulip board replaces or supersedes.
 * Field meanings follow Bill's column headers exactly.
 *
 * Bill's table headers were "size / usable / PPS" (three columns) but most rows
 * carry only two figures. Transcribed here as `size` + `usable` because that is
 * the reading consistent with the FROM table, which spells out
 * "size FLASH / SRAM / usable / PPS". FLAGGED — see needsBill on each platform.
 */
export interface OemModule {
  partNumber: string;
  /** Total capacity as printed. */
  size: string;
  /** Usable / part-program capacity as printed. */
  usable?: string;
  /** FROM boards only: flash capacity. */
  flash?: string;
  /** FROM boards only: SRAM capacity. */
  sram?: string;
  note?: string;
}

/** A control platform: the hardware context a Tulip board drops into. */
export interface ControlPlatform {
  id: string;
  family: FamilyId;
  /** Human label, e.g. "Fanuc 16A / 18A". */
  label: string;
  /** Controls served, verbatim from Bill's "model" column where given. */
  controls: string[];
  storageType: StorageType;
  motherboards: Motherboard[];
  oemModules: OemModule[];
  /** Verbatim or near-verbatim notes from the price list. */
  notes: string[];
  needsBill: string[];
}

export interface Stock {
  /** Short label for the product page. */
  label: string;
  /** Lead time as Bill stated it, or undefined if he didn't. */
  leadTime?: string;
  /** Up-front deposit in US dollars, if the board is built to order. */
  depositUsd?: number;
  /** Bill's own note, verbatim where possible. */
  note?: string;
  /**
   * Whether this SKU should currently be offered for purchase on the site.
   * false = show the spec page (it earns search traffic) but route to enquiry
   * only, no price-and-buy treatment.
   */
  sellable: boolean;
  /** Why it isn't sellable. Internal — never render this. */
  holdReason?: string;
}

export interface OemReplacement {
  partNumber: string;
  source: Provenance;
  /** Where a 'research' claim came from, so it can be re-verified. */
  citation?: string;
}

export interface Product {
  /** URL slug. Stable — these become indexed pages. */
  slug: string;
  /** Tulip part name exactly as Bill writes it on the price list. */
  partName: string;
  family: FamilyId;
  /** Product line, for grouping. */
  line: 'FANRAM' | 'FAN16' | 'F16B-FROM' | 'F15' | 'Fan-i' | 'MITRAM' | 'YASRAM';
  platformId: string;
  /** Capacity as marketed, e.g. "512K". */
  capacity: string;
  priceUsd: number;
  /** Controls this SKU fits, verbatim from the "model" column. */
  controls: string[];
  /** Any per-SKU caveat from the price list. */
  fitNote?: string;
  stock: Stock;
  oemReplaces: OemReplacement[];
  /** One line, plain language. DRAFT until Bill signs off. */
  draftBlurb: string;
  copyStatus: 'draft' | 'approved';
  needsBill: string[];
}

/* ------------------------------------------------------------------ *
 * Families
 * ------------------------------------------------------------------ */

export const families: Family[] = [
  {
    id: 'fanuc',
    label: 'Fanuc',
    blurb:
      'Memory upgrades and replacement memory boards for Fanuc 6, 9, 11, 12, 15, 16, 18 and 16i/18i controls.',
    copyStatus: 'draft',
  },
  {
    id: 'yasnac',
    label: 'Yasnac',
    oemLabel: 'Yaskawa',
    blurb: 'Replacement memory for Yasnac MX2/LX2, MX3/LX3 and i80 controls.',
    copyStatus: 'draft',
  },
  {
    id: 'mitsubishi',
    label: 'Mitsubishi',
    blurb:
      'Memory upgrades for the Mitsubishi 500 series control, as fitted to Mazak PLUS machines.',
    copyStatus: 'draft',
  },
];

/* ------------------------------------------------------------------ *
 * Control platforms (the compatibility database)
 * ------------------------------------------------------------------ */

export const platforms: ControlPlatform[] = [
  {
    id: 'fanuc-bubble',
    family: 'fanuc',
    label: 'Fanuc 6, 9, 11 and 12 (bubble memory)',
    controls: ['6A', '6B', '6B2', '9', '11', '12'],
    storageType: 'bubble',
    motherboards: [],
    oemModules: [],
    notes: [
      'Controls using bubble memory as storage: 6 (A, B, B2) series, 9, 11, 12.',
      'Built to order — the legacy connectors these controls need went out of production years ago and must be custom-ordered. Allow two to four weeks and a US$250 deposit.',
    ],
    needsBill: [
      'Honda connectors: quantity, unit cost, supplier and lead time. Five SKUs are gated on this purchase.',
      'No motherboard or OEM bubble-module part numbers given for the 6/9/11/12 platform — are there numbers we can list for search?',
    ],
  },
  {
    id: 'fanuc-16a-18a',
    family: 'fanuc',
    label: 'Fanuc 16A / 18A',
    controls: ['16A', '18A'],
    storageType: 'sram',
    motherboards: [
      { partNumber: 'A16B-2200-0900', control: '16A' },
      { partNumber: 'A16B-2200-0080', control: '18A' },
    ],
    oemModules: [
      { partNumber: 'A20B-2900-0530', size: '256K', usable: '128K' },
      { partNumber: 'A20B-2900-0531', size: '128K', usable: '32K' },
      { partNumber: 'A20B-2900-0540', size: '1M', usable: '512K' },
      { partNumber: 'A20B-2900-0541', size: '512K', usable: '256K' },
    ],
    notes: [],
    needsBill: [
      'Column reading: header was "size / usable / PPS" but rows carry two figures. Confirm the second figure is usable part-program capacity.',
    ],
  },
  {
    id: 'fanuc-16b-16c-18b-18c',
    family: 'fanuc',
    label: 'Fanuc 16B / 16C / 18B / 18C',
    controls: ['16B', '16C', '18B', '18C', '18-MC', '18-TC'],
    storageType: 'sram',
    motherboards: [
      { partNumber: 'A16B-3200-0110', control: '16B' },
      { partNumber: 'A16B-3200-0170', control: '16B' },
      { partNumber: 'A16B-3200-0190', control: '16C' },
      { partNumber: 'A16B-3200-0160', control: '18B' },
      { partNumber: 'A16B-2202-0860', control: '18B' },
      { partNumber: 'A16B-3200-0210', control: '18C' },
    ],
    oemModules: [
      { partNumber: 'A20B-2902-0350', size: '256K', usable: '128K' },
      { partNumber: 'A20B-2902-0351', size: '768K', usable: '512K' },
      {
        partNumber: 'A20B-2902-0352',
        size: '2.25M',
        note: '2M for 16B/C and 18-MC with the correct NCBasic version (we supply it); 512K for 18B and 18-TC.',
      },
    ],
    notes: ['OPT2 board: A16B-2302-0030, -0031, -0033.'],
    needsBill: [],
  },
  {
    id: 'fanuc-16b-from',
    family: 'fanuc',
    label: 'Fanuc 16B (FROM / flash)',
    controls: ['16B'],
    storageType: 'flash-from',
    motherboards: [{ partNumber: 'A16B-3200-0010', control: '16B' }],
    oemModules: [
      { partNumber: 'A20B-2902-0080', size: '4M', flash: '4M', sram: '512K', usable: '256K' },
      { partNumber: 'A20B-2902-0081', size: '4M', flash: '4M', sram: '0', usable: '128K' },
      { partNumber: 'A20B-2902-0082', size: '2M', flash: '2M', sram: '0', usable: '128K' },
      { partNumber: 'A20B-2902-0090', size: '8M', flash: '8M', sram: '2M', usable: '2M' },
      { partNumber: 'A20B-2902-0091', size: '8M', flash: '8M', sram: '0', usable: '128K' },
      { partNumber: 'A20B-2902-0092', size: '8M', flash: '8M', sram: '0', usable: '128K' },
      { partNumber: 'A20B-2902-0093', size: '8M', flash: '8M', sram: '512K', usable: '256K' },
      { partNumber: 'A20B-2902-0094', size: '6M', flash: '6M', sram: '512K', usable: '256K' },
    ],
    notes: [],
    needsBill: [
      'This platform shares the "16B" label with A16B-3200-0110/-0170 above but uses a different motherboard (A16B-3200-0010). Is there a customer-facing way to tell them apart at the machine?',
    ],
  },
  {
    id: 'fanuc-15a',
    family: 'fanuc',
    label: 'Fanuc 15A',
    controls: ['15A (all versions with a free slot)'],
    storageType: 'sram',
    motherboards: [],
    oemModules: [
      { partNumber: 'A20B-2200-0110', size: '2M', usable: '2M' },
      { partNumber: 'A20B-2200-0111', size: '1M', usable: '1M' },
      { partNumber: 'A20B-2200-0112', size: '512K', usable: '512K' },
    ],
    notes: ['Fits all 15A versions that have a free slot.'],
    needsBill: [
      'The 15A test control has a fault, so boards cannot be properly tested. What is wrong with it and what would fix it?',
    ],
  },
  {
    id: 'fanuc-15b',
    family: 'fanuc',
    label: 'Fanuc 15B',
    controls: ['15B (all versions)'],
    storageType: 'sram',
    motherboards: [],
    oemModules: [
      { partNumber: 'A20B-2900-0701', size: '64K' },
      { partNumber: 'A20B-2900-0711', size: '128K' },
      { partNumber: 'A20B-2900-0700', size: '256K' },
      { partNumber: 'A20B-2900-0681', size: '512K' },
      { partNumber: 'A20B-2900-0680', size: '1M' },
      { partNumber: 'A20B-2900-0682', size: '2M' },
    ],
    notes: [],
    needsBill: [],
  },
  {
    id: 'fanuc-16i-18i-a',
    family: 'fanuc',
    label: 'Fanuc 16i / 18i (iA)',
    controls: ['16iA', '18iA'],
    storageType: 'sram',
    motherboards: [],
    oemModules: [
      { partNumber: 'A20B-3900-0053', size: '256K', usable: '128K' },
      { partNumber: 'A20B-3900-0052', size: '512K', usable: '256K' },
      { partNumber: 'A20B-3900-0061', size: '1M', usable: '512K' },
      { partNumber: 'A20B-3900-0060', size: '2M', usable: '1M' },
      { partNumber: 'A20B-3900-0020', size: '3M', usable: '2M' },
    ],
    notes: ['iA series only. Memory for the iB series and later isn\'t offered yet — vote for it on our product development page.'],
    needsBill: [],
  },
  {
    id: 'mitsubishi-500',
    family: 'mitsubishi',
    label: 'Mitsubishi 500 (Mazak PLUS)',
    controls: ['500 series, all 530 and 535 versions', 'some 525 versions'],
    storageType: 'unspecified',
    motherboards: [],
    oemModules: [],
    notes: [
      'All 530 and 535 versions, and some 525 versions. Not for 520 versions.',
    ],
    needsBill: [
      'Which 525 versions are supported, and how does a customer tell? "Some 525 versions" will generate wrong orders as written.',
      'No OEM module or motherboard numbers supplied for the Mitsubishi 500 — anything we can list?',
    ],
  },
  {
    id: 'yasnac',
    family: 'yasnac',
    label: 'Yasnac MX2 / LX2 / MX3 / LX3 / i80',
    controls: ['MX2', 'LX2', 'MX3', 'LX3', 'i80'],
    storageType: 'unspecified',
    motherboards: [],
    oemModules: [],
    notes: [],
    needsBill: [
      'No OEM part numbers supplied for any Yasnac board. These are the pages most likely to rank on part number — anything you have would help.',
      'YASRAM-i80-512 is noted "ordered from Nexas" — do we buy these from Nexas, or does Nexas order them from us?',
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Products
 * ------------------------------------------------------------------ */

const STOCKED: Stock = { label: 'In stock', sellable: true };

/** The FANRAM bubble-memory family: built to order, because the legacy
 *  connectors and memory parts it needs are long out of production and must
 *  be custom-ordered. The deposit secures those parts once we commit to them. */
const BUBBLE_STOCK: Stock = {
  label: 'Built to order',
  leadTime: '2–4 weeks',
  depositUsd: 250,
  note: "Built to order, because the parts don't sit on a shelf. The connectors and memory components these controls use left production decades ago, so we source them board by board — often in small, custom runs. That sourcing is the lead time, and the deposit is what lets us commit to those parts for you. It's credited toward your board.",
  sellable: true,
};

export const products: Product[] = [
  /* ---------------- FANRAM — bubble memory controls ---------------- */
  {
    slug: 'fanram-32k',
    partName: 'FANRAM-32k',
    family: 'fanuc',
    line: 'FANRAM',
    platformId: 'fanuc-bubble',
    capacity: '32K',
    priceUsd: 795,
    controls: ['6'],
    stock: BUBBLE_STOCK,
    oemReplaces: [],
    draftBlurb:
      'Solid-state replacement for the bubble memory in a Fanuc 6 control. 32K of part-program storage.',
    copyStatus: 'draft',
    needsBill: ['Does this fit all of 6A / 6B / 6B2, or only some? The model column just says "6".'],
  },
  {
    slug: 'fanram-128k',
    partName: 'FANRAM-128k',
    family: 'fanuc',
    line: 'FANRAM',
    platformId: 'fanuc-bubble',
    capacity: '128K',
    priceUsd: 895,
    controls: ['6', '9', '11', '12'],
    stock: BUBBLE_STOCK,
    oemReplaces: [
      // Found on a reseller listing, NOT confirmed by Bill. Do not render as fact.
      { partNumber: 'A87L-0001-0084', source: 'research', citation: 'Radwell listing' },
      { partNumber: 'A87L-0001-0018', source: 'research', citation: 'Radwell listing' },
    ],
    draftBlurb:
      'The workhorse of the FANRAM line. Replaces bubble memory in Fanuc 6, 9, 11 and 12 controls with 128K of solid-state storage.',
    copyStatus: 'draft',
    needsBill: [
      'Confirm or correct: does FANRAM-128k replace Fanuc A87L-0001-0084 and A87L-0001-0018? (Found on a reseller listing, not from us.)',
    ],
  },
  {
    slug: 'fanram-512k',
    partName: 'FANRAM-512k',
    family: 'fanuc',
    line: 'FANRAM',
    platformId: 'fanuc-bubble',
    capacity: '512K',
    priceUsd: 1295,
    controls: ['6B (with level-up software)', '9', '11', '12'],
    fitNote: 'On a Fanuc 6B this requires the level-up software.',
    stock: BUBBLE_STOCK,
    oemReplaces: [],
    draftBlurb:
      '512K of part-program storage for Fanuc 9, 11 and 12 controls, and for the 6B where level-up software is fitted.',
    copyStatus: 'draft',
    needsBill: ['Do we supply the 6B level-up software, or does the customer need to source it?'],
  },
  {
    slug: 'fanram-2m',
    partName: 'FANRAM-2M',
    family: 'fanuc',
    line: 'FANRAM',
    platformId: 'fanuc-bubble',
    capacity: '2M',
    priceUsd: 1895,
    controls: ['11', '12'],
    stock: BUBBLE_STOCK,
    oemReplaces: [],
    draftBlurb: 'The largest FANRAM for Fanuc 11 and 12 controls: 2M of part-program storage.',
    copyStatus: 'draft',
    needsBill: [],
  },
  {
    slug: 'fanram-1-5m',
    partName: 'FANRAM-1.5M',
    family: 'fanuc',
    line: 'FANRAM',
    platformId: 'fanuc-bubble',
    capacity: '1.5M',
    priceUsd: 1895,
    controls: ['9'],
    fitNote:
      'Fanuc 9 only. Supplied as three 512K boards, a configuration used for this control alone.',
    stock: BUBBLE_STOCK,
    oemReplaces: [],
    draftBlurb:
      '1.5M for the Fanuc 9, built as three 512K boards — a configuration specific to this control.',
    copyStatus: 'draft',
    needsBill: [],
  },

  /* ---------------- Fanuc 16A / 18A ---------------- */
  {
    slug: 'fan16a-512k',
    partName: 'FAN16A-512k',
    family: 'fanuc',
    line: 'FAN16',
    platformId: 'fanuc-16a-18a',
    capacity: '512K',
    priceUsd: 1295,
    controls: ['16A', '18A'],
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb:
      '512K memory board for Fanuc 16A and 18A controls, on the A16B-2200-0900 and A16B-2200-0080 motherboards.',
    copyStatus: 'draft',
    needsBill: [
      'Which of the four OEM modules (A20B-2900-0530 / -0531 / -0540 / -0541) does FAN16A-512k actually replace or supersede?',
    ],
  },

  /* ---------------- Fanuc 16B/C, 18B/C ---------------- */
  {
    slug: 'fan16bc-2m',
    partName: 'FAN16B/C-2M',
    family: 'fanuc',
    line: 'FAN16',
    platformId: 'fanuc-16b-16c-18b-18c',
    capacity: '2M',
    priceUsd: 1895,
    controls: ['16B', '16C', '18B', '18C'],
    fitNote:
      'Gives 2M on 16B/C and 18-MC with the correct NCBasic version, which we supply. On 18B and 18-TC the usable capacity is 512K.',
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb:
      '2M memory board for Fanuc 16B, 16C, 18B and 18C controls. Usable capacity depends on the control and NCBasic version.',
    copyStatus: 'draft',
    needsBill: [
      'Is the NCBasic version included in the $1,895, or priced separately?',
      'Should the 18B / 18-TC 512K limit be stated on the page, or handled at quote? (Recommend stating it — it prevents a return.)',
    ],
  },

  /* ---------------- Fanuc 16B FROM ---------------- */
  {
    slug: 'f16b-from',
    partName: 'F16B-FROM',
    family: 'fanuc',
    line: 'F16B-FROM',
    platformId: 'fanuc-16b-from',
    capacity: 'FROM / flash',
    priceUsd: 2495,
    controls: ['16B'],
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb:
      'Replacement FROM board for Fanuc 16B controls on the A16B-3200-0010 motherboard, covering the A20B-2902-008x and -009x module range.',
    copyStatus: 'draft',
    needsBill: [
      'Does one F16B-FROM cover all eight listed modules, or are there configuration options at order time?',
      'What flash and SRAM capacity does our board provide? The OEM table gives theirs, not ours.',
    ],
  },

  /* ---------------- Fanuc 15A / 15B ---------------- */
  {
    slug: 'f15a-2m',
    partName: 'F15A-2M',
    family: 'fanuc',
    line: 'F15',
    platformId: 'fanuc-15a',
    capacity: '2M',
    priceUsd: 2995,
    controls: ['15A (all versions with a free slot)'],
    stock: {
      label: 'Enquire',
      leadTime: '1 to 2 weeks',
      sellable: false,
      holdReason:
        'Bill: "Normally stocked, but are having issues with the control, so that the boards cannot be properly tested." Highest-priced SKU in the line. Do not offer direct purchase until the 15A test control is repaired — reliability is the entire moat.',
    },
    oemReplaces: [],
    draftBlurb:
      '2M memory board for Fanuc 15A controls with a free slot. Supersedes the A20B-2200-0110, -0111 and -0112 boards.',
    copyStatus: 'draft',
    needsBill: [
      'BLOCKER: the 15A test control is faulty and boards cannot be properly tested. What is the fault and what would it take to fix?',
    ],
  },
  {
    slug: 'f15b-2m',
    partName: 'F15B-2M',
    family: 'fanuc',
    line: 'F15',
    platformId: 'fanuc-15b',
    capacity: '2M',
    priceUsd: 1995,
    controls: ['15B (all versions)'],
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb:
      '2M memory board for all Fanuc 15B versions, replacing the A20B-2900-06xx and -07xx SRAM module range.',
    copyStatus: 'draft',
    needsBill: [],
  },

  /* ---------------- Fanuc 16i / 18i ---------------- */
  {
    slug: 'fan-i-512k',
    partName: 'Fan-i-512k',
    family: 'fanuc',
    line: 'Fan-i',
    platformId: 'fanuc-16i-18i-a',
    capacity: '512K',
    priceUsd: 1495,
    controls: ['16iA', '18iA'],
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb: '512K SRAM board for Fanuc 16i and 18i (iA series) controls.',
    copyStatus: 'draft',
    needsBill: [],
  },
  {
    slug: 'fan-i-1m',
    partName: 'Fan-i-1M',
    family: 'fanuc',
    line: 'Fan-i',
    platformId: 'fanuc-16i-18i-a',
    capacity: '1M',
    priceUsd: 1995,
    controls: ['16iA', '18iA'],
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb: '1M SRAM board for Fanuc 16i and 18i (iA series) controls.',
    copyStatus: 'draft',
    needsBill: [],
  },
  {
    slug: 'fan-i-2m',
    partName: 'Fan-i-2M',
    family: 'fanuc',
    line: 'Fan-i',
    platformId: 'fanuc-16i-18i-a',
    capacity: '2M',
    priceUsd: 2495,
    controls: ['16iA', '18iA'],
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb: '2M SRAM board for Fanuc 16i and 18i (iA series) controls.',
    copyStatus: 'draft',
    needsBill: [],
  },

  /* ---------------- Mitsubishi ---------------- */
  {
    slug: 'mitram500',
    partName: 'MITRAM500',
    family: 'mitsubishi',
    line: 'MITRAM',
    platformId: 'mitsubishi-500',
    capacity: 'See platform notes',
    priceUsd: 2995,
    controls: ['Mitsubishi 500 (Mazak PLUS)'],
    fitNote:
      'All 530 and 535 versions, and some 525 versions. Not compatible with 520 versions.',
    stock: STOCKED,
    oemReplaces: [],
    draftBlurb:
      'Memory board for the Mitsubishi 500 series control, as fitted to Mazak PLUS machines.',
    copyStatus: 'draft',
    needsBill: [
      'What capacity does MITRAM500 provide? Not stated on the price list.',
      'Which 525 versions are supported?',
    ],
  },

  /* ---------------- Yasnac ---------------- */
  {
    slug: 'yasram-mx2-lx2-128',
    partName: 'YASRAM-MX2/LX2-128',
    family: 'yasnac',
    line: 'YASRAM',
    platformId: 'yasnac',
    capacity: '128K',
    priceUsd: 895,
    controls: ['MX2', 'LX2'],
    stock: {
      label: 'Built to order',
      note: 'Built to order. Talk to us about a lead time for your control.',
      sellable: true,
    },
    oemReplaces: [],
    draftBlurb: '128K memory board for Yasnac MX2 and LX2 controls.',
    copyStatus: 'draft',
    needsBill: [
      'Stock note reads "Unclear; years between orders" — that is a demand signal, not a lead time. What lead time can we actually promise?',
    ],
  },
  {
    slug: 'yasram-mx3-lx3-1m',
    partName: 'YASRAM-MX3/LX3-1M',
    family: 'yasnac',
    line: 'YASRAM',
    platformId: 'yasnac',
    capacity: '1M',
    priceUsd: 1495,
    controls: ['MX3', 'LX3'],
    stock: {
      label: 'Built to order',
      note: 'Built to order. Talk to us about a lead time for your control.',
      sellable: true,
    },
    oemReplaces: [],
    draftBlurb: '1M memory board for Yasnac MX3 and LX3 controls.',
    copyStatus: 'draft',
    needsBill: ['Same as MX2/LX2: what lead time can we promise?'],
  },
  {
    slug: 'yasram-i80-512',
    partName: 'YASRAM-i80-512',
    family: 'yasnac',
    line: 'YASRAM',
    platformId: 'yasnac',
    capacity: '512K',
    priceUsd: 1250,
    controls: ['i80'],
    stock: {
      label: 'Built to order',
      leadTime: 'About 1 week',
      sellable: true,
    },
    oemReplaces: [],
    draftBlurb: '512K memory board for the Yasnac i80 control.',
    copyStatus: 'draft',
    needsBill: [
      'Price list says "ordered from Nexas. 1 week?" — do we buy these from Nexas or does Nexas order from us? The "1 week?" has a question mark; is it firm?',
    ],
  },
];

/* ------------------------------------------------------------------ *
 * What Tulip does not serve
 *
 * Bill, questionnaire Section 2: "There are controls built that we don't
 * provide memory for; the 0i series, the 'Mate' series, all controls made
 * after 2007. starting with the iB series."
 *
 * No longer published as a flat rejection — see `requestedProducts` below,
 * which turns the same three items into a public upvote list instead.
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * Requested products — the public "what should we build next" list
 *
 * Derived from Bill's unsupported-controls statement above: these are the
 * controls people ask about that we do not serve today. Rendered as an
 * upvote list on /products/ and /product-development/. Votes are stored
 * per visitor (see the ProductInterest component) until a real endpoint
 * exists — search for TODO:VOTES.
 *
 * `seedVotes` is the count shown before the visitor's own vote. Keep it
 * honest: 0 until real counts come back from the endpoint. Do not inflate.
 * ------------------------------------------------------------------ */

export interface RequestedProduct {
  /** Stable id — vote state is keyed on this, never rename casually. */
  id: string;
  label: string;
  detail: string;
  seedVotes: number;
}

export const requestedProducts: RequestedProduct[] = [
  {
    id: 'fanuc-0i',
    label: 'Memory for the Fanuc 0i series',
    detail:
      'All 0i variants are unserved today. If one is sitting on your floor, that is exactly what a vote is for.',
    seedVotes: 0,
  },
  {
    id: 'fanuc-mate',
    label: 'Memory for the Fanuc "Mate" series',
    detail:
      'All Mate variants are unserved today. Votes here tell us the bench time would be worth it.',
    seedVotes: 0,
  },
  {
    id: 'fanuc-ib-later',
    label: 'Memory for Fanuc iB and later (post-2007)',
    detail:
      'Anything from the iB series onward. A big technology step for us — votes and suggestions tell us where to start.',
    seedVotes: 0,
  },
];

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getPlatform = (id: string) => platforms.find((p) => p.id === id);

export const getFamily = (id: FamilyId) => families.find((f) => f.id === id);

export const productsByFamily = (family: FamilyId) =>
  products.filter((p) => p.family === family);

export const platformsByFamily = (family: FamilyId) =>
  platforms.filter((p) => p.family === family);

export const productsByPlatform = (platformId: string) =>
  products.filter((p) => p.platformId === platformId);

/** Every OEM part number in the catalogue — useful for a search/lookup page. */
export const allOemPartNumbers = (): string[] => {
  const set = new Set<string>();
  for (const platform of platforms) {
    platform.motherboards.forEach((m) => set.add(m.partNumber));
    platform.oemModules.forEach((m) => set.add(m.partNumber));
  }
  for (const product of products) {
    product.oemReplaces.forEach((r) => set.add(r.partNumber));
  }
  return [...set].sort();
};

export const formatPrice = (usd: number) =>
  `US$${usd.toLocaleString('en-US')}`;

/** Everything still waiting on Bill, collected for the internal punch list. */
export const openQuestions = () => [
  ...platforms.flatMap((p) => p.needsBill.map((q) => ({ where: p.label, question: q }))),
  ...products.flatMap((p) => p.needsBill.map((q) => ({ where: p.partName, question: q }))),
];
