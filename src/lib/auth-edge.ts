import { SignJWT, jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(process.env.ADMIN_SECRET || 'fallback-secret-change-me')
export const COOKIE_NAME = 'aff_admin_session'

export async function createSession() {
  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(SECRET)
  return token
}

export async function verifySession(token: string) {
  try {
    await jwtVerify(token, SECRET)
    return true
  } catch {
    return false
  }
}
