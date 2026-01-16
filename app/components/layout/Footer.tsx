"use client";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    "Interview Q&A Generator",
    "Code Reviewer",
    "Blog Writer",
    "Companies",
    "Dashboard",
  ];

  const categories = [
    "Software Engineer",
    "AI/ML Engineer",
    "Data Scientist",
    "DevOps Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  return (
    <footer className="bg-[#fff4ef] text-gray-700 w-full">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Logo & Description */}
        <div className="col-span-1 sm:col-span-2 mb-6 sm:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-orange-400 rounded-full p-2 mr-2">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-xl font-bold text-orange-400">DevPath</span>
          </div>
          <p className="mb-4 text-sm sm:text-base">
            Empowering job seekers with AI tools: generate <br />
            interviewQ&A, code review and more.
          </p>
          <p className="flex items-center gap-2 text-orange-400 text-sm sm:text-base">
            support@devpath.ai
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {categories.map((category) => (
              <li key={category}>
                <a href="#" className="hover:text-orange-400 transition">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="mb-4 text-sm sm:text-base">
            Get updates on new AI tools, job tips, and articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12 py-6 text-center text-gray-500 text-sm sm:text-base">
        © {currentYear} DevPath AI. All Rights Reserved.
      </div>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="w-6 h-6 text-gray-600" />
      </button>
    </footer>
  );
};

export default Footer;
