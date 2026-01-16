export interface Question {
  question: string;
  answer: string;
  hint: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface InterviewResponse {
  position: string;
  level: string;
  topic?: string;
  questions: Question[];
}
