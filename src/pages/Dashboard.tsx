import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import CourseProgressCard from '../components/dashboard/CourseProgressCard';
import PaymentScheduleCard from '../components/dashboard/PaymentScheduleCard';
import AchievementsCard from '../components/dashboard/AchievementsCard';
import RecommendedCourses from '../components/dashboard/RecommendedCourses';
import ContactSupport from '../components/dashboard/ContactSupport';
import LecturerMessage from '../components/dashboard/LecturerMessage';
import type { StudentDashboardData } from '../types/dashboard';

const Dashboard = () => {
  const { user } = useAuth();

  // This would normally come from an API
  const dashboardData: StudentDashboardData = {
    enrolledCourses: [
      {
        courseId: '1',
        courseName: 'Basic Certificate in Export Management',
        progress: 65,
        totalClasses: 24,
        completedClasses: 16,
        nextClass: {
          date: 'March 20, 2024',
          topic: 'International Trade Documentation',
          time: '10:00 AM'
        },
        grades: {
          assignments: 85,
          quizzes: 78,
          projects: 90,
          overall: 84
        }
      }
    ],
    payments: [
      {
        courseId: '1',
        courseName: 'Basic Certificate in Export Management',
        totalAmount: 150000,
        amountPaid: 100000,
        nextPayment: {
          amount: 25000,
          dueDate: 'March 25, 2024'
        },
        installments: [
          {
            amount: 50000,
            dueDate: 'January 25, 2024',
            status: 'paid'
          },
          {
            amount: 50000,
            dueDate: 'February 25, 2024',
            status: 'paid'
          },
          {
            amount: 25000,
            dueDate: 'March 25, 2024',
            status: 'pending'
          },
          {
            amount: 25000,
            dueDate: 'April 25, 2024',
            status: 'pending'
          }
        ]
      }
    ],
    recommendedCourses: [
      {
        id: '2',
        title: 'Advanced Certificate in Export Management',
        description: 'Take your export knowledge to the next level',
        price: '₦250,000',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        reason: 'Based on your completion of Basic Certificate'
      },
      {
        id: '3',
        title: 'International Trade Documentation',
        description: 'Master the paperwork of international trade',
        price: '₦120,000',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        reason: 'Complements your current course'
      }
    ],
    achievements: {
      certificates: 1,
      completedCourses: 2,
      totalHours: 48,
      averageGrade: 84
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600">Track your learning progress and manage your courses.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {dashboardData.enrolledCourses.map(course => (
                <CourseProgressCard key={course.courseId} course={course} />
              ))}
            </div>
          </div>
          <div>
            <AchievementsCard achievements={dashboardData.achievements} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {dashboardData.payments.map(payment => (
              <PaymentScheduleCard key={payment.courseId} payment={payment} />
            ))}
          </div>
          <div>
            <RecommendedCourses courses={dashboardData.recommendedCourses} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactSupport />
          <LecturerMessage />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;