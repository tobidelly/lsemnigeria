import React from 'react';
import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Dr. Samuel Johnson',
    position: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Over 20 years of experience in international trade and education.'
  },
  {
    name: 'Prof. Chioma Okonkwo',
    position: 'Academic Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in export management with numerous publications.'
  },
  {
    name: 'Mr. Michael Adebayo',
    position: 'Head of Corporate Relations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in building strategic partnerships.'
  }
];

const Leadership = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet the experts leading our institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-blue-600 mb-4">{leader.position}</p>
                <p className="text-gray-600 mb-4">{leader.bio}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;