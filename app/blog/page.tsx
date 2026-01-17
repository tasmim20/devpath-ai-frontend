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

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/blogs`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 mx-4">
          <BlogEditor onBlogCreated={fetchBlogs} />
        </div>

        <div className="lg:col-span-1 mx-4">
          <BlogSidebar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Created Blogs</h2>
        <BlogCard blogs={blogs} loading={loading} />
      </div>
    </div>
  );
}
