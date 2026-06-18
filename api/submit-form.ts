import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)

function buildEmailHtml(formType: string, data: Record<string, string>) {
  const rows = Object.entries(data)
    .filter(([k]) => k !== 'formType')
    .map(([k, v]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-weight:600;text-transform:capitalize">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${v || '—'}</td></tr>`)
    .join('')

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0A0A08;padding:24px 32px">
        <h2 style="color:#ffffff;margin:0;font-size:20px">New ${formType} submission</h2>
      </div>
      <div style="padding:24px 32px;border:1px solid #eee">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
      </div>
      <p style="color:#999;font-size:12px;padding:0 32px">Submitted via lw3.world</p>
    </div>
  `
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const data = req.body as Record<string, string>
  const { formType, ...fields } = data

  if (!formType) return res.status(400).json({ error: 'Missing formType' })

  // Save to Supabase
  const { error: dbError } = await supabase
    .from('form_submissions')
    .insert({ form_type: formType, data: fields, submitted_at: new Date().toISOString() })

  if (dbError) {
    console.error('Supabase error:', dbError)
    return res.status(500).json({ error: 'Failed to save submission' })
  }

  // Send email via Resend
  const { error: emailError } = await resend.emails.send({
    from: 'LW3 Forms <forms@lw3.world>',
    to: 'debrupa@logisticsw3.com',
    subject: `New ${formType} — ${fields.name || 'Anonymous'} from ${fields.company || fields.organisation || 'Unknown'}`,
    html: buildEmailHtml(formType, fields),
  })

  if (emailError) {
    console.error('Resend error:', emailError)
    // Still return success — data is saved even if email fails
  }

  return res.status(200).json({ ok: true })
}
