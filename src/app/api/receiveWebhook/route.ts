import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Payment } from 'mercadopago'
import { db } from '@/db'

export async function POST(req: NextRequest, res: NextResponse) {
  const lastFoundraising = await db.foundraising.findMany({
    take: 1,
    orderBy: {
      createdAt: 'desc',
    },
  })
  const lastFoundraisingId = lastFoundraising[0]?.id
  if (!lastFoundraisingId) return new NextResponse(null, { status: 500 })

  try {
    const data = await req.json()

    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOLIBRE_TOKEN || '',
    })
    const payment = new Payment(client)

    if (data.type === 'payment') {
      const paymentResult = await payment.get({
        id: data.data.id,
      })

      const newUser = await db.payment.create({
        data: {
          mercadopagoPaymentId: data.data.id,
          mp_payment_method_id: paymentResult.payment_method_id as string,
          mp_payment_type_id: paymentResult.payment_type_id as string,
          mp_status: paymentResult.status as string,
          mp_interaction_type: paymentResult.point_of_interaction
            ?.type as string,
          mp_status_detail: paymentResult.status_detail as string,
          mp_transaction_amount: paymentResult.transaction_amount as number,
          userEmail: paymentResult.external_reference as string,
          foundraisingId: lastFoundraisingId,
        },
      })
    }

    return new NextResponse(null, {
      status: 200,
      statusText: 'OK',
    })
  } catch (error) {
    return new NextResponse(null, {
      status: 500,
      statusText: 'Something goes wrong',
    })
  }
}
