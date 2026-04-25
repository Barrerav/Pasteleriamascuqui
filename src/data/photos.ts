export const heroConfig = {
  videoSrc: '/videos/hero.mp4',
  posterSrc: '/instagram/post-1.jpg',
}

export const servicePhotoMap: Record<string, string> = {
  coffee:    '/instagram/post-4.jpg',
  cake:      '/instagram/post-9.jpg',
  croissant: '/instagram/post-6.jpg',
  gift:      '/instagram/post-3.jpg',
}

export type GalleryCategory = 'all' | 'cafeteria' | 'pasteleria' | 'desayunos' | 'eventos'

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  all:        'Todos',
  cafeteria:  'Cafetería',
  pasteleria: 'Pastelería',
  desayunos:  'Desayunos',
  eventos:    'Eventos',
}

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
]
