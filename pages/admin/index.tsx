import { useState } from "react";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    summary: '',
    content: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: '', author: '', summary: '', content: '' });
        alert('Post created successfully!');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-full">
            <label className="block mb-2">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className='w-full border-1 border-gray-300 rounded-sm px-1 h-10'
            />
          </div>
          <div className="w-full">
            <label className="block mb-2">Author</label>
            <input
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className='w-full border-1 border-gray-300 rounded-sm px-1 h-10'
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block mb-2">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
            className='w-full border-1 border-gray-300 rounded-sm px-1 h-24'
          />
        </div>
        <div className="w-full">
          <label className="block mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className='w-full border-1 border-gray-300 rounded-sm px-1 h-64'
          />
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