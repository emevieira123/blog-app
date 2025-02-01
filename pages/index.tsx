import type { GetStaticProps, NextPage } from 'next';
import Posts from './posts';
import { Endpoints } from './api/Endpoints';
import { api } from './api';
import { Post } from './posts/_types/post';

const Home = ({ posts }: { posts: Post[] }) => {
  return <Posts posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get(Endpoints.POSTS)
  const posts = res.data;

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Home
