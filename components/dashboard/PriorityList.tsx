import PriorityCard from "./PriorityCard";

export default function PriorityList({ customers }: { customers: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {customers.map((c) => (
        <PriorityCard key={c.id} customer={c} />
      ))}
    </div>
  );
}
