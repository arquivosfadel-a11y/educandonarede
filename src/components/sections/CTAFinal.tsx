'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DrawnHighlight } from '@/components/ui/hand-writing-text'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

export function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="cta"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        overflow: 'hidden',
        background: '#1A3A5C',
      }}
    >
      {/* Subtle top highlight */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

      {/* Dot pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      {/* Subtle radial */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '999px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'var(--font-source-sans)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.8)', marginBottom: '36px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
            Atendimento Exclusivo
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: 'clamp(32px, 5vw, 60px)', letterSpacing: '-0.04em', lineHeight: 1.05, color: '#ffffff', marginBottom: '24px' }}
        >
          Pronto para{' '}
          <DrawnHighlight color="rgba(255,255,255,0.6)" delay={0.6}>
            <span style={{ color: '#ffffff' }}>transformar</span>
          </DrawnHighlight>
          {' '}sua rede municipal?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-source-sans)', fontSize: '19px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 48px' }}
        >
          Entre em contato e receba uma apresentação completa do Programa Municipal Temas Transversais BNCC.
          Sem compromisso, exclusivo para Secretarias de Educação.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ marginBottom: '28px' }}
        >
          <a
            href={WA} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '18px 44px', borderRadius: '16px',
              fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '19px',
              color: '#fff', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 8px 32px rgba(16,185,129,0.35)',
              textDecoration: 'none', transition: 'all 0.2s ease', letterSpacing: '-0.02em',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 48px rgba(16,185,129,0.5)'; e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.35)'; e.currentTarget.style.transform = 'translateY(0) scale(1)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Apresentação Gratuita
          </a>
        </motion.div>

        {/* Trust info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}
        >
          {['(14) 99639-7587', 'Horário comercial', 'Exclusivo para Secretarias'].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-source-sans)', fontSize: '18px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
