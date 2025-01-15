import React, { useState } from 'react';
import { Mail, Send, User } from 'lucide-react';

const LecturerMessage = () => {
  const [message, setMessage] = useState('');
  const [lecturer, setLecturer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message sent:', { lecturer, message });
    setMessage('');
    setLecturer('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Mail className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">Message Lecturer</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Lecturer
          </label>
          <select
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
            required
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Choose a lecturer</option>
            <option value="dr-johnson">Dr. Samuel Johnson</option>
            <option value="prof-okonkwo">Prof. Chioma Okonkwo</option>
            <option value="mr-adebayo">Mr. Michael Adebayo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default LecturerMessage;