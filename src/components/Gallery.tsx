'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons';

export default function Gallery() {
  const sectionRef = useReveal(0.05);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % profile.posts.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + profile.posts.length) % profile.posts.length : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', onKey);
    // Prevent body scroll while lightbox open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Determine which posts are "large" based on modular pattern
  const isLarge = (i: number) => {
    const pattern = i % 6;
    return pattern === 0; // every 6th starting from 0 is large
  };

  return (
    <>
      <section id="galeria" ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="reveal text-center mb-12">
            <span className="text-rose font-semibold text-sm tracking-widest uppercase">Nuestros momentos</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown-dark mt-2">
              Galería
            </h2>
            <p className="text-brown/70 mt-3 max-w-md mx-auto">
              Un vistazo a lo que cocinamos cada día con amor en nuestro obrador.
            </p>
          </div>

          {/* Grid — opens lightbox instead of linking to Instagram */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {profile.posts.map((post, i) => {
              const large = isLarge(i);
              return (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className={`reveal stagger-${(i % 6) + 1} relative overflow-hidden rounded-2xl group block ${
                    large ? 'col-span-2 row-span-2' : ''
                  } cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose`}
                  style={{ aspectRatio: '1 / 1' }}
                  aria-label={`Ver foto: ${post.alt}`}
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                  />
                  <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="reveal mt-10 text-center">
            <a
              href={profile.networks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-rose text-rose font-semibold px-8 py-3 rounded-full hover:bg-rose hover:text-white transition-all"
            >
              <InstagramIcon className="w-5 h-5" />
              Ver más en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay fixed inset-0 z-[60] bg-brown-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto: ${profile.posts[lightboxIndex].alt}`}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-square">
              <Image
                src={profile.posts[lightboxIndex].src}
                alt={profile.posts[lightboxIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            {/* Caption + CTA */}
            <div className="p-5 flex items-center justify-between gap-4">
              <p className="text-brown-dark font-medium text-sm">{profile.posts[lightboxIndex].alt}</p>
              <a
                href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20algo%20similar%20a%20la%20foto%20%22${encodeURIComponent(profile.posts[lightboxIndex].alt)}%22%20de%20vuestra%20galer%C3%ADa`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#1da851] transition-colors whitespace-nowrap flex-shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Pedir similar
              </a>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brown-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Foto anterior"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brown-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Foto siguiente"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-brown-dark w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Cerrar galería"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
