import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function InterviewSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/vsl');
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Watch the exclusive interview from the "Health & Wellness" program, where Dr. Julian Ross explains:
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>What causes inflammation in fat cells.</li>
        <li>Why diets and exercises don't work for everyone.</li>
        <li>And most importantly, how to use turmeric strategically to lose weight naturally.</li>
      </ul>
      <p className="text-lg mb-6">
        Our team secured access to the full interview, showing the step-by-step method of this revolutionary approach.
      </p>
      <div className="text-center">
        <button 
          onClick={handleClick}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center mx-auto hover:bg-blue-700 transition-colors"
        >
          Watch the Full Interview
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
      <p className="text-center text-xl font-semibold mt-6">
        Your transformation can start today!
      </p>
    </div>
  );
}
