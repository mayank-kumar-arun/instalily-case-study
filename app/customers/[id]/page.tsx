import CustomerHeader from "@/components/customers/CustomerHeader";
import Timeline from "@/components/customers/Timeline";
import EmailDraft from "@/components/customers/EmailDraft";

export default async function CustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

  const url = `${baseUrl}/api/customers/${id}`;

  const customer = await fetch(url, { cache: "no-store" })
    .then((res) => (res.ok ? res.json() : null))
    .catch(() => null);

  console.log("customer", customer);

  if (!customer) {
    return <div className="text-red-500">Customer Not Found</div>;
  }

  return (
    <div className="space-y-6">
      <CustomerHeader customer={customer} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Timeline timeline={customer.timeline ?? []} />
        </div>

        <div>
          <EmailDraft customer={customer} />
        </div>
      </div>
    </div>
  );
}
