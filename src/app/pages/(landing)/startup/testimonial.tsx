import { Building } from "lucide-react";

const testimonials = [
  {
    brand: "InnovateTech",
    name: "Sarah J.",
    position: "Marketing Manager",
    testimonial:
      "I've been using InnovateTech's innovative product for months, and it has completely transformed how I manage my daily tasks. It's intuitive, efficient, and has saved me so much time. I can't imagine going back to my old ways. Highly recommend!",
  },
  {
    brand: "SwiftSolutions",
    name: "David M.",
    position: "Operations Director",
    testimonial:
      "The personalized customer experience I received from SwiftSolutions was outstanding. They took the time to understand my unique needs and provided tailored solutions that exceeded my expectations. Their support team was always responsive and went above and beyond to ensure my satisfaction. I'm a customer for life!",
  },
  {
    brand: "NexGenX",
    name: "Lisa T.",
    position: "Business Analyst",
    testimonial:
      "I was blown away by the cost efficiency and value that NexGenX offers. Their pricing is incredibly competitive, yet they deliver a high-quality product that rivals more established companies. It's refreshing to find a startup that prioritizes affordability without compromising on quality. I'm thrilled to have found them!",
  },
];

export default function Testimonials() {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.name}
          className="p-4 border border-gray-300 hover:border-gray-700 duration-300 rounded-xl"
        >
          <div className="flex gap-4">
            <Building className="h-16 w-16"/>
            <div>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <div className="sm:space-x-4">
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                  {testimonial.brand}
                </span>
                <span className="text-sm text-gray-700 block sm:inline-block">
                  {testimonial.position}
                </span>
              </div>
            </div>
          </div>
          <p className="px-2 leading-8">{testimonial.testimonial}</p>
        </div>
      ))}
    </>
  );
}
