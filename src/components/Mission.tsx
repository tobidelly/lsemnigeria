import React from 'react';
import { Target } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Our Mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-2xl p-8 shadow-xl">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To be the leading institution in export management education across West Africa, producing skilled professionals who drive international trade growth and economic development through innovative training and practical expertise.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="ml-4 text-lg text-gray-600">Excellence in export education</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="ml-4 text-lg text-gray-600">Professional development focus</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="ml-4 text-lg text-gray-600">Regional trade leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;