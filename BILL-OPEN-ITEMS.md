# Tulip site — open items for Bill

*Generated from src/data/products.ts. Every item below is a place where the price list was silent, ambiguous, or where a claim came from somewhere other than Bill. Confirm-or-correct format: none of these need writing from scratch.*

## The two blockers

1. **F15A-2M (US$2,995) — the 15A test control is faulty, so boards cannot be properly tested.** Highest-priced board in the line. It is on the site as spec-only, no purchase path, until this is fixed. What is wrong with the control, and what would it take to repair it?
2. **Honda connectors gate five SKUs** — FANRAM-32k, -128k, -512k, -2M and -1.5M, i.e. the whole Fanuc 6 / 9 / 11 / 12 family. Quantity, unit cost, supplier and lead time?

## Everything else, by product or platform

### Fanuc 6, 9, 11 and 12 (bubble memory)
- Honda connectors: quantity, unit cost, supplier and lead time. Five SKUs are gated on this purchase.
- No motherboard or OEM bubble-module part numbers given for the 6/9/11/12 platform — are there numbers we can list for search?

### Fanuc 16A / 18A
- Column reading: header was "size / usable / PPS" but rows carry two figures. Confirm the second figure is usable part-program capacity.

### Fanuc 16B (FROM / flash)
- This platform shares the "16B" label with A16B-3200-0110/-0170 above but uses a different motherboard (A16B-3200-0010). Is there a customer-facing way to tell them apart at the machine?

### Fanuc 15A
- The 15A test control has a fault, so boards cannot be properly tested. What is wrong with it and what would fix it?

### Mitsubishi 500 (Mazak PLUS)
- Which 525 versions are supported, and how does a customer tell? "Some 525 versions" will generate wrong orders as written.
- No OEM module or motherboard numbers supplied for the Mitsubishi 500 — anything we can list?

### Yasnac MX2 / LX2 / MX3 / LX3 / i80
- No OEM part numbers supplied for any Yasnac board. These are the pages most likely to rank on part number — anything you have would help.
- YASRAM-i80-512 is noted "ordered from Nexas" — do we buy these from Nexas, or does Nexas order them from us?

### FANRAM-32k
- Does this fit all of 6A / 6B / 6B2, or only some? The model column just says "6".

### FANRAM-128k
- Confirm or correct: does FANRAM-128k replace Fanuc A87L-0001-0084 and A87L-0001-0018? (Found on a reseller listing, not from us.)

### FANRAM-512k
- Do we supply the 6B level-up software, or does the customer need to source it?

### FAN16A-512k
- Which of the four OEM modules (A20B-2900-0530 / -0531 / -0540 / -0541) does FAN16A-512k actually replace or supersede?

### FAN16B/C-2M
- Is the NCBasic version included in the $1,895, or priced separately?
- Should the 18B / 18-TC 512K limit be stated on the page, or handled at quote? (Recommend stating it — it prevents a return.)

### F16B-FROM
- Does one F16B-FROM cover all eight listed modules, or are there configuration options at order time?
- What flash and SRAM capacity does our board provide? The OEM table gives theirs, not ours.

### F15A-2M
- BLOCKER: the 15A test control is faulty and boards cannot be properly tested. What is the fault and what would it take to fix?

### MITRAM500
- What capacity does MITRAM500 provide? Not stated on the price list.
- Which 525 versions are supported?

### YASRAM-MX2/LX2-128
- Stock note reads "Unclear; years between orders" — that is a demand signal, not a lead time. What lead time can we actually promise?

### YASRAM-MX3/LX3-1M
- Same as MX2/LX2: what lead time can we promise?

### YASRAM-i80-512
- Price list says "ordered from Nexas. 1 week?" — do we buy these from Nexas or does Nexas order from us? The "1 week?" has a question mark; is it firm?

## Not in the price list at all

- **FANRAM deposit & lead time.** The site now states every FANRAM board is built to order with a US$250 deposit and a 2–4 week lead time, because the legacy connectors are custom-ordered. Confirm the deposit is $250 across all five FANRAM SKUs, and whether it is credited toward the order or refundable if the build stalls.
- **Product descriptions.** Section 2 of the questionnaire came back blank, so every one-line description on the site is currently a draft written from the price list. They read fine but they are not your words yet.
- **Warranty term.** The site says three years. Still correct?
- **Customer references.** Dasco Engineering, Mancor Speers and Windsor Manufacturing — have they agreed to be named publicly?
- **Dealers.** Uptime Electronics Inc., Hoyland Industrial Services and Adaptive Control Systems join Nexas and DNC. Do all five want to be listed on a /dealers/ page?
- **Founding year.** Site currently says 1984, which is wrong under any reading. Proposal: "Serving CNC shops since 1979" as the trust line, with the entity history stated plainly on /about/ (Peiman Control Electronics Ltd. 1979, Tulip incorporated 1988, active from 1992).
