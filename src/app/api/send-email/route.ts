import { sendSimpleMessage } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  if (!payload) {
    return NextResponse.json(
      { error: "Email data is missing" },
      { status: 400 },
    );
  }

  try {
    await sendSimpleMessage({
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      name: payload.name,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to send email, please try again later" },
      { status: 400 },
    );
  }

  return NextResponse.json({ message: "Email has been sent!" });
}
