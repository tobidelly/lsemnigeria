import React from 'react';
import { Target, Compass, Award } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading institution in export management education across West Africa, 
              setting the standard for excellence in international trade education.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <Compass className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower individuals and organizations with the knowledge and skills needed 
              to excel in global trade through innovative education and practical training.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Excellence, Innovation, Integrity, and Global Perspective guide everything we do 
              in pursuit of export management education excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;