import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Nigerian Export Promotion Council',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'Government'
  },
  {
    name: 'International Trade Centre',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'International'
  },
  {
    name: 'African Export-Import Bank',
    logo: 'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'Financial'
  },
  {
    name: 'West African Chamber of Commerce',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    type: 'Regional'
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Partners
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Collaborating with leading organizations to deliver excellence in export education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                  {partner.type}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Partnership Opportunities
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking to collaborate with organizations that share our vision for excellence in export education and international trade development.
              </p>
              <a
                href="#partner-with-us"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Partner with Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Corporate Partners</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Countries Reached</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Industry Events</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;