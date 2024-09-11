import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)',
  '/profile(.*)',
  '/api/assistant/create(.*)',
  '/api/thread(.*)',
  '/api/message/create(.*)',
  '/api/message/list(.*)',
  '/api/run/create(.*)',
  '/api/run/retrieve(.*)',
  '/api/openai(.*)',
  '/api/subscription(.*)',
  '/api/challenge-users(.*)',
  "/api/send-notification(.*)",
  ]);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};