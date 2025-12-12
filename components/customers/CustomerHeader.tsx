export default function CustomerHeader({ customer }: { customer: any }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">{customer.name}</h2>
        <p className="text-sm text-gray-500">
          {customer.industry} • {customer.size} employees
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Last Touch:</span> {customer.lastTouch}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Status:</span> {customer.status}
        </p>
      </div>
    </div>
  );
}
