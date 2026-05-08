// Runtime verification harness for v2 lite.
// Boots a headless Chromium, navigates to localhost:5173, waits for the page
// to settle, captures every console error and uncaught page error, and exits
// non-zero if anything is broken. Use during construction of v2 lite to close
// the build -> render -> console loop without manual browser checks.
//
// Usage:
//   node tools/verify-runtime.mjs                      # default: /
//   node tools/verify-runtime.mjs /work/cyper          # any path
//   node tools/verify-runtime.mjs / --screenshot       # also write a PNG

import { chromium } from 'playwright';

const BASE = process.env.BASE_URL || 'http://localhost:5173';
const path = process.argv[2] || '/';
const wantScreenshot = process.argv.includes('--screenshot');

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await context.newPage();

const errors = [];
const warnings = [];

page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`[console.error] ${msg.text()}`);
  if (msg.type() === 'warning') warnings.push(`[console.warn] ${msg.text()}`);
});
page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`));
page.on('requestfailed', (req) => {
  const failure = req.failure();
  errors.push(`[requestfailed] ${req.url()} - ${failure?.errorText || 'unknown'}`);
});

const url = `${BASE}${path}`;
console.log(`-> ${url}`);

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
} catch (err) {
  console.log(`navigation failed: ${err.message}`);
  await browser.close();
  process.exit(2);
}

// allow gsap entrance timeline to settle (~2.0s) plus buffer
await page.waitForTimeout(2500);

// warm-scroll the page so every IntersectionObserver fires.
// Sections that animate on enter (Manifesto words, Process pasos, Selected
// Work cards) only reveal when their threshold intersects the viewport.
// A static fullPage screenshot wouldn't trigger them, so we scroll through
// in steps, settle, then return to top before capture.
await page.evaluate(async () => {
  const total = document.documentElement.scrollHeight;
  const step = window.innerHeight * 0.6;
  for (let y = 0; y <= total; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(800);

// snapshot key landmarks
const snapshot = await page.evaluate(() => {
  const pickRect = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), text: el.textContent?.trim().slice(0, 80) };
  };
  return {
    title: document.title,
    h1: pickRect('h1'),
    sections: Array.from(document.querySelectorAll('section[id]')).map((s) => ({
      id: s.id,
      h: Math.round(s.getBoundingClientRect().height),
    })),
  };
});

console.log(`title: ${snapshot.title}`);
console.log(`h1: ${snapshot.h1 ? `${snapshot.h1.w}x${snapshot.h1.h} "${snapshot.h1.text}"` : 'MISSING'}`);
console.log('sections:');
for (const s of snapshot.sections) console.log(`  #${s.id} -> ${s.h}px`);

if (wantScreenshot) {
  const out = `/tmp/clickiclick-${path.replace(/\W+/g, '_') || 'home'}.png`;
  await page.screenshot({ path: out, fullPage: true });
  console.log(`screenshot: ${out}`);
}

console.log(`\nconsole errors: ${errors.length}`);
for (const e of errors) console.log(`  ${e}`);
if (warnings.length) {
  console.log(`\nwarnings: ${warnings.length}`);
  for (const w of warnings.slice(0, 5)) console.log(`  ${w}`);
}

await browser.close();
process.exit(errors.length > 0 ? 1 : 0);
