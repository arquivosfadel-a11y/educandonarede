import type { Metadata } from 'next'
import { Lato, Source_Sans_3, Geist } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { Toaster } from 'sonner'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Programa Municipal Temas Transversais BNCC | Educando na Rede',
  description:
    'Coleção pedagógica completa para redes municipais de ensino. Materiais alinhados à BNCC para Educação Infantil, Fundamental I e II. Para Secretarias Municipais de Educação.',
  keywords:
    'temas transversais, BNCC, rede municipal, secretaria de educação, materiais pedagógicos',
  openGraph: {
    title: 'Programa Municipal Temas Transversais BNCC | Educando na Rede',
    description:
      'Coleção pedagógica completa para redes municipais de ensino, alinhada à BNCC.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={cn(lato.variable, sourceSans.variable, "font-sans", geist.variable)}>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: 'var(--font-source-sans)',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  )
}
