import { db } from '@/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { to, description, goal, now } = body

  if (!to || !description || !goal || !now) {
    return new NextResponse('Missing data', { status: 400 })
  }

  try {
    const updatedAccount = await db.foundraising.create({
      data: {
        to,
        description,
        goal,
        now,
      },
    })

    return NextResponse.json(updatedAccount)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
