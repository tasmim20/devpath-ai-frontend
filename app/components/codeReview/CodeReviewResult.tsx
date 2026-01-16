/* eslint-disable @typescript-eslint/no-explicit-any */

export default function CodeReviewResult({ review, loading, error }: any) {
  if (loading)
    return (
      <div className="bg-[#fff4ef] p-6 rounded">
        <p className="text-gray-500">Reviewing code...</p>
      </div>
    );

  if (error)
    return (
      <div className="bg-[#fff4ef] p-6 rounded">
        <p className="text-red-600">{error}</p>
      </div>
    );

  if (!review)
    return (
      <div className="bg-[#fff4ef] p-6 rounded">
        <p className="text-gray-500">
          Submit your code to receive expert-level feedback.
        </p>
      </div>
    );

  return (
    <div className="bg-[#fff4ef] p-6 rounded space-y-6">
      <h2 className="text-xl font-bold">AI Code Review</h2>

      {/* ISSUES */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Issues</h3>
        {review.issues.map((issue: any, i: number) => (
          <div key={i} className="bg-white border p-4 rounded mb-3">
            <p className="font-semibold">
              {issue.category} ({issue.severity})
            </p>
            <p className="text-sm text-gray-700">{issue.description}</p>
          </div>
        ))}
      </div>

      {/* FIXES */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Fixes</h3>
        {review.fixes.map((fix: any, i: number) => (
          <div key={i} className="bg-white border p-4 rounded mb-3">
            <p className="text-sm">{fix.description}</p>
            <pre className="mt-2 bg-gray-100 p-3 rounded text-xs overflow-x-auto">
              {fix.refactored_code_example}
            </pre>
          </div>
        ))}
      </div>

      {/* IMPROVEMENTS */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Improvements</h3>
        {review.improvements.map((imp: any, i: number) => (
          <div key={i} className="bg-white border p-4 rounded mb-3">
            <p className="text-sm">{imp.description}</p>
            <pre className="mt-2 bg-gray-100 p-3 rounded text-xs overflow-x-auto">
              {imp.refactored_code_example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
