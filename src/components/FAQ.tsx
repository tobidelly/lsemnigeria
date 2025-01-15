import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What qualifications do I need to start?',
    answer:
      'No prior qualifications are required for our basic certificate programs. However, for advanced and professional certificates, a basic understanding of business or related field is recommended.',
  },
  {
    question: 'How long are the courses?',
    answer:
      'Course duration varies: Basic Certificate (3 months), Advanced Certificate (6 months), and Professional Certificate (12 months). Executive programs have flexible durations.',
  },
  {
    question: 'Are the certificates internationally recognized?',
    answer:
      'Yes, our certificates are recognized by international trade organizations and meet global standards for export management education.',
  },
  {
    question: 'Can I study while working?',
    answer:
      'Yes, our programs are designed to accommodate working professionals with flexible schedules and online learning options.',
  },
  {
    question: 'What payment options are available?',
    answer:
      'We offer various payment plans including full payment, installment options, and special corporate rates. Contact our admissions team for details.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get answers to common questions about our programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-600" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-600" />
                )}
              </button>
              <div
                className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;