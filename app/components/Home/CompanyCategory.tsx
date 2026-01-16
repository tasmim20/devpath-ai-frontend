import React from "react";

type CategoryCardProps = {
  title: string;
  count: string;
  isHighlighted?: boolean;
};

const CategoryCard = ({
  title,
  count,
  isHighlighted = false,
}: CategoryCardProps) => (
  <div
    className={`p-6 rounded-lg text-center shadow-xs py-10 transition-all duration-300 ${
      isHighlighted
        ? "bg-[#fff4ef] text-white"
        : "bg-[#fff4ef] hover:bg-[#f8c2a9] hover:text-white"
    }`}
  >
    <h3
      className={`text-xl font-semibold mb-2 ${
        isHighlighted ? "text-white" : "text-gray-800"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-sm ${
        isHighlighted ? "text-orange-100" : "text-orange-400"
      }`}
    >
      {count} Companies
    </p>
  </div>
);

const CompanyCategory = () => {
  const categories = [
    { title: "Startup Companies", count: "300+" },
    { title: "Mid-Level Product Companies", count: "180+" },
    { title: "Scale-Up Companies", count: "120+" },
    { title: "MNC & Enterprise", count: "200+" },
    { title: "Remote-First Companies", count: "90+" },
    { title: "AI & Tech-Driven Companies", count: "150+" },
    { title: "Service-Based Companies", count: "220+" },
    {
      title: "Explore All Companies",
      count: "1000+",
      isHighlighted: true,
    },
  ];

  return (
    <section className=" my-10 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-orange-400 text-sm font-semibold uppercase mb-2">
          Company Categories
        </p>

        <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
          Discover Companies That Match Your Career Goals
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore different types of companies and prepare smarter with AI
          interview questions, code reviews, and career guidance tailored to
          each category.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              count={category.count}
              isHighlighted={category.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCategory;
