import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const MailingList = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Subscribe to our newsletter for the latest updates on courses, events, and industry insights
          </p>
          <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                className="block w-full rounded-l-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-r-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailingList;