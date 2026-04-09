'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { MapPin, Landmark, TreePine } from 'lucide-react'
import Image from 'next/image'
import { DrawnHighlight } from '@/components/ui/hand-writing-text'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

const beneficios = [
  { icon: MapPin,   color: '#4f46e5', title: 'Identidade e Pertencimento',       desc: 'Fortalece identidade local e pertencimento, conectando os alunos à história e cultura do lugar onde vivem.' },
  { icon: TreePine, color: '#06b6d4', title: 'Território e Memória Comunitária', desc: 'Estimula a valorização do território e a memória comunitária, resgatando a origem histórica da cidade.' },
  { icon: Landmark, color: '#10b981', title: 'Material Único e Exclusivo',       desc: 'O projeto é desenvolvido para se tornar um material único, criando valor institucional e diferencial real para a rede municipal.' },
]

const itemV: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const wrapV: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function ProjetoPersonalizado() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="projeto"
      style={{ background: '#F8F9FB', padding: '68px 0 80px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Dot pattern — right half */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.3, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div
          ref={ref}
          style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: '56px', alignItems: 'center' }}
        >

          {/* ── Left: text content ───────────────────────────────── */}
          <motion.div variants={wrapV} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div variants={itemV} style={{ marginBottom: '14px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-source-sans)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#4f46e5' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: '#4f46e5', borderRadius: '1px' }} />
                Projeto Personalizado
              </span>
            </motion.div>

            <motion.h2
              variants={itemV}
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.04em', lineHeight: 1.08, color: '#0F1F35', marginBottom: '16px' }}
            >
              Um programa com a{' '}
              <DrawnHighlight color="#4f46e5" delay={0.5}>
                <span style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  cara do seu município
                </span>
              </DrawnHighlight>
            </motion.h2>

            <motion.p
              variants={itemV}
              style={{ fontFamily: 'var(--font-source-sans)', fontSize: '18px', color: '#6B7280', lineHeight: 1.7, marginBottom: '28px' }}
            >
              Além das coleções de temas transversais, o programa oferece um diferencial exclusivo
              para prefeituras: um projeto pedagógico personalizável, construído com base na{' '}
              <strong style={{ color: '#0F1F35', fontWeight: 700 }}>história, cultura e pontos turísticos do município</strong>.
            </motion.p>

            {/* Cards — 2-column grid */}
            <motion.div
              variants={wrapV}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}
            >
              {beneficios.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    variants={itemV}
                    style={{
                      gridColumn: i === 2 ? '1 / -1' : undefined,
                      display: 'flex', gap: '12px', padding: '16px 18px', borderRadius: '14px',
                      background: '#FFFFFF', border: '1.5px solid #E2E8F0',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      alignItems: 'flex-start',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = `${b.color}44`
                      el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = '#E2E8F0'
                      el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', background: `${b.color}10`, flexShrink: 0, border: `1.5px solid ${b.color}20`, marginTop: '1px' }}>
                      <Icon size={17} color={b.color} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '14px', color: '#0F1F35', marginBottom: '3px', letterSpacing: '-0.01em' }}>{b.title}</p>
                      <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '14px', color: '#6B7280', lineHeight: 1.5 }}>{b.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div variants={itemV}>
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '13px 24px', borderRadius: '12px',
                  fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '15px',
                  color: '#fff', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                  textDecoration: 'none', transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(16,185,129,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Projeto Personalizado
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: image with animated blobs ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 28 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Animated blob — indigo top-right */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '-30px', right: '-20px',
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79,70,229,0.4) 0%, transparent 70%)',
                filter: 'blur(28px)', pointerEvents: 'none', zIndex: 0,
              }}
            />

            {/* Animated blob — emerald bottom-left */}
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25], y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              style={{
                position: 'absolute', bottom: '-10px', left: '-20px',
                width: '160px', height: '160px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)',
                filter: 'blur(22px)', pointerEvents: 'none', zIndex: 0,
              }}
            />

            {/* Animated blob — cyan center drifting */}
            <motion.div
              animate={{ x: [0, 12, 0, -12, 0], y: [0, -10, 0, 10, 0], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: '40%', left: '10%',
                width: '120px', height: '120px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
                filter: 'blur(18px)', pointerEvents: 'none', zIndex: 0,
              }}
            />

            {/* Image */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Image
                src="/personalizado.png"
                alt="Programa personalizado para o município"
                width={1024}
                height={1536}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
