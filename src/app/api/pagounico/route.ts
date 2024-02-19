import { absoluteUrl } from '@/lib/utils'
import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const { amount, name, email, surname, id } = await req.json()
  const tomorrow = Date.now() + 24 * 60 * 60 * 1000

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOLIBRE_TOKEN || '',
    })

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items: [
          {
            id: id,
            title: 'Salvemos Patitas ONG',
            currency_id: 'ARS',
            picture_url: '/salvemos-logo.png',
            description: 'Pago Unico',
            category_id: 'unique',
            quantity: 1,
            unit_price: amount,
          },
        ],
        payer: {
          name,
          surname,
          email,
        },
        back_urls: {
          success: absoluteUrl('/callback?status=success'),
          failure: absoluteUrl('/callback?status=failure'),
          pending: absoluteUrl('/callback?status=pending'),
        },
        auto_return: 'approved',
        payment_methods: {
          excluded_payment_methods: [
            {
              id: 'argencard',
            },
            {
              id: 'cabal',
            },
            {
              id: 'cmr',
            },
          ],
          excluded_payment_types: [
            {
              id: 'ticket',
            },
          ],
          installments: 1,
        },
        notification_url:
          'https://f79c-2803-9800-9091-74ec-6d35-a6d0-e22e-9113.ngrok-free.app/api/receiveWebhook',
        statement_descriptor: 'SALVEMOS PATITAS ONG',
        external_reference: email,
        expires: true,
        expiration_date_from: new Date().toISOString(),
        expiration_date_to: new Date(tomorrow).toISOString(),
      },
    })

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(error)
  }
}
