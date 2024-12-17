import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

export function Testimonial({ quote, author, location }: TestimonialProps) {
  return (
    <blockquote className="border-l-4 border-blue-500 pl-4 my-6">
      <p className="text-lg italic text-gray-700 mb-2">{quote}</p>
      <footer className="text-sm text-gray-600">
        — {author}, {location}
      </footer>
    </blockquote>
  );
}
