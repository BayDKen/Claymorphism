
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ClientLogic from "@/components/ClientLogic";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if(name && email && password) {
      localStorage.setItem('clay_user', JSON.stringify({ email, name }));
      window.showToast('Pendaftaran berhasil! Mengalihkan...', '🎉');
      setTimeout(() => router.push('/dashboard'), 1500);
    }
  };

  return (
    <>
      <ClientLogic />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '2rem' }}>🧸</span>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text)' }}>Clayworld</span>
          </Link>
        </div>

        <div className="pricing-card clay-card reveal-scale" style={{ width: '100%', maxWidth: '420px', padding: '40px 30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '8px' }}>Buat Akun Baru</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Bergabung dan mulai karya ajaib Anda.</p>
          </div>

          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Nama Lengkap</label>
              <input type="text" placeholder="John Doe" value={name} onChange={(e)=>setName(e.target.value)} required className="newsletter-input" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px' }} />
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Alamat Email</label>
              <input type="email" placeholder="nama@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} required className="newsletter-input" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px' }} />
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Kata Sandi</label>
              <input type="password" placeholder="Minimal 8 karakter" value={password} onChange={(e)=>setPassword(e.target.value)} required className="newsletter-input" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px' }} />
            </div>
            
            <button type="submit" className="clay-btn btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem' }}>
              Daftar Gratis ✦
            </button>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '16px', textAlign: 'center' }}>
              Sudah punya akun? <Link href="/login" style={{ color: 'var(--accent)', fontWeight: '700', textDecoration: 'none' }}>Masuk di sini</Link>
            </p>
          </form>
        </div>

        <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '30px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>←</span> Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}
