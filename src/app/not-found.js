
"use client";
import { useEffect } from "react";

export default function Page() {
  return (
    <>
      


  {/* SCROLL PROGRESS */}
  <div className="scroll-progress" id="scrollProgress"></div>

  {/* BACK TO TOP */}
  <button className="back-to-top" id="backToTop" aria-label="Kembali ke atas">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
  </button>

  {/* NAVBAR */}
  <nav className="navbar scrolled" id="navbar">
    <div className="nav-container">
      <a href="/" className="nav-logo">
        <span className="logo-clay">🧸</span>
        <span className="logo-text">Clayworld</span>
      </a>
      <ul className="nav-links">
        <li><a href="/#features"      className="nav-link">Fitur</a></li>
        <li><a href="/#gallery"       className="nav-link">Galeri</a></li>
        <li><a href="/#testimonials"  className="nav-link">Review</a></li>
        <li><a href="/#pricing"       className="nav-link">Harga</a></li>
        <li><a href="/#cta"           className="nav-cta-btn">Mulai Gratis</a></li>
      </ul>
      <button className="dark-toggle" id="darkToggle" aria-label="Toggle dark mode">
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
      <li><a href="/#features"     className="mob-link">Fitur</a></li>
      <li><a href="/#gallery"      className="mob-link">Galeri</a></li>
      <li><a href="/#testimonials" className="mob-link">Review</a></li>
      <li><a href="/#pricing"      className="mob-link">Harga</a></li>
      <li><a href="/#cta"          className="mob-link">Mulai Gratis</a></li>
    </ul>
  </div>

  {/* BG BLOBS */}
  <div className="hero-bg-blobs">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="blob blob-3"></div>
  </div>

  {/* 404 CONTENT */}
  <main className="page-404">
    <div className="clay-card card-404">
      <span className="badge-404">😢 Error 404</span>
      <img loading="lazy" src="/assets/clay_404.jpg" alt="Clay mascot 404" className="img-404" />
      <h1 className="title-404">Aduh, Halaman Ini Hilang!</h1>
      <p className="desc-404">
        Sepertinya halaman yang kamu cari sudah pindah, dihapus, atau memang tidak pernah ada.
        Jangan sedih, yuk kembali ke beranda!
      </p>
      <div className="actions-404">
        <a href="/" className="clay-btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Kembali ke Beranda</span>
        </a>
        <a href="/#features" className="clay-btn btn-secondary">Lihat Fitur</a>
      </div>
    </div>
  </main>

  

    </>
  );
}
