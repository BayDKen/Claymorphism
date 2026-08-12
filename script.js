// ============================================
//  CLAYWORLD — JavaScript Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR SCROLL ----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ---- HAMBURGER MENU ----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close menu on link click
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // ---- INTERSECTION OBSERVER (Reveal animations) ----
  const revealTargets = document.querySelectorAll(
    '.feature-card, .testi-card, .gallery-card, .section-header, .stat-item'
  );
  
  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    const delayClass = `reveal-delay-${(i % 5) + 1}`;
    el.classList.add(delayClass);
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

  // ---- SMOOTH PARALLAX HERO BLOBS ----
  const blobs = document.querySelectorAll('.blob');
  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    blobs.forEach((blob, i) => {
      const strength = (i + 1) * 14;
      const offsetX =  dx * strength;
      const offsetY =  dy * strength;
      blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });

  // ---- HERO IMAGE PARALLAX ON SCROLL ----
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImg.style.transform = `translateY(${scrolled * 0.08}px)`;
      }
    });
  }

  // ---- MAGNETIC BUTTONS ----
  document.querySelectorAll('.clay-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.2;
      const dy = (e.clientY - cy) * 0.2;
      btn.style.transform = `translate(${dx}px, ${dy}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ---- CLAY CARD TILT EFFECT ----
  document.querySelectorAll('.clay-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -6;
      const rotY = ((x - cx) / cx) *  6;
      card.style.transform = `
        perspective(800px)
        rotateX(${rotX}deg)
        rotateY(${rotY}deg)
        translateY(-6px) scale(1.012)
      `;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ---- COUNTER ANIMATION (Stats) ----
  function animateCounter(el, target, duration = 1500) {
    let start = 0;
    const suffix = el.textContent.replace(/[\d.]/g, '');
    const numTarget = parseFloat(target);
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numTarget);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const num  = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[\d.,]/g, '');
        if (!isNaN(num) && !el.dataset.animated) {
          el.dataset.animated = true;
          animateCounter(el, num, 1800);
        }
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.stat-number').forEach(el => statsObserver.observe(el));

  // ---- FLOATING BADGE JITTER ON HOVER ----
  document.querySelectorAll('.floating-badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.08)';
      badge.style.transition = 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)';
    });
    badge.addEventListener('mouseleave', () => {
      badge.style.transform = '';
    });
  });

  // ---- MARQUEE PAUSE ON HOVER ----
  const marqueeTrack = document.querySelector('.marquee-track');
  const marqueeStrip = document.querySelector('.marquee-strip');
  if (marqueeStrip && marqueeTrack) {
    marqueeStrip.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeStrip.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  // ---- SMOOTH SCROLL for anchors ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- GALLERY HOVER CURSOR EFFECT ----
  const galCards = document.querySelectorAll('.gallery-card');
  galCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.cursor = 'zoom-in';
    });
  });

  console.log('%c🧸 Clayworld loaded!', 
    'color: hsl(205,80%,55%); font-size:16px; font-weight:bold; font-family:sans-serif;'
  );
});
