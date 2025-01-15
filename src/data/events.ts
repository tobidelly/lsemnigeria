import { Event } from '../types/events';

export const events: Event[] = [
  {
    id: 'export-documentation-workshop',
    title: 'Export Documentation Workshop',
    date: 'March 25, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'LSEM Main Campus, Lagos',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Master the essentials of export documentation in this comprehensive workshop.',
    detailedDescription: "Join us for an intensive workshop on export documentation where you'll learn how to properly prepare and manage international trade documents. This hands-on session will cover all essential paperwork required for successful export operations, including commercial invoices, bills of lading, certificates of origin, and more.",
    speaker: {
      name: 'Dr. Samuel Johnson',
      title: 'Head of Export Documentation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Dr. Johnson has over 15 years of experience in international trade documentation and has trained over 1,000 export professionals.'
    },
    agenda: [
      { time: '10:00 AM', activity: 'Introduction to Export Documentation' },
      { time: '11:00 AM', activity: 'Commercial Documents Workshop' },
      { time: '12:00 PM', activity: 'Networking Break' },
      { time: '12:30 PM', activity: 'Transport Documents Session' },
      { time: '1:30 PM', activity: 'Q&A and Discussion' }
    ],
    price: '₦25,000',
    capacity: 50,
    registeredAttendees: 35
  },
  {
    id: 'trade-finance-seminar',
    title: 'International Trade Finance Seminar',
    date: 'April 5, 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Virtual Event',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Learn about financial aspects of international trade in this comprehensive seminar.',
    detailedDescription: 'This virtual seminar focuses on the financial aspects of international trade, covering topics such as trade financing methods, risk management, letters of credit, and international payments. Perfect for finance professionals and export managers looking to enhance their knowledge of trade finance.',
    speaker: {
      name: 'Prof. Chioma Okonkwo',
      title: 'International Trade Finance Expert',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Prof. Okonkwo is a renowned expert in international trade finance with extensive experience in banking and export financing.'
    },
    agenda: [
      { time: '9:00 AM', activity: 'Introduction to Trade Finance' },
      { time: '10:30 AM', activity: 'Letters of Credit Workshop' },
      { time: '12:00 PM', activity: 'Break' },
      { time: '1:00 PM', activity: 'Risk Management Session' },
      { time: '2:30 PM', activity: 'Case Studies' },
      { time: '3:30 PM', activity: 'Q&A Session' }
    ],
    price: '₦15,000',
    capacity: 100,
    registeredAttendees: 65
  },
  {
    id: 'export-business-networking',
    title: 'Export Business Networking',
    date: 'April 15, 2024',
    time: '3:00 PM - 6:00 PM',
    location: 'Dominion Plaza, Lekki',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Connect with fellow export professionals and industry leaders.',
    detailedDescription: 'Join us for an afternoon of networking with leading export professionals, industry experts, and potential business partners. This event provides a unique opportunity to build valuable connections, share experiences, and explore collaboration opportunities in the export sector.',
    speaker: {
      name: 'Mr. Michael Adebayo',
      title: 'Director of Business Development',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Mr. Adebayo has successfully facilitated numerous business partnerships in the export sector and brings valuable insights to networking events.'
    },
    agenda: [
      { time: '3:00 PM', activity: 'Welcome and Introduction' },
      { time: '3:30 PM', activity: 'Speed Networking Session' },
      { time: '4:30 PM', activity: 'Expert Panel Discussion' },
      { time: '5:15 PM', activity: 'Open Networking' },
      { time: '5:45 PM', activity: 'Closing Remarks' }
    ],
    price: '₦10,000',
    capacity: 75,
    registeredAttendees: 45
  }
];