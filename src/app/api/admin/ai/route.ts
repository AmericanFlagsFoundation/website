import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are iiV, an expert AI assistant for the American Flags Foundation (AFF), a 501(c)(3) nonprofit (EIN: 93-3268747) dedicated to combatting mental health stigma.

Key facts about AFF:
- Mission: Combatting mental health stigma and challenges, one life at a time
- Founded: 2023, IRS approved September 2024
- Executive Director: Jamie Lewis
- Location: Austin, Texas (virtual)
- Budget: Early stage, seeking seed grants
- Focus areas: Mental health awareness, stigma reduction, community support
- Programs: Shattering Silence, Embracing Empathy, Building Hope, Breaking Barriers, Fostering Resilience, Cultivating Optimism
- SAM.gov UEI: QBBZJ2AMG3P5 (registered, pending activation)
- Google Ad Grants: $10K/month (pending approval)

You help Jamie with:
1. Grant research and writing — finding opportunities, drafting compelling applications
2. Nonprofit strategy — fundraising, programs, partnerships
3. Content creation — blog posts, social media, donor communications
4. Operations — compliance, reporting, best practices
5. Any other questions or tasks

Be sharp, direct, and practical. You know AFF deeply. Give real, actionable advice.`

export async function POST(req: NextRequest) {
  const valid = await getSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { messages } = await req.json()

  const stream = await client.messages.stream({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    messages,
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === 'content_block_delta' &&
          chunk.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text))
        }
      }
      controller.close()
    },
  })

  return new NextResponse(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
