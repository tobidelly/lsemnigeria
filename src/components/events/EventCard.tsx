import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Event } from '../../types/events';

interface EventCardProps {
  event: Event;
  onRegister: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/event/${event.id}`}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link 
          to={`/event/${event.id}`}
          className="block text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mb-2"
        >
          {event.title}
        </Link>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            {event.date}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            {event.location}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-semibold">{event.price}</span>
          <button
            onClick={() => onRegister(event)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Register Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;