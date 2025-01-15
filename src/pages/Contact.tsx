import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import MapSection from '../components/contact/MapSection';
import FAQ from '../components/FAQ';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Get in touch with our team for any inquiries about our programs or services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <MapSection />
      <FAQ />
    </div>
  );
};

export default Contact;