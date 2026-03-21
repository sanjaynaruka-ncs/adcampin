import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(process.env.VERCEL_DEPLOY_HOOK!, {
      method: "POST",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Deploy failed" });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json({ error: "Deploy error" });
  }
}