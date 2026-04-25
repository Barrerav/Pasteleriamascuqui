import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Más Cuqui — Pastelería & Cafetería',
    short_name: 'Más Cuqui',
    description: 'Pastelería artesanal y cafetería en Ciudad Real',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFAF5',
    theme_color: '#D4897A',
    icons: [
      {
        src: '/instagram/profile.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/instagram/profile.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
