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
            title="Weight Change After 50: Renowned Endocrinologist Reveals Turmeric Trick That Can Help You Lose Up to 8kg in Two Weeks"
            subtitle="Viral discovery about turmeric use is transforming lives and challenging the weight loss industry."
            author="Marcela Pereira"
            date="05/12/2024 - 21:45:00 - Updated 101 days ago"
          />

          <figure className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1200&q=80"
              alt="Turmeric powder and root"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Turmeric: the natural ingredient that's revolutionizing weight loss
            </figcaption>
          </figure>

          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              An innovative study, supported by universities like Harvard and Stanford, 
              revealed the true cause of body fat accumulation: <strong>inflammation in fat cells.</strong>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              This inflammation blocks the body, preventing it from burning fat – even with diets, 
              exercises, or any traditional weight loss attempts.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              But there’s a simple and surprising solution: a turmeric ritual that can be done in just 
              <strong> 15 seconds in the morning.</strong>
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Research shows this method directly reduces inflammation in fat cells, 
              helping the body release the accumulated excess weight.
            </p>

            <Testimonial
              quote="I’m always asked what I did to lose weight effortlessly. The truth is, once I discovered Dr. Julian Ross' method, everything changed. In 10 days, I lost 5 kg, and in two months, I had lost 11 kg. The key was the turmeric trick he taught me."
              author="Cristiane Magoga"
              location="54 years old"
            />

            <BenefitsList />

            <TestimonialsList />

            <p className="text-lg leading-relaxed mb-8">
              If you’ve tried everything but can’t get lasting results, 
              this may be the method you’ve been waiting for.
            </p>

            <InterviewSection />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
