import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const host = request.headers.get("host");
  const pathname = request.nextUrl.pathname;

  // Skip static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/learnplaylab/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (host === "learnplaylab.adcampin.com") {
    return NextResponse.rewrite(new URL("/learnplaylab", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};