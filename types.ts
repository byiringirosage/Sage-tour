
export interface DayPlan {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: string[]; // e.g., ["Breakfast", "Lunch", "Dinner"]
  accommodation?: string;
}

export interface Tour {
  id: string;
  title: string;
  image: string;
  gallery?: string[];
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  location: string;
  itinerary: DayPlan[];
  included?: string[];
  excluded?: string[];
  destinationIds?: string[];
  otherNotes?: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  gallery?: string[];
  tourCount: number;
  lat: number;
  lng: number;
  shortDescription: string;
  description: string;
  highlights?: string[];
  price?: number; // Starting price for the region
  relatedTourIds?: string[];
  climate?: string;
  bestTimeToVisit?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export type BookingStatus = 'Pending' | 'Confirmed' | 'Rejected';

export interface Booking {
  id: string;
  customerName: string;
  tourTitle: string;
  date: string;
  travelers: number;
  totalPrice: number;
  status: BookingStatus;
  requestedAt: string;
}

export interface GuideApplication {
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  experience: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedAt: string;
}
