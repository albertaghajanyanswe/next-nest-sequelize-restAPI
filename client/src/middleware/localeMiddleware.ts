import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@/app/i18nConfig';
import { getCurrentUser } from '../services/lsService';

export function localeMiddleware(req: NextRequest, res: NextResponse) {
  console.log('11111111111 = ', req)
  // const currentUser = getCurrentUser();

  // const currentUser = request.cookies.get('currentUser')?.value

  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }

  // if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/login', request.url))
  // }
  i18nRouter(req, i18nConfig);
  return NextResponse.next();

}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
