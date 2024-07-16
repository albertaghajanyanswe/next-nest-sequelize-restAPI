import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@/app/i18nConfig';
import { getCurrentUser } from '../services/lsService';

export function localeMiddleware(req: NextRequest, res: NextResponse) {
  return i18nRouter(req, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
