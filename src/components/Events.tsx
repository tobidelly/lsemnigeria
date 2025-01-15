import React, { useState } from 'react';
import EventCard from './events/EventCard';
import EventRegistrationModal from './events/EventRegistrationModal';
import { events } from '../data/events';
import type { Event } from '../types/events';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our educational events and networking opportunities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={handleRegisterClick}
            />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventRegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          event={selectedEvent}
        />
      )}
    </section>
  );
};

export default Events;