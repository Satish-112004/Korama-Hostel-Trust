import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { ContactSubmission } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().min(8, "Phone number must be at least 8 digits").max(20).optional().or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
}).refine((data) => (data.email && data.email.length > 0) || (data.phone && data.phone.length > 0), {
  message: "Please provide either a valid email address or phone number so we can reach you.",
  path: ["email"],
});

const DATA_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

// In-memory fallback
let memorySubmissions: ContactSubmission[] = [];

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(SUBMISSIONS_FILE)) {
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
    }
  } catch {
    // Filesystem may be read-only in some serverless environments
  }
}

function getStoredSubmissions(): ContactSubmission[] {
  try {
    ensureDataFile();
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch {
    // fallback to memory
  }
  return memorySubmissions;
}

function saveSubmission(submission: ContactSubmission) {
  try {
    ensureDataFile();
    const current = getStoredSubmissions();
    current.unshift(submission);
    memorySubmissions = current;
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(current, null, 2));
  } catch {
    memorySubmissions.unshift(submission);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Validation failed";
      return NextResponse.json(
        { success: false, error: firstError, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const newSubmission: ContactSubmission = {
      id: "KHT-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase(),
      name: parsed.data.name.trim(),
      email: parsed.data.email?.trim() || undefined,
      phone: parsed.data.phone?.trim() || undefined,
      subject: parsed.data.subject.trim(),
      message: parsed.data.message.trim(),
      createdAt: new Date().toISOString(),
      status: "unread",
    };

    saveSubmission(newSubmission);

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received by Korama Hostel Trust management. Reference ID: " + newSubmission.id,
      submissionId: newSubmission.id,
      timestamp: newSubmission.createdAt,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server encountered an error while processing your submission. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const submissions = getStoredSubmissions();
  return NextResponse.json({
    success: true,
    count: submissions.length,
    submissions: submissions.slice(0, 50),
  });
}
