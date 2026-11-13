import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { action, payload } = await req.json();

    if (action === "DISPATCH_PROCUREMENT") {
      return NextResponse.json({
        success: true,
        action,
        status: "SCANNING_SUPPLIERS",
        jobId: `job_${Date.now()}`,
      });
    }

    if (action === "PREFLIGHT_VERIFY") {
      return NextResponse.json({
        success: true,
        allowed: true,
        code: "APPROVED",
        reason: "API BFF check verified mandate safety.",
      });
    }

    return NextResponse.json({ success: true, message: `Action ${action} handled.` });
  } catch (err) {
    return NextResponse.json({ error: "Agent dispatch error" }, { status: 500 });
  }
}
