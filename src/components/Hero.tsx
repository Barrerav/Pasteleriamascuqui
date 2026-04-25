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
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16">
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
      <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/65 via-brown-dark/45 to-brown-dark/75" />

      {/* Parallax blobs */}
      <div ref={blobsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose-light/15 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 flex flex-col items-center gap-8 text-center mt-10">

        {/* Category badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/25">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25A.75.75 0 015.25 7.5h13.5a.75.75 0 010 1.5H5.25A.75.75 0 014.5 8.25zM3 12.75A.75.75 0 013.75 12h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12.75zM3 17.25A.75.75 0 013.75 16.5h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 17.25z" />
            </svg>
            Cafetería
          </span>
          <span className="inline-flex items-center gap-2 bg-rose/80 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full border border-rose/50">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            Pastelería
          </span>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/25">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Obrador artesanal propio
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          Donde todo se<br />
          <span className="text-rose-light">hace con amor</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed drop-shadow">
          Pastelería artesanal en el corazón de Ciudad Real. Tartas personalizadas, desayunos, café de especialidad y dulces venezolanos elaborados cada día.
        </p>

        {/* Opening hours badge */}
        <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/20">
          <svg className="w-5 h-5 text-rose-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="text-sm text-left">
            <p className="font-semibold text-white">L-V: 8:30–20:30 · S: 9:00–14:00</p>
            <p className="text-white/60 text-xs">Domingos cerrado</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <a
            href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose text-white font-semibold px-8 py-3 rounded-full hover:bg-rose-dark transition-colors shadow-lg shadow-rose/30 inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hacer un pedido
          </a>
          <a
            href="#carta"
            className="text-white font-semibold px-6 py-3 rounded-full border-2 border-white/40 hover:border-rose-light hover:text-rose-light transition-colors backdrop-blur-sm"
          >
            Ver carta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-rose-light transition-colors"
        aria-label="Ir a la sección Sobre Nosotros"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Descubrir</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
