'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

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
    const onScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-pink-bg to-cream-dark pt-16">
      {/* Parallax background blobs */}
      <div ref={heroRef} className="absolute inset-0 pointer-events-none">
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
                    <span className="text-[10px] text-brown/60 leading-tight mt-0.5">{s.l}</span>
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
              <p className="text-xs text-brown/60 mt-0.5">{profile.category} · {profile.location}</p>
            </div>

            {/* Bio */}
            <p className="text-sm text-brown leading-relaxed">
              {profile.bio}
              <br />
              <span className="text-brown/60">📲 WhatsApp para pedidos: {profile.whatsappDisplay}</span>
            </p>

            {/* Action buttons */}
            <div className="flex gap-2">
              <a
                href={`https://wa.me/34${profile.whatsapp}`}
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
          <div className="inline-block bg-rose-light/60 text-rose-dark text-sm font-semibold px-4 py-1.5 rounded-full">
            ✨ Obrador artesanal · Ciudad Real
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-dark leading-tight">
            Donde todo se<br />
            <span className="text-rose">hace con amor</span>
          </h1>
          <p className="text-lg text-brown/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Pastelería artesanal venezolana en el corazón de Ciudad Real. Sabores que nacen del alma latina con maestría pastelera europea.
          </p>

          {/* Community total */}
          <div className="flex items-center justify-center lg:justify-start gap-6 text-center">
            {[
              { red: 'Instagram', value: '3K', icon: '📸' },
              { red: 'Facebook', value: '40K', icon: '📘' },
              { red: 'TikTok', value: '@cuquipasteleria', icon: '🎵' },
            ].map((r) => (
              <div key={r.red} className="flex flex-col items-center">
                <span className="text-lg">{r.icon}</span>
                <span className="font-display text-base font-bold text-brown-dark">{r.value}</span>
                <span className="text-xs text-brown/50">{r.red}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <a
              href={`https://wa.me/34${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose text-white font-semibold px-8 py-3 rounded-full hover:bg-rose-dark transition-colors shadow-lg shadow-rose/30 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.844L.057 23.885a.5.5 0 0 0 .611.612l6.041-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.387l-.36-.214-3.736.906.923-3.736-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.567 6.567 2.182 12 2.182S21.818 6.567 21.818 12 17.433 21.818 12 21.818z" />
              </svg>
              Hacer un pedido
            </a>
            <a
              href="#galeria"
              className="text-brown font-semibold px-6 py-3 rounded-full border-2 border-brown/20 hover:border-rose hover:text-rose transition-colors"
            >
              Ver galería
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-nosotros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brown/40 hover:text-rose transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Descubrir</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
