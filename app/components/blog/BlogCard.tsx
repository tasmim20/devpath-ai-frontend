"use client";

type Blog = {
  _id?: string;
  title: string;
  content: string;
  author?: string;
  imageUrl?: string;
};

/* --------------- Skeleton Card --------------- */
const BlogSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-xs overflow-hidden animate-pulse flex flex-col">
    <div className="w-full h-48 bg-gray-200" />
    <div className="p-4 flex-1 flex flex-col">
      <div className="h-6 bg-gray-200 rounded mb-2 w-3/4" />
      <div className="h-4 bg-gray-200 rounded mb-1 w-full" />
      <div className="h-4 bg-gray-200 rounded mb-1 w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mt-auto" />
    </div>
  </div>
);

export default function BlogCard({
  blogs,
  loading = false,
}: {
  blogs: Blog[];
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return <p className="text-gray-500 mt-6">No blogs found.</p>;
  }

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
