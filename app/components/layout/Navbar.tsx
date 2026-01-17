"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, Sun, Moon, User, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    // { title: "Cover-Letter", path: "/cover-letter" },
    { title: "Companies", path: "/companies" },
    { title: "AI-InterviewQ&A", path: "/interview" },
    { title: "AI-Code-Reviewer", path: "/code-review" },
    { title: "Blog", path: "blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-xs py-2 lg:px-16 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4  ">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <User style={{ color: "#f28647" }} className="h-8 w-8 " />
              <span
                style={{ color: "#f28647" }}
                className="ml-2 text-xl font-bold "
              >
                DevPath AI
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <span className="text-gray-700 hover:text-blue-600">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/signup">
              {/* <button className="bg-[#f28647] text-white px-4 py-2 rounded-md hover:bg-[#f07934]">
                Sign Up
              </button> */}
            </Link>
            <Link href="/login">
              <button className="bg-[#f28647] text-white px-4 py-2 rounded-md hover:bg-[#f07934]">
                Login
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <User style={{ color: "#3e94e4" }} className="h-8 w-8 " />
            <span className="ml-2 text-xl font-bold text-blue-600">
              Job Hunting
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            {/* <Link href="/signup">
              <button className="ml-auto bg-[#f28647] text-white px-4 py-2 rounded-md hover:bg-[#f07934]">
                Sign Up
              </button>
            </Link> */}
            <Link href="/login">
              <button className="ml-3 bg-[#f28647] text-white px-4 py-2 rounded-md hover:bg-[#f07934]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to close the mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
