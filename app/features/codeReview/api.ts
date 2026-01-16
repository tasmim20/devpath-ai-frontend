export async function reviewCode(code: string) {
  const res = await fetch("http://localhost:5000/ai/code-review", {
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
