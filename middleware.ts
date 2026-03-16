import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const host = request.headers.get("host");
  const { pathname } = request.nextUrl;

  // Skip static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/learnplaylab/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (host === "learnplaylab.adcampin.com") {

    // allow subpages like privacy policies
    if (pathname !== "/") {
      return NextResponse.rewrite(
        new URL(`/learnplaylab${pathname}`, request.url)
      );
    }

    // homepage
    return NextResponse.rewrite(
      new URL("/learnplaylab", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};