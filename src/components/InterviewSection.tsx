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
        Assista à entrevista exclusiva do programa "Saúde & Bem-Estar", onde o Dr. Julian Ross explica:
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>O que causa a inflamação nas células de gordura.</li>
        <li>Por que dietas e exercícios não funcionam para todos.</li>
        <li>E, o mais importante, como usar a cúrcuma de forma estratégica para perder peso de forma natural.</li>
      </ul>
      <p className="text-lg mb-6">
        Nossa equipe garantiu acesso à entrevista completa, que mostra o passo a passo deste método revolucionário.
      </p>
      <div className="text-center">
        <button 
          onClick={handleClick}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center mx-auto hover:bg-blue-700 transition-colors"
        >
          Assista à Entrevista Completa
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
      <p className="text-center text-xl font-semibold mt-6">
        Sua transformação pode começar hoje mesmo!
      </p>
    </div>
  );
}