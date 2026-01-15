import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  // honeypot
  company?: string;
};

function isValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// limite de ratio de memoria
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 5; // maximo 5 pedidos/min por IP
const ipHits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = ipHits.get(ip);

  if (!current || now > current.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true as const };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    const retryAfterSec = Math.ceil((current.resetAt - now) / 1000);
    return { ok: false as const, retryAfterSec };
  }

  current.count += 1;
  ipHits.set(ip, current);
  return { ok: true as const };
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  // 2) Anti-spam: rate limit
  const ip = getClientIp(req);
  const rl = checkRateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec ?? 60) },
      }
    );
  }

  // 3) Anti-spam: honeypot (si se llena, probablemente bot)
  if (body.company && body.company.trim().length > 0) {
    // Devuelve OK para evitar dar señales al bot
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 4) Validación de campos
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (!message || message.length < 10 || message.length > 2000) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  // 5) Load env vars (Hostinger SMTP)
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || SMTP_USER;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  // 6) Create transporter (Hostinger: 465 SSL)
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true, // 465 -> SSL
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  // 7) Send email
  const subject = `New message from ${name} (Contact Form)`;

  const text = `Name: ${name}
Email: ${email}

Message:
${message}
`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color:#666;font-size:12px;">
        Sent via Plex Commodities website contact form.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `Plex Commodities Co. <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
