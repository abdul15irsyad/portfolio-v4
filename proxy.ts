import { NextResponse } from 'next/server';

export async function proxy () {
  // const ip = req.headers.get('x-forwarded-for');
  // if (process.env.NODE_ENV === 'development') console.log('middleware', { ip });
  return NextResponse.next();
};

export const config = {
  matcher: ['/api/:path*'],
};
