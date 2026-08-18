
"use client";
import { useEffect } from "react";
import ClientLogic from "@/components/ClientLogic";

export default function Page() {
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

  {/* NAVBAR */}
  <nav className="navbar" id="navbar">
    <div className="nav-container">
      <a href="/" className="nav-logo">
        <span className="logo-clay">🧸</span>
        <span className="logo-text">Clayworld</span>
      </a>
      <ul className="nav-links">
        <li><a href="/#features" className="nav-link">Fitur</a></li>
        <li><a href="/gallery.html" className="nav-link active">Galeri</a></li>
        <li><a href="/#pricing" className="nav-link">Harga</a></li>
        <li><a href="/#cta" className="nav-cta-btn">Mulai Gratis</a></li>
      </ul>
      <button className="dark-toggle" id="darkToggle" aria-label="Toggle dark mode">
        <span className="toggle-icon">🌙</span>
      </button>
    </div>
  </nav>

  <main className="gallery-page">
    <div className="gallery-header reveal">
      <h1 className="gallery-title">Eksplorasi Dunia Clay</h1>
      <p className="gallery-desc">Temukan ratusan koleksi ilustrasi dan ikon 3D claymorphism untuk berbagai kebutuhan proyek desainmu.</p>
      
      <div className="filter-tabs">
        <button className="filter-btn active">Semua</button>
        <button className="filter-btn">Karakter</button>
        <button className="filter-btn">Objek</button>
        <button className="filter-btn">Ikon</button>
      </div>
    </div>
    
    <div className="masonry-grid">
      
      <div className="masonry-item reveal reveal-delay-1">
        <img loading="lazy" src="/assets/clay_character.jpg" alt="Mascot" />
        <div className="masonry-overlay">
          <span className="masonry-title">Maskot Lucu</span>
          <span className="masonry-tag">Karakter</span>
        </div>
      </div>
      
      <div className="masonry-item reveal reveal-delay-2">
        <img loading="lazy" src="/assets/clay_icons.jpg" alt="Icons" />
        <div className="masonry-overlay">
          <span className="masonry-title">Set Ikon Bisnis</span>
          <span className="masonry-tag">Ikon</span>
        </div>
      </div>
      
      <div className="masonry-item reveal reveal-delay-3">
        <img loading="lazy" src="/assets/clay_hero.jpg" alt="Hero" />
        <div className="masonry-overlay">
          <span className="masonry-title">Hero Banner Workspace</span>
          <span className="masonry-tag">Objek</span>
        </div>
      </div>

      <div className="masonry-item reveal reveal-delay-4">
        <img loading="lazy" src="/assets/clay_404.jpg" alt="Error 404" />
        <div className="masonry-overlay">
          <span className="masonry-title">Karakter Sedih (404)</span>
          <span className="masonry-tag">Karakter</span>
        </div>
      </div>

      <div className="masonry-item reveal reveal-delay-5">
        <img loading="lazy" src="/assets/clay_character.jpg" alt="Mascot Alt" style={{filter: "hue-rotate(90deg)"}} />
        <div className="masonry-overlay">
          <span className="masonry-title">Maskot Hijau</span>
          <span className="masonry-tag">Karakter</span>
        </div>
      </div>

      <div className="masonry-item reveal reveal-delay-1">
        <img loading="lazy" src="/assets/clay_icons.jpg" alt="Icons Alt" style={{filter: "sepia(0.5)"}} />
        <div className="masonry-overlay">
          <span className="masonry-title">Ikon Klasik</span>
          <span className="masonry-tag">Ikon</span>
        </div>
      </div>
      
    </div>
  </main>

  {/* FOOTER */}
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <a href="/" className="nav-logo">
          <span className="logo-clay">🧸</span>
          <span className="logo-text">Clayworld</span>
        </a>
        <p>Membawa kesenangan dan kelembutan ke dunia desain digital.</p>
      </div>
      <div className="footer-links">
        <div className="footer-col">
          <h4>Produk</h4>
          <ul>
            <li><a href="/gallery.html">Aset Clay</a></li>
            <li><a href="#">Palet Warna</a></li>
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
