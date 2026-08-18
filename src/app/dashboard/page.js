
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ClientLogic from "@/components/ClientLogic";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

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

  if (!user) return null; // or a loader

  return (
    <>
      <ClientLogic />
      <div className="section-header reveal" style={{ marginTop: '120px' }}>
        <div className="hero-badge" style={{ margin: '0 auto 20px' }}>Dashboard Pengguna</div>
        <h2 className="section-title">Selamat datang kembali, <span className="accent-text">{user.name}</span>!</h2>
        <p className="section-subtitle">Kelola aset dan langganan Anda di sini.</p>
      </div>

      <div className="features-grid" style={{ maxWidth: '1000px', margin: '0 auto 100px' }}>
        <div className="feature-card clay-card reveal-left">
          <div className="feature-icon-wrap" style={{ background: 'hsl(200, 90%, 88%)' }}>
            <span className="feature-icon">📦</span>
          </div>
          <h3 className="feature-title">Aset Unduhan</h3>
          <p className="feature-desc">Anda belum mengunduh aset apapun bulan ini. Jelajahi galeri untuk memulai.</p>
          <button className="clay-btn btn-secondary" onClick={() => router.push('/gallery')} style={{ marginTop: '16px' }}>Jelajahi Galeri</button>
        </div>
        
        <div className="feature-card clay-card reveal-scale">
          <div className="feature-icon-wrap" style={{ background: 'hsl(340, 85%, 88%)' }}>
            <span className="feature-icon">💎</span>
          </div>
          <h3 className="feature-title">Status Langganan</h3>
          <p className="feature-desc">Saat ini Anda menggunakan paket Gratis. Upgrade untuk akses tak terbatas.</p>
          <button className="clay-btn btn-primary" onClick={() => router.push('/#pricing')} style={{ marginTop: '16px' }}>Upgrade Pro</button>
        </div>
        
        <div className="feature-card clay-card reveal-right">
          <div className="feature-icon-wrap" style={{ background: 'hsl(150, 80%, 82%)' }}>
            <span className="feature-icon">⚙️</span>
          </div>
          <h3 className="feature-title">Pengaturan Akun</h3>
          <p className="feature-desc">Email terdaftar: <strong>{user.email}</strong></p>
          <button className="clay-btn btn-secondary" onClick={handleLogout} style={{ marginTop: '16px', background: 'hsla(340, 80%, 60%, 0.1)', color: 'hsl(340, 80%, 50%)' }}>Keluar Akun</button>
        </div>
      </div>
    </>
  );
}
