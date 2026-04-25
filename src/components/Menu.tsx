'use client';

import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/profile';

const menuCategories = [
  {
    title: 'Cafetería',
    items: [
      { name: 'Café solo', price: '1,50 €' },
      { name: 'Café con leche', price: '1,80 €' },
      { name: 'Cappuccino', price: '2,20 €' },
      { name: 'Iced latte de temporada', price: '3,50 €' },
      { name: 'Mocaccino vegetal', price: '3,00 €' },
      { name: 'Chocolate caliente', price: '2,50 €' },
    ],
  },
  {
    title: 'Desayunos',
    items: [
      { name: 'Tostada con tomate y AOVE', price: '2,50 €' },
      { name: 'Croissant artesanal', price: '2,00 €' },
      { name: 'Cachito venezolano', price: '3,00 €' },
      { name: 'Desayuno completo', price: '5,50 €' },
      { name: 'Bollería del día', price: 'Desde 1,80 €' },
    ],
  },
  {
    title: 'Pastelería',
    items: [
      { name: 'Porción de tarta del día', price: '3,50 €' },
      { name: 'Tres leches individual', price: '4,00 €' },
      { name: 'Dulces venezolanos (unidad)', price: 'Desde 2,50 €' },
      { name: 'Roscón de Reyes (temporada)', price: 'Desde 18 €' },
    ],
  },
  {
    title: 'Tartas de encargo',
    items: [
      { name: 'Tarta personalizada pequeña (6-8 pers.)', price: 'Desde 25 €' },
      { name: 'Tarta personalizada mediana (10-15 pers.)', price: 'Desde 40 €' },
      { name: 'Tarta personalizada grande (20+ pers.)', price: 'Desde 60 €' },
      { name: 'Cupcakes personalizados (docena)', price: 'Desde 24 €' },
    ],
  },
];

export default function Menu() {
  const sectionRef = useReveal(0.1);

  return (
    <section id="carta" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="reveal text-center mb-14">
          <span className="text-rose font-semibold text-sm tracking-widest uppercase">Nuestra carta</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown-dark mt-2">
            Carta y precios orientativos
          </h2>
          <p className="text-brown/70 mt-3 max-w-xl mx-auto">
            Precios orientativos. Para pedidos personalizados y disponibilidad actual, escríbenos por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, ci) => (
            <div
              key={category.title}
              className={`reveal stagger-${ci + 1} bg-cream rounded-2xl p-6 border border-rose-light/30`}
            >
              <h3 className="font-display text-xl font-bold text-brown-dark mb-4 pb-2 border-b border-rose-light/40">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-2">
                    <span className="text-sm text-brown-dark leading-snug">{item.name}</span>
                    <span className="flex-shrink-0 border-b border-dotted border-brown/20 flex-1 mx-2 min-w-[20px] self-end mb-1" />
                    <span className="text-sm font-semibold text-rose whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Quiero%20consultar%20la%20carta%20de%20M%C3%A1s%20Cuqui`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-rose text-rose font-semibold px-8 py-3 rounded-full hover:bg-rose hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.844L.057 23.885a.5.5 0 0 0 .611.612l6.041-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.387l-.36-.214-3.736.906.923-3.736-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.567 6.567 2.182 12 2.182S21.818 6.567 21.818 12 17.433 21.818 12 21.818z" />
            </svg>
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
