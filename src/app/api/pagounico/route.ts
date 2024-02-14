import { MercadoPagoConfig, Payment, Preference } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  const { amount } = await req.json()

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOLIBRE_TOKEN || '',
    })

    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items: [
          {
            id: 'item-ID-1234',
            title: 'Salvemos Patitas ONG',
            currency_id: 'ARS',
            picture_url: '/salvemos-logo.png',
            description: 'Pago Unico',
            category_id: 'art',
            quantity: 1,
            unit_price: amount,
          },
        ],
        payer: {
          name: 'João',
          surname: 'Silva',
          email: 'user@email.com',
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
          excluded_payment_types: [],
          installments: 1,
        },
        notification_url: 'https://www.your-site.com/ipn',
        statement_descriptor: 'MEUNEGOCIO',
        external_reference: 'Reference_1234',
        expires: true,
        expiration_date_from: '2024-02-01T12:00:00.000-04:00',
        expiration_date_to: '2024-02-28T12:00:00.000-04:00',
      },
    })

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(error)
  }
}
