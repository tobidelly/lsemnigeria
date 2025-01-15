import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const ContactSupport = () => {
  const [issue, setIssue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle support ticket submission
    console.log('Support ticket submitted:', { category, issue });
    setIssue('');
    setCategory('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">Contact Support</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Issue Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="technical">Technical Issue</option>
            <option value="payment">Payment Issue</option>
            <option value="course">Course Related</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Describe Your Issue
          </label>
          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
            rows={4}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Please provide details about your issue..."
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Ticket
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactSupport;