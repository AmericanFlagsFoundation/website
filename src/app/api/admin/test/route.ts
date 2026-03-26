import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const stored = process.env.ADMIN_PASSWORD || ''
  return NextResponse.json({ 
    received_len: password.length,
    stored_len: stored.length,
    stored_first6: stored.slice(0, 6),
    match: password === stored,
    match_trimmed: password.trim() === stored.trim()
  })
}
