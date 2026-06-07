# Powers of Mind — Site Guide (12 pages)

Everything shares one design and one menu. Here's the whole package.

## Files

**Pages (12):**
`index.html` (Home) · `services.html` (Services & Pricing) · `assessments.html` · `couples.html` · `sports-psychology.html` · `biofeedback.html` · `ketamine.html` · `porn-treatment.html` · `dr-powers.html` · `ashlyn.html` · `jake.html` · `contact.html`

**Shared (2):**
`styles.css` — the whole look (colors, fonts, layout)
`script.js` — **the menu, the footer, and the page behavior**

Upload **all 14 files together** at the top level of your GitHub repo. (Same publishing steps as before: Add file → Upload files → Commit; then Settings → Pages → Deploy from a branch → main → / (root).)

---

## The big improvement: one menu, edited once

Earlier, the menu was copied into every page. With 12 pages that's unworkable, so the **header (menu) and footer now live in `script.js`** and are inserted into every page automatically. Each page just has two empty markers — `<div id="site-header"></div>` near the top and `<div id="site-footer"></div>` near the bottom — and the script fills them in.

**What this means for you:**
- **To change the menu, footer, address, or hours → edit `script.js` once.** Every page updates. Look near the top of the file for the plain-English lists (`serviceLinks`, the address line "901 N. Gadsden Street", and the hours "Mon–Fri · 9:00 AM–6:00 PM").
- **To add a future service page** → create the new `.html` file, then add one line to the `serviceLinks` list in `script.js`. It automatically appears in the Services dropdown and the footer.

The **Services dropdown** in the menu lists all six service pages; on phones it expands underneath "Services."

> Editing page *content* (the words on Dr. Powers' page, a price, a paragraph) still happens in that one page's file, as you'd expect.

---

## Previewing

Because the pages now pull in `styles.css` and `script.js`, the little in-chat preview may look unstyled or show no menu — that's just the preview sandbox, not a real problem. To see it correctly: download all the files into one folder and double-click `index.html` (it'll open in your browser fully working), or just upload to GitHub and view the live link.

---

## Confirmed and applied
- Group therapy: **$35** ✓
- **Hulsey** spelling ✓
- Address: **901 N. Gadsden Street, Tallahassee, FL** (in footer + Contact page + an embedded Google Map) ✓
- Hours: **Monday–Friday, 9:00 AM–6:00 PM** ✓ *(I assumed Mon–Fri — tell me if you see weekend hours.)*

## Please review before publishing
- **Ketamine-Assisted Therapy page:** I wrote a careful, general description and added a visible note to confirm the program specifics — especially the **medical/prescribing provider** and **pricing** — since KAP requires medical oversight. Please make sure it reflects exactly how you offer it.
- **Sports psychology & biofeedback pricing:** currently "Contact for pricing." Give me numbers and I'll drop them in.
- **Photos:** Dr. Powers and Jake still load from your old WordPress site; Ashlyn shows an "AH" monogram. Add real images when ready (see the photo steps in the earlier deploy guide).

---

### Checklist
- [ ] All 14 files uploaded together at the repo's top level
- [ ] Site loads; menu + dropdown work on desktop and phone
- [ ] Ketamine page reviewed for accuracy (provider + pricing)
- [ ] Sports/biofeedback pricing added (or left as "contact")
- [ ] Own photos added; Ashlyn photo uploaded
- [ ] Weekend hours confirmed
- [ ] (When ready) custom domain pointed via GoDaddy DNS — see Part 3 of the GitHub Pages guide
