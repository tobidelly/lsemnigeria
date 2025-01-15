export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
    detailedDescription: string;
    speaker: {
      name: string;
      title: string;
      image: string;
      bio: string;
    };
    agenda: {
      time: string;
      activity: string;
    }[];
    price: string;
    capacity: number;
    registeredAttendees: number;
  }