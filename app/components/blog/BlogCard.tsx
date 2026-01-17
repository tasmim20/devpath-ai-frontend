"use client";

type Blog = {
  _id?: string;
  title: string;
  content: string;
  author?: string;
  imageUrl?: string;
};

export default function BlogCard({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white rounded-2xl shadow-xs overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col"
        >
          {/* Image */}
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
          )}

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm flex-1 line-clamp-4">
              {blog.content}
            </p>
            <p className="text-gray-400 text-xs mt-3">
              Author: {blog.author || "Unknown"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
