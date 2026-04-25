import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold text-white">{profile.name}</p>
            <p className="text-sm mt-1">{profile.tagline}</p>
            <p className="text-sm mt-2">{profile.address}</p>
          </div>

          {/* Horario */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-3">Horario</h4>
            <ul className="space-y-1 text-sm">
              {profile.schedule.map((s) => (
                <li key={s.days}>
                  <span className="text-white/90">{s.days}:</span>{' '}
                  <span className={s.hours === 'Cerrado' ? 'text-white/50' : ''}>{s.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-3">Síguenos</h4>
            <div className="flex flex-col gap-1.5">
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

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-3">Legal</h4>
            <div className="flex flex-col gap-1.5 text-sm">
              <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
              <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Política de cookies</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/60">
          <p>© {year} {profile.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
