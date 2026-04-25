'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { logoSrc } from '@/data/photos';

const links = [
  { href: '#sobre-nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Productos' },
  { href: '#carta', label: 'Carta' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll-spy: detect active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as HTMLElement[];

      let current = '';
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= 120) current = `#${section.id}`;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Close on click outside
  const handleClickOutside = useCallback(() => {
    if (open) setOpen(false);
  }, [open]);

  return (
    <>
      {/* Backdrop to close on click outside */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={handleClickOutside}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-32 md:h-48 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Más Cuqui — Cafetería y Pastelería en Ciudad Real"
              width={500}
              height={200}
              className="h-28 md:h-44 w-auto object-contain drop-shadow-md"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === l.href
                    ? 'text-rose'
                    : scrolled
                      ? 'text-brown hover:text-rose'
                      : 'text-white/90 hover:text-gold'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-rose-dark transition-colors"
            >
              Pedir ahora
            </a>
          </nav>

          {/* Mobile menu button — animated hamburger to X */}
          <button
            className="md:hidden text-brown-dark p-2 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                open ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${
                open ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-cream/95 backdrop-blur-md border-t border-rose-light overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
          role="navigation"
          aria-label="Navegación móvil"
        >
          <div className="px-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-medium py-1 transition-colors ${
                  activeSection === l.href ? 'text-rose' : 'text-brown'
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            >
              Pedir ahora
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
