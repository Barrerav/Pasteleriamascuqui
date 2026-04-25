import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-white">{profile.name}</p>
            <p className="text-sm mt-1">{profile.tagline}</p>
            <p className="text-xs mt-1">{profile.address}</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: profile.networks.instagram, label: 'Instagram' },
              { href: profile.networks.facebook, label: 'Facebook' },
              { href: profile.networks.tiktok, label: 'TikTok' },
              { href: `https://wa.me/34${profile.whatsapp}`, label: 'WhatsApp' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs">
          <p>© {year} {profile.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
