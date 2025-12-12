import { mockCustomers } from "@/domain/mock/mock-customers";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockCustomers);
}
