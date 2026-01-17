"use client";

import Link from "next/link";
import { FiTool } from "react-icons/fi";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xs p-12 flex flex-col items-center gap-6 max-w-md text-center">
        <FiTool className="text-6xl text-orange-500 animate-bounce" />
        <h1 className="text-3xl font-extrabold text-gray-800">
          Under Construction
        </h1>
        <p className="text-gray-600">
          working hard to bring this page to life. Check back soon for updates!
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/"
            className="px-4 py-2 bg-[#f28647] text-white rounded-xl hover:bg-blue-700 transition-all font-medium"
          >
            {" "}
            Go Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all font-medium"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-sm">
        © 2026 YourCompany. All rights reserved.
      </p>
    </div>
  );
}
