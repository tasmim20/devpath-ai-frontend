"use client";

import { apiUrl } from "@/app/features/api";
import { useState } from "react";
import { useForm } from "react-hook-form";

type BlogFormValues = {
  title: string;
  content: string;
  image: FileList;
  author: string;
};

export default function BlogEditor() {
  const { register, handleSubmit, reset } = useForm<BlogFormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: BlogFormValues, publish = false) => {
    if (!data.title || !data.content || !data.author) {
      alert("Title, content, and author are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("author", data.author);
    if (data.image?.[0]) formData.append("image", data.image[0]);
    formData.append("published", publish.toString());

    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/blogs`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to save blog");

      alert("Blog saved successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-7 p-8 bg-white rounded-xl shadow-xs border border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Create a Blog Post
      </h1>

      <form>
        {/* Author */}
        <div className="mb-4">
          <input
            {...register("author", { required: true })}
            placeholder="Your Name"
            className="w-full text-lg font-medium border-b-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none pb-2 transition-all"
          />
        </div>
        {/* Title */}
        <div className="mb-6">
          <input
            {...register("title", { required: true })}
            placeholder="Blog Title"
            className="w-full text-lg font-medium border-b-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none pb-2 transition-all"
          />
        </div>

        {/* Divider */}
        <div className="my-4 border-t-2 border-dashed border-gray-300" />

        {/* Content */}
        <div className="mb-6">
          <textarea
            {...register("content", { required: true })}
            placeholder="Write your blog content..."
            rows={5}
            className="w-full border border-gray-200 rounded-xl p-4 resize-none focus:outline-none focus:ring-1 focus:ring-orange-400 shadow-sm"
          />
        </div>

        {/* Divider */}
        <div className="my-4 border-t-2 border-dashed border-gray-300" />

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-600 font-medium">
            Upload an Image
          </label>
          <input
            type="file"
            {...register("image")}
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Divider */}
        <div className="my-4 border-t-2 border-dashed border-gray-300" />

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit((data) => onSubmit(data, false))}
            className="px-6 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all font-medium"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit((data) => onSubmit(data, true))}
            className="px-6 py-2 bg-[#f28647] text-white rounded-xl hover:bg-[#ef7731] transition-all font-medium"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
