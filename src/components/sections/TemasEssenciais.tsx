'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DrawnUnderline } from '@/components/ui/hand-writing-text'
import {
  ShieldAlert, Heart, Brain, Stethoscope,
  Bug, Smile, Car, Landmark, Globe,
} from 'lucide-react'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

const temas = [
  { id: 'bullying', color: '#f43f5e', icon: ShieldAlert, name: 'Bullying e Violência', bullets: ['Prevenção de conflitos', 'Cultura de paz', 'Empoderamento estudantil'] },
  { id: 'socio', color: '#8b5cf6', icon: Heart, name: 'Socioemocional', bullets: ['Autoconhecimento', 'Gestão das emoções', 'Relações interpessoais'] },
  { id: 'tea', color: '#3b82f6', icon: Brain, name: 'Autismo / TEA', bullets: ['Inclusão escolar', 'Sensibilização da comunidade', 'Práticas acolhedoras'] },
  { id: 'socorro', color: '#f97316', icon: Stethoscope, name: 'Primeiros Socorros', bullets: ['Emergências básicas', 'Protocolos de segurança', 'Autonomia e responsabilidade'] },
  { id: 'dengue', color: '#10b981', icon: Bug, name: 'Dengue e Saúde', bullets: ['Prevenção de doenças', 'Saneamento ambiental', 'Mobilização comunitária'] },
  { id: 'bucal', color: '#06b6d4', icon: Smile, name: 'Saúde Bucal', bullets: ['Higiene e cuidado', 'Prevenção de cáries', 'Bem-estar integral'] },
  { id: 'transito', color: '#eab308', icon: Car, name: 'Educação no Trânsito', bullets: ['Respeito às normas', 'Segurança viária', 'Cidadania ativa'] },
  { id: 'financeiro', color: '#22c55e', icon: Landmark, name: 'Educação Financeira', bullets: ['Consumo consciente', 'Planejamento pessoal', 'Autonomia econômica'] },
  { id: 'diversidade', color: '#ec4899', icon: Globe, name: 'Diversidade Cultural', bullets: ['Identidade e pertencimento', 'Respeito às diferenças', 'Patrimônio cultural'] },
]

const containerV: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardV: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

function TemaCard({ tema }: { tema: typeof temas[0] }) {
  const Icon = tema.icon
  return (
    <motion.div
      variants={cardV}
      whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.12)', transition: { duration: 0.2 } }}
      style={{
        background: '#FFFFFF',
        border: '1.5px solid #E2E8F0',
        borderRadius: '20px',
        padding: '32px 28px',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${tema.color}55`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'
      }}
    >
      {/* Top color bar */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
          background: `linear-gradient(90deg, ${tema.color}, ${tema.color}66)`,
        }}
      />

      {/* Icon */}
      <div
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '52px', height: '52px', borderRadius: '14px',
          background: `${tema.color}12`, border: `1.5px solid ${tema.color}25`,
          marginBottom: '20px',
        }}
      >
        <Icon size={24} color={tema.color} />
      </div>

      {/* Name + drawn underline */}
      <h3
        style={{
          fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '19px',
          color: '#0F1F35', letterSpacing: '-0.02em', marginBottom: '6px',
        }}
      >
        {tema.name}
      </h3>
      <div style={{ marginBottom: '18px' }}>
        <DrawnUnderline color={tema.color} width={140} />
      </div>

      {/* Bullets */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tema.bullets.map((b) => (
          <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%',
                background: tema.color, flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-source-sans)', fontSize: '19px',
                color: '#6B7280', lineHeight: 1.5,
              }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function TemasEssenciais() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="temas" style={{ background: '#F8F9FB', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          label="Temas Transversais BNCC"
          title={
            <>
              9 temas essenciais para{' '}
              <span style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                transformar
              </span>{' '}
              sua rede
            </>
          }
          subtitle="Cada tema é desenvolvido com materiais exclusivos por etapa de ensino, linguagem acessível e metodologia ativa alinhada à BNCC."
        />

        <motion.div
          ref={ref}
          variants={containerV}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}
        >
          {temas.map((t) => <TemaCard key={t.id} tema={t} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '19px', color: '#9CA3AF', marginBottom: '24px' }}>
            Todos os temas disponíveis para Educação Infantil, Fundamental I e II
          </p>
          <a
            href={WA} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '15px 32px', borderRadius: '12px',
              fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '16px',
              color: '#fff', background: 'linear-gradient(135deg, #4f46e5 0%, #2563A8 100%)',
              boxShadow: '0 4px 20px rgba(79,70,229,0.3)', textDecoration: 'none',
              transition: 'all 0.2s ease', letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,70,229,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Ver Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
