// ================================================================
// GESTIÓN DE FOTOS Y VÍDEO — Más Cuqui
// ================================================================
// Para cambiar una foto: reemplaza la ruta src en la sección
// correspondiente. Todas las imágenes están en /public/instagram/
// El vídeo está en /public/videos/
// ================================================================

// --- IDENTIDAD DE MARCA ---
// Logo del navbar (aparece en la barra de navegación superior)
export const logoSrc = '/images/logo.png';

// Imagen para compartir en WhatsApp, Facebook, etc. (og:image)
// Tamaño ideal: 1200×630 px (formato horizontal)
export const ogImageSrc = '/instagram/post-1.jpg';

// ----------------------------------------------------------------
// SECCIÓN PORTADA (Hero)
// ----------------------------------------------------------------
export const heroConfig = {
  // Vídeo de fondo. Formato MP4, sin sonido, ~10-30 s.
  videoSrc: '/videos/hero.mp4',
  // Imagen que se muestra mientras el vídeo carga
  posterSrc: '/instagram/post-1.jpg',
};

// ----------------------------------------------------------------
// SECCIÓN "NUESTRA HISTORIA" (Sobre Nosotros)
// ----------------------------------------------------------------
// Collage de 3 fotos a la izquierda de la sección
//   [0] → foto grande (ocupa todo el ancho del collage)
//   [1] → foto pequeña izquierda
//   [2] → foto pequeña derecha
export const historyPhotos = [
  { src: '/instagram/post-4.jpg', alt: 'Arte latte en Más Cuqui' },
  { src: '/instagram/post-2.jpg', alt: 'Desayuno artesanal' },
  { src: '/instagram/post-5.jpg', alt: 'Mocaccino vegetal' },
];

// ----------------------------------------------------------------
// SECCIÓN "NUESTROS PRODUCTOS" (Servicios)
// ----------------------------------------------------------------
// Una foto de cabecera por cada tarjeta de servicio
// Las claves corresponden al campo "icon" en profile.ts > services
export const servicePhotoMap: Record<string, string> = {
  coffee:    '/instagram/post-4.jpg',   // Tarjeta: Cafetería
  cake:      '/instagram/post-9.jpg',   // Tarjeta: Pastelería artesanal
  croissant: '/instagram/post-6.jpg',   // Tarjeta: Desayunos
  gift:      '/instagram/post-3.jpg',   // Tarjeta: Pedidos personalizados
};

// ----------------------------------------------------------------
// GALERÍA
// ----------------------------------------------------------------
// Para añadir una foto: copia el archivo en /public/instagram/ y
// agrega una línea aquí con src, alt descriptivo y cat.
// Para cambiar una foto: reemplaza solo la ruta src.
// Categorías: cafeteria | pasteleria | desayunos | eventos
export type GalleryCategory = 'all' | 'cafeteria' | 'pasteleria' | 'desayunos' | 'eventos';

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  all:        'Todos',
  cafeteria:  '☕ Cafetería',
  pasteleria: '🎂 Pastelería',
  desayunos:  '🥐 Desayunos',
  eventos:    '🎉 Eventos',
};

export const galleryPhotos = [
  { src: '/instagram/post-1.jpg',  alt: 'Iced lattes de verano',        cat: 'cafeteria'  as GalleryCategory },
  { src: '/instagram/post-2.jpg',  alt: 'Desayuno artesanal',            cat: 'desayunos'  as GalleryCategory },
  { src: '/instagram/post-3.jpg',  alt: '4to Aniversario',               cat: 'eventos'    as GalleryCategory },
  { src: '/instagram/post-4.jpg',  alt: 'Arte latte',                    cat: 'cafeteria'  as GalleryCategory },
  { src: '/instagram/post-5.jpg',  alt: 'Mocaccino vegetal',             cat: 'cafeteria'  as GalleryCategory },
  { src: '/instagram/post-6.jpg',  alt: 'Cachitos venezolanos',          cat: 'desayunos'  as GalleryCategory },
  { src: '/instagram/post-7.jpg',  alt: 'Cappuccino rosa San Valentín',  cat: 'cafeteria'  as GalleryCategory },
  { src: '/instagram/post-8.jpg',  alt: 'Obras en el local',             cat: 'eventos'    as GalleryCategory },
  { src: '/instagram/post-9.jpg',  alt: 'Roscones de Reyes artesanales', cat: 'pasteleria' as GalleryCategory },
  { src: '/instagram/post-10.jpg', alt: 'Café con nosotros',             cat: 'cafeteria'  as GalleryCategory },
  { src: '/instagram/post-11.jpg', alt: 'Descubre Más Cuqui',            cat: 'eventos'    as GalleryCategory },
  { src: '/instagram/post-12.jpg', alt: 'Buen comienzo de mes',          cat: 'pasteleria' as GalleryCategory },
];
