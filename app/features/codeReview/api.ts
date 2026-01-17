import { apiUrl } from "../api";

export async function reviewCode(code: string) {
  const res = await fetch(`${apiUrl}/ai/code-review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  if (!res.ok) {
    throw new Error("Failed to review code");
  }

  return res.json(); // ✅ CORRECT
}
