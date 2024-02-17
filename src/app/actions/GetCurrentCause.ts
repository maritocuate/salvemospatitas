import { db } from '@/db'
import { NextResponse } from 'next/server'

const getCurrentCause = async () => {
  try {
    const lastFoundraising = await db.foundraising.findMany({
      take: 1,
      orderBy: {
        createdAt: 'desc',
      },
    })

    if (!lastFoundraising) return new NextResponse(null, { status: 500 })

    return lastFoundraising[0]
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

export default getCurrentCause
