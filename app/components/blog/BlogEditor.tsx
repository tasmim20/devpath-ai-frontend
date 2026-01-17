"use client";

import { apiUrl } from "@/app/features/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type BlogFormValues = {
  title: string;
  content: string;
  image: FileList;
  author: string;
};

type BlogEditorProps = {
  onBlogCreated: () => void;
};

export default function BlogEditor({ onBlogCreated }: BlogEditorProps) {
  const { register, handleSubmit, reset, watch } = useForm<BlogFormValues>();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const watchImage = watch("image");

  if (watchImage?.[0] && !preview) {
    const file = watchImage[0];
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  const onSubmit = async (data: BlogFormValues, publish = false) => {
    if (!data.title || !data.content || !data.author) {
      toast.error("Title, content, and author are required");
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

      toast.success(publish ? "Blog published!" : "Draft saved!");
      reset();
      setPreview(null);
      onBlogCreated();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-xl shadow border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Blog</h1>

      <form>
        <input
          {...register("author", { required: true })}
          placeholder="Your Name"
          className="w-full border-b-2 border-gray-300 pb-1 mb-2 outline-none"
        />
        <input
          {...register("title", { required: true })}
          placeholder="Blog Title"
          className="w-full border-b-2 border-gray-300 pb-1 mb-4 outline-none"
        />

        <textarea
          {...register("content", { required: true })}
          placeholder="Write your blog..."
          rows={4}
          className="w-full border border-gray-200 rounded p-3 resize-none mb-4 focus:outline-none focus:ring-1 focus:ring-orange-400"
        />

        {/* Image Upload with Preview */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="file"
            {...register("image")}
            accept="image/*"
            className=" text-sm text-gray-500 mt-5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="h-14 w-14 object-cover rounded "
            />
          )}
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit((data) => onSubmit(data, false))}
            className="px-4 py-2 border rounded hover:bg-gray-100 transition"
          >
            Save Draft
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit((data) => onSubmit(data, true))}
            className="px-4 py-2 bg-[#f28647] text-white rounded hover:bg-[#ef7731] transition"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
