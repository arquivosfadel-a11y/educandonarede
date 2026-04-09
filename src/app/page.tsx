import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TemasEssenciais } from '@/components/sections/TemasEssenciais'
import { ParaQuemE } from '@/components/sections/ParaQuemE'
import { OQueFortalece } from '@/components/sections/OQueFortalece'
import { GaleriaMateriais } from '@/components/sections/GaleriaMateriais'
import { ProjetoPersonalizado } from '@/components/sections/ProjetoPersonalizado'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { FAQ } from '@/components/sections/FAQ'
import { ContatoFormulario } from '@/components/sections/ContatoFormulario'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TemasEssenciais />
        <ParaQuemE />
        <OQueFortalece />
        <GaleriaMateriais />
        <ProjetoPersonalizado />
        <ComoFunciona />
        <CTAFinal />
        <FAQ />
        <ContatoFormulario />
      </main>
      <Footer />
    </>
  )
}
