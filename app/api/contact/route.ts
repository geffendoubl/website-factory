import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, message, package: pkg } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind Pflichtfelder." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "sam@geffen.de";

    await resend.emails.send({
      from: "Geffen FlexCo <onboarding@resend.dev>",
      to,
      subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="margin: 0 0 24px; color: #0A0A0A;">Neue Website-Anfrage</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${name}</td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Unternehmen</td><td style="padding: 8px 0; color: #0A0A0A;">${company}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Telefon</td><td style="padding: 8px 0; color: #0A0A0A;">${phone}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">E-Mail</td>
              <td style="padding: 8px 0; color: #0A0A0A;">${email}</td>
            </tr>
            ${pkg ? `<tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Paket-Interesse</td><td style="padding: 8px 0; color: #0A0A0A;">${pkg}</td></tr>` : ""}
            ${message ? `<tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Nachricht</td><td style="padding: 8px 0; color: #0A0A0A;">${message}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Fehler beim Senden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
