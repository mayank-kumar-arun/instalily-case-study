"use client";

import { useState } from "react";
import { useChatContext } from "@/hooks/useChatContext";
import { readGeminiStream } from "@/lib/readStream";

export default function ChatPanel() {
  const { page, id } = useChatContext();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    const user = input.trim();
    if (!user) return;

    setMessages((m) => [...m, `You: ${user}`]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: user,
        context:
          page === "customer" ? `Customer ID: ${id}` : "Dashboard context",
      }),
    });

    console.log("api response", res);

    let aiReply = "";
    await readGeminiStream(res, (token) => {
      aiReply += token;
      setMessages((prev) =>
        [...prev.slice(0, -1), `AI: ${aiReply}`].filter(Boolean)
      );
    });

    setMessages((prev) => [...prev, `AI: ${aiReply}`]);
    setLoading(false);
  }

  console.log("messages", messages);

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow"
        onClick={() => setOpen(true)}
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white border rounded shadow-lg p-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-sm">Chat Assistant ({page})</h4>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="h-56 bg-gray-50 border p-2 overflow-y-auto mt-2 mb-2 rounded">
            {messages.map((msg, i) => (
              <div key={i} className="text-sm mb-1">
                {msg}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded px-2 flex-1 text-sm"
              placeholder="Ask something…"
            />
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              onClick={send}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
