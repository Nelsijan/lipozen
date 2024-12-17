import { Testimonial } from './Testimonial';

export function TestimonialsList() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg my-8">
      <h3 className="text-xl font-semibold mb-4">Real testimonials about the turmeric ritual:</h3>
      <div className="space-y-4">
        <Testimonial
          quote="I lost 15 lbs in 20 days, and for the first time, I no longer feel that constant fatigue. I just needed to follow Dr. Ross's method."
          author="Rachel T."
          location="Austin, TX"
        />
        <Testimonial
          quote="Finally, something that works! I lost 9 lbs in the first week and keep seeing the scale go down. It's simple and natural."
          author="Alice M."
          location="New York, NY"
        />
        <Testimonial
          quote="I've always struggled with my weight, but I never imagined something as basic as turmeric would make a difference. I lost 20 lbs without changing my diet."
          author="Greg H."
          location="Los Angeles, CA"
        />
      </div>
    </div>
  );
}
