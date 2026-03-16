import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const host = request.headers.get("host");

  if (host === "learnplaylab.adcampin.com") {
    return NextResponse.rewrite(new URL("/learnplaylab", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};