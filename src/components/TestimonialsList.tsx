import { Testimonial } from './Testimonial';

export function TestimonialsList() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg my-8">
      <h3 className="text-xl font-semibold mb-4">Depoimentos reais sobre o ritual com cúrcuma:</h3>
      <div className="space-y-4">
        <Testimonial
          quote="Perdi 7 kg em 20 dias e, pela primeira vez, não sinto mais aquele cansaço constante. Só precisei seguir o método do Dr. Ross."
          author="Raquel T."
          location="Campinas, SP"
        />
        <Testimonial
          quote="Finalmente algo que funciona! Perdi 4 kg na primeira semana e continuo vendo a balança descer. É simples e natural."
          author="Alice O."
          location="Brasília, DF"
        />
        <Testimonial
          quote="Sempre lutei com a balança, mas nunca imaginei que algo tão básico como cúrcuma faria a diferença. Perdi 9 kg sem mudar minha alimentação."
          author="Givaldo"
          location="Recife, PE"
        />
      </div>
    </div>
  );
}