'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';
import { WhatsAppIcon } from '@/components/Icons';

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-md ml-1.5 flex-shrink-0">
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Respect reduced-motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-pink-bg to-cream-dark pt-16">
      {/* Parallax background blobs */}
      <div ref={heroRef} data-parallax className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose-light/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-light/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Instagram Profile Card */}
        <div className="w-full max-w-sm flex-shrink-0">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-light/50 p-6 space-y-5">

            {/* Profile header */}
            <div className="flex items-start gap-4">
              {/* Avatar with animated ring */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-rose via-gold to-rose-light ring-animated" style={{ padding: '3px' }}>
                  <div className="w-full h-full rounded-full bg-white" />
                </div>
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white" style={{ margin: '3px' }}>
                  <Image
                    src={profile.profileImage}
                    alt="Foto de perfil de Más Cuqui"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-3 text-center pt-1">
                {[
                  { v: profile.stats.posts, l: 'publicaciones' },
                  { v: profile.stats.followers, l: 'seguidores' },
                  { v: profile.stats.following, l: 'seguidos' },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col items-center min-w-0">
                    <span className="font-display text-lg font-bold text-brown-dark leading-tight">{s.v}</span>
                    <span className="text-xs text-brown-dark/70 leading-tight mt-0.5">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Name + handle */}
            <div>
              <div className="flex items-center">
                <span className="font-display text-lg font-bold text-brown-dark">{profile.name}</span>
                <VerifiedBadge />
              </div>
              <a
                href={profile.networks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-rose hover:text-rose-dark transition-colors"
              >
                @{profile.handle}
              </a>
              <p className="text-xs text-brown-dark/70 mt-0.5">{profile.category} · {profile.location}</p>
            </div>

            {/* Bio */}
            <p className="text-sm text-brown leading-relaxed">
              {profile.bio}
              <br />
              <span className="text-brown-dark/70">
                <WhatsAppIcon className="w-3.5 h-3.5 inline mr-1 text-[#25D366]" />
                WhatsApp para pedidos: {profile.whatsappDisplay}
              </span>
            </p>

            {/* Action buttons */}
            <div className="flex gap-2">
              <a
                href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-rose text-white text-sm font-semibold py-2 rounded-lg text-center hover:bg-rose-dark transition-colors"
              >
                Contactar
              </a>
              <a
                href={profile.networks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-cream-dark text-brown text-sm font-semibold py-2 rounded-lg text-center hover:bg-rose-light transition-colors"
              >
                Seguir
              </a>
            </div>

            {/* Mini grid */}
            <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden">
              {profile.posts.slice(0, 6).map((post, i) => (
                <a
                  key={i}
                  href={profile.networks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square block overflow-hidden group"
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="100px"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Business type pill */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-rose text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25A.75.75 0 015.25 7.5h13.5a.75.75 0 010 1.5H5.25A.75.75 0 014.5 8.25zM3 12.75A.75.75 0 013.75 12h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12.75zM3 17.25A.75.75 0 013.75 16.5h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 17.25z" />
              </svg>
              Cafetería
            </span>
            <span className="inline-flex items-center gap-1.5 bg-gold text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Pastelería
            </span>
            <span className="inline-flex items-center gap-1.5 bg-rose-light text-rose-dark text-sm font-semibold px-4 py-1.5 rounded-full border border-rose/30">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Obrador artesanal propio
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-dark leading-tight">
            Donde todo se<br />
            <span className="text-rose">hace con amor</span>
          </h1>
          <p className="text-lg text-brown/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Pastelería artesanal en el corazón de Ciudad Real. Tartas personalizadas, desayunos, café de especialidad y dulces venezolanos elaborados cada día en nuestro obrador.
          </p>

          {/* Opening hours badge */}
          <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 max-w-sm mx-auto lg:mx-0 border border-rose-light/40">
            <svg className="w-5 h-5 text-rose flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-sm">
              <p className="font-semibold text-brown-dark">L-V: 8:30–20:30 · S: 9:00–14:00</p>
              <p className="text-brown-dark/60 text-xs">Domingos cerrado</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
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
              className="text-brown font-semibold px-6 py-3 rounded-full border-2 border-brown/20 hover:border-rose hover:text-rose transition-colors"
            >
              Ver carta
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brown/40 hover:text-rose transition-colors"
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
