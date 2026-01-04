
export interface Destination {
  id: string;
  name: string;
  image: string;
  tourCount: number;
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
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
