"use client";

import InterviewForm from "../components/interviewQuestion/InterviewForm";
import QuestionCard from "../components/interviewQuestion/QuestionCard";
import { useInterview } from "../features/interview/hooks";

export default function Interview() {
  const { data, loading, error, generate } = useInterview();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        AI Interview Question Generator
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Form */}
        <div className="md:w-1/3">
          <InterviewForm onSubmit={generate} loading={loading} />
        </div>

        {/* Right: Result Panel (ALWAYS PRESENT) */}
        <div className="md:w-2/3 min-h-[450px]">
          <div className="bg-[#fff4ef] p-6 rounded h-full">
            <h2 className="text-xl font-bold mb-4">Generated Questions</h2>

            {/* Error */}
            {error && <p className="text-red-600 font-medium">{error}</p>}

            {/* Loading */}
            {loading && (
              <p className="text-gray-500">Generating interview questions...</p>
            )}

            {/* Empty State */}
            {!loading && !data && !error && (
              <p className="text-gray-400">
                Interview questions will appear here.
              </p>
            )}

            {/* Result */}
            {data && (
              <div className="space-y-6 mt-4">
                <div className="bg-white p-4 rounded border">
                  <p>
                    <strong>Position:</strong> {data.position}
                  </p>
                  <p>
                    <strong>Level:</strong> {data.level}
                  </p>
                  {data.topic && (
                    <p>
                      <strong>Topic:</strong> {data.topic}
                    </p>
                  )}
                </div>

                {data.questions.map((q, index) => (
                  <QuestionCard key={index} index={index} {...q} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
