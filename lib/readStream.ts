export async function readGeminiStream(
  res: Response,
  onToken: (token: string) => void
) {
  const reader = res.body?.getReader();
  if (!reader) return;

  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);

    // Gemini sends lines like:
    // data: {"candidates":[{"content":{...}}]}
    // const lines = chunk.split("\n");

    // for (const line of lines) {
    //   if (line.startsWith("data:")) {
    //     const json = line.replace("data:", "").trim();
    //     if (json === "[DONE]") return;

    //     try {
    //       const obj = JSON.parse(json);

    //       const parts =
    //         obj?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;

    //       if (parts) onToken(parts);
    //     } catch {}
    //   }
    // }

    
    if (chunk) {
      onToken(chunk);
    }  }
}
