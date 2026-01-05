
import { Destination, Tour, Testimonial, Booking, GuideApplication } from './types';

export const POPULAR_DESTINATIONS: Destination[] = [
  { 
    id: '1', 
    name: 'Volcanoes National Park', 
    image: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&q=80&w=800', 
    tourCount: 15, 
    lat: -1.4741, 
    lng: 29.4912,
    /* Added missing shortDescription for Volcanoes National Park */
    shortDescription: 'Home to endangered mountain gorillas and Virunga volcanoes.',
    description: 'Home to the endangered mountain gorillas and five of the eight volcanoes in the Virunga Mountains. This park is the heart of Rwanda\'s wildlife conservation efforts and offers the most intimate primate encounters on Earth.'
  },
  { 
    id: '2', 
    name: 'Nyungwe National Park', 
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800', 
    tourCount: 12, 
    lat: -2.4841, 
    lng: 29.2312,
    /* Added missing shortDescription for Nyungwe National Park */
    shortDescription: 'Ancient rainforest with rich biodiversity and chimpanzees.',
    description: 'One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. The mountainous region is teaming with wildlife, including a small population of chimpanzees as well as 12 other species of primate.'
  },
  { 
    id: '3', 
    name: 'Akagera National Park', 
    image: 'https://images.unsplash.com/photo-1516422317184-33a863731b78?auto=format&fit=crop&q=80&w=800', 
    tourCount: 8, 
    lat: -1.8841, 
    lng: 30.7012,
    /* Added missing shortDescription for Akagera National Park */
    shortDescription: 'Safari destination home to the Big Five.',
    description: 'A stunning safari destination in eastern Rwanda, Akagera is home to the Big Five (lion, leopard, elephant, rhino, and buffalo). Its landscape of savannah, mountains, and wetlands is a dramatic contrast to the rest of the country.'
  },
  { 
    id: '4', 
    name: 'Lake Kivu', 
    image: 'https://images.unsplash.com/photo-1582268305018-c2167d4fdf37?auto=format&fit=crop&q=80&w=800', 
    tourCount: 10, 
    lat: -1.6841, 
    lng: 29.3512,
    /* Added missing shortDescription for Lake Kivu */
    shortDescription: 'Stunning inland sea with tranquil shores.',
    description: 'Part of Africa\'s Great Rift Valley, Lake Kivu is a stunning inland sea enclosed by steep, green terraced hills. It offers tranquil shores, emerald islands, and vibrant lakeside towns like Rubavu and Karongi.'
  },
  { 
    id: '5', 
    name: 'Kigali City', 
    image: 'https://images.unsplash.com/photo-1594913785162-e67856710433?auto=format&fit=crop&q=80&w=800', 
    tourCount: 20, 
    lat: -1.9441, 
    lng: 30.0619,
    /* Added missing shortDescription for Kigali City */
    shortDescription: 'Vibrant, clean, and safe capital city of Rwanda.',
    description: 'Clean, safe, and sophisticated, Kigali is the vibrant heart of Rwanda. From its tragic past commemorated at the Genocide Memorial to its promising future seen in the booming tech scene and local art galleries.'
  },
  { 
    id: '6', 
    name: 'Musanze Caves', 
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', 
    tourCount: 5, 
    lat: -1.5041, 
    lng: 29.6312,
    /* Added missing shortDescription for Musanze Caves */
    shortDescription: 'Underground volcanic caves with deep geological history.',
    description: 'Formed from centuries of volcanic activity, these caves offer a unique underground perspective of Rwanda. With professional guides and paved paths, it\'s an accessible adventure into the geological history of the region.'
  },
];

