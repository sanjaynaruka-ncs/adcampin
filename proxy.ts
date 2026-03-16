import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/learnplaylab/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Handle LearnPlayLab subdomain
  if (host === "learnplaylab.adcampin.com") {

    // Allow subpages (privacy, terms, etc.)
    if (pathname !== "/") {
      return NextResponse.rewrite(
        new URL(`/learnplaylab${pathname}`, request.url)
      );
    }

    // Homepage
    return NextResponse.rewrite(
      new URL("/learnplaylab", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};