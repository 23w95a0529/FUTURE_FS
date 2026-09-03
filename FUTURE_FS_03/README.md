# Nomad Coffee House — Website

A live demo website built for a local coffee shop / café, made to be handed to a real
business owner as a working prototype. Pure HTML, CSS, and JavaScript — no framework,
no build step, no backend required. Open `index.html` in a browser or host it on any
static file host (GitHub Pages, Netlify, Vercel).

## What's included

- `index.html` — single-page site: hero, menu, story, gallery, testimonials, hours/map, reservation form, footer
- `css/style.css` — full design system (colors, type, layout, responsive rules)
- `js/script.js` — mobile nav toggle, testimonial rotator, reservation form validation

## Running it locally

No build tools needed. Either:

1. Double-click `index.html`, or
2. Serve it locally so relative paths and the map embed behave the same as in
   production:
   ```bash
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```

## Deploying it

**GitHub Pages** (fastest for a free live demo link):
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Deploy from branch → `main` → `/ (root)`.
3. Your live URL will be `https://<username>.github.io/<repo-name>/`.

**Netlify / Vercel**: drag-and-drop this folder into either dashboard, or connect
the GitHub repo — no config needed since there's no build step.

## Customizing for the real business

Everything here is realistic placeholder content standing in for the owner's actual
details. Before pitching or launching, swap in:

- Business name, tagline, and logo/wordmark (`index.html`, `<title>`, header, footer)
- Real menu items and prices (`#menu` section)
- Real photos (replace the Unsplash URLs in `index.html` with the owner's own photos)
- Real address, phone, email, and hours (`#visit` section)
- The Google Maps embed — replace the `src` in the `<iframe>` with an embed URL for
  the business's actual address (Google Maps → Share → Embed a map)
- Social links in the footer
- Where the reservation form should actually send data — right now it's a front-end-only
  demo (see `initReserveForm` in `js/script.js`); wire it to a form backend such as
  Formspree, Netlify Forms, or a small serverless function to make it functional

## Tech notes

- Fonts: Fraunces (display) + Work Sans (body), loaded from Google Fonts
- No dependencies, no npm install — everything runs from static files
- Responsive down to mobile, with a collapsible nav menu
- Respects `prefers-reduced-motion`
