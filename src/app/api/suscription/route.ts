import { absoluteUrl } from '@/lib/utils'
import { MercadoPagoConfig, PreApproval, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const { amount, name, email, surname, id } = await req.json()
  const tomorrow = Date.now() + 24 * 60 * 60 * 1000

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOLIBRE_TOKEN || '',
    })

    const preApproval = new PreApproval(client)
    const suscription = await preApproval.create({
      body: {
        reason: 'Suscripción Salvemos Patitas',
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          transaction_amount: amount,
          currency_id: 'ARS',
        },
        payer_email: email,
        status: 'pending',
        back_url: absoluteUrl('/callback?status=success'),
      },
    })

    return NextResponse.json(suscription)
  } catch (error) {
    return NextResponse.json(error)
  }
}
