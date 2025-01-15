import React from 'react';
import { Award, Globe2, Users2, BookOpen, Trophy, Target } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Industry Leadership',
    description: 'Top-tier professional export management school in Nigeria and West Africa'
  },
  {
    icon: Globe2,
    title: 'Global Recognition',
    description: 'Internationally recognized certifications and training programs'
  },
  {
    icon: Users2,
    title: 'Expert Instructors',
    description: 'Learn from seasoned professionals with real-world export experience'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'In-depth coverage of international trade and export management'
  },
  {
    icon: Target,
    title: 'Practical Approach',
    description: 'Hands-on training with real case studies and market scenarios'
  },
  {
    icon: Award,
    title: 'Track Record',
    description: 'Successful alumni network across the global trade industry'
  }
];

const WhyChooseLSEM = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose LSEM?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Leading the way in export management education with unparalleled expertise and proven results
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl group-hover:bg-white/10 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLSEM;