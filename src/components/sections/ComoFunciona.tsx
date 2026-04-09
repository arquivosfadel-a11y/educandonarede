'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DrawnUnderline } from '@/components/ui/hand-writing-text'
import { MessageCircle, Presentation, FileCheck, Rocket } from 'lucide-react'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

const etapas = [
  { num: '01', icon: MessageCircle, color: '#4f46e5', title: 'Contato Inicial', desc: 'Entre em contato via WhatsApp ou formulário. Nossa equipe responde em até 24h em dias úteis.' },
  { num: '02', icon: Presentation, color: '#06b6d4', title: 'Apresentação', desc: 'Realizamos uma apresentação completa do programa para a equipe pedagógica da secretaria.' },
  { num: '03', icon: FileCheck, color: '#10b981', title: 'Definição', desc: 'Juntos definimos os temas, etapas e possibilidades de personalização para o seu município.' },
  { num: '04', icon: Rocket, color: '#8b5cf6', title: 'Proposta', desc: 'Receba uma proposta detalhada com investimento, cronograma e plano de implementação.' },
]

const containerV: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const stepV: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export function ComoFunciona() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="como-funciona" style={{ background: '#FFFFFF', padding: '100px 0 120px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          label="Como funciona"
          title={
            <>
              Do contato à implementação em{' '}
              <span style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                4 etapas
              </span>
            </>
          }
          subtitle="Processo simples, ágil e personalizado para atender a demanda da sua rede municipal."
          labelColor="#8b5cf6"
          align="center"
        />

        <motion.div
          ref={ref}
          variants={containerV}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}
        >
          {etapas.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                variants={stepV}
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
                style={{
                  background: '#FFFFFF', border: '1.5px solid #E2E8F0',
                  borderRadius: '20px', padding: '36px 28px',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  height: '100%', position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${step.color}44`
                  el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E2E8F0'
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
                }}
              >
                {/* Step number - large background */}
                <span
                  style={{
                    position: 'absolute', top: '16px', right: '20px',
                    fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '64px',
                    color: `${step.color}08`, letterSpacing: '-0.05em', lineHeight: 1,
                    pointerEvents: 'none', userSelect: 'none',
                  }}
                >
                  {step.num}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: `${step.color}12`, border: `1.5px solid ${step.color}25`,
                    }}
                  >
                    <Icon size={24} color={step.color} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '13px', color: step.color, letterSpacing: '0.08em' }}>
                    ETAPA {step.num}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '20px', color: '#0F1F35', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                  {step.title}
                </h3>
                <div style={{ marginBottom: '16px' }}>
                  <DrawnUnderline color={step.color} width={120} />
                </div>
                <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '19px', color: '#6B7280', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <a
            href={WA} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 36px', borderRadius: '14px',
              fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '17px',
              color: '#fff', background: 'linear-gradient(135deg, #4f46e5 0%, #2563A8 100%)',
              boxShadow: '0 4px 20px rgba(79,70,229,0.3)', textDecoration: 'none',
              transition: 'all 0.2s ease', letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 36px rgba(79,70,229,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Iniciar Agora — É Gratuito
          </a>
          <p style={{ marginTop: '14px', fontFamily: 'var(--font-source-sans)', fontSize: '18px', color: '#9CA3AF' }}>
            Atendimento exclusivo para Secretarias Municipais de Educação
          </p>
        </motion.div>
      </div>
    </section>
  )
}
