import React from 'react';
import type { GetStaticProps } from 'next';
import Posts from './posts';
import { Endpoints } from '../_api/Endpoints';
import { api } from '../_api';
import { Post } from '../_shared/_types/post';

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
