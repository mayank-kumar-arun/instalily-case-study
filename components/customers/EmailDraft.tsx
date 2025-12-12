"use client";

import { useState } from "react";
import { readGeminiStream } from "@/lib/readStream";

export default function EmailDraft({ customer }: { customer: any }) {
  const [result, setResult] = useState("");
  const [extra, setExtra] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setResult("");
    setLoading(true);

    const res = await fetch("/api/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `Write a sales outreach email for ${customer.name}. Extra: ${extra}`,
        context: customer.summary ?? "",
      }),
    });

    console.log("res email", res);
    await readGeminiStream(res, (token) => {
      setResult((prev) => prev + token);
    });

    setLoading(false);
  }

  return (
    <div className="bg-white p-4 rounded border shadow-sm">
      <h3 className="font-semibold mb-2">Generate AI Email</h3>

      <textarea
        className="w-full border rounded p-2 text-sm mb-3"
        rows={4}
        value={extra}
        onChange={(e) => setExtra(e.target.value)}
        placeholder="Add extra notes (optional)…"
      />

      <button
        onClick={generate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Generating…" : "Generate Email"}
      </button>

      <pre className="mt-4 whitespace-pre-wrap text-sm bg-gray-50 p-3 border rounded min-h-[100px]">
        {result || "Email will appear here…"}
      </pre>
    </div>
  );
}
