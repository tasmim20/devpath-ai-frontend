/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { apiUrl } from "../features/api";

type Company = {
  companyName: string;
  companyWebsite: string;
  industry: string;
  aboutCompany: string;
  companyType: string;
  foundedDate: number;
  employeeSizeRange: string;
  workModel: string;
  hiringArea: string[];
};

const typeColors: Record<string, string> = {
  Startup: "bg-green-100 text-green-800",
  "Mid-Level Product": "bg-yellow-100 text-yellow-800",
  "Scale-up": "bg-purple-100 text-purple-800",
  MNC: "bg-blue-100 text-blue-800",
  "IT Service / Consulting": "bg-gray-100 text-gray-800",
};

const workModelColors: Record<string, string> = {
  Remote: "bg-green-200 text-green-900",
  Hybrid: "bg-blue-200 text-blue-900",
  Onsite: "bg-yellow-200 text-yellow-900",
};

/* ---------------- Skeleton Card ---------------- */
const CompanySkeleton = () => (
  <div className="p-5 rounded-lg shadow animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
    <div className="h-4 bg-gray-200 rounded mb-2" />
    <div className="h-4 bg-gray-200 rounded mb-2" />
    <div className="h-4 bg-gray-200 rounded w-2/3" />
  </div>
);

const Companies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filterType, setFilterType] = useState("All");
  const [filterWorkModel, setFilterWorkModel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const companiesPerPage = 8;

  /* ---------------- Fetch Companies ---------------- */
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/companies`);
        if (!res.ok) throw new Error("Failed to load companies");
        const data = await res.json();
        setCompanies(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  /* ---------------- Filters ---------------- */
  const filteredCompanies = companies.filter((c) => {
    const matchesType = filterType === "All" || c.companyType === filterType;
    const matchesWork =
      filterWorkModel === "All" || c.workModel === filterWorkModel;
    const matchesSearch =
      c.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesWork && matchesSearch;
  });

  /* ---------------- Pagination ---------------- */
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);
  const startIndex = (currentPage - 1) * companiesPerPage;
  const visibleCompanies = filteredCompanies.slice(
    startIndex,
    startIndex + companiesPerPage,
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Banner */}
      <div className="bg-[#fff4ef] p-6 shadow-sm">
        <div className="max-w-6xl mx-auto mb-10">
          <h1 className="text-4xl font-bold my-10 text-center">Companies</h1>

          {/* Filters + Search */}
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <div>
              <label className="font-semibold mr-2">Type:</label>
              <select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  setCurrentPage(1);
                }}
                className="border rounded p-2"
              >
                <option>All</option>
                <option>Startup</option>
                <option>Mid-Level Product</option>
                <option>Scale-up</option>
                <option>MNC</option>
              </select>
            </div>

            <div>
              <label className="font-semibold mr-2">Work Model:</label>
              <select
                value={filterWorkModel}
                onChange={(e) => {
                  setFilterWorkModel(e.target.value);
                  setCurrentPage(1);
                }}
                className="border rounded p-2"
              >
                <option>All</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by name or industry..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="p-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {Array.from({ length: companiesPerPage }).map((_, i) => (
              <CompanySkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 mt-6">{error}</p>
        ) : visibleCompanies.length === 0 ? (
          <p className="text-gray-500 mt-6">
            No companies match the filters/search.
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {visibleCompanies.map((c, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-bold mb-1">{c.companyName}</h2>
                    <p className="text-sm text-gray-500 mb-2">{c.industry}</p>
                    <p className="mb-3">{c.aboutCompany}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded text-sm font-semibold ${typeColors[c.companyType]}`}
                      >
                        {c.companyType}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-sm font-semibold ${workModelColors[c.workModel]}`}
                      >
                        {c.workModel}
                      </span>
                    </div>

                    <p className="text-sm mb-2">
                      <span className="font-semibold">Founded:</span>{" "}
                      {c.foundedDate} |{" "}
                      <span className="font-semibold">Employees:</span>{" "}
                      {c.employeeSizeRange}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Hiring Areas:</span>{" "}
                      {c.hiringArea.join(", ")}
                    </p>
                  </div>

                  <a
                    href={c.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-600 hover:underline font-semibold"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-3 py-1 border rounded ${
                        page === currentPage ? "bg-[#f28647] text-white" : ""
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Companies;
