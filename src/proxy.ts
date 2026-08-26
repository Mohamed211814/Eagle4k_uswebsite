import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleProxy = createMiddleware(routing);

export function proxy(request: any) {
  return handleProxy(request);
}

export default handleProxy;

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|fr|nl|ar|es)/:path*',
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
};
