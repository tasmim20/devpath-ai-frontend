"use client";

import hero from "../../../public/assets/hero.png";
import Image from "next/image";

const Header = () => {
  const keyPoints = [
    "Generate AI-powered interview questions with detailed answers",
    "Create personalized cover letters and professional emails instantly",
    "Get smart code reviews with suggestions and best practices",
    "Explore verified company listings with filters by company type",
    "Write and manage career-focused blogs using AI assistance",
  ];

  return (
    <div className="  from-orange-500 to-white flex flex-col relative overflow-hidden ">
      <header className="w-full h-6 p-4 flex justify-end z-10"></header>

      <main className="flex-grow flex flex-col lg:flex-row items-center px-6 sm:px-12 lg:px-16 z-10">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-orange-500 font-semibold mb-2 text-sm sm:text-base">
            Empowering your career with AI
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            AI-powered learning, coding & career growth.
          </h1>

          {/* Key Points List */}
          <ul className="mb-6 space-y-3 text-gray-700 text-base sm:text-lg">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">-</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md lg:max-w-lg h-auto">
            <Image
              src={hero}
              alt="AI Job Search Illustration"
              width={550}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
