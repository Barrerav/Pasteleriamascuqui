'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

const links = [
  { href: '#sobre-nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Productos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-brown-dark tracking-wide">
          Más Cuqui
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brown hover:text-rose transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/34${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-rose-dark transition-colors"
          >
            Pedir ahora
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-brown-dark p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-rose-light px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-brown font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/34${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Pedir ahora
          </a>
        </div>
      )}
    </header>
  );
}
