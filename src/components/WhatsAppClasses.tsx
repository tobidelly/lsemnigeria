import React from 'react';
import { MessageCircle, Zap, Users, Gift, BookOpen, GraduationCap, ArrowRight, CheckCircle, Globe, Shield } from 'lucide-react';

const features = [
  {
    title: 'Enterprise-Grade Learning',
    description: 'Professional, structured curriculum designed for business excellence',
    icon: Zap
  },
  {
    title: 'Direct Expert Access',
    description: 'Immediate consultation with industry-leading instructors',
    icon: MessageCircle
  },
  {
    title: 'Strategic Mentorship',
    description: 'One-on-one guidance from successful export professionals',
    icon: Users
  },
  {
    title: 'Premium Resources',
    description: 'Exclusive access to market reports and trade documentation',
    icon: Gift
  },
  {
    title: 'Adaptive Learning Platform',
    description: 'Enterprise-focused platform optimized for professional development',
    icon: BookOpen
  },
  {
    title: 'Industry Veterans',
    description: 'Learn from experts with proven track records in global trade',
    icon: GraduationCap
  }
];

const programs = [
  {
    title: 'Foodstuffs Export',
    description: 'Master international food trade regulations and logistics'
  },
  {
    title: 'Mini Export',
    description: 'Strategic approach to small-scale international trade'
  },
  {
    title: 'Selected Commodities',
    description: 'Specialized training in high-demand export products'
  },
  {
    title: 'INCOTERMS',
    description: 'Comprehensive guide to international commercial terms'
  },
  {
    title: 'Export Documentation',
    description: 'Professional handling of international trade paperwork'
  },
  {
    title: 'Trade Finance',
    description: 'Strategic financial planning for export operations'
  }
];

const backgroundImages = [
  'https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1609203599090-1bea00d207b9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
];

const WhatsAppClasses = () => {
  return (
    <section id="whatsapp-class" className="relative py-24 mb-24">
      {/* Background Images Grid */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px'
        }}
      >
        {backgroundImages.map((image, index) => (
          <div key={index} className="relative w-full h-3/4">
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white/95 p-8 rounded-2xl shadow-xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Globe className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">WhatsApp Learning Solution</span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional WhatsApp <br />Export Training
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access world-class export training through our innovative enterprise WhatsApp learning platform
          </p>

          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-1 mb-8">
            <span className="bg-blue-900/30 text-white px-4 py-2 rounded-lg">
              Premium Training
            </span>
            <span className="text-white font-bold pr-4">
              Starting from ₦20,000
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-10 mb-16 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Professional Programs
            </h3>
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">{program.title}</h4>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white/95 p-8 rounded-2xl shadow-xl">
          <a
            href="https://wa.me/2348012345678?text=I'm%20interested%20in%20joining%20the%20WhatsApp%20Export%20Class"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Begin Your Export Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="mt-6 text-gray-600">
            Join leading exporters and trade professionals in our WhatsApp training program
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppClasses;