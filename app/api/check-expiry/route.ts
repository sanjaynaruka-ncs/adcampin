import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST() {
  try {
    const now = new Date().toISOString();

    // 1. Get expired users
    const { data: users, error } = await supabaseAdmin
      .from("profiles")
      .select("id, plan_expires_at, plan")
      .neq("plan", "free")
      .lt("plan_expires_at", now);

    if (error) {
      console.error("Fetch error:", error);
      return NextResponse.json({ success: false });
    }

    if (!users || users.length === 0) {
      console.log("No expired users");
      return NextResponse.json({ success: true });
    }

    console.log("Expired users:", users.length);

    // 2. Downgrade all expired users
    const updates = users.map((u) =>
      supabaseAdmin
        .from("profiles")
        .update({
          plan: "free",
          ai_credits: 50,
          plan_expires_at: null,
        })
        .eq("id", u.id)
    );

    await Promise.all(updates);

    console.log("Downgrade complete");

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Expiry check error:", err);
    return NextResponse.json({ success: false });
  }
}