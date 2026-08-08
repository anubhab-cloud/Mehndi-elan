import nodemailer from "nodemailer";

// ─── Nodemailer Transporter ─────────────────────────────────────────────────
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── Booking Data Type ──────────────────────────────────────────────────────
export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  location?: string;
  service: string;
  packageType?: string;
  message?: string;
}

// ─── Email to Owner (you receive this) ─────────────────────────────────────
export function buildOwnerEmail(data: BookingData) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>New Booking Request</title>
    </head>
    <body style="margin:0;padding:0;background:#F5EDE0;font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EDE0;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 30px rgba(74,18,26,0.12);">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#4A1020,#6B1D2A);padding:32px 40px;text-align:center;">
                  <p style="margin:0 0 4px 0;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;">New Request</p>
                  <h1 style="margin:0;font-size:26px;font-weight:600;color:#FAF6EE;letter-spacing:1px;">Booking Enquiry</h1>
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#C9A84C,transparent);margin:16px 0 0;"></div>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">
                  <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:14px;color:#5C4538;">
                    A new booking request has been received. Please respond within 24 hours.
                  </p>

                  <!-- Details Table -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid rgba(201,168,76,0.2);">
                    ${[
                      ["👤 Full Name", data.name],
                      ["📧 Email", data.email],
                      ["📞 Phone", data.phone],
                      ["📅 Event Date", new Date(data.date).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })],
                      ["📍 Location", data.location || "Not specified"],
                      ["💎 Service", data.service],
                      ["📦 Package", data.packageType || "Not specified"],
                    ].map(([label, value], i) => `
                      <tr style="background:${i % 2 === 0 ? "#FDFBF7" : "#ffffff"};">
                        <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:12px;font-weight:600;color:#4A1020;text-transform:uppercase;letter-spacing:0.5px;width:40%;border-right:1px solid rgba(201,168,76,0.15);">
                          ${label}
                        </td>
                        <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:13px;color:#3D2B1F;">
                          ${value}
                        </td>
                      </tr>
                    `).join("")}
                  </table>

                  ${data.message ? `
                  <!-- Message -->
                  <div style="margin-top:24px;padding:18px 20px;background:#FDFBF7;border-radius:10px;border-left:3px solid #C9A84C;">
                    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#A67C2E;">Special Requests / Message</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#5C4538;line-height:1.6;">${data.message}</p>
                  </div>
                  ` : ""}

                  <!-- Reply Buttons -->
                  <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;">
                    <a href="mailto:${data.email}?subject=Re: Your Mehndi Élan Booking Request"
                       style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#4A1020,#6B1D2A);color:#E8C86D;font-family:Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border-radius:50px;">
                      Reply via Email
                    </a>
                    <a href="https://wa.me/${data.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(data.name)}!%20This%20is%20Mehndi%20Élan%20regarding%20your%20booking%20request."
                       style="display:inline-block;padding:12px 24px;background:#25D366;color:#ffffff;font-family:Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border-radius:50px;">
                      Reply on WhatsApp
                    </a>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#3D0E15;padding:20px 40px;text-align:center;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#E8D5B7;opacity:0.5;">
                    Mehndi Élan · Booking Management System
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return {
    from: `"Mehndi Élan Bookings" <${process.env.SMTP_USER}>`,
    to: process.env.BOOKING_TO_EMAIL!,
    subject: `✨ New Booking Request — ${data.name} · ${new Date(data.date).toLocaleDateString("en-GB")}`,
    html,
  };
}

// ─── Confirmation Email to Customer ────────────────────────────────────────
export function buildCustomerEmail(data: BookingData) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Booking Confirmation</title>
    </head>
    <body style="margin:0;padding:0;background:#F5EDE0;font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EDE0;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 30px rgba(74,18,26,0.12);">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#4A1020,#6B1D2A);padding:40px;text-align:center;">
                  <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;">Mehndi Élan</p>
                  <h1 style="margin:0 0 8px;font-size:28px;font-weight:600;color:#FAF6EE;">Thank You, ${data.name.split(" ")[0]}! ✨</h1>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#E8D5B7;opacity:0.75;">Your booking request has been received</p>
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#C9A84C,transparent);margin:20px 0 0;"></div>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">
                  <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;color:#5C4538;line-height:1.7;">
                    We've received your booking enquiry and are thrilled to be a part of your special day. 
                    <strong style="color:#4A1020;">Priya Sharma</strong> will personally review your request and 
                    get back to you within <strong style="color:#4A1020;">24 hours</strong>.
                  </p>

                  <!-- Summary Box -->
                  <div style="background:linear-gradient(135deg,#FDFBF7,#F5EDE0);border-radius:12px;padding:24px;border:1px solid rgba(201,168,76,0.2);margin-bottom:24px;">
                    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:#A67C2E;">Your Booking Summary</p>
                    ${[
                      ["Service", data.service],
                      ["Event Date", new Date(data.date).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })],
                      ["Location", data.location || "To be confirmed"],
                      ["Package", data.packageType || "To be discussed"],
                    ].map(([label, value]) => `
                      <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(201,168,76,0.12);">
                        <span style="font-family:Arial,sans-serif;font-size:12px;color:#5C4538;font-weight:600;">${label}</span>
                        <span style="font-family:Arial,sans-serif;font-size:12px;color:#3D2B1F;">${value}</span>
                      </div>
                    `).join("")}
                  </div>

                  <!-- What's Next -->
                  <div style="margin-bottom:28px;">
                    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:13px;font-weight:600;color:#4A1020;">What happens next?</p>
                    ${[
                      ["Within 24 hours", "We'll confirm your date and availability"],
                      ["Consultation call", "A quick chat to understand your vision"],
                      ["Design curation", "Bespoke mood board created for you"],
                      ["Your big day", "We arrive fully equipped to create magic ✨"],
                    ].map(([step, desc], i) => `
                      <div style="display:flex;gap:14px;margin-bottom:12px;align-items:flex-start;">
                        <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#C9A84C,#E8C86D);display:flex;align-items:center;justify-content:center;flex-shrink:0;text-align:center;line-height:24px;">
                          <span style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:#3D2B1F;">${i + 1}</span>
                        </div>
                        <div>
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;font-weight:600;color:#4A1020;">${step}</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#5C4538;">${desc}</p>
                        </div>
                      </div>
                    `).join("")}
                  </div>

                  <!-- WhatsApp CTA -->
                  <div style="text-align:center;padding:20px;background:#F5EDE0;border-radius:12px;">
                    <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:13px;color:#5C4538;">Need a faster reply?</p>
                    <a href="https://wa.me/${process.env.NEXT_PUBLIC_SITE_URL ? "916009954997" : "916009954997"}?text=Hi%20Mehndi%20Élan!%20I%20just%20submitted%20a%20booking%20request."
                       style="display:inline-block;padding:12px 28px;background:#25D366;color:#ffffff;font-family:Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border-radius:50px;">
                      Chat on WhatsApp
                    </a>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#3D0E15;padding:24px 40px;text-align:center;">
                  <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:13px;color:#E8D5B7;font-weight:600;">Mehndi Élan</p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#E8D5B7;opacity:0.45;">
                    Artistry Etched in Tradition · London & UK-Wide
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return {
    from: `"Mehndi Élan" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `✨ We've received your booking request, ${data.name.split(" ")[0]}!`,
    html,
  };
}
