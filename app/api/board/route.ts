import { NextResponse } from "next/server";
import { readBoard } from "@/lib/yours";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(readBoard());
}
