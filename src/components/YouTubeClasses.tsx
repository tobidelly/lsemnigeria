import React from 'react';
import { Play, Clock, BookOpen, ArrowRight } from 'lucide-react';

const videos = [
  {
    title: 'Understanding Export Documentation',
    duration: '45 minutes',
    views: '2.5K views',
    thumbnail: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'International Market Research',
    duration: '38 minutes',
    views: '1.8K views',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    title: 'Export Finance Fundamentals',
    duration: '52 minutes',
    views: '3.1K views',
    thumbnail: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const YouTubeClasses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Free YouTube Classes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Learn from our expert instructors through our educational video content
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {video.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {video.views}
                  </div>
                </div>
                <a
                  href="#watch"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Watch Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://youtube.com/tobidelly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Visit Our YouTube Channel
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeClasses;