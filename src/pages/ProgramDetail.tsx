import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { scaleUpPrograms } from '../components/ExecutiveClasses';
import EventRegistrationModal from '../components/events/EventRegistrationModal';

const ProgramDetail = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(scaleUpPrograms.find(p => p.id === id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Program not found</h1>
            <Link to="/" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Programs
              </Link>
              <h1 className="text-4xl font-bold text-white mb-4">{program.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{program.fullDescription}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  {program.date}
                </div>
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  {program.time}
                </div>
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  {program.location}
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Register Now - {program.price}
              </button>
            </div>
            <div className="relative">
              <img
                src={program.bgImage}
                alt={program.title}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Program Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Benefits</h2>
              <div className="grid gap-4">
                {program.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Materials</h2>
              <div className="grid gap-4">
                {program.materials.map((material, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{material}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Speakers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Speakers</h3>
              {program.speakers.map((speaker, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{speaker.name}</h4>
                    <p className="text-gray-600">{speaker.role}</p>
                    <p className="text-sm text-gray-500 mt-1">{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Program Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{program.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{program.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{program.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Investment</span>
                  <span className="font-bold text-blue-600">{program.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={{
          ...program,
          id: program.id,
          title: program.title,
          description: program.description,
          price: program.price,
          capacity: 50,
          registeredAttendees: 0,
          agenda: [],
        }}
      />
    </div>
  );
};

export default ProgramDetail;