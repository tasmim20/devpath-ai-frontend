"use client";

import { useEffect, useState } from "react";
import BlogEditor from "../components/blog/BlogEditor";

import BlogSidebar from "../components/blog/BlogSidebar";
import BlogCard from "../components/blog/BlogCard";
import { apiUrl } from "../features/api";

type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
  published: boolean;
  createdAt: string;
};
type BlogEditorProps = {
  onBlogCreated: () => void;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${apiUrl}/blogs`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4">
        {/* Editor */}
        <div className="lg:col-span-3">
          <BlogEditor onBlogCreated={fetchBlogs} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>

      {/* Created Blogs */}
      <div className="max-w-7xl mx-auto p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Created Blogs</h2>
        <BlogCard blogs={blogs} />
      </div>
    </div>
  );
}
