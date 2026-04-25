'use client';

import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import { heroConfig } from '@/data/photos';
import { WhatsAppIcon } from '@/components/Icons';

export default function Hero() {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blobsRef.current;
    if (!el) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Video background */}
        <video
          src={heroConfig.videoSrc}
          poster={heroConfig.posterSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/60 via-brown-dark/40 to-brown-dark/70" />

        {/* Parallax blobs */}
        <div ref={blobsRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose-light/15 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-14 sm:py-24 flex flex-col items-center gap-6 sm:gap-8 text-center mt-6 sm:mt-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-gold/50" />
            <span className="text-gold font-semibold text-xs tracking-[0.22em] uppercase">
              Cafetería · Pastelería · Ciudad Real
            </span>
            <span className="block w-8 h-px bg-gold/50" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Donde todo se hace<br />
            <em className="not-italic text-gold">con amor</em>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed font-light drop-shadow">
            Pastelería artesanal en el corazón de Ciudad Real. Tartas personalizadas,
            desayunos y café de especialidad.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <a
              href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose text-white font-semibold px-8 py-3.5 rounded-full hover:bg-rose-dark transition-colors shadow-lg shadow-rose/30 inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Hacer un pedido
            </a>
            <a
              href="#carta"
              className="text-white font-semibold px-7 py-3.5 rounded-full border-2 border-white/35 hover:border-gold hover:text-gold transition-colors inline-flex items-center gap-2"
            >
              Ver carta
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-9 bg-gradient-to-b from-white/40 to-transparent animate-[sdrop_2s_ease-in-out_infinite]" />
          <a
            href="#sobre-nosotros"
            className="text-white/40 hover:text-gold transition-colors text-[10px] font-medium tracking-[0.15em] uppercase"
            aria-label="Ir a la sección Sobre Nosotros"
          >
            Descubrir
          </a>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-white border-b border-cream-dark flex flex-wrap justify-center gap-x-12 gap-y-3 px-8 py-4">
        <div className="flex items-center gap-2.5 text-sm text-brown/70">
          <svg className="w-4 h-4 text-rose flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            <strong className="text-brown-dark">L–V:</strong> 8:30–20:30
            &nbsp;·&nbsp;
            <strong className="text-brown-dark">S:</strong> 9:00–14:00
            &nbsp;·&nbsp; Domingos cerrado
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-brown/70">
          <svg className="w-4 h-4 text-rose flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span><strong className="text-brown-dark">Calle Tinte, 17 Bajo</strong> · Ciudad Real</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-brown/70">
          <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span><strong className="text-brown-dark">{profile.googleRating}★</strong> en Google Maps</span>
        </div>
      </div>
    </>
  );
}
