'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DrawnUnderline } from '@/components/ui/hand-writing-text'
import { Wind, Activity, Flag, Star, Layers, Leaf } from 'lucide-react'

const categorias = [
  { icon: Wind, color: '#f43f5e', title: 'Clima Escolar', bullets: ['Redução de conflitos e violência', 'Ambiente de pertencimento', 'Relações respeitosas entre pares'] },
  { icon: Activity, color: '#10b981', title: 'Saúde Pública', bullets: ['Prevenção de doenças endêmicas', 'Hábitos saudáveis desde cedo', 'Integração com serviços de saúde'] },
  { icon: Flag, color: '#4f46e5', title: 'Cidadania', bullets: ['Consciência de direitos e deveres', 'Participação democrática', 'Respeito às leis e normas'] },
  { icon: Star, color: '#f59e0b', title: 'Desenvolvimento Integral', bullets: ['Competências socioemocionais', 'Autonomia e protagonismo', 'Formação humanista completa'] },
  { icon: Layers, color: '#ec4899', title: 'Diversidade', bullets: ['Valorização das diferenças', 'Inclusão e equidade', 'Cultura antirracista'] },
  { icon: Leaf, color: '#22c55e', title: 'Sustentabilidade', bullets: ['Consciência ambiental', 'Consumo responsável', 'Conexão com o território local'] },
]

const containerV: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardV: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export function OQueFortalece() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="fortalece" style={{ background: '#F8F9FB', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          label="O que fortalece"
          title={
            <>
              Impacto real em{' '}
              <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                6 dimensões
              </span>{' '}
              da educação
            </>
          }
          subtitle="O programa gera resultados mensuráveis no cotidiano escolar, fortalecendo aspectos fundamentais do desenvolvimento humano."
          labelColor="#10b981"
        />

        <motion.div
          ref={ref}
          variants={containerV}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}
        >
          {categorias.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                variants={cardV}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${cat.color}44`
                  el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E2E8F0'
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '48px', height: '48px', borderRadius: '14px',
                      background: `${cat.color}12`, border: `1.5px solid ${cat.color}25`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={cat.color} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '19px', color: '#0F1F35', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                      {cat.title}
                    </h3>
                    <DrawnUnderline color={cat.color} width={100} />
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span
                        style={{
                          display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%',
                          background: cat.color, flexShrink: 0, marginTop: '7px',
                        }}
                      />
                      <span style={{ fontFamily: 'var(--font-source-sans)', fontSize: '19px', color: '#6B7280', lineHeight: 1.6 }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
