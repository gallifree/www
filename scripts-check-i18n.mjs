// Fails if a translation key used in the code is missing, or if a locale's keys differ from en.json.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const flat = (o, p = "") =>
  Object.entries(o).flatMap(([k, v]) => (typeof v === "object" ? flat(v, `${p}${k}.`) : [`${p}${k}`]));
const load = (l) => new Set(flat(JSON.parse(readFileSync(`src/i18n/${l}.json`, "utf8"))));
const locales = readdirSync("src/i18n").filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5));
const en = load("en");
const files = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? files(join(d, f)) : [join(d, f)]));
const used = new Set();
for (const f of [...files("pages/(gallifree)"), ...files("src")].filter((f) => /\.tsx?$/.test(f))) {
  for (const m of readFileSync(f, "utf8").matchAll(/\bt\(\s*"([a-zA-Z0-9_.]+)"/g)) used.add(m[1]);
}
let bad = 0;
for (const k of used) if (!en.has(k)) (bad++, console.log(`missing en: ${k}`));
for (const l of locales.filter((l) => l !== "en")) {
  const s = load(l);
  for (const k of en) if (!s.has(k)) (bad++, console.log(`${l} lacks ${k}`));
  for (const k of s) if (!en.has(k)) (bad++, console.log(`en lacks ${k} (from ${l})`));
}
console.log(bad ? `${bad} problem(s)` : `i18n ok (${locales.length} locales, ${used.size} static keys used)`);
process.exit(bad ? 1 : 0);
