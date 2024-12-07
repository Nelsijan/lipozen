import React from 'react';

interface ArticleHeaderProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
}

export function ArticleHeader({ title, subtitle, author, date }: ArticleHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>Por {author}</span>
        <span className="mx-2">•</span>
        <time dateTime={date}>{date}</time>
      </div>
    </div>
  );
}