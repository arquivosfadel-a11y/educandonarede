'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const itemV: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}
const wrapV: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

interface Props {
  label: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  labelColor?: string
  titleColor?: string
}

export function SectionHeader({
  label, title, subtitle,
  align = 'left',
  labelColor = '#4f46e5',
  titleColor = '#0F1F35',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const isCenter = align === 'center'

  return (
    <motion.div
      ref={ref}
      variants={wrapV}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ marginBottom: '56px', textAlign: isCenter ? 'center' : 'left' }}
    >
      <motion.div variants={itemV} style={{ marginBottom: '16px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-source-sans)',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: labelColor,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              height: '2px',
              backgroundColor: labelColor,
              borderRadius: '1px',
            }}
          />
          {label}
        </span>
      </motion.div>

      <motion.h2
        variants={itemV}
        style={{
          fontFamily: 'var(--font-lato)',
          fontWeight: 900,
          fontSize: 'clamp(32px, 4.5vw, 54px)',
          color: titleColor,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          maxWidth: isCenter ? 'none' : '640px',
          marginBottom: subtitle ? '20px' : 0,
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemV}
          style={{
            fontFamily: 'var(--font-source-sans)',
            fontWeight: 400,
            fontSize: '19px',
            color: '#6B7280',
            lineHeight: 1.75,
            maxWidth: '580px',
            margin: isCenter ? '0 auto' : '0',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
