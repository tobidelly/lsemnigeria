import React from 'react';

const History = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
          <p className="mt-4 text-xl text-gray-600">
            A legacy of excellence in export management education
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {[
              {
                year: '2010',
                title: 'Foundation',
                description: 'LSEM was established with a vision to transform export education in Nigeria.'
              },
              {
                year: '2015',
                title: 'Expansion',
                description: 'Launched advanced certification programs and executive courses.'
              },
              {
                year: '2018',
                title: 'Recognition',
                description: 'Received national accreditation and international partnerships.'
              },
              {
                year: '2020',
                title: 'Innovation',
                description: 'Introduced digital learning platforms and global reach programs.'
              },
              {
                year: '2024',
                title: 'Leadership',
                description: "Established as West Africa's premier export management institution."
              }
            ].map((event, index) => (
              <div key={event.year} className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
                      <div className="h-3 w-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className={`ml-6 bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;