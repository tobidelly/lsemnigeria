import React from 'react';
import Vision from '../components/about/Vision';
import History from '../components/about/History';
import Leadership from '../components/about/Leadership';
import Services from '../components/about/Services';
import Accreditations from '../components/about/Accreditations';
import Partners from '../components/about/Partners';
import Stats from '../components/Stats';
import WhyChooseLSEM from '../components/WhyChooseLSEM';
import EnquiryForm from '../components/EnquiryForm';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            About LSEM
          </h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Nigeria's Premier Institution for Export Management Education
          </p>
        </div>
      </div>

      <Vision />
      <History />
      <Services />
      <Stats />
      <Leadership />
      <WhyChooseLSEM />
      <Accreditations />
      <Partners />
      <EnquiryForm />
    </div>
  );
};

export default About;