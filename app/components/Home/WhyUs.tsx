import React from "react";
import { ThumbsUp, UserCheck, ShoppingCart } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      title: "AI Interview Questions & Answers",
      description:
        "Generate role-based interview questions with clear answers and hints to prepare confidently for real interviews.",
      icon: <ThumbsUp className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Instant Code Review by AI",
      description:
        "Get detailed, senior-level feedback on your code quality, performance, security, and best practices.",
      icon: <UserCheck className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Smart Resume & Cover Letter Tools",
      description:
        "Create professional resumes and cover letters tailored to your job role and experience level.",
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className="container bg-white max-w-7xl mx-auto  px-4 my-16">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Cards */}
        <div className="md:w-1/2 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-md  shadow-xs p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="flex justify-center md:justify-start space-x-2 mb-5">
            {[
              "bg-blue-500",
              "bg-red-500",
              "bg-yellow-500",
              "bg-green-500",
              "bg-indigo-500",
              "bg-purple-500",
              "bg-pink-500",
            ].map((color, index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${color}`} />
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6">
            Why Choose Our AI Career Platform?
          </h2>

          <p className="text-gray-600 mb-6">
            We help developers and job seekers prepare smarter using AI-powered
            tools. From interview preparation to code review and resume
            building, everything is designed to boost your confidence and
            performance.
          </p>

          <p className="text-gray-600 mb-8">
            Whether you are a student, junior developer, or experienced
            professional, our platform adapts to your level and guides you step
            by step toward career success.
          </p>

          <button className=" bg-[#f28647] hover:bg-[#f77e38] text-white text-sm font-bold py-2 px-4 rounded">
            START YOUR CAREER JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
