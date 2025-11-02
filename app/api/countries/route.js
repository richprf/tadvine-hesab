import { NextResponse } from "next/server";
import data from "../data.json"; // مسیر نسبت به همین فولدر

export async function GET() {
  return NextResponse.json(data);
}
