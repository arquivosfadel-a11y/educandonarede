'use client'

import { motion, type Variants } from 'framer-motion'
import {
  ShieldAlert, Heart, Brain, HeartPulse, Bug,
  Smile, Car, PiggyBank, Globe, ArrowRight,
} from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'
import { BlurFade } from '@/components/ui/blur-fade'
import { DrawnHighlight } from '@/components/ui/hand-writing-text'

const WA =
  'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

const TEMAS = [
  { icon: ShieldAlert, cor: '#f43f5e', label: 'Bullying' },
  { icon: Heart,       cor: '#8b5cf6', label: 'Socioemocional' },
  { icon: Brain,       cor: '#3b82f6', label: 'TEA' },
  { icon: HeartPulse,  cor: '#f97316', label: 'Primeiros Socorros' },
  { icon: Bug,         cor: '#10b981', label: 'Dengue' },
  { icon: Smile,       cor: '#06b6d4', label: 'Saúde Bucal' },
  { icon: Car,         cor: '#eab308', label: 'Trânsito' },
  { icon: PiggyBank,   cor: '#22c55e', label: 'Ed. Financeira' },
  { icon: Globe,       cor: '#ec4899', label: 'Diversidade' },
]

const floatV = (i: number): Variants => ({
  animate: {
    y: [0, i % 2 === 0 ? -8 : 8, 0],
    rotate: [0, i % 3 === 0 ? 1.5 : -1.5, 0],
    transition: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
  },
})

function IconGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {TEMAS.map((t, i) => {
        const Icon = t.icon
        return (
          <motion.div
            key={t.label}
            variants={floatV(i)}
            animate="animate"
            style={{
              background: '#FFFFFF',
              border: `1.5px solid ${t.cor}33`,
              borderRadius: '16px',
              padding: '16px 10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px ${t.cor}15`,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: `${t.cor}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${t.cor}25`,
              }}
            >
              <Icon size={20} color={t.cor} strokeWidth={2} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-source-sans)',
                fontWeight: 700,
                fontSize: '10px',
                color: '#374151',
                textAlign: 'center',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {t.label}
            </span>
            {/* Top color bar */}
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${t.cor}, ${t.cor}55)`,
                borderRadius: '16px 16px 0 0',
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Subtle background elements */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Light gradient blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '0%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)' }} />
      </div>

      {/* Dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div>
            {/* Badge */}
            <BlurFade delay={0.05} inView>
              <div style={{ marginBottom: '32px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: 'rgba(79,70,229,0.08)',
                    border: '1.5px solid rgba(79,70,229,0.2)',
                    fontFamily: 'var(--font-source-sans)',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#4f46e5',
                  }}
                >
                  <span
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      backgroundColor: '#4f46e5', flexShrink: 0,
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  Para Secretarias Municipais de Educação
                </span>
              </div>
            </BlurFade>

            {/* Title */}
            <BlurFade delay={0.12} inView>
              <h1
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontWeight: 900,
                  fontSize: 'clamp(44px, 6vw, 72px)',
                  letterSpacing: '-0.05em',
                  lineHeight: 1.0,
                  marginBottom: '32px',
                  color: '#0F1F35',
                }}
              >
                Programa Municipal{' '}
                <span style={{ display: 'block', marginTop: '4px' }}>
                  <DrawnHighlight color="#4f46e5" delay={0.8}>
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Temas Transversais
                    </span>
                  </DrawnHighlight>
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.55em',
                    fontWeight: 700,
                    color: '#9CA3AF',
                    letterSpacing: '-0.02em',
                    marginTop: '8px',
                  }}
                >
                  BNCC
                </span>
              </h1>
            </BlurFade>

            {/* Subtitle */}
            <BlurFade delay={0.2} inView>
              <p
                style={{
                  fontFamily: 'var(--font-source-sans)',
                  fontWeight: 400,
                  fontSize: '20px',
                  color: '#6B7280',
                  lineHeight: 1.75,
                  maxWidth: '520px',
                  marginBottom: '44px',
                }}
              >
                Uma coleção pedagógica completa para apoiar a rede municipal no
                desenvolvimento da cidadania, prevenção e formação integral dos
                alunos — com materiais adequados por etapa e alinhamento à BNCC.
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.28} inView>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-lato)',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #4f46e5 0%, #2563A8 100%)',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(79,70,229,0.3)',
                    transition: 'all 0.2s ease',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(79,70,229,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.3)'
                  }}
                >
                  Solicitar Apresentação
                  <ArrowRight size={17} strokeWidth={2.5} />
                </a>

                <button
                  onClick={() => document.getElementById('temas')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'none',
                    border: '1.5px solid #E2E8F0',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-source-sans)',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#6B7280',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#4f46e5'
                    e.currentTarget.style.color = '#4f46e5'
                    e.currentTarget.style.background = 'rgba(79,70,229,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0'
                    e.currentTarget.style.color = '#6B7280'
                    e.currentTarget.style.background = 'none'
                  }}
                >
                  Ver Catálogo ↓
                </button>
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.36} inView>
              <div
                style={{
                  display: 'flex',
                  gap: '0',
                  borderTop: '1.5px solid #E2E8F0',
                  paddingTop: '32px',
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { num: 9,   label: 'Temas', color: '#4f46e5' },
                  { num: 3,   label: 'Etapas', color: '#06b6d4' },
                  { num: 100, label: 'BNCC %', suffix: '%', color: '#10b981' },
                ].map(({ num, label, color, suffix }, i) => (
                  <div
                    key={label}
                    style={{
                      padding: i === 0 ? '0 40px 0 0' : '0 40px',
                      borderLeft: i > 0 ? '1.5px solid #E2E8F0' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                      <NumberTicker
                        value={num}
                        style={{
                          fontFamily: 'var(--font-lato)',
                          fontWeight: 900,
                          fontSize: '44px',
                          letterSpacing: '-0.05em',
                          lineHeight: 1,
                          color,
                        } as React.CSSProperties}
                      />
                      {suffix && <span style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '30px', color, letterSpacing: '-0.04em' }}>{suffix}</span>}
                    </div>
                    <p style={{ fontFamily: 'var(--font-source-sans)', fontWeight: 600, fontSize: '12px', color: '#9CA3AF', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Icon grid */}
          <BlurFade delay={0.22} inView direction="left" className="hidden lg:block">
            <div style={{ position: 'relative' }}>
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '360px', height: '360px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <IconGrid />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
          background: 'linear-gradient(to bottom, transparent, #F8F9FB)',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
