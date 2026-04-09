'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

const materiais = [
  { src: '/tema%20africa.png',        label: 'Diversidade Africana',   etapa: 'Fundamental II',    color: '#ec4899' },
  { src: '/tema%20ambiente.png',      label: 'Meio Ambiente',          etapa: 'Fundamental I e II', color: '#22c55e' },
  { src: '/tema%20bucal.png',         label: 'Saúde Bucal',            etapa: 'Fundamental I',     color: '#06b6d4' },
  { src: '/tema%20bullyng.png',       label: 'Bullying e Violência',   etapa: 'Fundamental I',     color: '#f43f5e' },
  { src: '/tema%20dengue.png',        label: 'Dengue e Saúde',         etapa: 'Educação Infantil', color: '#10b981' },
  { src: '/tema%20financeira.png',    label: 'Educação Financeira',    etapa: 'Fundamental II',    color: '#22c55e' },
  { src: '/tema%20indigena.png',      label: 'Cultura Indígena',       etapa: 'Fundamental I e II', color: '#f97316' },
  { src: '/tema%20socioemocional.png',label: 'Socioemocional',         etapa: 'Educação Infantil', color: '#8b5cf6' },
  { src: '/tema%20socorros.png',      label: 'Primeiros Socorros',     etapa: 'Fundamental II',    color: '#f43f5e' },
  { src: '/tema%20transito.png',      label: 'Educação no Trânsito',   etapa: 'Fundamental I e II', color: '#eab308' },
]

export function GaleriaMateriais() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="galeria" ref={sectionRef} style={{ background: '#FFFFFF', padding: '100px 0 120px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <SectionHeader
            label="Galeria de Materiais"
            title={
              <>
                Materiais que{' '}
                <span style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  encantam
                </span>{' '}
                e ensinam
              </>
            }
            subtitle="Uma coleção pedagógica completa para apoiar a rede municipal no desenvolvimento da cidadania, prevenção e formação integral dos alunos — com materiais adequados por etapa e alinhamento à BNCC."
            labelColor="#06b6d4"
          />

          {/* Nav buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '56px' }}>
            {[
              { fn: scrollPrev, can: canPrev, icon: ChevronLeft },
              { fn: scrollNext, can: canNext, icon: ChevronRight },
            ].map(({ fn, can, icon: Icon }, i) => (
              <button
                key={i}
                onClick={fn}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: can ? '#4f46e5' : '#F1F5F9',
                  border: `1.5px solid ${can ? '#4f46e5' : '#E2E8F0'}`,
                  color: can ? '#fff' : '#9CA3AF',
                  cursor: can ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease', flexShrink: 0,
                }}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div ref={emblaRef} style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              {materiais.map((m) => (
                <div key={m.src} style={{ flex: '0 0 260px', minWidth: 0 }}>
                  <div
                    style={{
                      position: 'relative', aspectRatio: '3/4',
                      borderRadius: '16px', overflow: 'hidden',
                      border: '1.5px solid #E2E8F0',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    }}
                  >
                    {/* Top color bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: m.color, zIndex: 2 }} />

                    <Image
                      src={m.src}
                      alt={m.label}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />

                    {/* Bottom label overlay */}
                    <div
                      style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        padding: '28px 16px 16px',
                        background: 'linear-gradient(transparent, rgba(15,31,53,0.85))',
                        zIndex: 1,
                      }}
                    >
                      <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '15px', color: '#ffffff', letterSpacing: '-0.01em' }}>
                        {m.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {materiais.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              style={{
                width: selectedIndex === i ? '28px' : '8px',
                height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer',
                background: selectedIndex === i ? '#4f46e5' : '#CBD5E1',
                transition: 'all 0.3s ease', padding: 0,
              }}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '36px', fontFamily: 'var(--font-source-sans)', fontSize: '15px', color: '#9CA3AF' }}
        >
          Conheça todos os materiais disponíveis mediante{' '}
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 600 }}>
            solicitação de apresentação
          </a>
        </motion.p>
      </div>
    </section>
  )
}
