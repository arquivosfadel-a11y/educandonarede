'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const perguntas = [
  { q: 'O programa é adequado para qual faixa etária?', a: 'O programa contempla três etapas: Educação Infantil (0–5 anos), Ensino Fundamental I (1º ao 5º ano) e Ensino Fundamental II (6º ao 9º ano). Cada etapa possui materiais desenvolvidos com linguagem e abordagem adequadas à faixa etária.' },
  { q: 'Como funciona a personalização para o município?', a: 'Após a apresentação e definição dos temas, nossa equipe adapta os materiais com elementos da identidade local do município: nome, brasão, fotos do território, referências culturais e históricas regionais. A personalização é feita de forma colaborativa com a equipe pedagógica.' },
  { q: 'Os materiais são alinhados à BNCC?', a: 'Sim. Todos os temas e materiais são desenvolvidos com base na Base Nacional Comum Curricular (BNCC), contemplando especialmente os Temas Transversais Contemporâneos e as competências gerais. Cada material inclui a referência normativa para facilitar o trabalho pedagógico.' },
  { q: 'Qual é o prazo de entrega dos materiais?', a: 'Após a assinatura do contrato e fornecimento das informações para personalização, o prazo médio de entrega é de 15 a 30 dias úteis, dependendo da quantidade de temas e etapas contratadas.' },
  { q: 'Há suporte pedagógico após a entrega?', a: 'Sim. Oferecemos suporte via WhatsApp para a equipe pedagógica da secretaria durante o período de implementação. Também disponibilizamos orientações de uso e sugestões de sequências didáticas.' },
  { q: 'É possível adquirir apenas alguns temas?', a: 'Sim. O programa pode ser adquirido por tema avulso ou em pacotes. Recomendamos a apresentação completa para que sua equipe possa conhecer todos os temas e definir o melhor conjunto para a realidade do município.' },
]

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="faq" style={{ background: '#F8F9FB', padding: '100px 0 120px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }} ref={ref}>
        <SectionHeader
          label="Perguntas Frequentes"
          title="Tire suas dúvidas sobre o programa"
          subtitle="Respondemos as principais dúvidas de gestores e coordenadores pedagógicos."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {perguntas.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <AccordionTrigger
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontWeight: 700,
                    fontSize: '17px',
                    color: '#0F1F35',
                    padding: '22px 28px',
                    textAlign: 'left',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    fontFamily: 'var(--font-source-sans)',
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: 1.75,
                    padding: '0 28px 24px',
                  }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
