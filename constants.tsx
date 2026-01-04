
import { Destination, Tour, Testimonial } from './types';

export const POPULAR_DESTINATIONS: Destination[] = [
  { id: '1', name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800', tourCount: 12 },
  { id: '2', name: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', tourCount: 25 },
  { id: '3', name: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', tourCount: 18 },
  { id: '4', name: 'Swiss Alps', image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800', tourCount: 15 },
  { id: '5', name: 'Cappadocia, Turkey', image: 'https://images.unsplash.com/photo-1520440229-6469a149ac59?auto=format&fit=crop&q=80&w=800', tourCount: 10 },
  { id: '6', name: 'Amalfi Coast, Italy', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800', tourCount: 22 },
];

export const FEATURED_TOURS: Tour[] = [
  {
    id: '101',
    title: 'Historic Athens Walking Tour',
    image: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cc?auto=format&fit=crop&q=80&w=800',
    price: 49,
    duration: '4 Hours',
    rating: 4.8,
    reviews: 124,
    location: 'Athens, Greece'
  },
  {
    id: '102',
    title: 'Bali Jungle Safari Adventure',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
    price: 85,
    duration: 'Full Day',
    rating: 4.9,
    reviews: 350,
    location: 'Ubud, Bali'
  },
  {
    id: '103',
    title: 'Swiss Lake & Mountain Tour',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    price: 120,
    duration: '2 Days',
    rating: 4.7,
    reviews: 95,
    location: 'Interlaken, Switzerland'
  },
  {
    id: '104',
    title: 'Tokyo Night Market Foodie Tour',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
    price: 65,
    duration: '3 Hours',
    rating: 5.0,
    reviews: 512,
    location: 'Shinjuku, Tokyo'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    content: 'Sage Tour made booking my honeymoon so easy. The guides were professional and the hidden spots they showed us were breathtaking!',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Photography Enthusiast',
    content: 'The Bali Jungle Safari was perfectly timed for golden hour shots. Our guide knew all the best vantage points.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 't3',
    name: 'Emma Williams',
    role: 'Family Vacationer',
    content: 'Reliable, safe, and great value for money. We traveled as a family of five and everything went smoothly from start to finish.',
    avatar: 'https://i.pravatar.cc/150?u=emma'
  }
];
