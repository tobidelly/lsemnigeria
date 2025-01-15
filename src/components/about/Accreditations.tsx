import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const accreditations = [
  {
    title: 'Nigerian Export Promotion Council (NEPC)',
    description: 'Officially recognized training institution for export management',
    icon: Shield
  },
  {
    title: 'International Trade Centre (ITC)',
    description: 'Certified training partner for international trade education',
    icon: Award
  },
  {
    title: 'West African Chamber of Commerce',
    description: 'Accredited institution for regional trade education',
    icon: CheckCircle
  }
];

const Accreditations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Accreditations
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Recognized and certified by leading international trade organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accreditations.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 mb-6">
                Our accreditations ensure that our programs meet the highest standards of quality in export management education. We continuously update our curriculum to align with international best practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Regular quality audits by accrediting bodies
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Compliance with international standards
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Continuous program improvement
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Quality Assurance"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-xl p-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;