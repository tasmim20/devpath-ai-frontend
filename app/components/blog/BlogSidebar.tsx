"use client";

import {
  FiStar,
  FiBookOpen,
  FiClock,
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

export default function BlogSidebar() {
  const technicalCategories = [
    { name: "Databases", icon: <FiDatabase /> },
    { name: "Microservice", icon: <FiCpu /> },
    { name: "Architecture & Patterns", icon: <FiLayers /> },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff4ef] mt-5  to-white rounded-2xl shadow-xs p-6 space-y-6 ">
      <h2 className="font-extrabold text-xl text-orange-800 text-center">
        Blog Preview Panel
      </h2>

      {/* Featured Section */}
      <div className="bg-[#fff4ef] rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer shadow-sm">
        <FiStar className="text-orange-600 text-2xl" />
        <div>
          <p className="font-semibold text-orange-800">Featured Blog</p>
          <p className="text-orange-700 text-sm">Highlight your best posts</p>
        </div>
      </div>

      {/* Technical Categories */}
      <div className="bg-[#fff4ef] rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
        <p className="flex items-center gap-2 font-semibold text-orange-800">
          <FiCode /> Categories
        </p>
        <ul className="text-orange-700 text-sm space-y-1">
          {technicalCategories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center gap-2 hover:text-orange-900 transition-colors"
            >
              <span className="text-orange-600">{cat.icon}</span>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#fff4ef] rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
        <p className="flex items-center gap-2 font-semibold text-orange-800">
          <FiClock /> Recent Posts
        </p>
        <ul className="text-orange-700 text-sm space-y-1">
          <li>How to Learn React Fast</li>
          <li>Top Career Tips in 2026</li>
        </ul>
      </div>
    </div>
  );
}
