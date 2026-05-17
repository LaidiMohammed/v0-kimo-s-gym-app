import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/exercises', '/workouts', '/profile', '/shop', '/checkout', '/coach', '/membership'];
const authRoutes = ['/auth'];
const publicRoutes = ['/', '/login'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Get user from localStorage (stored as cookie)
  const userCookie = request.cookies.get('user_auth');
  const isAuthenticated = !!userCookie?.value;

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect to auth if accessing protected route without auth
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Redirect to home if already authenticated and trying to access auth page
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
