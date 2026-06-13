# Raj Kumar Tamang - Developer Portfolio

A modern, performant, and focused developer portfolio website built with vanilla HTML, CSS, and JavaScript. Designed to showcase only the most impactful work and qualifications for maximum recruiter/client impact.

**Live Site:** https://rktamang.com.np/ (or https://rkt024.github.io/portfolio/)

## ✨ Features

- **Focused Content** — 3 flagship projects, 5 core skill categories, 5 key certifications, 3 professional roles
- **Modern Design** — Sky/Indigo theme with glassmorphism effects, gradient text, and subtle animations
- **Fully Responsive** — Mobile-first approach, works beautifully on all devices (320px - 1440px+)
- **Accessible** — Semantic HTML, ARIA labels, focus management, skip links, reduced motion support
- **Performant** — No frameworks, minimal dependencies, lazy-loaded canvas, optimized CSS
- **Interactive** — Particle canvas background, counter animations, scroll reveals, smooth navigation
- **GitHub Integration** — Live GitHub stats, repository showcase with API fetching
- **SEO Ready** — Meta tags, Open Graph, structured data, semantic markup

## 🎯 Portfolio Highlights

### 3 Flagship Projects
1. **DOLMA Office Portal** — Streamlit dashboard for Nepal's land management system (100+ daily users)
2. **Email Automation Suite** — Dual-protocol (Gmail SMTP + Zimbra SOAP) email automation
3. **Bank Transaction Management** — System for 7 major Nepalese banks with RK-format references

### 5 Core Skill Categories
- Programming & Query Languages (Python, SQL, JavaScript, Shell, HTML/CSS)
- Frameworks & Libraries (Flask, Pandas/NumPy, Matplotlib/Seaborn, Selenium, SQLAlchemy)
- Databases (MySQL, PostgreSQL, MongoDB, SQLite)
- DevOps & Infrastructure (Docker, Git/GitHub, Linux, VS Code/Jupyter, CI/CD)
- Data Engineering (ETL Pipelines, Data Wrangling, API Integration, Web Scraping, Kafka/Hadoop learning)

### 5 Core Certifications
- IBM Data Engineering Foundations (5-course specialization)
- Relational Database Administration (DBA)
- Linux Commands & Shell Scripting Essentials V2
- Career Essentials in Software Development (Microsoft & LinkedIn)
- Computational Thinking for Problem Solving (University of Pennsylvania)

### 10+ Years Experience
- System Support Specialist, Government of Nepal (Dec 2013 – Present)
- Administrative Assistant, Kanakai Multiple Campus (Dec 2011 – Mar 2013)
- Computer Teacher, Pashupati English Secondary School (2008 – 2012)

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

### Netlify / Vercel / Cloudflare Pages
Connect your GitHub repo — build command: *(none)*, publish directory: `./`

## ⚙️ Customization

### Colors & Theme
Edit CSS custom properties in `css/styles.css`:
```css
:root {
  --color-primary: #0ea5e9;      /* Main brand color (sky blue) */
  --color-secondary: #8b5cf6;    /* Accent color (purple) */
  --color-accent: #22d3ee;       /* Highlight color (cyan) */
}
```

### Content
Update `index.html` with your personal info, featured projects, experience, etc.

### GitHub Username
Update in `js/main.js`:
```javascript
const username = 'rkt024'; // Change to your GitHub username
```

### Form Endpoint
Update in `index.html`:
```html
<form class="contact__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## ♿ Accessibility Checklist

- [x] Semantic HTML5 elements
- [x] ARIA labels & roles
- [x] Focus visible states
- [x] Skip to main content link
- [x] Color contrast (WCAG AA)
- [x] Reduced motion support
- [x] Keyboard navigable
- [x] Form labels & validation

## 🔧 Performance

- **No external JS frameworks** — ~18KB JS gzipped
- **Single CSS file** — ~45KB CSS gzipped
- **System fonts with fallback** — Google Fonts preloaded
- **Lazy-loaded canvas** — Only initializes when visible
- **Optimized SVGs** — Inline icons, no icon fonts
- **RequestIdleCallback** — Non-critical work deferred

## 📄 License

MIT License — feel free to use as a template for your own portfolio.

## 👤 Author

**Raj Kumar Tamang**
- GitHub: [@rkt024](https://github.com/rkt024)
- LinkedIn: [Raju Tamang](https://linkedin.com/in/raju-tamang)
- Email: rajtm...com
- Location: Jhapa, Koshi Province, Nepal

---

*Built with vanilla HTML, CSS & JavaScript — focused on what matters most.*