import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "LSEM's comprehensive program transformed my understanding of international trade. I now run a successful export business thanks to their practical approach.",
    author: "Sarah Johnson",
    position: "CEO, Global Trade Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The mentorship and guidance I received at LSEM were invaluable. Their expert instructors provided real-world insights that textbooks simply can't offer.",
    author: "Michael Adebayo",
    position: "Export Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "As an entrepreneur, LSEM's executive program gave me the confidence and knowledge to expand my business internationally. Best investment in my career.",
    author: "Chioma Okonkwo",
    position: "Founder, African Exports Ltd",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Success stories from our alumni across the globe
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;