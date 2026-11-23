import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Static site for GitHub Pages: every page is prerendered to HTML at build time.
export default {
  extends: [vikeReact],
  prerender: true,
  title: "Gallifree — Free & open-source software",
  description: "Gallifree builds free and open-source software, mostly in Rust.",
  lang: "en",
} satisfies Config;
