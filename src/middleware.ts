import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|fr|nl|ar|es)/:path*',
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
};
