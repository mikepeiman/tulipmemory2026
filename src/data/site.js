export const contact = {
  email: 'cnc@tulipmemory.com',
  phone: '289-389-6117',
  city: 'Kitchener, Ontario, Canada',
  founded: 1984
};

// Full product catalogue (families, control platforms, SKUs, pricing) lives
// in ./products.ts — it superseded the old hand-written family list here.

// Each service gets its own page at /services/<slug>/ — the copy below is the
// source for those pages. Keep claims grounded: nothing here may promise
// response times, pricing or capabilities Bill hasn't signed off on.
export const services = [
  {
    slug: 'retrofit',
    tag: 'RETROFIT',
    name: 'Control retrofits',
    desc: 'Modernize a legacy control while keeping the machine you trust.',
    long: 'When memory alone is not enough, we retrofit legacy controls — keeping the iron you trust while replacing the electronics that hold it back. Scoped and quoted per machine.',
    intro:
      'Some machines keep earning for decades after their control starts letting them down. A retrofit keeps the iron you trust — the casting, the ways, the spindle — and replaces the electronics that hold it back.',
    points: [
      {
        h: 'Assessment before anything else',
        p: "We look at the machine, the control and how you use it before we quote anything. Not every machine is a retrofit candidate — if yours isn't, we'd rather tell you now."
      },
      {
        h: 'Keep what works',
        p: 'Sound iron, motors and drives stay. We replace the control electronics around them, so your operators keep the machine they already know.'
      },
      {
        h: 'Scoped and quoted per machine',
        p: 'No two retrofits are the same. You get a written scope and a price before any work starts — not a surprise invoice after.'
      }
    ]
  },
  {
    slug: 'service',
    tag: 'SERVICE',
    name: 'In-person & remote service',
    desc: 'On your floor or over the wire — diagnosis and repair.',
    long: 'Diagnosis and repair on your shop floor or remotely. Parameter recovery, board-level repair, and the odd mystery only a 40-year veteran recognizes on sight.',
    intro:
      'A legacy control down means a machine down. We diagnose and repair on your shop floor or remotely — from routine parameter problems to the odd mystery only a 40-year veteran recognizes on sight.',
    points: [
      {
        h: 'Parameter recovery',
        p: 'Lost parameters are the classic legacy-control emergency — often after a backup battery dies. We help you get them back in, and set you up so the next battery change is a non-event.'
      },
      {
        h: 'Board-level repair',
        p: 'Component-level diagnosis and repair of control and memory boards — the same bench that builds the new ones.'
      },
      {
        h: 'On your floor or over the wire',
        p: 'We travel from our shop in Kitchener, Ontario — call to talk geography and scheduling. Many problems (parameters, settings, procedures) never need a site visit: phone or email reaches the engineer directly.'
      }
    ]
  },
  {
    slug: 'support',
    tag: 'SUPPORT',
    name: 'Technical support',
    desc: 'Talk to the engineer who built your board, not a call centre.',
    long: 'Free phone and email support for the life of every Tulip product. Install walk-throughs, autoload help, parameter questions — you reach the engineer directly.',
    intro:
      'Every Tulip product includes free phone and email support for its entire life. No support contract, no expiry date — boards we shipped in the 1990s are still supported today.',
    points: [
      {
        h: 'Install walk-throughs',
        p: "Fitting the board yourself? We'll walk you through it — seating, settings and the first power-up — so the install is the easy part."
      },
      {
        h: 'Autoload and parameter help',
        p: 'Loading parameters, setting up autoload, chasing a setting that changed — call or email and work through it with someone who knows the control.'
      },
      {
        h: 'The engineer answers',
        p: 'No call centre and no ticket queue. The person who picks up designed and built your board — and has most likely seen your problem before.'
      }
    ]
  },
  {
    slug: 'consultation',
    tag: 'CONSULTATION',
    name: 'Consultation',
    desc: "Upgrade, retrofit, or replace? We'll give you a straight answer.",
    long: 'Not sure whether to upgrade, retrofit, or walk away? We will look at your machine and give you a straight answer — even when the answer is not us.',
    intro:
      'Repair the control, add memory, retrofit, or walk away? We look at your machine and your workload and give you a straight answer — even when the answer is not us.',
    points: [
      {
        h: 'An honest options list',
        p: 'The realistic paths for your machine, with the trade-offs of each in plain language — and the costs we can put a number on, numbered.'
      },
      {
        h: 'Buying a machine?',
        p: "Looking at a used machine with a legacy control? Talk to us before you commit: what the control is, what support still exists for it, and what it takes to keep it alive."
      },
      {
        h: 'Even when the answer is not us',
        p: "If your machine wants a control we don't serve, or the economics don't make sense, we'll say so and point you the right way."
      }
    ]
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
