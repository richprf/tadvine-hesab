import { NextResponse } from "next/server";
import data from "../../data.json";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params; 

  console.log("Incoming id:", id);

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  
  const country = data.find(
    (item: any) => item.alpha3Code?.toLowerCase() === id.toLowerCase()
  );

  if (!country) {
    return NextResponse.json(
      { error: "Country not found", receivedId: id },
      { status: 404 }
    );
  }

  return NextResponse.json(country, { status: 200 });
}
