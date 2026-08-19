
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ClientLogic from "@/components/ClientLogic";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('clay_user');
    if (!userData) {
      router.push('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('clay_user');
    window.showToast('Berhasil keluar!', '👋');
    router.push('/');
  };

  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)' }}>
      <ClientLogic />
      
      {/* DASHBOARD NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px', background: 'var(--surface)', borderBottom: '1px solid hsla(0,0%,100%,0.1)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
        
        {/* Left: Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.5rem' }}>🧸</span>
          <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text)' }}>Clayworld</span>
        </Link>
        
        {/* Center: Search */}
        <div style={{ flex: 1, maxWidth: '400px', margin: '0 20px' }} className="reveal-scale">
          <div className="clay-card" style={{ padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-color)' }}>
            <span>🔍</span>
            <input type="text" placeholder="Cari aset 3D..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text)', width: '100%', fontSize: '0.9rem' }} />
          </div>
        </div>
        
        {/* Right: Profile */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="clay-card"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 16px', borderRadius: '30px', cursor: 'pointer', background: 'var(--surface)' }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: 'bold' }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text)' }}>{user.name}</span>
            <span style={{ fontSize: '0.8rem' }}>▼</span>
          </button>
          
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="clay-card reveal-scale visible" style={{ position: 'absolute', top: '50px', right: '0', width: '200px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 101 }}>
              <div style={{ padding: '8px 12px', borderBottom: '1px solid hsla(0,0%,100%,0.1)', marginBottom: '4px' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Masuk sebagai</p>
                <p style={{ fontSize: '0.9rem', fontWeight: '600', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.email}</p>
              </div>
              <button onClick={() => router.push('/')} style={{ background: 'transparent', border: 'none', color: 'var(--text)', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>Beranda</button>
              <button onClick={() => router.push('/gallery')} style={{ background: 'transparent', border: 'none', color: 'var(--text)', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>Jelajahi Galeri</button>
              <button onClick={handleLogout} style={{ background: 'hsla(340, 80%, 60%, 0.1)', border: 'none', color: 'hsl(340, 80%, 50%)', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', marginTop: '4px' }}>Keluar Akun</button>
            </div>
          )}
        </div>
      </nav>

      {/* DASHBOARD CONTENT */}
      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div className="reveal-left" style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px' }}>Halo, <span className="accent-text">{user.name}</span>! 👋</h1>
          <p style={{ color: 'var(--text-muted)' }}>Ini adalah ruang kreasi pribadi Anda. Mari membuat sesuatu yang menakjubkan hari ini.</p>
        </div>

        {/* Overview Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="clay-card reveal-scale" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'hsl(200, 90%, 88%)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>📦</div>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Total Diunduh</p>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>0 <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>Aset</span></h3>
            </div>
          </div>
          
          <div className="clay-card reveal-scale" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', transitionDelay: '0.1s' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'hsl(150, 80%, 82%)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>📁</div>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Koleksi Tersimpan</p>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>0 <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>Item</span></h3>
            </div>
          </div>
          
          <div className="clay-card reveal-scale" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', transitionDelay: '0.2s' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'hsl(50, 95%, 85%)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}>⭐</div>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>Status Paket</p>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>Gratis <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent)' }}>(Upgrade)</span></h3>
            </div>
          </div>
        </div>

        {/* Main Grid: History & Promo */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          
          {/* Left: Recent Activity */}
          <div className="clay-card reveal-left" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Riwayat Unduhan
              <button style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontWeight: '600' }}>Lihat Semua</button>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', opacity: '0.5', marginBottom: '16px' }}>📭</div>
              <p style={{ fontWeight: '600', marginBottom: '8px' }}>Belum ada aktivitas</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', maxWidth: '300px' }}>Anda belum mengunduh aset apapun. Jelajahi galeri untuk menemukan inspirasi pertama Anda!</p>
              <button onClick={() => router.push('/gallery')} className="clay-btn btn-secondary" style={{ padding: '10px 24px' }}>Mulai Eksplorasi ✦</button>
            </div>
          </div>

          {/* Right: Pro Promo & Recommendations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="pricing-card clay-card featured reveal-right" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: 'auto', border: '2px solid var(--accent)' }}>
              <div className="hero-badge" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>Penawaran Terbatas</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>Clayworld Pro 💎</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.5' }}>Buka akses ke semua aset premium, kualitas 4K, dan lisensi komersial tanpa batas.</p>
              <button onClick={() => router.push('/#pricing')} className="clay-btn btn-primary" style={{ marginTop: 'auto', padding: '12px' }}>Upgrade Sekarang</button>
            </div>

            <div className="clay-card reveal-right" style={{ padding: '24px', transitionDelay: '0.1s' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Bantuan & Dukungan</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span>📚</span> Dokumentasi API</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span>💬</span> Komunitas Discord</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span>🎫</span> Hubungi Support</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
