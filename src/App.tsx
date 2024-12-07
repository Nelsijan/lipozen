import React from 'react';
import { Header } from './components/Header';
import { ArticleHeader } from './components/ArticleHeader';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { BenefitsList } from './components/BenefitsList';
import { TestimonialsList } from './components/TestimonialsList';
import { InterviewSection } from './components/InterviewSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <ArticleHeader 
            title="Mudança de Peso Após os 50: Renomado Endocrinologista Revela Truque com Cúrcuma Que Pode Ajudar a Perder Até 8kg em Duas Semanas"
            subtitle="Descoberta viral sobre o uso da cúrcuma está transformando vidas e desafiando a indústria de emagrecimento."
            author="Marcela Pereira"
            date="05/12/2024 - 21:45:00 - Atualizado há 101 dias"
          />

          <figure className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1200&q=80"
              alt="Cúrcuma em pó e raiz"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Cúrcuma: o ingrediente natural que está revolucionando o emagrecimento
            </figcaption>
          </figure>

          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Um estudo inovador, apoiado por universidades como Harvard e Stanford, 
              revelou a verdadeira causa do acúmulo de gordura corporal: <strong>inflamação nas células de gordura.</strong>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Essa inflamação trava o corpo, impedindo que ele queime gordura – mesmo com dietas, 
              exercícios ou qualquer tentativa tradicional de emagrecimento.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Mas há uma solução simples e surpreendente: um ritual com cúrcuma que pode ser feito em apenas 
              <strong> 15 segundos pela manhã.</strong>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Pesquisas apontam que esse método reduz a inflamação diretamente nas células de gordura, 
              ajudando o corpo a liberar o excesso de peso acumulado.
            </p>

            <Testimonial
              quote="Sempre me perguntam o que fiz para emagrecer sem esforço. A verdade é que, ao descobrir o método do Dr. Julian Ross, tudo mudou. Em 10 dias, perdi 5 kg e, em dois meses, estava com menos 11 kg. A chave foi o truque com cúrcuma que ele me ensinou."
              author="Cristiane Magoga"
              location="54 anos"
            />

            <BenefitsList />

            <TestimonialsList />

            <p className="text-lg leading-relaxed mb-8">
              Se você já tentou de tudo, mas não consegue resultados duradouros, 
              este pode ser o método que você estava esperando.
            </p>

            <InterviewSection />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}