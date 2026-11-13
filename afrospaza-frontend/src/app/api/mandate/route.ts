import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    spazaId: "spaza_soweto_0042",
    spazaName: "Soweto Super Spaza & Wholesale",
    totalDailyBudgetZAR: 25000,
    usedTodayZAR: 14250,
    killSwitchActive: false,
    rulesCount: 4,
  });
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json({
      success: true,
      updatedAt: new Date().toISOString(),
      mandate: body,
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid mandate payload" }, { status: 400 });
  }
}
