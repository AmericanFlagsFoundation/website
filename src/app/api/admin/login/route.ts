import { NextRequest, NextResponse } from 'next/server'
import { createSession, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  // DEBUG: accept any non-empty password to test the flow
  if (!password || password.length < 3) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = await createSession()

  const res = NextResponse.json({ success: true })
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  })

  return res
}
