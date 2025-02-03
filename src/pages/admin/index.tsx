import React from 'react';
import { useForm } from "react-hook-form";
import { api } from "../../_api";
import { Endpoints } from "../../_api/Endpoints";
import { postDefaultValues, PostRequest, postSchema } from "../../_shared/_types/post";
import { zodResolver } from '@hookform/resolvers/zod';

export default function AdminPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PostRequest>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      date: new Date().toISOString().slice(0, 10),
    },
  });

  const onSubmit = async (data: PostRequest) => {
    await api.post(Endpoints.POSTS, data)
      .then((resp) => {
        if (resp.status === 201) {
          reset(postDefaultValues);
          // alert('Post created successfully!');
        }
      }).catch((error) => {
        console.error('Error creating post:', error);
        // alert('Error creating post');
      })
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create New Post</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl space-y-6 mx-auto"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-full">
            <label className="block mb-2" htmlFor="title">Title</label>
            <input
              id="title"
              {...register("title")}
              className='w-full border-1 border-gray-300 rounded-sm px-1 h-10'
            />
            {errors?.title && <span className="text-red-500">{errors?.title?.message}</span>}
          </div>
          <div className="w-full">
            <label className="block mb-2" htmlFor="author">Author</label>
            <input
              id="author"
              {...register("author")}
              className='w-full border-1 border-gray-300 rounded-sm px-1 h-10'
            />
            {errors?.author && <span className="text-red-500">{errors?.author?.message}</span>}
          </div>
        </div>
        <div className="w-full">
          <label className="block mb-2" htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            {...register("summary")}
            className='w-full border-1 border-gray-300 rounded-sm px-1 h-20'
          />
          {errors?.summary && <span className="text-red-500">{errors?.summary?.message}</span>}
        </div>
        <div className="w-full">
          <label className="block mb-2" htmlFor="content">Content</label>
          <textarea
            id="content"
            {...register("content")}
            className='w-full border-1 border-gray-300 rounded-sm px-1 h-34'
          />
          {errors?.content && <span className="text-red-500">{errors?.content?.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 cursor-pointer rounded-sm hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}