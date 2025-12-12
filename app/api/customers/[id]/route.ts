import { mockCustomers } from "@/domain/mock/mock-customers";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: any } }
) {
    const {id} = await params
  const customer = mockCustomers.find((c) => c.id === id);

  if (!customer) {
    return new NextResponse("Customer not found", { status: 404 });
  }

  return NextResponse.json(customer);
}
