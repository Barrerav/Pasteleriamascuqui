'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const badges = [
    'Obrador artesanal propio',
    'Fusión venezolano-europea',
    'Ingredientes de calidad',
    'Todo elaborado desde cero',
    'Café de especialidad',
    'Pedidos personalizados',
  ];

  return (
    <section id="sobre-nosotros" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image grid */}
          <div className="reveal-left grid grid-cols-2 gap-3">
            <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={profile.posts[3].src}
                alt="Arte latte en Más Cuqui"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden">
              <Image
                src={profile.posts[1].src}
                alt="Desayuno artesanal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-44 rounded-2xl overflow-hidden">
              <Image
                src={profile.posts[2].src}
                alt="4 años juntos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="reveal">
              <span className="text-rose font-semibold text-sm tracking-widest uppercase">Nuestra historia</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown-dark mt-2 leading-tight">
                Nació de una familia venezolana con pasión por lo dulce
              </h2>
            </div>

            <div className="reveal stagger-1 space-y-4 text-brown/80 leading-relaxed">
              <p>
                En abril de 2022, la chef <strong className="text-brown-dark">Liser Giménez</strong> abrió las puertas de Más Cuqui en el corazón de Ciudad Real, trayendo consigo los sabores de Venezuela y la técnica de la mejor pastelería europea.
              </p>
              <p>
                Con obrador artesanal propio, cada dulce se elabora desde cero: sin atajos, sin conservantes, solo ingredientes de calidad y mucho cariño en cada preparación.
              </p>
              <p>
                &quot;Cuqui&quot; — en venezolano, sinónimo de lo más tierno y especial. Eso es lo que queremos que sientas cuando entras por nuestra puerta.
              </p>
            </div>

            {/* Expertise badges */}
            <div className="reveal stagger-2 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-pink-bg text-rose-dark text-sm font-medium px-3 py-1.5 rounded-full border border-rose-light"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Founded */}
            <div className="reveal stagger-3 flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-rose flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🏡</span>
              </div>
              <div>
                <p className="font-display text-base font-bold text-brown-dark">Calle Tinte, 17 Bajo</p>
                <p className="text-sm text-brown/60">Ciudad Real · Desde {profile.founded}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
