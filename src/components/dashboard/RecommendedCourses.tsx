import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  courses: {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    reason: string;
  }[];
}

const RecommendedCourses: React.FC<Props> = ({ courses }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended Courses</h3>
      
      <div className="grid gap-6">
        {courses.map((course) => (
          <div key={course.id} className="flex gap-4">
            <img
              src={course.image}
              alt={course.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{course.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{course.description}</p>
              <p className="text-sm text-blue-600 mb-2">{course.reason}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{course.price}</span>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedCourses;