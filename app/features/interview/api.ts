import { InterviewResponse } from "./types";

export async function generateInterview(payload: {
  position: string;
  level: string;
  questionNumber: number;
  topic?: string;
}): Promise<InterviewResponse> {
  const res = await fetch("http://localhost:5000/ai/get-questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to generate questions");
  }

  return res.json();
}
