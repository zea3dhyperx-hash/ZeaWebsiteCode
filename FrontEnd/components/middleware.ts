// middleware.ts (root of your project)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get country from Vercel headers (if deployed on Vercel)
  // OR use CF-IPCountry header (if using CloudFlare)
  // OR use CloudFront header (if using AWS)
  const country = 
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    (request as any).geo?.country ||
    'US'

  console.log('Detected country in middleware:', country)
  
  // Set cookie for client-side access
  const response = NextResponse.next()
  response.cookies.set('user-country', country)
  
  // Also set header for server components if needed
  response.headers.set('x-user-country', country)
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}