import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
              <p className="mt-1 text-gray-600">
                Level 5, Suite 1, Dominion Plaza<br />
                Lekki, Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
              <p className="mt-1 text-gray-600">
                <a href="tel:+2348012345678" className="hover:text-blue-600">
                  +234 801 234 5678
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
              <p className="mt-1 text-gray-600">
                <a href="mailto:info@lsem.edu.ng" className="hover:text-blue-600">
                  info@lsem.edu.ng
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
              <div className="mt-1 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Need Immediate Assistance?
        </h3>
        <p className="text-gray-600 mb-4">
          Our customer service team is available during office hours to assist you with any inquiries.
        </p>
        <a
          href="https://wa.me/2348012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;