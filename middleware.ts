import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && path === '/') {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  } else if (session && path === '/api/auth/signin') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}
