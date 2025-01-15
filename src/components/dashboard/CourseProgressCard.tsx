import React from 'react';
import { Book, Clock, Calendar } from 'lucide-react';
import { CourseProgress } from '../../types/dashboard';

interface Props {
  course: CourseProgress;
}

const CourseProgressCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{course.courseName}</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Overall Progress</span>
          <span className="text-blue-600 font-semibold">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 rounded-full h-2"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <Book className="h-5 w-5 text-blue-600 mr-2" />
          <div>
            <div className="text-sm text-gray-600">Classes Completed</div>
            <div className="font-semibold">{course.completedClasses}/{course.totalClasses}</div>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-blue-600 mr-2" />
          <div>
            <div className="text-sm text-gray-600">Next Class</div>
            <div className="font-semibold">{course.nextClass.time}</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-start">
          <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
          <div>
            <div className="text-sm text-gray-600">Next Class Topic</div>
            <div className="font-semibold">{course.nextClass.topic}</div>
            <div className="text-sm text-gray-500">{course.nextClass.date}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Overall Grade</div>
          <div className="text-lg font-bold text-blue-600">{course.grades.overall}%</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Remaining Classes</div>
          <div className="text-lg font-bold text-blue-600">
            {course.totalClasses - course.completedClasses}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseProgressCard;