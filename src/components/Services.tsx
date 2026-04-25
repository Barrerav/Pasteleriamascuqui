'use client';

import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal text-center mb-14">
          <span className="text-rose font-semibold text-sm tracking-widest uppercase">Lo que ofrecemos</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown-dark mt-2">
            Nuestros productos
          </h2>
          <p className="text-brown/70 mt-3 max-w-xl mx-auto">
            Todo elaborado artesanalmente en nuestro obrador. Consulta disponibilidad y precios por WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal stagger-${i + 1} bg-white rounded-2xl p-6 shadow-sm border border-rose-light/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-bg flex items-center justify-center text-3xl">
                {service.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brown-dark mb-2">{service.title}</h3>
                <p className="text-sm text-brown/70 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-auto pt-2">
                <span className="text-xs text-rose font-semibold bg-rose-light/50 px-3 py-1 rounded-full">
                  Consultar por WhatsApp
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose text-white font-semibold px-8 py-3 rounded-full hover:bg-rose-dark transition-colors shadow-lg shadow-rose/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.844L.057 23.885a.5.5 0 0 0 .611.612l6.041-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.387l-.36-.214-3.736.906.923-3.736-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.567 6.567 2.182 12 2.182S21.818 6.567 21.818 12 17.433 21.818 12 21.818z" />
            </svg>
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  );
}
