/* ==========================================================================
   MAIN JAVASCRIPT - Portfolio Interactions
   ========================================================================== */

// ==========================================================================
// NAVIGATION
// ==========================================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const nav = document.getElementById('nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close menu on link click
  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// Nav Scroll Effect
function handleNavScroll() {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ==========================================================================
// SCROLL REVEAL ANIMATIONS
// ==========================================================================
function initRevealElements() {
  const elementsToReveal = [
    '.about__content > *',
    '.about__sidebar > *',
    '.skills__category',
    '.featured__card',
    '.project__card',
    '.experience__item',
    '.education__card',
    '.certification__card',
    '.github__stats-card',
    '.github__repos-card',
    '.contact__info > *',
    '.contact__form'
  ];

  elementsToReveal.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('reveal');
      if (index < 4) {
        el.classList.add(`reveal-delay-${index + 1}`);
      }
    });
  });
}

initRevealElements();

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ==========================================================================
// HERO COUNTER ANIMATION
// ==========================================================================
const statValues = document.querySelectorAll('.hero__stat-value[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 2000;
      const start = 0;
      const startTime = performance.now();

      function animateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (target - start) * eased);
        el.textContent = current;
        
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      }

      requestAnimationFrame(animateCounter);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statValues.forEach(el => counterObserver.observe(el));

// ==========================================================================
// HERO CANVAS PARTICLES
// ==========================================================================
const heroCanvas = document.getElementById('heroCanvas');
let particles = [];
let animationId = null;

function initHeroCanvas() {
  if (!heroCanvas) return;
  
  const ctx = heroCanvas.getContext('2d');
  let width = 0;
  let height = 0;
  
  function resize() {
    const rect = heroCanvas.parentElement.getBoundingClientRect();
    width = heroCanvas.width = rect.width;
    height = heroCanvas.height = rect.height;
  }
  
  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 15000), 80);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '14, 165, 233' : '139, 92, 246'
      });
    }
  }
  
  function draw() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    
    // Draw particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      ctx.fill();
    });
  }
  
  function update() {
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));
    });
  }
  
  function animate() {
    draw();
    update();
    animationId = requestAnimationFrame(animate);
  }
  
  function init() {
    resize();
    createParticles();
    animate();
  }
  
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      createParticles();
    }, 100);
  }, { passive: true });
  
  // Start when hero is visible
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      init();
      heroObserver.unobserve(heroCanvas.parentElement);
    }
  }, { rootMargin: '100px' });
  
  heroObserver.observe(heroCanvas.parentElement);
}

initHeroCanvas();

// ==========================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetPos = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      history.pushState(null, null, targetId);
    }
  });
});

// ==========================================================================
// GITHUB API INTEGRATION
// ==========================================================================
async function fetchGitHubData() {
  const username = 'rkt024';
  
  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    if (!userResponse.ok) throw new Error('Failed to fetch user data');
    const userData = await userResponse.json();
    
    // Update profile info
    const avatarEl = document.getElementById('githubAvatar');
    if (avatarEl) avatarEl.src = userData.avatar_url;
    
    const nameEl = document.getElementById('githubName');
    if (nameEl) nameEl.textContent = userData.name || userData.login;
    
    const bioEl = document.getElementById('githubBio');
    if (bioEl) bioEl.textContent = userData.bio ? `@${userData.login} · ${userData.bio}` : `@${userData.login}`;
    
    // Update stats
    const statRepos = document.getElementById('statRepos');
    const statStars = document.getElementById('statStars');
    const statFollowers = document.getElementById('statFollowers');
    const statFollowing = document.getElementById('statFollowing');
    
    if (statRepos) statRepos.textContent = userData.public_repos.toLocaleString();
    if (statFollowers) statFollowers.textContent = userData.followers.toLocaleString();
    if (statFollowing) statFollowing.textContent = userData.following.toLocaleString();
    
    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!reposResponse.ok) throw new Error('Failed to fetch repos');
    const repos = await reposResponse.json();
    
    // Calculate total stars
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    if (statStars) statStars.textContent = totalStars.toLocaleString();
    
    // Featured repos (prioritize the main projects)
    const featuredNames = ['pam_final', 'email_sender', 'office_email', 'PDF-Splitter', 'lrims_automation', 'google_collab'];
    const featuredRepos = repos
      .filter(repo => featuredNames.some(name => repo.name.toLowerCase().includes(name.toLowerCase())))
      .sort((a, b) => featuredNames.findIndex(n => a.name.toLowerCase().includes(n.toLowerCase())) - 
                        featuredNames.findIndex(n => b.name.toLowerCase().includes(n.toLowerCase())));
    
    // Other repos (excluding featured)
    const otherRepos = repos
      .filter(repo => !featuredNames.some(name => repo.name.toLowerCase().includes(name.toLowerCase())) && !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);
    
    // Combine and render
    const allRepos = [...featuredRepos, ...otherRepos].slice(0, 8);
    renderGitHubRepos(allRepos);
    
  } catch (error) {
    console.warn('GitHub API fetch failed:', error);
    renderFallbackRepos();
  }
}

