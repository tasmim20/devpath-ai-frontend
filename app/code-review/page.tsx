/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import CodeReviewForm from "../components/codeReview/CodeReviewForm";
import CodeReviewResult from "../components/codeReview/CodeReviewResult";
import { reviewCode } from "../features/codeReview/api";

export default function CodeReviewPage() {
  const [review, setReview] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReview = async (code: string) => {
    try {
      setLoading(true);
      setError("");
      setReview(null);

      const result = await reviewCode(code);
      setReview(result);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CodeReviewForm onSubmit={handleReview} loading={loading} />
      <CodeReviewResult review={review} loading={loading} error={error} />
    </div>
  );
}
