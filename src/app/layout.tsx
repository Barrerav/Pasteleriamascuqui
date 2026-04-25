import type { Metadata } from 'next';
import { Playfair_Display, Nunito } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Más Cuqui — Pastelería & Cafetería en Ciudad Real',
  description:
    'Cafetería y pastelería artesanal en Ciudad Real. Tartas personalizadas, café de especialidad, desayunos y dulces venezolanos elaborados con amor desde 2022.',
  openGraph: {
    title: 'Más Cuqui — Pastelería & Cafetería',
    description: 'Donde todo se hace con amor. Ciudad Real.',
    images: ['/instagram/profile.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-cream text-brown-dark antialiased">{children}</body>
    </html>
  );
}
