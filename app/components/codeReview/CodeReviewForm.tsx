"use client";

import { useState } from "react";

type Props = {
  onSubmit: (code: string) => void;
  loading: boolean;
};

export default function CodeReviewForm({ onSubmit, loading }: Props) {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    onSubmit(code);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-sm space-y-4"
    >
      <h2 className="text-xl font-bold">AI Code Reviewer</h2>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={14}
        placeholder="Paste your code here..."
        className="w-full border border-gray-200 rounded p-3 font-mono text-sm"
      />

      <button
        disabled={loading}
        className="w-full bg-[#f28647]  hover:bg-[#f07934]  text-white py-2 rounded transition"
      >
        {loading ? "Reviewing..." : "Review Code"}
      </button>
    </form>
  );
}
