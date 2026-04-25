/**
 * SVG icon components replacing emoji icons for accessibility,
 * cross-platform consistency, and themability.
 */

interface IconProps {
  className?: string;
}

export function CoffeeIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2v3M10 2v3M14 2v3" />
    </svg>
  );
}

export function CakeIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4l-2-2M12 4l2-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 14.5c0-1.5 2-3 4.5-3s4.5 1.5 4.5 3M8 14.5c0-1.5 2-3 4.5-3s4.5 1.5 4.5 3" />
      <rect x="2" y="14" width="20" height="7" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 17.5h20" />
    </svg>
  );
}

export function CroissantIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.5C3 14 2 11.5 3.5 9c1.5-2.5 4-3.5 6-3.5S13 6 14 7.5c1 1.5 1.5 3.5 1 5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13c1-2 3.5-3 5.5-1.5S22 15 21 17c-1 2-3 3-5 2.5s-3-2.5-2.5-4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.5c1 1 3 2.5 5.5 3s5-.5 6-1.5" />
    </svg>
  );
}

export function GiftIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="8" width="18" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8a2.5 2.5 0 010-5C9 3 12 5.5 12 8M16.5 8a2.5 2.5 0 000-5C15 3 12 5.5 12 8" />
    </svg>
  );
}

export function MapPinIcon({ className = 'w-7 h-7' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function ClockIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.523 5.844L.057 23.885a.5.5 0 0 0 .611.612l6.041-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-5.032-1.387l-.36-.214-3.736.906.923-3.736-.234-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.567 6.567 2.182 12 2.182S21.818 6.567 21.818 12 17.433 21.818 12 21.818z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/** Map from icon key string to component */
const iconMap: Record<string, React.FC<IconProps>> = {
  coffee: CoffeeIcon,
  cake: CakeIcon,
  croissant: CroissantIcon,
  gift: GiftIcon,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] || CoffeeIcon;
  return <Icon className={className} />;
}