export const FEATURED_TOURS: Tour[] = [
  {
    id: '101',
    title: 'Volcanoes Majesty: 3-Day Gorilla Quest',
    image: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&q=80&w=800',
    price: 1850,
    duration: '3 Days',
    rating: 5.0,
    reviews: 428,
    location: 'Musanze, Rwanda',
    itinerary: [
      {
        day: 1,
        title: 'Kigali Arrival & Scenic Transfer',
        description: 'Start your journey with a pickup in Kigali and a scenic 2.5-hour drive to the base of the Virunga Mountains.',
        activities: ['Kigali City Tour', 'Genocide Memorial Visit', 'Scenic drive to Musanze', 'Evening lodge relaxation']
      },
      {
        day: 2,
        title: 'The Great Gorilla Trek',
        description: 'The highlight of your trip. Spend an hour in the presence of the magnificent mountain gorillas.',
        activities: ['Morning briefing at Park HQ', 'Expert-led Gorilla Trekking', '1-hour observation session', 'Late afternoon relaxation']
      },
      {
        day: 3,
        title: 'Cultural Heritage & Departure',
        description: 'Experience the local Rwandan culture before heading back to the capital.',
        activities: ['Iby’Iwacu Cultural Village Tour', 'Traditional dance performance', 'Craft market visit', 'Transfer to Kigali Airport']
      }
    ]
  },
  {
    id: '102',
    title: 'Nyungwe Secrets: 3-Day Primate Odyssey',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800',
    price: 650,
    duration: '3 Days',
    rating: 4.9,
    reviews: 156,
    location: 'Nyungwe, Rwanda',
    itinerary: [
      {
        day: 1,
        title: 'Tea Plantations & Forest Edge',
        description: 'Tea plantations and witnessing the emerald tea estates bordering the rainforest.',
        activities: ['Transfer to Nyungwe', 'Tea Plantation experience', 'Canopy walk briefing', 'Nocturnal forest walk (optional)']
      },
      {
        day: 2,
        title: 'Chimpanzee Tracking & Canopy Skywalk',
        description: 'A day of high adventure, from the forest floor to the treetops.',
        activities: ['Early morning Chimp Tracking', 'Bird watching session', '70m high Canopy Walkway', 'Waterfall hike']
      },
      {
        day: 3,
        title: 'Colobus Monkeys & Return',
        description: 'A final encounter with Rwanda\'s unique primates before heading back.',
        activities: ['Black and White Colobus Monkey tracking', 'Visit to the Environmental Museum', 'Return drive to Kigali']
      }
    ]
  },
  {
    id: '103',
    title: 'Akagera Safari: 2-Day Big Five Expedition',
    image: 'https://images.unsplash.com/photo-1516422317184-33a863731b78?auto=format&fit=crop&q=80&w=800',
    price: 320,
    duration: '2 Days',
    rating: 4.8,
    reviews: 92,
    location: 'Akagera, Rwanda',
    itinerary: [
      {
        day: 1,
        title: 'The Savannah Awakening',
        description: 'Enter Rwanda\'s only savannah park and search for the titans of the wilderness.',
        activities: ['Morning Game Drive', 'Search for Rhinos and Lions', 'Sunset Boat Safari on Lake Ihema', 'Camping under the stars']
      },
      {
        day: 2,
        title: 'Lake Shores & Northern Plains',
        description: 'Explore the wetlands and the vast northern plains where herds gather.',
        activities: ['Early game drive in the North', 'Giraffe and Elephant spotting', 'Visit to Akagera Management HQ', 'Late afternoon return to Kigali']
      }
    ]
  },
  {
    id: '104',
    title: 'Kigali Heartbeat: 2-Day Urban Heritage',
    image: 'https://images.unsplash.com/photo-1594913785162-e67856710433?auto=format&fit=crop&q=80&w=800',
    price: 180,
    duration: '2 Days',
    rating: 4.9,
    reviews: 310,
    location: 'Kigali, Rwanda',
    itinerary: [
      {
        day: 1,
        title: 'History & Transformation',
        description: 'Trace the resilience of Kigali from its darkest days to its modern brilliance.',
        activities: ['Kigali Genocide Memorial', 'Kandt House Museum', 'Mount Kigali Hike', 'Local culinary experience at Nyamirambo']
      },
      {
        day: 2,
        title: 'Art, Innovation & Flavors',
        description: 'Immerse yourself in the creative and modern pulse of the capital.',
        activities: ['Inema Arts Center visit', 'Innovation City Tour', 'Kimironko Market exploration', 'Specialty Coffee Masterclass']
      }
    ]
  }
];

export const GUIDES = [
  { id: 'g1', name: 'Jean-Paul Habimana', specialty: 'Gorilla Conservation', rating: 5.0, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', bio: 'Former park ranger with 20 years experience in the Virunga Mountains.' },
  { id: 'g2', name: 'Angelique Umutoni', specialty: 'Rwandan Culture', rating: 4.9, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', bio: 'Specialist in the history of the King’s Palace and Kigali’s transformation.' },
  { id: 'g3', name: 'Emmanuel Gasana', specialty: 'Birding & Safari', rating: 4.8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', bio: 'Akagera expert known for spotting the elusive Shoebill Stork.' },
  { id: 'g4', name: 'Clarisse Uwera', specialty: 'Hiking & Trails', rating: 4.7, image: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80', bio: 'Avid hiker leading breathtaking treks through Nyungwe Forest.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David Miller',
    role: 'Eco-Traveler',
    content: 'Gorilla trekking was a life-changing experience. Sage Tour Rwanda made every logistical detail seamless and respectful to the animals.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: 't2',
    name: 'Amina Nkusi',
    role: 'Cultural Blogger',
    content: 'The Kigali heritage tour was insightful and moving. The local guide’s knowledge of Rwandan history is truly impressive.',
    avatar: 'https://i.pravatar.cc/150?u=amina'
  },
  {
    id: 't3',
    name: 'Robert Wilson',
    role: 'Wildlife Photographer',
    content: 'Akagera is a hidden gem. Caught amazing shots of lions and rhinos. The guides know exactly where to go for the best light.',
    avatar: 'https://i.pravatar.cc/150?u=robert'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'B-1001',
    customerName: 'Sarah Jenkins',
    tourTitle: 'Volcanoes Majesty: 3-Day Gorilla Quest',
    date: '2024-05-15',
    travelers: 2,
    totalPrice: 3700,
    status: 'Confirmed',
    requestedAt: '2024-03-10'
  },
  {
    id: 'B-1002',
    customerName: 'Michael Chen',
    tourTitle: 'Akagera Safari: 2-Day Big Five Expedition',
    date: '2024-06-02',
    travelers: 4,
    totalPrice: 1152,
    status: 'Pending',
    requestedAt: '2024-04-12'
  }
];

export const INITIAL_GUIDE_APPLICATIONS: GuideApplication[] = [
  {
    id: 'APP-001',
    firstName: 'Fabrice',
    lastName: 'Mugisha',
    specialty: 'Nyungwe Primates',
    experience: 'Guided for 5 years in local cooperatives.',
    status: 'Pending',
    appliedAt: '2024-04-15'
  }
];
