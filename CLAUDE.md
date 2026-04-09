# CLAUDE.md — Educando na Rede

## Visão Geral do Projeto

**Nome:** Educando na Rede  
**Produto:** Programa Municipal Temas Transversais BNCC  
**URL atual:** https://www.educandonarede.com.br  
**Pasta do projeto:** ~/softwares/educandonarede  
**Deploy:** Vercel + domínio próprio  

**Descrição:**  
Landing page institucional voltada para Secretarias Municipais de Educação e gestores pedagógicos da rede pública. O produto é uma coleção pedagógica completa com materiais por etapa (Educação Infantil, Fundamental I e II), alinhados à BNCC, cobrindo temas transversais essenciais.

**Objetivo do site:**  
Gerar contatos qualificados (WhatsApp ou formulário) com Secretarias Municipais de Educação para apresentações do programa.

---

## Stack Técnica

```
Next.js 14+ (App Router)     → estrutura
TypeScript                   → tipagem
Tailwind CSS                 → estilização
shadcn/ui                    → componentes base
Framer Motion                → animações suaves
GSAP + Lenis                 → scroll animado
Lucide React                 → ícones
Lato + Source Sans 3         → tipografia humanista
Resend                       → envio de emails do formulário
Vercel                       → deploy
```

---

## MCPs Disponíveis

- **Context7** ✓ — sempre usar `use context7` nos prompts para documentação atualizada
- **Magic (21st.dev)** ✓ — usar para gerar componentes UI profissionais
- **Magic UI MCP** ✓ — usar para componentes animados (shimmer, bento grid, etc)
- **Figma** ✓ — disponível se necessário

---

## Paleta de Cores

Tom: **Institucional, sóbrio e minimalista**. Transmite confiança para gestores e secretários da educação pública.

```css
/* Primária — Azul Institutcional */
--color-primary:        #1A3A5C;   /* títulos, elementos principais */
--color-primary-mid:    #2563A8;   /* botões, links, destaques */
--color-primary-light:  #EBF2FB;   /* fundos suaves, badges */

/* Secundária — Verde Educacional Sutil */
--color-secondary:      #1A6B45;   /* acentos, ícones de destaque */
--color-secondary-light:#E8F5EF;   /* tags, fundos de seção */

/* Neutros */
--color-white:          #FFFFFF;
--color-bg:             #F8F9FB;   /* fundo geral da página */
--color-surface:        #FFFFFF;   /* cards e seções brancas */
--color-border:         #E2E8F0;   /* bordas suaves */

/* Texto */
--color-text-heading:   #0F1F35;   /* títulos */
--color-text-body:      #374151;   /* corpo de texto */
--color-text-muted:     #6B7280;   /* textos secundários */
--color-text-light:     #9CA3AF;   /* labels, legendas */
```

**Regra de uso:**
- Fundo da página: `#F8F9FB` (quase branco, levemente frio)
- Seções alternadas: branco puro e `#F8F9FB`
- Uma seção de destaque com fundo `#1A3A5C` (azul escuro — ex: CTA final)
- Nunca usar gradientes ou fundos coloridos pesados

---

## Tipografia

**Fontes humanistas — equilibram legibilidade e calor humano**

```typescript
// layout.tsx
import { Lato, Source_Sans_3 } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '600'],
})

// No className do <html>:
// className={`${lato.variable} ${sourceSans.variable}`}
```

```typescript
// tailwind.config.ts
fontFamily: {
  heading: ['var(--font-lato)'],
  sans: ['var(--font-source-sans)'],
}
```

**Hierarquia tipográfica:**
- H1: Lato 700 — 48-64px — títulos de hero
- H2: Lato 700 — 32-40px — títulos de seção
- H3: Lato 700 — 20-24px — subtítulos, nomes de temas
- Body: Source Sans 3 400 — 16-18px — parágrafos
- Label/Caption: Source Sans 3 300 — 13-14px — legendas, labels

---

## Tom Visual

- **Minimalista e institucional** — muito espaço em branco, sem poluição visual
- **Sóbrio e confiável** — transmite seriedade para gestores públicos
- **Acolhedor** — não é frio demais, tem humanidade no layout
- Animações sutis (fade in, slide up suave) — nada chamativo
- Sem gradientes, sem sombras pesadas, sem efeitos 3D
- Bordas finas (`1px solid #E2E8F0`), corners arredondados suaves (`8px`)
- Cards com fundo branco sobre fundo `#F8F9FB`

---

## Estrutura de Seções (em ordem)

### 1. Navbar
- Logo à esquerda
- Botão WhatsApp à direita (CTA principal)
- Sticky com leve blur no scroll
- Sem menu extenso — site é single page

### 2. Hero
- Título principal: "Programa Municipal Temas Transversais BNCC"
- Subtítulo: descrição do valor para a rede municipal
- 2 CTAs: "Solicitar Apresentação" (WhatsApp) + "Ver Catálogo" (scroll suave)
- Badge: "Para Secretarias Municipais de Educação"
- Fundo: branco ou `#F8F9FB` com elemento visual sutil (sem imagem pesada)

