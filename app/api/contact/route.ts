import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 0;color:#888;width:180px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#0A0A0A;font-weight:600;">${value}</td>
  </tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      company,
      name,
      phone,
      email,
      branche,
      hasWebsite,
      wantsPhotos,
      contactPref,
      package: pkg,
    } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Firmenname, Ansprechpartner und E-Mail sind Pflichtfelder." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "sam@geffen.de";

    await resend.emails.send({
      from: "Geffen FlexCo <onboarding@resend.dev>",
      to,
      subject: `Neue Anfrage von ${company} (${name})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="margin:0 0 24px;color:#0A0A0A;">Neue Website-Anfrage</h2>
          <table style="width:100%;border-collapse:collapse;">
            ${row("Firmenname", company)}
            ${row("Ansprechpartner", name)}
            ${row("Telefonnummer", phone)}
            ${row("E-Mail", email)}
            ${row("Branche", branche)}
            ${row("Bereits eine Website?", hasWebsite)}
            ${row("Fotos gewünscht?", wantsPhotos)}
            ${row("Bevorzugter Kontakt", contactPref)}
            ${row("Paket-Interesse", pkg)}
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
