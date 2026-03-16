import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, website } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "AdCampin <noreply@adcampin.com>",
      to: "contact@adcampin.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New message from AdCampin contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }
}