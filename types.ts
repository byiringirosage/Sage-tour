
export interface DayPlan {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Tour {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  location: string;
  itinerary: DayPlan[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  tourCount: number;
  lat: number;
  lng: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
