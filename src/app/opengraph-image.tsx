import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Más Cuqui — Pastelería Artesanal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/images/logo.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7dadb',
        }}
      >
        <div
          style={{
            display: 'flex',
            background: '#ffffff',
            padding: '60px 100px',
            borderRadius: '40px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={logoSrc}
            alt="Más Cuqui Logo"
            style={{ width: '800px', objectFit: 'contain' }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
