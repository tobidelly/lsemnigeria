import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, GraduationCap, ArrowRight, Clock, Users, Star } from 'lucide-react';
import EnrollmentModal from './enrollment/EnrollmentModal';

const courses = [
  {
    id: '1',
    title: 'Basic Certificate in Export Management',
    description: 'Master the fundamentals of export management and international trade operations.',
    icon: BookOpen,
    duration: '3 months',
    students: '500+',
    level: 'Beginner',
    color: 'blue',
    price: '₦150,000',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '2',
    title: 'Advanced Certificate in Export Management',
    description: 'Dive deep into complex export strategies and global market analysis.',
    icon: Award,
    duration: '6 months',
    students: '300+',
    level: 'Intermediate',
    color: 'indigo',
    price: '₦250,000',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '3',
    title: 'Professional Certificate in Export Management',
    description: 'Become an expert in international trade with comprehensive training.',
    icon: GraduationCap,
    duration: '12 months',
    students: '200+',
    level: 'Advanced',
    color: 'purple',
    price: '₦350,000',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
];

const FeaturedCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<{
    id: string;
    title: string;
    price: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = (course: typeof selectedCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section id="featured-courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transform your career with our internationally recognized export management programs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className={`p-2 rounded-lg text-white bg-${course.color}-600`}>
                    <course.icon className="h-5 w-5" />
                  </div>
                  <span className="text-white font-medium">{course.level}</span>
                </div>
              </div>

              <div className="p-6">
                <Link 
                  to={`/course/${course.id}`}
                  className="block text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3"
                >
                  {course.title}
                </Link>
                
                <p className="text-gray-500">
                  {course.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    {course.students} students
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{course.price}</span>
                  <button
                    onClick={() => handleEnrollClick({
                      id: course.id,
                      title: course.title,
                      price: course.price
                    })}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {selectedCourse && (
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseId={selectedCourse.id}
          courseTitle={selectedCourse.title}
          coursePrice={selectedCourse.price}
        />
      )}
    </section>
  );
};

export default FeaturedCourses;