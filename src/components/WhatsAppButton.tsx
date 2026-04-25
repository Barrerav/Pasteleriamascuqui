'use client';

import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';
import { WhatsAppIcon } from '@/components/Icons';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Show after scrolling past the hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/34${profile.whatsapp}?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20en%20M%C3%A1s%20Cuqui`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-[#1da851] hover:scale-110 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
