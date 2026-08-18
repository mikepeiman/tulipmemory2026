export const contact = {
  email: 'cnc@tulipmemory.com',
  phone: '289-389-6117',
  city: 'Kitchener, Ontario, Canada',
  founded: 1984
};

// Full product catalogue (families, control platforms, SKUs, pricing) lives
// in ./products.ts — it superseded the old hand-written family list here.

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
