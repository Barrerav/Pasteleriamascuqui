'use client';

import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/profile';
import { StarIcon } from '@/components/Icons';

export default function Testimonials() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal text-center mb-14">
          <span className="text-rose font-semibold text-sm tracking-widest uppercase">Lo que dicen</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown-dark mt-2">
            Opiniones de nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-brown-dark font-semibold">{profile.googleRating}/5</span>
            <span className="text-brown/70 text-sm">en Google Maps</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profile.testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`reveal stagger-${i + 1} bg-white rounded-2xl p-6 shadow-sm border border-rose-light/30 flex flex-col gap-4`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-gold">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-brown/80 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-rose-light/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-light to-rose flex items-center justify-center text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brown-dark">{t.author}</p>
                  <p className="text-xs text-brown/50">Reseña en {t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