### 3. Temas Essenciais
- Grid de cards com os 9 temas: Bullying, Socioemocional, Autismo/TEA, Primeiros Socorros, Dengue, Saúde Bucal, Trânsito, Educação Financeira, Diversidade Cultural
- Cada card: ícone (Lucide), nome do tema, 3 bullets de benefício
- Layout: grid 3x3 desktop, 2x em tablet, 1x mobile
- Cards limpos: fundo branco, borda fina, hover suave

### 4. Para Quem É
- Título: "Para quem é este programa?"
- 4 perfis: Secretarias Municipais, Coordenação Pedagógica, Diretores, Projetos Intersetoriais
- Layout: 4 cards horizontais com ícone + título + descrição curta

### 5. O Que Fortalece
- 6 categorias de impacto com ícones e bullets:
  Clima escolar, Saúde pública, Cidadania, Desenvolvimento integral, Diversidade, Sustentabilidade
- Layout: grid de cards ou lista visual limpa

### 6. Galeria de Materiais
- Carrossel com imagens das capas dos materiais (usar Embla Carousel)
- Legenda: "Materiais organizados por etapa com linguagem acessível"
- Imagens fornecidas pelo cliente na pasta `/public/images/materiais/`

### 7. Projeto Personalizado
- Seção destacada (fundo levemente diferente)
- Sobre o projeto pedagógico personalizado por município
- 3 benefícios: Identidade local, Patrimônio cultural, Valorização do território
- CTA: WhatsApp

### 8. Como Funciona
- 4 etapas visuais numeradas:
  01 Contato → 02 Apresentação → 03 Definição → 04 Proposta
- Layout: linha do tempo horizontal ou cards numerados
- CTA ao final

### 9. CTA Final
- Fundo: `#1A3A5C` (azul escuro)
- Texto branco
- Título forte + botão WhatsApp grande
- Nota: atendimento em horário comercial

### 10. FAQ
- Accordion limpo (shadcn/ui Accordion)
- 4 perguntas do site atual + espaço para expansão

### 11. Formulário de Contato
- Campos: Município, Nome completo, Email, Mensagem
- Validação com React Hook Form + Zod
- Envio via API Route do Next.js usando Resend
- Ao lado do formulário: informações de contato + botão WhatsApp
- Mensagem de sucesso/erro com Sonner (toast)

### 12. Footer
- Logo + frase institucional
- Links: Termos de uso, Política de Privacidade
- Telefone: (14) 99639-7587
- Copyright

---

## Animações

- Usar Framer Motion para `fadeInUp` ao entrar na viewport (IntersectionObserver)
- Lenis para scroll suave em toda a página
- GSAP apenas se necessário para animações de texto no hero
- **Nada exagerado** — animações discretas, delay de 0.1-0.2s entre elementos

```typescript
// Variante padrão de entrada
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}
```

---

## Formulário + Backend (Resend)

```typescript
// src/app/api/contact/route.ts
// Usar Resend para enviar email quando formulário for submetido
// Variável de ambiente necessária: RESEND_API_KEY
// Email de destino: configurar no .env.local
```

Criar arquivo `.env.local`:
```
RESEND_API_KEY=sua_chave_aqui
CONTACT_EMAIL=email_de_destino@exemplo.com
```

---

## Imagens

Todas as imagens do cliente estão em:  
`/public/images/`

Subpastas sugeridas:
```
/public/images/materiais/     → capas dos materiais pedagógicos
/public/images/logo/          → logotipo
/public/images/hero/          → imagens do hero (se houver)
```

Usar `next/image` com `priority` no hero e `loading="lazy"` nas demais.

---

## Diretrizes de Desenvolvimento

1. **Mobile-first** — sempre. A maioria dos gestores acessa via celular.
2. **Performance** — site leve, sem animações 3D pesadas
3. **Acessibilidade** — contraste adequado, aria-labels nos botões de CTA
4. **SEO básico** — meta title e description configurados no `layout.tsx`
5. **WhatsApp links** — sempre usar: `https://wa.me/5514996397587?text=...` com mensagem pré-definida
6. Usar `use context7` nos prompts para documentação atualizada
7. Componentes em `/src/components/` organizados por seção
8. Seções em `/src/components/sections/`
9. UI base em `/src/components/ui/`

---

## Informações de Contato (usar no site)

- **WhatsApp:** (14) 99639-7587
- **Link WA:** `https://wa.me/5514996397587?text=Olá!%20Tudo%20bem%3F%20Gostaria%20de%20receber%20informações%20sobre%20o%20Programa%20Municipal%20Temas%20Transversais%20BNCC`
- **Atendimento:** horário comercial
- **Público:** exclusivo para Secretarias e equipes pedagógicas

---

## Meta SEO

```typescript
// src/app/layout.tsx
export const metadata = {
  title: 'Programa Municipal Temas Transversais BNCC | Educando na Rede',
  description: 'Coleção pedagógica completa para redes municipais de ensino. Materiais alinhados à BNCC para Educação Infantil, Fundamental I e II. Para Secretarias Municipais de Educação.',
  keywords: 'temas transversais, BNCC, rede municipal, secretaria de educação, materiais pedagógicos',
}
```
