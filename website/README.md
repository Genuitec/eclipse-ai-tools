# Website

The documentation site for Inline Diff for Eclipse and ChangeReview, built with
[Docusaurus](https://docusaurus.io/).

- `docs/inline-diff/` – Inline Diff pages, served at `/inline-diff/`
- `docs/changereview/` – ChangeReview pages, served at `/changereview/`
- `sidebars.js` – one sidebar per product
- `src/pages/index.js` – the landing page

## Local development

```bash
npm ci
npm run start
```

## Build

```bash
npm run build
```

## Deployment

GitHub Actions (`.github/workflows/deploy-pages.yml`) builds and deploys the
site on pushes to `main` that change `website/`. You can also run
**Deploy documentation to GitHub Pages** manually from the **Actions** tab.

In repository **Settings > Pages**, set **Source** to **GitHub Actions**.

The workflow uses GitHub Pages' configured origin and base path, so the site is
served at https://genuitec.github.io/eclipse-ai-tools/.
