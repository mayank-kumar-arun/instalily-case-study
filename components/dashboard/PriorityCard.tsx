"use client";

import Link from "next/link";

export default function PriorityCard({ customer }: { customer: any }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{customer.name}</h3>
          <p className="text-sm text-gray-500">
            {customer.industry} • {customer.size} employees
          </p>
        </div>

        <div className="text-sm text-gray-600 bg-gray-100 rounded px-2 py-1">
          Score: <span className="font-medium">{customer.score}</span>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <span className="font-medium">Next Action:</span> {customer.nextAction}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link
          href={`/customers/${customer.id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View Details
        </Link>

        <button
          className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
          onClick={() => alert("Mark completed (mock action)")}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
