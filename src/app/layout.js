import './globals.css';

export const metadata = {
  title: 'Clayworld — Desain yang Terasa Nyata',
  description: 'Clayworld adalah platform kreatif dengan estetika claymorphism yang membawa kesenangan dan kelembutan ke dalam dunia digital Anda.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="hsl(200, 85%, 78%)" />
        
        {/* Open Graph / Social Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Clayworld — Desain yang Terasa Nyata" />
        <meta property="og:description" content="Platform kreatif dengan estetika claymorphism yang membawa kesenangan ke dunia digital." />
        <meta property="og:image" content="https://claymorphism.vercel.app/assets/clay_hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clayworld" />
        <meta name="twitter:description" content="Platform kreatif dengan estetika claymorphism." />
        <meta name="twitter:image" content="https://claymorphism.vercel.app/assets/clay_hero.jpg" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
