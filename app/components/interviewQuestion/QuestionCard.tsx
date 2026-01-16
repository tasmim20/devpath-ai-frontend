type Props = {
  index: number;
  question: string;
  answer: string;
  hint: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

export default function QuestionCard({
  index,
  question,
  answer,
  hint,
  difficulty,
}: Props) {
  return (
    <div className="border rounded p-5 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">
          Q{index + 1}. {question}
        </h3>
        <span
          className={`px-2 py-1 text-sm rounded font-semibold ${difficultyColor[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <p className="mt-3">
        <strong>Answer:</strong> {answer}
      </p>

      <p className="mt-2 text-gray-600">
        <strong>Hint:</strong> {hint}
      </p>
    </div>
  );
}
