import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeaturedCourses = () => {
    const featuredCoursesSection = document.getElementById('featured-courses');
    if (featuredCoursesSection) {
      featuredCoursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Global trade and shipping"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>

      <div className="relative min-h-screen flex items-center justify-start">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl leading-tight">
            <span className="block whitespace-nowrap">Welcome to the Lagos School of</span>
            <span className="block animate-color whitespace-nowrap">Export Management</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 sm:max-w-xl">
            Nigeria's premier institution for export management and international trade education. Join the ranks of successful global traders and exporters.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={scrollToFeaturedCourses}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;