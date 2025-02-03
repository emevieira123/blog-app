import React from 'react';
import { Post } from '../../_shared/_types/post';
import { CardPost } from '../../_shared/_components/CardPost';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-4 px-6">
      <div className='flex flex-col items-center justify-between mb-4'>
        <h1 className="text-2xl font-bold">Blog Mix</h1>
        <span className='text-gray-500'>Latest updates and articles</span>
      </div>
      <div className="flex flex-col gap-4">
        {posts?.map((post) => (
          <CardPost
            key={post.id}
            href={`/posts/${post.id}`}
            title={post.title}
            summary={post.summary}
            date={post.date as string}
          />
        ))}
      </div>
    </div>
  )
}

export default Posts
