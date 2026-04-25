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

const siteUrl = 'https://pasteleriamascuqui.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '+Cuqui - Pastelería Creativa',
  description:
    'Cafetería y pastelería artesanal en Ciudad Real. Tartas personalizadas, café de especialidad, desayunos y dulces venezolanos elaborados con amor desde 2022. Calle Tinte 17.',
  keywords: [
    'pastelería Ciudad Real',
    'cafetería Ciudad Real',
    'tartas personalizadas Ciudad Real',
    'Más Cuqui',
    'pastelería artesanal',
    'cachitos venezolanos',
    'café de especialidad',
    'desayunos Ciudad Real',
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
    languages: { 'es-ES': siteUrl },
  },
  openGraph: {
    title: 'Más Cuqui — Pastelería & Cafetería Artesanal',
    description:
      'Donde todo se hace con amor. Tartas personalizadas, café de especialidad y dulces artesanales en Ciudad Real.',
    url: siteUrl,
    siteName: 'Más Cuqui',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/instagram/post-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Pastelería Más Cuqui — Tartas artesanales en Ciudad Real',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Más Cuqui — Pastelería & Cafetería Artesanal',
    description: 'Tartas personalizadas y café de especialidad en Ciudad Real.',
    images: ['/instagram/post-1.jpg'],
  },
};

/** LocalBusiness + Bakery structured data for SEO */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Más Cuqui',
  alternateName: 'Pastelería Más Cuqui',
  description:
    'Cafetería y pastelería artesanal con obrador propio en Ciudad Real. Tartas personalizadas, café de especialidad y dulces venezolanos.',
  url: siteUrl,
  telephone: '+34641384941',
  email: '',
  image: `${siteUrl}/instagram/post-1.jpg`,
  logo: `${siteUrl}/images/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Tinte, 17 Bajo',
    addressLocality: 'Ciudad Real',
    addressRegion: 'Castilla-La Mancha',
    postalCode: '13001',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.9862,
    longitude: -3.9279,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '20:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    ratingCount: '120',
  },
  priceRange: '€',
  servesCuisine: ['Pastelería', 'Venezolana', 'Café de especialidad'],
  foundingDate: '2022',
  sameAs: [
    'https://www.instagram.com/pasteleriamascuqui/',
    'https://www.facebook.com/101758689422174/',
    'https://www.tiktok.com/@cuquipasteleria',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-brown-dark antialiased">{children}</body>
    </html>
  );
}
