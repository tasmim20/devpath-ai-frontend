"use client";

import { useForm } from "react-hook-form";

type FormData = {
  position: string;
  level: string;
  questionNumber: number;
  topic?: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
  loading: boolean;
};

export default function InterviewForm({ onSubmit, loading }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      position: "",
      level: "Entry-Level",
      questionNumber: 5,
      topic: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 bg-white p-6 rounded shadow-sm"
    >
      <div>
        <label className="font-semibold">Position *</label>
        <input
          {...register("position", { required: true })}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="e.g. Frontend Developer"
        />
        {errors.position && (
          <span className="text-red-500 text-sm">Position is required</span>
        )}
      </div>

      <div>
        <label className="font-semibold">Level *</label>
        <select
          {...register("level", { required: true })}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option>Entry-Level</option>
          <option>Junior</option>
          <option>Mid-Level</option>
          <option>Senior</option>
          <option>Basic</option>
          <option>Advanced</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Number of Questions *</label>
        <input
          type="number"
          {...register("questionNumber", { required: true, min: 1, max: 20 })}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label className="font-semibold">Topic (Optional)</label>
        <input
          {...register("topic")}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="e.g. React, SEO, Finance"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#f28647] border-gray-300 text-white py-2 rounded hover:bg-[#f07934] transition"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>
    </form>
  );
}
