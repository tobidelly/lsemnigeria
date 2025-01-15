import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Rocket, Users, Trophy, ArrowRight, CheckCircle, Globe, Shield } from 'lucide-react';

export const scaleUpPrograms = [
  {
    id: 'foodstuff-export',
    title: 'Foodstuff Export Masterclass',
    description: 'Master the intricacies of international foodstuff export with hands-on expertise.',
    icon: Trophy,
    benefits: [
      'Comprehensive food safety regulations',
      'International market access strategies',
      'Supply chain optimization',
      'Quality control standards'
    ],
    bgImage: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fullDescription: 'Comprehensive training on international food export regulations and practices.',
    date: 'April 15-20, 2024',
    time: '9:00 AM - 2:00 PM (WAT)',
    price: '₦250,000',
    location: 'LSEM Training Center, Lagos',
    speakers: [
      {
        name: 'Dr. Samuel Johnson',
        role: 'Lead Instructor',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        bio: '15 years experience in food export consulting'
      }
    ],
    materials: [
      'Comprehensive course manual',
      'Export documentation templates',
      'Market analysis tools',
      'Certificate of completion'
    ]
  },
  {
    id: 'zero2export',
    title: 'Zero2Export',
    description: 'Transform from beginner to professional exporter with our structured program.',
    icon: Rocket,
    benefits: [
      'Step-by-step export process',
      'Documentation mastery',
      'Market entry strategies',
      'Risk management'
    ],
    bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fullDescription: 'Comprehensive beginner to advanced export training program.',
    date: 'May 1-30, 2024',
    time: '10:00 AM - 3:00 PM (WAT)',
    price: '₦350,000',
    location: 'Virtual + Physical Sessions',
    speakers: [
      {
        name: 'Mrs. Chioma Okonkwo',
        role: 'Program Director',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        bio: 'Expert in export business development'
      }
    ],
    materials: [
      'Digital learning resources',
      'Export business toolkit',
      'One-on-one mentoring sessions',
      'Lifetime community access'
    ]
  },
  {
    id: 'export-mentorship',
    title: 'Export Mentorship Program',
    description: 'Get personalized guidance from industry experts to accelerate your export business.',
    icon: Star,
    benefits: [
      'One-on-one mentoring sessions',
      'Network building opportunities',
      'Real case studies analysis',
      'Business growth strategies'
    ],
    bgImage: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fullDescription: 'Personalized mentorship program with industry leaders.',
    date: 'Ongoing',
    time: 'Flexible Schedule',
    price: '₦500,000',
    location: 'Virtual + One-on-One Sessions',
    speakers: [
      {
        name: 'Mr. Michael Adebayo',
        role: 'Lead Mentor',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        bio: 'Successful exporter with global network'
      }
    ],
    materials: [
      'Personal development plan',
      'Business strategy toolkit',
      'Network access',
      'Monthly progress tracking'
    ]
  }
];

const ScaleUpPrograms = () => {
  const navigate = useNavigate();

  const handleLearnMore = (programId: string) => {
    navigate(`/program/${programId}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Scale-Up Programs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Premium programs designed for ambitious professionals and business leaders
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {scaleUpPrograms.map((program) => (
            <div
              key={program.title}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <div className="absolute inset-0">
                  <img
                    src={program.bgImage}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30" />
                </div>
                <div 
                  className="absolute bottom-0 left-0 right-0 h-24 bg-white"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
                  }}
                />
                <div className="absolute bottom-2 left-6 p-3 bg-blue-600 rounded-xl shadow-lg">
                  <program.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleLearnMore(program.id)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleUpPrograms;