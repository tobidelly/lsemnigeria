export interface Course {
    id: string;
    title: string;
    category: string;
    description: string;
    duration: string;
    students: string;
    level: string;
    rating: number;
    price: string;
    image: string;
  }
  
  export const courses = {
    certificate: [
      {
        id: '1',
        title: 'Basic Certificate in Export Management',
        category: 'Certificate',
        description: 'Master the fundamentals of export management and international trade operations.',
        duration: '3 months',
        students: '500+',
        level: 'Beginner',
        rating: 4.8,
        price: '₦150,000',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: '2',
        title: 'Certificate in International Trade Documentation',
        category: 'Certificate',
        description: 'Learn essential documentation processes for international trade.',
        duration: '2 months',
        students: '300+',
        level: 'Beginner',
        rating: 4.7,
        price: '₦120,000',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      }
    ],
    diploma: [
      {
        id: '3',
        title: 'Diploma in Export Management',
        category: 'Diploma',
        description: 'Comprehensive program covering all aspects of export management.',
        duration: '6 months',
        students: '400+',
        level: 'Intermediate',
        rating: 4.9,
        price: '₦250,000',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: '4',
        title: 'Diploma in International Trade Finance',
        category: 'Diploma',
        description: 'Master financial aspects of international trade and export operations.',
        duration: '6 months',
        students: '350+',
        level: 'Intermediate',
        rating: 4.8,
        price: '₦280,000',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      }
    ],
    'advanced-diploma': [
      {
        id: '5',
        title: 'Advanced Diploma in Export Management',
        category: 'Advanced Diploma',
        description: 'Advanced strategies and techniques in international trade.',
        duration: '9 months',
        students: '200+',
        level: 'Advanced',
        rating: 4.9,
        price: '₦350,000',
        image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: '6',
        title: 'Advanced Diploma in Global Supply Chain Management',
        category: 'Advanced Diploma',
        description: 'Master global supply chain operations and logistics.',
        duration: '9 months',
        students: '180+',
        level: 'Advanced',
        rating: 4.8,
        price: '₦380,000',
        image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      }
    ],
    executive: [
      {
        id: '7',
        title: 'Executive Program in Export Leadership',
        category: 'Executive',
        description: 'Strategic leadership program for senior export professionals.',
        duration: '3 months',
        students: '100+',
        level: 'Executive',
        rating: 5.0,
        price: '₦500,000',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        id: '8',
        title: 'Executive Master Class in International Trade',
        category: 'Executive',
        description: 'Intensive program for experienced trade professionals.',
        duration: '4 months',
        students: '80+',
        level: 'Executive',
        rating: 4.9,
        price: '₦600,000',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      }
    ]
  };