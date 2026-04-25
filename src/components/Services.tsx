'use client';

import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';
import { ServiceIcon, WhatsAppIcon } from '@/components/Icons';

export default function Services() {
  const sectionRef = useReveal(0.1);

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
              <div className="w-14 h-14 rounded-2xl bg-pink-bg flex items-center justify-center text-rose">
                <ServiceIcon name={service.icon} className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-brown-dark mb-2">{service.title}</h3>
                <p className="text-sm text-brown/70 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-xs text-rose font-semibold bg-rose-light/50 px-3 py-1 rounded-full">
                  {service.priceRange}
                </span>
                <a
                  href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20interesa%20${encodeURIComponent(service.title)}%20en%20M%C3%A1s%20Cuqui`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brown/50 hover:text-rose transition-colors"
                  aria-label={`Consultar ${service.title} por WhatsApp`}
                >
                  Consultar →
                </a>
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
            <WhatsAppIcon className="w-5 h-5" />
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  );
}
