import React from 'react';
import Link, { LinkProps } from "next/link";

interface CardPostProps extends LinkProps {
  title: string;
  summary: string;
  date: string;
}
export function CardPost({ title, summary, date, ...rest }: CardPostProps) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='h-full hover:shadow-lg transition-shadow border-1 border-gray-300 rounded-2xl p-6'>
      <div className='flex mb-4 justify-between'>
        <span className='text-md text-gray-600'>{formattedDate}</span>
        <span className='bg-blue-100 text-blue-500 px-2 py-1 rounded-2xl'>Blog</span>
      </div>
      <div className='mb-4'>
        <h2 className="text-xl font-bold">{title}</h2>
        <span className='text-lg text-gray-600'>
          {summary}
        </span>
      </div>

      <Link {...rest}>
        <span className='text-blue-500 text-lg font-medium'>
          {"Ler mais >"}
        </span>
      </Link>
    </div>
  )
}