import { cookies } from 'next/headers'
import { createSession, verifySession, COOKIE_NAME } from './auth-edge'

export { createSession, verifySession, COOKIE_NAME }

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return false
  return verifySession(token)
}