function renderGitHubRepos(repos) {
  const container = document.getElementById('githubRepos');
  if (!container) return;
  
  if (repos.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-muted); text-align: center; padding: var(--space-4);">No repositories found</p>';
    return;
  }
  
  container.innerHTML = repos.map(repo => `
    <article class="github__repo-item" data-repo="${repo.name}">
      <div class="github__repo-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>
      <div class="github__repo-info">
        <h4 class="github__repo-name">${repo.name}</h4>
        ${repo.description ? `<p class="github__repo-desc">${escapeHtml(repo.description)}</p>` : ''}
        <div class="github__repo-meta">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>🍴 ${repo.forks_count}</span>
          ${repo.language ? `<span>${escapeHtml(repo.language)}</span>` : ''}
          <span>${new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      </div>
      <a href="${repo.html_url}" target="_blank" rel="noopener" class="github__repo-link">View</a>
    </article>
  `).join('');
}

function renderFallbackRepos() {
  const container = document.getElementById('githubRepos');
  if (!container) return;
  
  const fallbackRepos = [
    { name: 'pam_final', description: 'DOLMA Office Portal - Streamlit dashboard for Nepal land management', url: 'https://github.com/rkt024/pam_final' },
    { name: 'email_sender', description: 'Email Automation Suite - Gmail SMTP + Zimbra SOAP', url: 'https://github.com/rkt024/email_sender' },
    { name: 'office_email', description: 'Bank Transaction Management System for 7 Nepalese banks', url: 'https://github.com/rkt024/office_email' },
    { name: 'PDF-Splitter', description: 'PDF splitting tool with table file management', url: 'https://github.com/rkt024/PDF-Splitter' },
  ];
  
  container.innerHTML = fallbackRepos.map(repo => `
    <article class="github__repo-item">
      <div class="github__repo-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
      </div>
      <div class="github__repo-info">
        <h4 class="github__repo-name">${repo.name}</h4>
        <p class="github__repo-desc">${repo.description}</p>
        <div class="github__repo-meta"><span>Featured</span></div>
      </div>
      <a href="${repo.url}" target="_blank" rel="noopener" class="github__repo-link">View</a>
    </article>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize GitHub data fetching
fetchGitHubData();

// ==========================================================================
// CONTACT FORM HANDLING
// ==========================================================================
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span><svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg>';
    
    const formData = new FormData(contactForm);
    
    // Add spin animation dynamically
    const style = document.createElement('style');
    style.textContent = `
      .spin {
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        submitBtn.innerHTML = '<span>Sent!</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      submitBtn.innerHTML = '<span>Failed - Try Again</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';
      submitBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    }
    
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
    }, 3000);
  });
}

// ==========================================================================
// KEYBOARD NAVIGATION FOR CARDS
// ==========================================================================
document.querySelectorAll('.featured__card, .project__card, .github__repo-item').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const link = card.querySelector('.featured__card-links .btn, .project__card-link, .github__repo-link');
      if (link) {
        e.preventDefault();
        link.click();
      }
    }
  });
  
  // Make cards focusable
  card.setAttribute('tabindex', '0');
});

// ==========================================================================
// DYNAMIC YEAR IN FOOTER
// ==========================================================================
const yearElements = document.querySelectorAll('[data-year]');
yearElements.forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ==========================================================================
// CONSOLE EASTER EGG
// ==========================================================================
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #0ea5e9;');
console.log('%cThanks for checking out my portfolio code.', 'font-size: 14px; color: #9db4c8;');
console.log('%cBuilt with vanilla HTML, CSS & JS — no frameworks needed.', 'font-size: 14px; color: #6b889e;');
console.log('%c🔗 github.com/rkt024', 'font-size: 14px; color: #0ea5e9;');

// ==========================================================================
// PERFORMANCE: LAZY LOAD NON-CRITICAL RESOURCES
// ==========================================================================
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    fontLink.href = 'https://fonts.gstatic.com/s/spacegrotesk/v21/UGZytkOmKHpw-tevn6IhyA.woff2';
    document.head.appendChild(fontLink);
  });
}

// Export for potential module usage
window.Portfolio = {
  initRevealElements,
  initHeroCanvas,
  fetchGitHubData
};