import { NextRequest, NextResponse } from 'next/server'
import { createSession, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  const adminPass = process.env.ADMIN_PASSWORD || 'AFFadmin2026'
  if (password !== adminPass) {
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
