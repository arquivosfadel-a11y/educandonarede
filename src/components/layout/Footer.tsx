'use client'

import Image from 'next/image'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

export function Footer() {
  return (
    <footer style={{ background: '#0F1F35', position: 'relative', overflow: 'hidden' }}>
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 40px' }}>
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '48px' }}>

          {/* Icon + tagline */}
          <div style={{ maxWidth: '300px' }}>
            <a href="#hero" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '14px' }}>
              <Image
                src="/icone.jpeg"
                alt="Educando na Rede"
                width={52}
                height={52}
                style={{ objectFit: 'contain', width: '52px', height: '52px', borderRadius: '10px' }}
              />
            </a>
            <p style={{ fontFamily: 'var(--font-source-sans)', fontWeight: 400, fontSize: '19px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              Programa Municipal Temas Transversais BNCC — materiais pedagógicos completos para redes municipais de ensino.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '18px' }}>
                Programa
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { href: '#temas', label: 'Temas Essenciais' },
                  { href: '#galeria', label: 'Materiais' },
                  { href: '#projeto', label: 'Personalização' },
                  { href: '#como-funciona', label: 'Como Funciona' },
                ].map((link) => <a key={link.href} href={link.href} className="footer-link">{link.label}</a>)}
              </div>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '18px' }}>
                Contato
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
                <a href="#contato" className="footer-link">Formulário</a>
                {/* Phone → WhatsApp */}
                <a href={WA} target="_blank" rel="noopener noreferrer" className="footer-phone">(14) 99639-7587</a>
              </div>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '18px' }}>
                Legal
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" className="footer-link">Termos de Uso</a>
                <a href="#" className="footer-link">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '28px' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Educando na Rede. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '16px', color: 'rgba(255,255,255,0.25)' }}>
            By{' '}
            <a
              href="https://www.in9vi.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit"
            >
              Agência In9vi
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
