import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  municipio: z.string().min(2, 'Informe o município'),
  nome: z.string().min(3, 'Informe o nome completo'),
  email: z.string().email('Email inválido'),
  mensagem: z.string().min(10, 'Mensagem muito curta'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    const contactEmail = process.env.CONTACT_EMAIL
    if (!contactEmail) {
      return Response.json(
        { error: 'Configuração de destino não definida.' },
        { status: 500 }
      )
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0f1f35;">
        <div style="background: #1A3A5C; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">
            Novo contato — Educando na Rede
          </h1>
        </div>
        <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                Município
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #0f1f35;">
                ${data.municipio}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                Nome
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #0f1f35;">
                ${data.nome}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                Email
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #0f1f35;">
                <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">
                Mensagem
              </td>
              <td style="padding: 10px 0; font-size: 15px; color: #0f1f35; line-height: 1.6;">
                ${data.mensagem.replace(/\n/g, '<br>')}
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 3px solid #2563eb;">
            <p style="margin: 0; font-size: 13px; color: #374151;">
              Responda diretamente para <strong>${data.email}</strong>
            </p>
          </div>
        </div>
      </div>
    `

    /* Resend instanciado lazily — não quebra o build sem a env var */
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Educando na Rede <contato@educandonarede.com.br>',
      to: [contactEmail],
      replyTo: data.email,
      subject: `Novo contato: ${data.municipio} — ${data.nome}`,
      html,
    })

    if (error) {
      console.error('[Resend error]', error)
      return Response.json({ error: 'Falha ao enviar o email.' }, { status: 500 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json(
        { error: 'Dados inválidos.', issues: err.issues },
        { status: 422 }
      )
    }
    console.error('[Contact API error]', err)
    return Response.json({ error: 'Erro interno. Tente novamente.' }, { status: 500 })
  }
}
