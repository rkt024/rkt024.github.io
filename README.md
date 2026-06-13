# Raj Kumar Tamang - Developer Portfolio

A modern, performant, and accessible developer portfolio website built with vanilla HTML, CSS, and JavaScript. Features a striking design with smooth animations, responsive layout, GitHub API integration, and optimized performance.

**Live Site:** https://rktamang.com.np/ (or https://rkt024.github.io/portfolio/)

## ✨ Features

- **Modern Design** — Sky/Indigo theme with glassmorphism effects, gradient text, and subtle animations
- **Fully Responsive** — Mobile-first approach, works beautifully on all devices (320px - 1440px+)
- **Accessible** — Semantic HTML, ARIA labels, focus management, skip links, reduced motion support
- **Performant** — No frameworks, minimal dependencies, lazy-loaded canvas, optimized CSS
- **Interactive** — Particle canvas background, counter animations, scroll reveals, smooth navigation
- **GitHub Integration** — Live GitHub stats, repository showcase with API fetching
- **SEO Ready** — Meta tags, Open Graph, structured data, semantic markup
- **Contact Form** — Formspree-ready contact form with validation

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/rkt024/portfolio.git
cd portfolio

# Serve locally (choose one)
# Option 1: Python (built-in)
python -m http.server 8000

# Option 2: Node.js
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Open http://localhost:8000
```

### Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── favicon.svg         # Site favicon
│   └── og-image.jpg        # Open Graph image (add your own 1200x630)
├── css/
│   └── styles.css          # All styles (custom properties, components, utilities)
├── js/
│   └── main.js             # All interactions (nav, animations, forms, canvas, GitHub API)
└── README.md               # This file
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/rkt024/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)**
   - Save

3. **Custom Domain (Optional)**
   - Add `CNAME` file with your domain (e.g., `rktamang.com.np`)
   - Configure DNS: `CNAME` → `rkt024.github.io`
   - Enable "Enforce HTTPS" in settings

4. **Your site will be live at:**
   - `https://rkt024.github.io/portfolio/` (project page)
   - `https://rkt024.github.io/` (user page, if repo named `rkt024.github.io`)
   - `https://rktamang.com.np/` (with custom domain)

### Netlify

1. Connect your GitHub repo to Netlify
2. Build command: *(none)*
3. Publish directory: `./` (root)
3. Deploy!

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### Cloudflare Pages

1. Connect GitHub repo
2. Build command: *(none)*
3. Build output directory: `./`
4. Deploy!

## ⚙️ Customization

### Colors & Theme
Edit CSS custom properties in `css/styles.css`:

```css
:root {
  --color-primary: #0ea5e9;      /* Main brand color (sky blue) */
  --color-secondary: #8b5cf6;    /* Accent color (purple) */
  --color-accent: #22d3ee;       /* Highlight color (cyan) */
  --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
}
```

### Content
Update `index.html` with your:
- Personal info (name, title, bio, location)
- Skills & proficiency levels
- Featured projects (in `#featured` section)
- All projects (in `#projects` section)
- Experience timeline
- Education
- Certifications
- Contact information
- Social links

### Featured Projects
The **Featured Projects** section (`#featured`) showcases your most important repositories prominently. These are the large cards with live previews.

Edit in `index.html`:
```html
<!-- Featured Project Card Template -->
<article class="featured__card" data-project="your-repo">
    <div class="featured__card-visual">
        <div class="featured__card-badge">Production</div>
        <div class="featured__card-preview">...</div>
    </div>
    <div class="featured__card-content">
        <div class="featured__card-meta">
            <span class="featured__card-tag">Tech1</span>
            <span class="featured__card-tag">Tech2</span>
        </div>
        <h3 class="featured__card-title">Project Name</h3>
        <p class="featured__card-description">Description...</p>
        <ul class="featured__card-highlights">
            <li><svg>...</svg> Highlight 1</li>
            <li><svg>...</svg> Highlight 2</li>
        </ul>
        <div class="featured__card-links">
            <a href="https://github.com/rkt024/your-repo" class="btn btn--ghost">Repository</a>
            <a href="#" class="btn btn--ghost">Demo</a>
        </div>
    </div>
</article>
```

### Form Endpoint
Update the form action in `index.html`:

```html
<form class="contact__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Options: [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), [GetForm](https://getform.io)

### GitHub Username
Update the GitHub username in `js/main.js`:

```javascript
const username = 'rkt024'; // Change to your GitHub username
```

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

Uses modern CSS (custom properties, grid, flexbox, clamp()) and JS (IntersectionObserver, requestAnimationFrame, Fetch API). No polyfills needed for supported browsers.

## ♿ Accessibility Checklist

- [x] Semantic HTML5 elements
- [x] ARIA labels & roles
- [x] Focus visible states
- [x] Skip to main content link
- [x] Color contrast (WCAG AA)
- [x] Reduced motion support
- [x] Keyboard navigable
- [x] Alt text for images
- [x] Form labels & validation
- [x] Responsive text sizing

## 🔧 Performance

- **No external JS frameworks** — ~19KB JS gzipped
- **Single CSS file** — ~47KB CSS gzipped
- **System fonts with fallback** — Google Fonts preloaded
- **Lazy-loaded canvas** — Only initializes when visible
- **Optimized SVGs** — Inline icons, no icon fonts
- **RequestIdleCallback** — Non-critical work deferred
- **GitHub API cached** — Browser caching for subsequent loads

Lighthouse scores (typical):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📝 Content Source

This portfolio incorporates content from:
- **Original Portfolio:** https://www.rktamang.com.np/
- **GitHub Repositories:** https://github.com/rkt024

### Integrated Sections:
- ✅ About/Bio
- ✅ Skills (Technical & Soft)
- ✅ Featured Projects (GitHub repos)
- ✅ All Projects
- ✅ Professional Experience
- ✅ Education
- ✅ Certifications (8 certifications)
- ✅ GitHub Stats & Repositories
- ✅ Contact Information
- ✅ Interests

## 📄 License

MIT License — feel free to use as a template for your own portfolio.

## 👤 Author

**Raj Kumar Tamang**
- GitHub: [@rkt024](https://github.com/rkt024)
- LinkedIn: [Raju Tamang](https://linkedin.com/in/raju-tamang)
- Email: rajtm...com
- Location: Jhapa, Koshi Province, Nepal

---

*Built with vanilla HTML, CSS & JavaScript — because sometimes less is more.*