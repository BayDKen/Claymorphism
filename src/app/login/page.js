
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ClientLogic from "@/components/ClientLogic";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password) {
      localStorage.setItem('clay_user', JSON.stringify({ email, name: email.split('@')[0] }));
      window.showToast('Login berhasil! Mengalihkan...', '🔓');
      setTimeout(() => router.push('/dashboard'), 1500);
    }
  };

  return (
    <>
      <ClientLogic />
      <div className="section-header reveal" style={{ marginTop: '120px' }}>
        <h2 className="section-title">Masuk ke <span className="accent-text">Clayworld</span></h2>
        <p className="section-subtitle">Lanjutkan petualangan kreatif Anda.</p>
      </div>
      
      <div className="pricing-container reveal-scale" style={{ maxWidth: '400px', margin: '0 auto 100px' }}>
        <div className="pricing-card clay-card" style={{ width: '100%' }}>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Email</label>
              <input type="email" placeholder="nama@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} required className="newsletter-input" style={{ width: '100%', padding: '12px 20px' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} required className="newsletter-input" style={{ width: '100%', padding: '12px 20px' }} />
            </div>
            <button type="submit" className="clay-btn btn-primary" style={{ width: '100%', padding: '14px' }}>Masuk ✦</button>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '16px' }}>
              Belum punya akun? <Link href="/register" style={{ color: 'var(--accent)', fontWeight: 'bold', textDecoration: 'none' }}>Daftar di sini</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
