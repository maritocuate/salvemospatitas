import { db } from '@/db'
import { NextResponse } from 'next/server'

const getPartners = async (): Promise<NextResponse> => {
  try {
    const partners = await db.user.findMany({
      where: {
        Payments: {
          some: {},
        },
      },
    })
    if (!partners) return new NextResponse(null, { status: 500 })

    return NextResponse.json(partners, { status: 200 })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

export default getPartners
