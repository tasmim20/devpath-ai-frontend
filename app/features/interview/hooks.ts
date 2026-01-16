/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { generateInterview } from "./api";
import { InterviewResponse } from "./types";

export function useInterview() {
  const [data, setData] = useState<InterviewResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async (payload: any) => {
    setLoading(true);
    setError("");
    try {
      setData(await generateInterview(payload));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, generate };
}
