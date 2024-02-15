import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const { amount, name, email, surname, id } = await req.json()
  const tomorrow = Date.now() + 24 * 60 * 60 * 1000

  console.log('email')
  console.log(email)

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
          success: 'http://localhost:3000/callback?status=success',
          failure: 'http://localhost:3000/callback?status=failure',
          pending: 'http://localhost:3000/callback?status=pending',
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
          'https://bf5d-2803-9800-9091-74ec-ada5-9ddf-dfc8-9e1b.ngrok-free.app/api/receiveWebhook',
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
