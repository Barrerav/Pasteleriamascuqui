'use client';

import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';
import { ClockIcon, InstagramIcon } from '@/components/Icons';

export default function Contact() {
  const sectionRef = useReveal(0.1);



  return (
    <section id="contacto" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal text-center mb-14">
          <span className="text-rose font-semibold text-sm tracking-widest uppercase">Visítanos</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown-dark mt-2">
            Encuéntranos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Contact info */}
          <div className="reveal-left space-y-6">

            {/* WhatsApp CTA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-light/30">
              <h3 className="font-display text-lg font-bold text-brown-dark mb-1">Pedidos y consultas</h3>
              <p className="text-sm text-brown/70 mb-4">Escríbenos por WhatsApp para pedidos personalizados, tartas de encargo o cualquier consulta.</p>
              <a
                href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1da851] transition-colors w-full justify-center"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.844L.057 23.885a.5.5 0 0 0 .611.612l6.041-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.387l-.36-.214-3.736.906.923-3.736-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.567 6.567 2.182 12 2.182S21.818 6.567 21.818 12 17.433 21.818 12 21.818z" />
                </svg>
                {profile.whatsappDisplay}
              </a>
            </div>

            {/* Address + rating */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-light/30">
              <h3 className="font-display text-lg font-bold text-brown-dark mb-3">Dónde estamos</h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brown-dark">{profile.address}</p>
                  <p className="text-sm text-brown-dark/70 mt-0.5">Ciudad Real, España</p>
                  <a
                    href="https://maps.google.com/?q=Pasteleria+Mas+Cuqui+Calle+Tinte+17+Ciudad+Real"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rose hover:text-rose-dark mt-2 inline-block transition-colors"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 bg-pink-bg rounded-xl px-4 py-2">
                <span className="text-gold text-lg" aria-label="5 estrellas">★★★★★</span>
                <span className="text-sm font-semibold text-brown-dark">{profile.googleRating}/5 en Google Maps</span>
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-light/30">
              <h3 className="font-display text-lg font-bold text-brown-dark mb-3 flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-rose" />
                Horario de apertura
              </h3>
              <ul className="space-y-2">
                {profile.schedule.map((s) => (
                  <li key={s.days} className="flex items-center justify-between text-sm">
                    <span className="text-brown-dark font-medium">{s.days}</span>
                    <span className={`font-semibold ${s.hours === 'Cerrado' ? 'text-brown/50' : 'text-brown-dark'}`}>
                      {s.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>


          </div>

          {/* Map + Instagram CTA */}
          <div className="reveal-right space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-rose-light/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.3!2d-3.929!3d38.986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU5JzA5LjYiTiAzwrA1NSc0NC40Ilc!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-t-2xl"
                title="Ubicación de Más Cuqui en Ciudad Real"
                allowFullScreen
              />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-brown-dark">Más Cuqui</p>
                <p className="text-xs text-brown-dark/70">{profile.address}</p>
              </div>
            </div>

            {/* IG CTA card */}
            <div className="bg-gradient-to-br from-rose-light/50 to-pink-bg rounded-2xl p-6 border border-rose-light text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose to-gold flex items-center justify-center mx-auto mb-4">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-brown-dark mb-1">Síguenos en Instagram</h3>
              <p className="text-sm text-brown/70 mb-4">
                <strong>{profile.stats.followers}</strong> personas ya nos siguen. Únete a nuestra comunidad dulce.
              </p>
              <a
                href={profile.networks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose to-gold text-white font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                @{profile.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
