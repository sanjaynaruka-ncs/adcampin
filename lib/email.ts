import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAlertEmail(subject: string, message: string) {
  await resend.emails.send({
    from: "alerts@adcampin.com",
    to: "your-email@gmail.com",
    subject,
    html: `<p>${message}</p>`,
  });
}