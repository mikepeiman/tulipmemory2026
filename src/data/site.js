export const contact = {
  email: 'cnc@tulipmemory.com',
  phone: '289-389-6117',
  city: 'Kitchener, Ontario, Canada',
  founded: 1984
};

export const families = [
  {
    slug: 'fanuc-0',
    name: 'Fanuc 0',
    sub: '0A · 0B · 0C',
    caps: 'Program memory expansion',
    capList: ['Expansion'],
    replaces: 'OEM RAM',
    replacesShort: 'OEM RAM',
    oemParts: [], // TODO: add real OEM cross-reference part numbers from Bill
    img: '/assets/board-green.jpg',
    desc: 'Program memory expansion for Fanuc 0-series controls. Run larger CAD/CAM programs on the machine you already trust — a drop-in board, not a control replacement.',
    seo: 'Fanuc 0 memory upgrade — FANRAM program memory expansion for Fanuc 0A, 0B, 0C CNC controls.'
  },
  {
    slug: 'fanuc-6',
    name: 'Fanuc 6',
    sub: '',
    caps: '32K · 128K · 512K',
    capList: ['32K', '128K', '512K'],
    replaces: 'Fanuc bubble memory cassettes',
    replacesShort: 'Bubble memory',
    oemParts: [], // TODO: add real OEM cross-reference part numbers from Bill
    img: '/assets/board-blue.jpg',
    desc: 'Solid-state replacement for Fanuc 6 bubble memory. No moving magnetics, no heat sensitivity — modern reliable RAM in the original slot. 512K requires the correct system version.',
    seo: 'Fanuc 6 bubble memory replacement — FANRAM solid-state memory boards, 32K to 512K.'
  },
  {
    slug: 'fanuc-11-12',
    name: 'Fanuc 11 / 12',
    sub: '',
    caps: '32K · 128K · 512K · 1M · 2M',
    capList: ['32K', '128K', '512K', '1M', '2M'],
    replaces: 'Fanuc BMU board (A87L-0001-0084, A87L-0001-0018)',
    replacesShort: 'BMU board',
    oemParts: ['A87L-0001-0084', 'A87L-0001-0018'],
    img: '/assets/ram-macro.jpg',
    desc: 'Replaces the Fanuc BMU memory board. The FANRAM-128 replaces A87L-0001-0084 and A87L-0001-0018 with 128K (320 metres) of program memory; larger sizes available up to 2M.',
    seo: 'Fanuc 11 / 12 BMU memory board replacement — FANRAM boards replacing A87L-0001-0084 and A87L-0001-0018, 32K to 2M.'
  },
  {
    slug: 'fanuc-15',
    name: 'Fanuc 15',
    sub: '',
    caps: '128K · 512K · 1M · 2M',
    capList: ['128K', '512K', '1M', '2M'],
    replaces: 'OEM RAM',
    replacesShort: 'OEM RAM',
    oemParts: [], // TODO: add real OEM cross-reference part numbers from Bill
    img: '/assets/board-black.jpg',
    desc: 'Memory replacement and upgrade for Fanuc 15 controls, from 128K to a full 2M of part-program storage.',
    seo: 'Fanuc 15 memory upgrade — FANRAM replacement memory boards, 128K to 2M.'
  },
  {
    slug: 'fanuc-16-18',
    name: 'Fanuc 16 / 18',
    sub: '',
    caps: '256K · 512K · 1M · 2M',
    capList: ['256K', '512K', '1M', '2M'],
    replaces: 'OEM RAM',
    replacesShort: 'OEM RAM',
    oemParts: [], // TODO: add real OEM cross-reference part numbers from Bill
    img: '/assets/board-green.jpg',
    desc: 'Memory upgrades for Fanuc 16 and 18 series controls, from 256K to 2M. Also ask about 16/18/21i-A generation controls.',
    seo: 'Fanuc 16 / 18 memory upgrade — FANRAM memory boards, 256K to 2M, including 16/18/21i-A.'
  }
];

export const services = [
  {
    tag: 'RETROFIT',
    name: 'Control retrofits',
    desc: 'Modernize a legacy control while keeping the machine you trust.',
    long: 'When memory alone is not enough, we retrofit legacy controls — keeping the iron you trust while replacing the electronics that hold it back. Scoped and quoted per machine.'
  },
  {
    tag: 'SERVICE',
    name: 'In-person & remote service',
    desc: 'On your floor or over the wire — diagnosis and repair.',
    long: 'Diagnosis and repair on your shop floor or remotely. Parameter recovery, board-level repair, and the odd mystery only a 40-year veteran recognizes on sight.'
  },
  {
    tag: 'SUPPORT',
    name: 'Technical support',
    desc: 'Talk to the engineer who built your board, not a call centre.',
    long: 'Free phone and email support for the life of every Tulip product. Install walk-throughs, autoload help, parameter questions — you reach the engineer directly.'
  },
  {
    tag: 'CONSULTATION',
    name: 'Consultation',
    desc: "Upgrade, retrofit, or replace? We'll give you a straight answer.",
    long: 'Not sure whether to upgrade, retrofit, or walk away? We will look at your machine and give you a straight answer — even when the answer is not us.'
  }
];

export const devProducts = [
  {
    id: 'lcd',
    tag: 'FANUC 0 SERIES',
    name: 'Colour-LCD conversion',
    deposit: '$500',
    desc: 'Colour LCD front panel for Fanuc 0 controls — replaces the original CRT and panel. Demonstrated at IMTS.'
  },
  {
    id: 'usb',
    tag: 'FANUC LEGACY CONTROLS',
    name: 'USB program input',
    deposit: '$250',
    desc: 'Load part programs from a USB stick instead of RS-232 drip-feed. In active development.'
  }
];
