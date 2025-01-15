import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, GraduationCap, BookOpen, Target, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { courses, Course } from '../data/courses';
import EnrollmentModal from '../components/enrollment/EnrollmentModal';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Find course from all categories
    const allCourses = Object.values(courses).flat();
    const foundCourse = allCourses.find(c => c.id === id);
    setCourse(foundCourse || null);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
            <Link to="/courses" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const syllabus = [
    'Introduction to Export Management',
    'International Trade Documentation',
    'Export Finance and Payment Methods',
    'Global Supply Chain Management',
    'Trade Compliance and Regulations',
    'Market Entry Strategies',
    'Risk Management in International Trade',
    'Export Marketing and Negotiations'
  ];

  const outcomes = [
    'Comprehensive understanding of export procedures',
    'Ability to handle international trade documentation',
    'Knowledge of global trade regulations',
    'Skills in export market analysis',
    'Proficiency in trade finance management',
    'Expertise in supply chain optimization'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/courses" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Courses
              </Link>
              <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{course.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Users className="h-5 w-5 mr-2" />
                  {course.students} students
                </div>
                <div className="flex items-center bg-blue-500/30 rounded-full px-4 py-2 text-white">
                  <Star className="h-5 w-5 mr-2" />
                  {course.rating} rating
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Enroll Now for {course.price}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Syllabus */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Course Syllabus</h2>
              </div>
              <div className="space-y-4">
                {syllabus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Learning Outcomes</h2>
              </div>
              <div className="grid gap-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Course Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{course.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-bold text-blue-600">{course.price}</span>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Have questions about this course? Contact our academic advisors for guidance.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseId={course.id}
        courseTitle={course.title}
        coursePrice={course.price}
      />
    </div>
  );
};

export default CourseDetail;