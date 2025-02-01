import { Post } from './_types/post';
import { CardPost } from './_components/CardPost';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-4 px-6">
      <div className='flex items-center justify-between mb-4'>
        <h1 className="text-2xl font-bold">Recents Posts</h1>
        <input
          type="text"
          placeholder='search'
          className='border-1 border-gray-300 rounded-l-sm px-1 w-70 h-8'
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <CardPost
            key={post.id}
            href={`/posts/${post.id}`}
            title={post.title}
            summary={post.summary}
          />
        ))}

      </div>
    </div>
  )
}

export default Posts
