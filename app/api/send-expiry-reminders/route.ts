import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";

export async function POST() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const now = new Date();
    const threeDaysLater = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    // 1. Get users expiring in next 3 days
    const { data: users, error } = await supabaseAdmin
      .from("profiles")
      .select("id, plan, plan_expires_at")
      .neq("plan", "free")
      .gte("plan_expires_at", now.toISOString())
      .lte("plan_expires_at", threeDaysLater.toISOString());

    if (error) {
      console.error("Fetch error:", error);
      return NextResponse.json({ success: false });
    }

    if (!users || users.length === 0) {
      console.log("No users expiring soon");
      return NextResponse.json({ success: true });
    }

    console.log("Users to remind:", users.length);

    // 2. Get emails from auth
    const { data: allUsers } = await supabaseAdmin.auth.admin.listUsers();

    for (const u of users) {
      const matched = allUsers.users.find(user => user.id === u.id);
      const email = matched?.email;

      if (!email) continue;

      if (
        Math.abs(
            (new Date(u.plan_expires_at).getTime() - now.getTime()) /
            (1000 * 60 * 60 * 24)
        ) > 3
        ) continue;

      const expiryDate = new Date(u.plan_expires_at);

      await resend.emails.send({
        from: "AdCampin <support@adcampin.com>",
        to: email,
        subject: "Your AdCampin plan is expiring soon ⏳",
        html: `
          <h2>Your plan expires soon</h2>
          <p>Your <strong>${u.plan}</strong> plan will expire on 
          <strong>${expiryDate.toDateString()}</strong>.</p>

          <p>Don't lose access to premium features.</p>

          <a href="https://www.adcampin.com/pricing"
             style="background:#2563eb;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
             Upgrade Now
          </a>

          <p style="margin-top:20px;font-size:12px;color:#888;">
            — AdCampin Team
          </p>
        `,
      });
    }

    console.log("Reminder emails sent");

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Reminder error:", err);
    return NextResponse.json({ success: false });
  }
}