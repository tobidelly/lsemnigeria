export interface CourseProgress {
    courseId: string;
    courseName: string;
    progress: number;
    totalClasses: number;
    completedClasses: number;
    nextClass: {
      date: string;
      topic: string;
      time: string;
    };
    grades: {
      assignments: number;
      quizzes: number;
      projects: number;
      overall: number;
    };
  }
  
  export interface PaymentSchedule {
    courseId: string;
    courseName: string;
    totalAmount: number;
    amountPaid: number;
    nextPayment: {
      amount: number;
      dueDate: string;
    };
    installments: {
      amount: number;
      dueDate: string;
      status: 'paid' | 'pending' | 'overdue';
    }[];
  }
  
  export interface StudentDashboardData {
    enrolledCourses: CourseProgress[];
    payments: PaymentSchedule[];
    recommendedCourses: {
      id: string;
      title: string;
      description: string;
      price: string;
      image: string;
      reason: string;
    }[];
    achievements: {
      certificates: number;
      completedCourses: number;
      totalHours: number;
      averageGrade: number;
    };
  }