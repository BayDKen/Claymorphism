
"use client";
import { useEffect } from "react";
import ClientLogic from "@/components/ClientLogic";

export default function Home() {
  
  useEffect(() => {
    
  }, []);

  return (
    <>
      <ClientLogic />


  {/* SCROLL PROGRESS BAR */}
  <div className="scroll-progress" id="scrollProgress"></div>

  {/* LOADING SCREEN */}
  <div className="loader" id="loader">
    <div className="loader-inner">
      <div className="loader-clay">
        <div className="clay-bounce b1"></div>
        <div className="clay-bounce b2"></div>
        <div className="clay-bounce b3"></div>
      </div>
      <p className="loader-text">Clayworld</p>
    </div>
  </div>

  {/* BACK TO TOP */}
  <button className="back-to-top" id="backToTop" aria-label="Kembali ke atas">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
  </button>

  {/* NAVBAR */}
  <nav className="navbar" id="navbar">
    <div className="nav-container">
      <a href="#" className="nav-logo">
        <span className="logo-clay">🧸</span>
        <span className="logo-text">Clayworld</span>
      </a>
      <ul className="nav-links">
        <li><a href="#features" className="nav-link">Fitur</a></li>
        <li><a href="#gallery" className="nav-link">Galeri</a></li>
        <li><a href="#testimonials" className="nav-link">Review</a></li>
        <li><a href="#pricing" className="nav-link">Harga</a></li>
        <li><a href="/register" className="nav-cta-btn">Mulai Gratis</a></li>
      </ul>
      <button className="dark-toggle" id="darkToggle" aria-label="Toggle dark mode" title="Toggle Dark Mode">
        <span className="toggle-icon">🌙</span>
      </button>
      <button className="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  {/* MOBILE MENU */}
  <div className="mobile-menu" id="mobileMenu">
    <ul>
      <li><a href="#features" className="mob-link">Fitur</a></li>
      <li><a href="#gallery" className="mob-link">Galeri</a></li>
      <li><a href="#testimonials" className="mob-link">Review</a></li>
      <li><a href="#pricing" className="mob-link">Harga</a></li>
      <li><a href="/register" className="mob-link">Mulai Gratis</a></li>
    </ul>
  </div>

  {/* HERO */}
  <section className="hero" id="hero">
    <div className="hero-bg-blobs">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
    <div className="hero-content">
      <div className="hero-badge">✨ Selamat datang di dunia clay</div>
      <h1 className="hero-title">Desain yang <span className="accent-text">Terasa Nyata</span> &amp; Menyenangkan</h1>
      <p className="hero-desc">Clayworld menghadirkan keindahan claymorphism yang lembut, bulat, dan penuh warna ke dalam karya digital Anda. Buat, eksplorasi, dan nikmati.</p>
      <div className="hero-actions">
        <a href="/register" className="clay-btn btn-primary" id="hero-cta-btn">
          <span>Mulai Sekarang</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#features" className="clay-btn btn-secondary" id="hero-learn-btn">Pelajari Lebih</a>
      </div>
      <div className="hero-stats">
        <div className="stat-item reveal-scale">
          <span className="stat-number">12K+</span>
          <span className="stat-label">Pengguna Aktif</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item reveal-scale">
          <span className="stat-number">98%</span>
          <span className="stat-label">Kepuasan</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item reveal-scale">
          <span className="stat-number">500+</span>
          <span className="stat-label">Aset Clay</span>
        </div>
      </div>
    </div>
    <div className="hero-visual">
      <div className="hero-img-wrapper">
        <img loading="lazy" src="/assets/clay_hero.jpg" alt="Clay shapes floating" className="hero-img" id="hero-img" />
        <div className="floating-badge badge-top">
          <span className="badge-icon">⭐</span>
          <span>4.9 Rating</span>
        </div>
        <div className="floating-badge badge-bottom">
          <span className="badge-icon">🎨</span>
          <span>500+ Aset</span>
        </div>
      </div>
    </div>
  </section>

  {/* MARQUEE / TICKER */}
  <div className="marquee-strip" aria-hidden="true">
    <div className="marquee-track">
      <span>🌿 Claymorphism</span>
      <span>✦ Soft Design</span>
      <span>🎨 Pastel Colors</span>
      <span>🫧 3D Clay</span>
      <span>🌸 Aesthetic</span>
      <span>⭐ Premium Assets</span>
      <span>🧸 Cute UI</span>
      <span>💫 Creative Tools</span>
      <span>🌿 Claymorphism</span>
      <span>✦ Soft Design</span>
      <span>🎨 Pastel Colors</span>
      <span>🫧 3D Clay</span>
      <span>🌸 Aesthetic</span>
      <span>⭐ Premium Assets</span>
      <span>🧸 Cute UI</span>
      <span>💫 Creative Tools</span>
    </div>
  </div>

  {/* FEATURES */}
  <section className="features" id="features">
    <div className="section-header">
      <p className="section-label">Kenapa Clayworld?</p>
      <h2 className="section-title">Semua yang Kamu Butuhkan</h2>
      <p className="section-desc">Dari aset siap pakai hingga tools kreatif — semuanya hadir dalam estetika clay yang memikat.</p>
    </div>
    <div className="features-grid">
      <div className="clay-card feature-card" id="feat-1">
        <div className="feature-icon-wrap" style={{background: "hsl(200, 90%, 88%)"}}>
          <img loading="lazy" src="/assets/clay_laptop.png" alt="Laptop clay icon" className="feat-img" onError={(e) => { e.target.style.display='none'; if(e.target.nextElementSibling) e.target.nextElementSibling.style.display='block'; }} />
          <span className="feat-emoji" style={{display: "none"}}>💻</span>
        </div>
        <h3 className="feature-title">Desain Responsif</h3>
        <p className="feature-desc">Tampilan yang indah di semua perangkat. Tidak peduli layar kecil atau besar, clay tetap terasa lembut dan hangat.</p>
        <div className="feature-tag">Web & Mobile</div>
      </div>
      <div className="clay-card feature-card featured" id="feat-2">
        <div className="feature-icon-wrap" style={{background: "hsl(340, 85%, 88%)"}}>
          <span className="feat-emoji">🎨</span>
        </div>
        <h3 className="feature-title">500+ Aset Clay</h3>
        <p className="feature-desc">Koleksi lengkap ilustrasi, ikon, dan komponen UI dalam gaya claymorphism yang siap langsung pakai.</p>
        <div className="feature-tag featured-tag">Terpopuler ✦</div>
      </div>
      <div className="clay-card feature-card" id="feat-3">
        <div className="feature-icon-wrap" style={{background: "hsl(150, 80%, 82%)"}}>
          <span className="feat-emoji">⚡</span>
        </div>
        <h3 className="feature-title">Mudah Dikustomisasi</h3>
        <p className="feature-desc">Ubah warna, ukuran, dan bentuk sesuai kebutuhan brand kamu hanya dalam beberapa klik.</p>
        <div className="feature-tag">No-Code Ready</div>
      </div>
      <div className="clay-card feature-card" id="feat-4">
        <div className="feature-icon-wrap" style={{background: "hsl(50, 95%, 85%)"}}>
          <span className="feat-emoji">🛡️</span>
        </div>
        <h3 className="feature-title">Lisensi Bebas Pakai</h3>
        <p className="feature-desc">Semua aset berlisensi komersial. Gunakan untuk proyek personal maupun bisnis tanpa khawatir.</p>
        <div className="feature-tag">Free License</div>
      </div>
      <div className="clay-card feature-card" id="feat-5">
        <div className="feature-icon-wrap" style={{background: "hsl(270, 80%, 88%)"}}>
          <span className="feat-emoji">🌈</span>
        </div>
        <h3 className="feature-title">Palet Warna Kurasi</h3>
        <p className="feature-desc">Koleksi palet warna pastel yang sudah dikurasi oleh desainer profesional untuk tampilan yang harmonis.</p>
        <div className="feature-tag">50+ Palet</div>
      </div>
      <div className="clay-card feature-card" id="feat-6">
        <div className="feature-icon-wrap" style={{background: "hsl(20, 90%, 85%)"}}>
          <span className="feat-emoji">🤝</span>
        </div>
        <h3 className="feature-title">Komunitas Aktif</h3>
        <p className="feature-desc">Bergabung dengan ribuan desainer kreatif. Berbagi karya, dapatkan feedback, dan tumbuh bersama.</p>
        <div className="feature-tag">12K+ Members</div>
      </div>
    </div>
  </section>

  {/* GALLERY / SHOWCASE */}
  <section className="gallery" id="gallery">
    <div className="section-header">
      <p className="section-label">Galeri Karya</p>
      <h2 className="section-title">Keindahan dalam Setiap Bentuk</h2>
    </div>
    <div className="gallery-grid">
      <div className="gallery-card clay-card tall reveal-left" id="gal-1">
        <img loading="lazy" src="/assets/clay_hero.jpg" alt="Clay shapes collection" />
        <div className="gal-overlay">
          <span>Clay Shapes</span>
        </div>
      </div>
      <div className="gallery-card clay-card" id="gal-2">
        <img loading="lazy" src="/assets/clay_character.jpg" alt="Clay character" />
        <div className="gal-overlay">
          <span>Clay Character</span>
        </div>
      </div>
      <div className="gallery-card clay-card wide" id="gal-3">
        <img loading="lazy" src="/assets/clay_icons.jpg" alt="Clay icon set" />
        <div className="gal-overlay">
          <span>Clay Icon Set</span>
        </div>
      </div>
    </div>
    <div style={{textAlign: "center", marginTop: "48px"}}>
      <a href="/gallery" className="clay-btn btn-secondary" style={{display: "inline-flex", width: "auto", padding: "12px 32px"}}>Lihat Semua Galeri ✦</a>
    </div>
  </section>

  {/* TESTIMONIALS */}
  <section className="testimonials" id="testimonials">
    <div className="section-header">
      <p className="section-label">Yang Mereka Bilang</p>
      <h2 className="section-title">Dicintai oleh Kreator</h2>
    </div>
    <div className="testi-grid">
      <div className="testi-card clay-card" id="testi-1">
        <div className="testi-stars">⭐⭐⭐⭐⭐</div>
        <p className="testi-text">"Clayworld benar-benar mengubah cara aku mendesain. Asetnya keren banget dan mudah dikustomisasi!"</p>
        <div className="testi-author">
          <div className="testi-avatar" style={{background: "hsl(200,80%,80%)"}}>A</div>
          <div>
            <strong>Alika Putri</strong>
            <span>UI/UX Designer</span>
          </div>
        </div>
      </div>
      <div className="testi-card clay-card featured-testi" id="testi-2">
        <div className="testi-stars">⭐⭐⭐⭐⭐</div>
        <p className="testi-text">"Saya pakai ini untuk proyek branding klien dan hasilnya luar biasa. Klien langsung jatuh cinta sama style clay-nya!"</p>
        <div className="testi-author">
          <div className="testi-avatar" style={{background: "hsl(340,80%,82%)"}}>R</div>
          <div>
            <strong>Rafi Mahendra</strong>
            <span>Brand Designer</span>
          </div>
        </div>
        <div className="testi-img-wrapper">
          <img loading="lazy" src="/assets/clay_character.jpg" alt="Clay mascot" className="testi-mascot" />
        </div>
      </div>
      <div className="testi-card clay-card" id="testi-3">
        <div className="testi-stars">⭐⭐⭐⭐⭐</div>
        <p className="testi-text">"Komunitas Clayworld sangat supportif. Banyak inspirasi dan resource yang bisa dipelajari setiap hari."</p>
        <div className="testi-author">
          <div className="testi-avatar" style={{background: "hsl(150,70%,78%)"}}>S</div>
          <div>
            <strong>Sari Dewi</strong>
            <span>Illustrator</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="cta-section" id="cta">
    <div className="cta-inner clay-card">
      <div className="cta-blobs">
        <div className="cta-blob cta-blob-1"></div>
        <div className="cta-blob cta-blob-2"></div>
      </div>
      <div className="cta-content">
        <div className="cta-mascot">
          <img loading="lazy" src="/assets/clay_character.jpg" alt="Clay mascot waving" />
        </div>
        <div className="cta-text">
          <p className="section-label">Siap Memulai?</p>
          <h2 className="cta-title">Bergabunglah dengan 12,000+ Kreator</h2>
          <p className="cta-desc">Mulai perjalanan desainmu bersama Clayworld. Gratis selamanya untuk aset dasar.</p>
          <div className="cta-actions">
            <a href="#" className="clay-btn btn-primary" id="cta-signup-btn">
              <span>Daftar Gratis</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" className="clay-btn btn-ghost" id="cta-premium-btn">Lihat Premium →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PRICING */}
  <section className="pricing" id="pricing">
    <div className="section-header">
      <p className="section-label">Pilih Paket</p>
      <h2 className="section-title">Harga yang Jujur & Transparan</h2>
      <p className="section-desc">Mulai gratis, upgrade kapan saja. Tidak ada biaya tersembunyi.</p>
    </div>
    <div className="pricing-grid">

      {/* FREE */}
      <div className="clay-card pricing-card" id="price-free">
        <div className="pricing-header">
          <span className="pricing-icon">🌱</span>
          <h3 className="pricing-name">Free</h3>
          <div className="pricing-price"><span className="price-amount">Rp 0</span><span className="price-period">/bulan</span></div>
          <p className="pricing-desc">Untuk pemula yang ingin menjelajahi dunia clay.</p>
        </div>
        <ul className="pricing-features">
          <li><span className="feat-check">✓</span> 50 Aset Clay dasar</li>
          <li><span className="feat-check">✓</span> 5 Palet warna</li>
          <li><span className="feat-check">✓</span> Lisensi personal</li>
          <li><span className="feat-x">✗</span> Akses komunitas premium</li>
          <li><span className="feat-x">✗</span> Aset eksklusif</li>
        </ul>
        <a href="#" className="clay-btn btn-secondary pricing-btn" id="btn-free">Mulai Gratis</a>
      </div>

      {/* PRO (featured) */}
      <div className="clay-card pricing-card pricing-featured" id="price-pro">
        <div className="pricing-badge">✦ Terpopuler</div>
        <div className="pricing-header">
          <span className="pricing-icon">🚀</span>
          <h3 className="pricing-name">Pro</h3>
          <div className="pricing-price"><span className="price-amount">Rp 79K</span><span className="price-period">/bulan</span></div>
          <p className="pricing-desc">Untuk desainer dan kreator profesional.</p>
        </div>
        <ul className="pricing-features">
          <li><span className="feat-check">✓</span> 300+ Aset Clay premium</li>
          <li><span className="feat-check">✓</span> 50 Palet warna kurasi</li>
          <li><span className="feat-check">✓</span> Lisensi komersial</li>
          <li><span className="feat-check">✓</span> Akses komunitas premium</li>
          <li><span className="feat-x">✗</span> Aset eksklusif custom</li>
        </ul>
        <a href="#" className="clay-btn btn-primary pricing-btn" id="btn-pro">Mulai Pro</a>
      </div>

      {/* PREMIUM */}
      <div className="clay-card pricing-card" id="price-premium">
        <div className="pricing-header">
          <span className="pricing-icon">💎</span>
          <h3 className="pricing-name">Premium</h3>
          <div className="pricing-price"><span className="price-amount">Rp 199K</span><span className="price-period">/bulan</span></div>
          <p className="pricing-desc">Untuk tim dan agensi yang butuh segalanya.</p>
        </div>
        <ul className="pricing-features">
          <li><span className="feat-check">✓</span> 500+ Semua aset Clay</li>
          <li><span className="feat-check">✓</span> Palet warna tak terbatas</li>
          <li><span className="feat-check">✓</span> Lisensi komersial & tim</li>
          <li><span className="feat-check">✓</span> Akses komunitas VIP</li>
          <li><span className="feat-check">✓</span> Request aset custom</li>
        </ul>
        <a href="#" className="clay-btn btn-secondary pricing-btn" id="btn-premium">Mulai Premium</a>
      </div>

    </div>
  </section>

  {/* FAQ */}
  <section className="faq" id="faq">
    <div className="section-header">
      <p className="section-label">Ada Pertanyaan?</p>
      <h2 className="section-title">Yang Sering Ditanyakan</h2>
    </div>
    <div className="faq-list" id="faqList">

      <div className="faq-item clay-card" id="faq-1">
        <button className="faq-question" aria-expanded="false">
          <span>Apakah saya bisa menggunakan aset untuk proyek komersial?</span>
          <span className="faq-icon">＋</span>
        </button>
        <div className="faq-answer">
          <p>Ya! Semua aset di paket Pro dan Premium berlisensi komersial penuh. Kamu bebas menggunakannya untuk proyek klien, produk digital, hingga merchandise tanpa royalti tambahan.</p>
        </div>
      </div>

      <div className="faq-item clay-card" id="faq-2">
        <button className="faq-question" aria-expanded="false">
          <span>Apakah ada uji coba gratis untuk paket Pro?</span>
          <span className="faq-icon">＋</span>
        </button>
        <div className="faq-answer">
          <p>Tentu! Kami menyediakan trial 14 hari untuk paket Pro tanpa perlu kartu kredit. Cukup daftar dengan email dan nikmati semua fitur Pro secara gratis selama 2 minggu.</p>
        </div>
      </div>

      <div className="faq-item clay-card" id="faq-3">
        <button className="faq-question" aria-expanded="false">
          <span>Format file apa saja yang tersedia?</span>
          <span className="faq-icon">＋</span>
        </button>
        <div className="faq-answer">
          <p>Aset tersedia dalam format PNG (transparan), SVG (vektor scalable), dan Figma Component. Semua resolusi tinggi hingga 4K untuk kebutuhan print maupun digital.</p>
        </div>
      </div>

      <div className="faq-item clay-card" id="faq-4">
        <button className="faq-question" aria-expanded="false">
          <span>Bisakah saya upgrade atau downgrade paket kapan saja?</span>
          <span className="faq-icon">＋</span>
        </button>
        <div className="faq-answer">
          <p>Bisa! Kamu bisa upgrade atau downgrade paket kapan saja. Perubahan akan berlaku di siklus billing berikutnya. Tidak ada penalti atau biaya tersembunyi untuk perubahan paket.</p>
        </div>
      </div>

      <div className="faq-item clay-card" id="faq-5">
        <button className="faq-question" aria-expanded="false">
          <span>Bagaimana cara request aset custom di paket Premium?</span>
          <span className="faq-icon">＋</span>
        </button>
        <div className="faq-answer">
          <p>Pengguna Premium bisa submit request aset melalui portal khusus di dashboard. Tim desainer kami akan membuat aset sesuai brief dalam 3–5 hari kerja. Setiap bulan kamu bisa submit hingga 5 request custom.</p>
        </div>
      </div>

    </div>
  </section>

  {/* FOOTER */}
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <a href="#" className="nav-logo">
          <span className="logo-clay">🧸</span>
          <span className="logo-text">Clayworld</span>
        </a>
        <p>Membawa kesenangan dan kelembutan ke dunia desain digital.</p>
      </div>
      <div className="footer-links">
        <div className="footer-col">
          <h4>Produk</h4>
          <ul>
            <li><a href="/gallery">Aset Clay</a></li>
            <li><a href="#">Palet Warna</a></li>
            <li><a href="#">Komponen UI</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Komunitas</h4>
          <ul>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Perusahaan</h4>
          <ul>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Karier</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p style={{color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "12px", lineHeight: "1.4"}}>Info aset clay terbaru ke emailmu.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); window.showToast("Berhasil berlangganan!", "💌"); e.target.reset(); }}>
            <input type="email" placeholder="Email..." required className="clay-input" />
            <button type="submit" className="clay-btn btn-primary" style={{padding: "10px 16px", width: "100%", marginTop: "8px"}}>Daftar ✦</button>
          </form>
        </div>

      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Clayworld. Dibuat dengan 🧸 dan cinta.</span>
      <span>Privasi · Syarat · Cookie</span>
    </div>
  </footer>

  {/* TOAST NOTIFICATION */}
  <div id="toast-container" className="toast-container"></div>

  {/* CUSTOM CURSOR */}
  <div className="custom-cursor" id="customCursor"></div>

  

  {/* LIGHTBOX MODAL */}
  <div className="lightbox" id="lightbox">
    <button className="lightbox-close" id="lightboxClose">×</button>
    <img src="" alt="Fullscreen image" className="lightbox-img" id="lightboxImg" />
  </div>


    </>
  );
}
