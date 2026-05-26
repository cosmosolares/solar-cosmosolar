import { NextResponse } from 'next/server';
import { getSession } from './lib/auth';

export async function middleware(request) {
  // Check session using our placeholder auth stub
  const session = await getSession(request);

  const { pathname } = request.nextUrl;

  // Protect member and community routes
  if (pathname.startsWith('/member') || pathname.startsWith('/community')) {
    // For now, the placeholder returns null. 
    // Uncomment the following lines to actually enforce the redirect once auth is real.
    // if (!session?.user) {
    //   const url = request.nextUrl.clone();
    //   url.pathname = '/login';
    //   return NextResponse.redirect(url);
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/member/:path*', '/community/:path*'],
};
