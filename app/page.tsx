import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Welcome to Instalily Sales App</h1>
      <p className="text-gray-600">
        A mini CRM dashboard with customer profiles, priority insights, and AI
        productivity tools.
      </p>

      <div className="space-x-3">
        <Link
          href="/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to Dashboard
        </Link>
        <Link href="/customers/1" className="underline text-blue-700">
          View Example Customer
        </Link>
      </div>
    </div>
  );
}
