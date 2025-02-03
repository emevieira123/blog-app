import React from 'react';
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { api } from "../../../_api";
import { Endpoints } from "../../../_api/Endpoints";
import { useRouter } from "next/router";
import { Post } from "../../../_shared/_types/post";

export default function PostDetails({ post }: { post: Post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading informations...</div>;
  }

  const formattedDate = new Date(post?.date as string).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">
        ← Back to Posts
      </Link>
      <article className="prose lg:prose-xl">
        <h1 className=" text-xl font-bold">
          {post.title}
        </h1>
        <div className="text-gray-500">
          By {post.author} • {formattedDate}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="mt-4 text-lg text-gray-600"
        />
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<Post[]>(Endpoints.POSTS)

  const paths = data?.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await api.get<Post[]>(Endpoints.POSTS)

  const { params } = context;
  if (!params || !params.id) {
    return { notFound: true };
  }

  const post = data.find((post) => post.id === params.id);
  return {
    props: { post },
  };
};