import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { BRAND_NAME } from "@/app/lib/brand";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  contactingFor?: string;
  description?: string;
};

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const contactingFor = body.contactingFor?.trim();
    const description = body.description?.trim() || "N/A";

    if (!name || !email || !phone || !contactingFor) {
      return NextResponse.json(
        { message: "Name, email, phone, and contact type are required." },
        { status: 400 },
      );
    }

    const transporter = createTransporter();
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (!fromEmail) {
      throw new Error("SMTP_FROM or SMTP_USER must be set.");
    }

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: `${BRAND_NAME} Contact - ${contactingFor} - ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Contacting For: ${contactingFor}`,
        "",
        "Description:",
        description,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px;">New ${BRAND_NAME} contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Contacting For:</strong> ${contactingFor}</p>
          <p><strong>Description:</strong></p>
          <p>${description.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: `Message sent to ${email}.` });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send your message right now.";
    return NextResponse.json({ message }, { status: 500 });
  }
}