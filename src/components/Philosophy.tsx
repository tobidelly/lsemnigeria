import React from 'react';
import { Compass } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Our Philosophy"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-2xl p-8 shadow-xl">
                <Compass className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At LSEM, we believe in empowering individuals with practical knowledge and hands-on experience in international trade. Our philosophy centers on combining theoretical excellence with real-world applications, ensuring our graduates are ready to excel in the global export market.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="ml-4 text-lg text-gray-600">Practical, hands-on learning approach</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="ml-4 text-lg text-gray-600">Industry-focused curriculum design</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="ml-4 text-lg text-gray-600">Real-world case studies and applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;