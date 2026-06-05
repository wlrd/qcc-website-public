# Qadeer Coffee Co Website

Public static deploy copy for the Qadeer Coffee Co website.

This repo contains only the files needed to publish the site:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `.github/workflows/pages.yml`

The site is plain HTML, CSS, and JavaScript. GitHub Pages can host it without a server or monthly hosting bill.

## Local Preview

```sh
python3 -m http.server 5173
```

Then open:

```txt
http://localhost:5173/
```

## GitHub Pages

The workflow deploys the static site from `main`.

To enable:

1. Open this repository on GitHub.
2. Go to Settings -> Pages.
3. Set Source to GitHub Actions.

After the workflow succeeds, the site will be available at:

```txt
https://wlrd.github.io/qcc-website-public/
```
