import React from 'react';
import { Globe2, FileText, PiggyBank, Users2, Building2, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Global Trade Consultancy',
    description: 'Expert guidance on international trade regulations, market entry strategies, and compliance requirements.',
    icon: Globe2
  },
  {
    title: 'Trade Contract Analysis',
    description: 'Comprehensive review and analysis of international trade contracts and agreements.',
    icon: FileText
  },
  {
    title: 'Expert Financial Advice',
    description: 'Strategic financial planning and consultation for international trade operations.',
    icon: PiggyBank
  },
  {
    title: 'Corporate Outsourcing',
    description: 'Professional outsourcing solutions for international trade operations and management.',
    icon: Users2
  },
  {
    title: 'Corporate International Trade Development',
    description: 'Custom programs for corporate international trade expansion and development.',
    icon: Building2
  },
  {
    title: 'Global Export-Trade Implementation',
    description: 'End-to-end support for implementing international trade strategies and operations.',
    icon: Briefcase
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for international trade and export management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 transform -skew-x-12"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer tailored services to meet your specific international trade needs. Contact our team to discuss your requirements.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;