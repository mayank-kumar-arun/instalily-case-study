import PriorityList from "@/components/dashboard/PriorityList";

export default async function DashboardPage() {
  const customers = await fetch(
    `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/customers`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Priority Customers</h2>
      <PriorityList customers={customers} />
    </div>
  );
}
