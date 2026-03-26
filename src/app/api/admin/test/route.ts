import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  return NextResponse.json({ 
    received: password,
    env_set: !!process.env.ADMIN_PASSWORD,
    env_val: process.env.ADMIN_PASSWORD?.slice(0, 4) + '****'
  })
}
