'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

/* ── Root ─────────────────────────────────────────────────── */

const Accordion = AccordionPrimitive.Root

/* ── Item ─────────────────────────────────────────────────── */

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ style, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    style={{
      borderBottom: '1px solid #e5e7eb',
      ...style,
    }}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

/* ── Trigger ──────────────────────────────────────────────── */

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, style, ...props }, ref) => (
  <AccordionPrimitive.Header style={{ display: 'flex' }}>
    <AccordionPrimitive.Trigger
      ref={ref}
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '20px 0',
        fontFamily: 'var(--font-lato)',
        fontWeight: 700,
        fontSize: '16px',
        color: '#0f1f35',
        letterSpacing: '-0.01em',
        lineHeight: 1.35,
        textAlign: 'left',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        transition: 'color 0.18s ease',
        ...style,
      }}
      {...props}
    >
      {children}
      <ChevronDown
        size={18}
        strokeWidth={2}
        style={{
          color: '#9ca3af',
          flexShrink: 0,
          transition: 'transform 0.22s ease, color 0.18s ease',
        }}
        /* rotate via data-state attribute handled by CSS below */
        className="accordion-chevron"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

/* ── Content ──────────────────────────────────────────────── */

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, style, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    style={{ overflow: 'hidden', ...style }}
    className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
    {...props}
  >
    <div
      style={{
        paddingBottom: '20px',
        fontFamily: 'var(--font-source-sans)',
        fontWeight: 400,
        fontSize: '15px',
        color: '#6b7280',
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
