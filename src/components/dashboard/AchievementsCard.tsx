import React from 'react';
import { Award, Clock, GraduationCap, TrendingUp } from 'lucide-react';

interface Props {
  achievements: {
    certificates: number;
    completedCourses: number;
    totalHours: number;
    averageGrade: number;
  };
}

const AchievementsCard: React.FC<Props> = ({ achievements }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Achievements</h3>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{achievements.certificates}</div>
          <div className="text-sm text-gray-600">Certificates Earned</div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
            <GraduationCap className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{achievements.completedCourses}</div>
          <div className="text-sm text-gray-600">Completed Courses</div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{achievements.totalHours}</div>
          <div className="text-sm text-gray-600">Total Hours</div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
            <TrendingUp className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{achievements.averageGrade}%</div>
          <div className="text-sm text-gray-600">Average Grade</div>
        </div>
      </div>
    </div>
  );
}

export default AchievementsCard;