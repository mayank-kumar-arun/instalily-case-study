"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt, context } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ Missing GEMINI_API_KEY");
      return new Response("Missing key", { status: 500 });
    }

    console.log("🔹 Received Prompt:", prompt);
    console.log("🔹 Received Context:", context);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `Context: ${context ?? "none"}\n\nPrompt: ${prompt}`,
          },
        ],
      },
    ];

    console.log("🔹 Sending to Gemini:", JSON.stringify(contents, null, 2));

    const streamingResult = await model.generateContentStream({ contents });

    console.log("✅ Gemini connected, starting stream..." , await streamingResult.response);

    const encoder = new TextEncoder();

    console.log("encoder" , encoder)

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamingResult.stream) {
            // const text = chunk.text();
            // if (text) {
            //   controller.enqueue(encoder.encode(text));
            // }
             const text =
            chunk?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

          if (text) {
            controller.enqueue(encoder.encode(text));
          }
          }
        } catch (err) {
          console.error("❌ Streaming loop error:", err);
        } finally {
          controller.close();
        }
      },
    });

    console.log("stream"  ,stream)

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("❌ API Route Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}


