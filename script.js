// ============================================
//  CLAYWORLD v2 — JavaScript Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  //  1. LOADING SCREEN
  // ============================================
  const loader = document.getElementById('loader');
  const hideLoader = () => {
    setTimeout(() => loader?.classList.add('hidden'), 600);
  };
  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 2500); // Fallback
  }

  // ============================================
  //  2. DARK MODE TOGGLE
  // ============================================
  const darkToggle = document.getElementById('darkToggle');
  const toggleIcon = darkToggle?.querySelector('.toggle-icon');
  const html       = document.documentElement;

  const applyTheme = (dark) => {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (toggleIcon) toggleIcon.textContent = dark ? '☀️' : '🌙';
  };

  const savedDark = localStorage.getItem('clayworld-dark') === 'true';
  applyTheme(savedDark);

  darkToggle?.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    applyTheme(!isDark);
    localStorage.setItem('clayworld-dark', String(!isDark));
  });

  // ============================================
  //  3. SCROLL PROGRESS BAR
  // ============================================
  const progressBar = document.getElementById('scrollProgress');
  const updateProgress = () => {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    const pct      = total > 0 ? (scrolled / total) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  };

  // ============================================
  //  4. BACK TO TOP
  // ============================================
  const backToTop = document.getElementById('backToTop');
  const updateBackToTop = () => {
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  };
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ============================================
  //  NAVBAR + SCROLL HANDLER
  // ============================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    updateProgress();
    updateBackToTop();
  }, { passive: true });

  // ============================================
  //  5. HAMBURGER MENU
  // ============================================
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileMenu?.classList.remove('open');
    });
  });

  // ============================================
  //  6. FAQ ACCORDION
  // ============================================
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling?.classList.remove('open');
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer?.classList.add('open');
      }
    });
  });

  // ============================================
  //  INTERSECTION OBSERVER (Reveal)
  // ============================================
  const revealTargets = document.querySelectorAll(
    '.feature-card, .testi-card, .gallery-card, .section-header, .stat-item, .pricing-card, .faq-item'
  );
  revealTargets.forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${(i % 5) + 1}`);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => observer.observe(el));

  // ============================================
  //  PARALLAX BLOBS
  // ============================================
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    blobs.forEach((blob, i) => {
      const s = (i + 1) * 14;
      blob.style.transform = `translate(${dx * s}px, ${dy * s}px)`;
    });
  });

  // ============================================
  //  HERO IMAGE PARALLAX
  // ============================================
  const heroImg = document.getElementById('hero-img');
  window.addEventListener('scroll', () => {
    if (heroImg && window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.08}px)`;
    }
  }, { passive: true });

  // ============================================
  //  MAGNETIC BUTTONS
  // ============================================
  document.querySelectorAll('.clay-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r  = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width  / 2) * 0.2;
      const dy = (e.clientY - r.top  - r.height / 2) * 0.2;
      btn.style.transform = `translate(${dx}px, ${dy}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
  });

  // ============================================
  //  3D CARD TILT
  // ============================================
  document.querySelectorAll('.clay-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r    = card.getBoundingClientRect();
      const rotX = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -6;
      const rotY = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.012)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });

  // ============================================
  //  COUNTER ANIMATION
  // ============================================
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const num = parseFloat(el.textContent.replace(/[^0-9.]/g, ''));
      const sfx = el.textContent.replace(/[\d.,]/g, '');
      if (!isNaN(num) && !el.dataset.animated) {
        el.dataset.animated = true;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / 1800, 1);
          el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * num).toLocaleString() + sfx;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      statsObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-number').forEach(el => statsObs.observe(el));

  // ============================================
  //  MARQUEE PAUSE
  // ============================================
  const marqueeTrack = document.querySelector('.marquee-track');
  const marqueeStrip = document.querySelector('.marquee-strip');
  marqueeStrip?.addEventListener('mouseenter', () => marqueeTrack && (marqueeTrack.style.animationPlayState = 'paused'));
  marqueeStrip?.addEventListener('mouseleave', () => marqueeTrack && (marqueeTrack.style.animationPlayState = 'running'));

  // ============================================
  //  FLOATING BADGES
  // ============================================
  document.querySelectorAll('.floating-badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.08)';
      badge.style.transition = 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)';
    });
    badge.addEventListener('mouseleave', () => badge.style.transform = '');
  });

  // ============================================
  //  SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ============================================
  //  PHASE 2: CUSTOM CURSOR
  // ============================================
  const customCursor = document.getElementById('customCursor');
  if (customCursor) {
    window.addEventListener('mousemove', (e) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
      });
    });
    
    document.querySelectorAll('a, button, input, textarea, select, .clay-card').forEach(el => {
      el.addEventListener('mouseenter', () => customCursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => customCursor.classList.remove('hovering'));
    });
  }

  // ============================================
  //  PHASE 2: ACTIVE NAVBAR HIGHLIGHT
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === '#' + id || href === '/#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35, rootMargin: "-10% 0px -60% 0px" });
  
  sections.forEach(sec => navObserver.observe(sec));

  // ============================================
  //  PHASE 2: TOAST NOTIFICATION
  // ============================================
  const toastContainer = document.getElementById('toast-container');
  window.showToast = (msg, icon = '🧸') => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  };

  // Trigger toast on demo buttons
  document.querySelectorAll('a[href="#cta"], a[href="#"], .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if(href === '#') e.preventDefault();
      
      const text = btn.textContent.toLowerCase();
      let msg = "Aksi berhasil dilakukan!";
      let icon = "🎉";
      
      if(text.includes('pro')) { msg = "Paket Pro dipilih!"; icon = "🚀"; }
      else if(text.includes('premium')) { msg = "Paket Premium VIP aktif!"; icon = "💎"; }
      else if(text.includes('gratis')) { msg = "Selamat datang, pemula!"; icon = "🌱"; }
      else if(text.includes('license')) { msg = "Lisensi berhasil diunduh."; icon = "🛡️"; }
      
      window.showToast(msg, icon);
    });
  });

  console.log('%c🧸 Clayworld v2 loaded!',
    'color: hsl(205,80%,55%); font-size:16px; font-weight:bold; font-family:sans-serif;'
  );
});
