import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import { events } from '../data/events';
import { Event } from '../types/events';
import EventRegistrationModal from '../components/events/EventRegistrationModal';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === id);
    setEvent(foundEvent || null);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
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
                Back to Events
              </Link>
              <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{event.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  {event.location}
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Register Now - {event.price}
              </button>
            </div>
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Detailed Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-600 mb-6">{event.detailedDescription}</p>
              
              {/* Agenda */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Agenda</h3>
              <div className="space-y-4">
                {event.agenda.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{item.time}</span>
                      <p className="text-gray-600">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Speaker Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Speaker</h3>
              <div className="flex items-center mb-4">
                <img
                  src={event.speaker.image}
                  alt={event.speaker.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{event.speaker.name}</h4>
                  <p className="text-gray-600">{event.speaker.title}</p>
                </div>
              </div>
              <p className="text-gray-600">{event.speaker.bio}</p>
            </div>

            {/* Event Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-medium">{event.capacity} attendees</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Registered</span>
                  <span className="font-medium">{event.registeredAttendees} attendees</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Available Spots</span>
                  <span className="font-medium">{event.capacity - event.registeredAttendees} spots</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Registration Fee</span>
                  <span className="font-bold text-blue-600">{event.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={event}
      />
    </div>
  );
};

export default EventDetail;