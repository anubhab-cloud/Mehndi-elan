import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, buildOwnerEmail, buildCustomerEmail, type BookingData } from "@/lib/mailer";

// ─── Validation Schema ──────────────────────────────────────────────────────
const bookingSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("A valid email address is required"),
  phone: z.string().min(7, "Phone number is required"),
  date: z.string().min(1, "Event date is required"),
  location: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  packageType: z.string().optional(),
  message: z.string().optional(),
});

// ─── POST /api/booking ──────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate input
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data: BookingData = result.data;

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(buildOwnerEmail(data)),
      transporter.sendMail(buildCustomerEmail(data)),
    ]);

    return NextResponse.json(
      { success: true, message: "Booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send booking request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
