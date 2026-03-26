import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'

async function checkAuth() {
  const valid = await getSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return null
}

export async function GET() {
  const authError = await checkAuth()
  if (authError) return authError

  const { data, error } = await supabaseAdmin
    .from('grants')
    .select('*')
    .order('deadline', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const authError = await checkAuth()
  if (authError) return authError

  const body = await req.json()
  const { data, error } = await supabaseAdmin
    .from('grants')
    .insert([body])
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function PUT(req: NextRequest) {
  const authError = await checkAuth()
  if (authError) return authError

  const body = await req.json()
  const { id, ...updates } = body

  const { data, error } = await supabaseAdmin
    .from('grants')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(req: NextRequest) {
  const authError = await checkAuth()
  if (authError) return authError

  const { id } = await req.json()
  const { error } = await supabaseAdmin.from('grants').delete().eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
