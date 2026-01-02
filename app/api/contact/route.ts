import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

function isValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export async function POST(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Formato inválido" },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  if (
    !name ||
    name.length < 2 ||
    name.length > 100 ||
    !email ||
    !isValidEmail(email) ||
    !message ||
    message.length < 10 ||
    message.length > 1000
  ) {
    return NextResponse.json(
      { success: false, error: "Datos inválidos" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  const mailOptions = {
    from: `Contact Form <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
