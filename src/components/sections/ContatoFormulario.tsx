'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Phone, Clock, Send, Loader2 } from 'lucide-react'

const WA = 'https://wa.me/5514996397587?text=Ol%C3%A1!%20Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC'

const schema = z.object({
  municipio: z.string().min(2, 'Informe o município'),
  nome: z.string().min(3, 'Informe seu nome completo'),
  email: z.string().email('E-mail inválido'),
  mensagem: z.string().min(10, 'Mensagem muito curta'),
})
type FormData = z.infer<typeof schema>

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-source-sans)',
  fontWeight: 600,
  fontSize: '14px',
  color: '#374151',
  marginBottom: '7px',
  letterSpacing: '0.01em',
}

export function ContatoFormulario() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (res.ok) { toast.success('Mensagem enviada!', { description: 'Retornaremos em breve em horário comercial.' }); reset() }
      else throw new Error()
    } catch { toast.error('Erro ao enviar', { description: 'Tente via WhatsApp ou tente novamente.' }) }
    finally { setSubmitting(false) }
  }

  return (
    <section id="contato" style={{ background: '#FFFFFF', padding: '100px 0 120px', overflow: 'hidden' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          label="Contato"
          title={
            <>
              Fale com a{' '}
              <span style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                nossa equipe
              </span>
            </>
          }
          subtitle="Preencha o formulário ou entre em contato diretamente pelo WhatsApp."
          labelColor="#10b981"
        />

        <div className="contato-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Município *</label>
                <input {...register('municipio')} placeholder="Ex: Bauru, SP" className={`field${errors.municipio ? ' error' : ''}`} />
                {errors.municipio && <p style={{ color: '#f43f5e', fontSize: '13px', marginTop: '4px', fontFamily: 'var(--font-source-sans)' }}>{errors.municipio.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Nome Completo *</label>
                <input {...register('nome')} placeholder="Seu nome" className={`field${errors.nome ? ' error' : ''}`} />
                {errors.nome && <p style={{ color: '#f43f5e', fontSize: '13px', marginTop: '4px', fontFamily: 'var(--font-source-sans)' }}>{errors.nome.message}</p>}
              </div>
            </div>

            <div>
              <label style={labelStyle}>E-mail Institucional *</label>
              <input {...register('email')} type="email" placeholder="secretaria@municipio.sp.gov.br" className={`field${errors.email ? ' error' : ''}`} />
              {errors.email && <p style={{ color: '#f43f5e', fontSize: '13px', marginTop: '4px', fontFamily: 'var(--font-source-sans)' }}>{errors.email.message}</p>}
            </div>

            <div>
              <label style={labelStyle}>Mensagem *</label>
              <textarea {...register('mensagem')} rows={5} placeholder="Conte um pouco sobre sua rede municipal e o que você busca com o programa..." className={`field${errors.mensagem ? ' error' : ''}`} style={{ resize: 'vertical', minHeight: '130px' }} />
              {errors.mensagem && <p style={{ color: '#f43f5e', fontSize: '13px', marginTop: '4px', fontFamily: 'var(--font-source-sans)' }}>{errors.mensagem.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '15px 28px', borderRadius: '12px', border: 'none',
                cursor: submitting ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '16px', color: '#fff',
                background: submitting ? '#CBD5E1' : 'linear-gradient(135deg, #4f46e5 0%, #2563A8 100%)',
                boxShadow: submitting ? 'none' : '0 4px 20px rgba(79,70,229,0.3)',
                transition: 'all 0.2s ease', opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? (
                <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Enviando...</>
              ) : (
                <><Send size={16} /> Enviar Mensagem</>
              )}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* WhatsApp card */}
            <div style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '20px', padding: '28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#DCFCE7', border: '1.5px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '17px', color: '#0F1F35', letterSpacing: '-0.01em' }}>WhatsApp</p>
                  <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '14px', color: '#6B7280' }}>Resposta mais rápida</p>
                </div>
              </div>
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center', padding: '13px',
                  borderRadius: '10px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '15px',
                  color: '#fff', textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(16,185,129,0.25)', transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,185,129,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(16,185,129,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Iniciar conversa no WhatsApp
              </a>
            </div>

            {/* Info cards */}
            {[
              { icon: Phone, color: '#4f46e5', bg: '#EEF2FF', border: '#C7D2FE', title: 'Telefone', value: '(14) 99639-7587' },
              { icon: Clock, color: '#f59e0b', bg: '#FFFBEB', border: '#FDE68A', title: 'Horário de Atendimento', value: 'Seg–Sex, 08h às 18h' },
            ].map(({ icon: Icon, color, bg, border, title, value }) => (
              <div
                key={title}
                style={{
                  display: 'flex', gap: '16px', alignItems: 'center',
                  padding: '20px 22px', borderRadius: '16px',
                  background: bg, border: `1.5px solid ${border}`,
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fff', border: `1.5px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-source-sans)', fontWeight: 600, fontSize: '13px', color: '#9CA3AF', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</p>
                  <p style={{ fontFamily: 'var(--font-lato)', fontWeight: 900, fontSize: '17px', color: '#0F1F35', letterSpacing: '-0.01em' }}>{value}</p>
                </div>
              </div>
            ))}

            <p style={{ fontFamily: 'var(--font-source-sans)', fontSize: '14px', color: '#9CA3AF', lineHeight: 1.6, padding: '0 4px' }}>
              Atendimento exclusivo para Secretarias Municipais de Educação e equipes pedagógicas da rede pública.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
