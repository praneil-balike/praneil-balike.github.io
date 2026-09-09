# Praneil Balike — Personal Website

A typography-led, static personal website built for GitHub Pages. No build step, no framework, and no external runtime dependencies.

## Structure

```text
praneil-personal-site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── favicon.svg
├── .gitignore
└── README.md
```

## Contact

- Email: `pbalike@sas.upenn.edu`
- LinkedIn: https://www.linkedin.com/in/praneilbalk
- GitHub: https://github.com/praneil-balike

Optional edits:

- Add your real resume PDF to `assets/` and add a button linking to it.
- Add real GitHub repository links to the project entries once the repos are public.
- Change the GPA or graduation year if your official resume line changes.

## Run locally

Just open `index.html` in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy with GitHub Pages

### Option 1: User site

Create a GitHub repo named:

```text
your-github-username.github.io
```

Then commit these files to the root of that repo.

```bash
git init
git add .
git commit -m "Build personal website"
git branch -M main
git remote add origin https://github.com/your-github-username/your-github-username.github.io.git
git push -u origin main
```

Your site should publish at:

```text
https://your-github-username.github.io
```

### Option 2: Project site

Commit this folder to any repo, then go to:

```text
Settings → Pages → Build and deployment → Deploy from a branch → main → /root
```

## Design notes

- Static HTML/CSS/JS for GitHub Pages, with no build step or font downloads.
- System serif headings, a neutral gray background, and a single rust accent.
- Plain project entries and ruled sections in place of glass cards and decorative animation.
- Responsive mobile navigation with Escape handling and keyboard focus management.
- Content and navigation remain available when JavaScript is disabled.
