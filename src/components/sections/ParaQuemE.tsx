'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DrawnUnderline } from '@/components/ui/hand-writing-text'
import { Building2, Users, BookOpen, Network } from 'lucide-react'

const perfis = [
  { icon: Building2, color: '#4f46e5', title: 'Secretarias Municipais', description: 'Gestores que buscam estruturar a educação integral da rede pública com programas pedagógicos completos e alinhados à legislação.' },
  { icon: Users, color: '#06b6d4', title: 'Coordenação Pedagógica', description: 'Equipes responsáveis por formação docente e implementação curricular que precisam de materiais prontos e de qualidade.' },
  { icon: BookOpen, color: '#10b981', title: 'Diretores de Escola', description: 'Líderes que querem fortalecer o projeto político-pedagógico com temáticas relevantes para a comunidade escolar.' },
  { icon: Network, color: '#8b5cf6', title: 'Projetos Intersetoriais', description: 'Iniciativas que integram saúde, assistência social e educação em ações conjuntas para o desenvolvimento local.' },
]

const containerV: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardV: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export function ParaQuemE() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="para-quem" style={{ background: '#FFFFFF', padding: '100px 0 120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          label="Para quem é"
          title={
            <>
              Feito para quem{' '}
              <span style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                transforma
              </span>{' '}
              a educação pública
            </>
          }
          subtitle="Um programa desenvolvido exclusivamente para gestores e profissionais da educação municipal."
          labelColor="#8b5cf6"
        />

        <motion.div
          ref={ref}
          variants={containerV}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}
        >
          {perfis.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={cardV}
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${p.color}44`
                  el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.1)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E2E8F0'
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
                }}
              >
                {/* Left color accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: `linear-gradient(180deg, ${p.color}, ${p.color}44)`, borderRadius: '20px 0 0 20px' }} />

                <div
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '56px', height: '56px', borderRadius: '16px',
                    background: `${p.color}10`, border: `1.5px solid ${p.color}25`,
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={26} color={p.color} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '20px', color: '#0F1F35', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                  {p.title}
                </h3>
                <div style={{ marginBottom: '16px' }}>
                  <DrawnUnderline color={p.color} width={120} />
                </div>

                <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '20px', color: '#6B7280', lineHeight: 1.7 }}>
                  {p.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
