// middleware.ts
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  middlewareTestOne(request);
  middlewareTestTwo(request);
  middlewareTestThree(request);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/estate',
};

function middlewareTestOne(request: NextRequest) {
  // console.log('middleware 1');
  return NextResponse.next();
}

function middlewareTestTwo(request: NextRequest) {
  // console.log('middleware 2');
  return NextResponse.next();
}

function middlewareTestThree(request: NextRequest) {
  // console.log('middleware 3');
  return NextResponse.next();
}
