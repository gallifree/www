# gallifree.app

Website of [Gallifree](https://github.com/gallifree). Vike + React + motion + i18next (EN, FR, ZH, ES, PT, DE), prerendered to static HTML.

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # checks translations, outputs dist/client
```

Deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).
One-time setup: repo **Settings → Pages → Source: GitHub Actions**, then add the custom domain `gallifree.app`
(`public/CNAME`) and point DNS at GitHub Pages (apex `A` records 185.199.108–111.153, or `ALIAS` to `gallifree.github.io`).

Add a project: an entry in `PROJECTS` (`pages/index/+Page.tsx`) and its description under `projects.<name>` in every `src/i18n/*.json`.
