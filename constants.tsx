
import { FoodItem, Restaurant } from './types';

export interface Place extends Restaurant {
  type: 'Restaurant' | 'Hostel';
  priceRange: string;
  distance: string;
  time: string;
  offer?: string;
}

export const CATEGORIES = [
  { name: 'Burgers', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=150&h=150&fit=crop' },
  { name: 'Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=150&h=150&fit=crop' },
  { name: 'North Indian', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=150&h=150&fit=crop' },
  { name: 'Chinese', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=150&h=150&fit=crop' },
  { name: 'Cakes', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=150&h=150&fit=crop' },
  { name: 'Biryani', img: 'https://images.unsplash.com/photo-1563379091339-03b11adcb820?q=80&w=150&h=150&fit=crop' },
  { name: 'South Indian', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=150&h=150&fit=crop' },
];

export const POPULAR_FOODS: FoodItem[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with premium cheddar and secret sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&h=300&fit=crop",
    rating: 4.8
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh basil, buffalo mozzarella, and san marzano tomatoes",
    price: 15.50,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400&h=300&fit=crop",
    rating: 4.9
  },
  {
    id: 3,
    name: "Chicken Pad Thai",
    description: "Traditional rice noodles with sprout, peanuts, and lime",
    price: 14.25,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&h=300&fit=crop",
    rating: 4.7
  }
];

export const MOCK_PLACES: Place[] = [
  {
    id: 1,
    name: "Skyline Bistro",
    location: "Highway Point A",
    cuisine: "Continental, Italian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&h=400&fit=crop",
    type: 'Restaurant',
    priceRange: '₹400 for two',
    distance: '2.5 km',
    time: '25-30 mins',
    offer: '50% OFF up to ₹100'
  },
  {
    id: 2,
    name: "The Travelers Hostel",
    location: "Mid-Route Rest",
    cuisine: "Clean Beds, Cafeteria",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&h=400&fit=crop",
    type: 'Hostel',
    priceRange: '₹1200 per night',
    distance: '1.2 km',
    time: '10 mins',
    offer: 'Early Bird 20% OFF'
  },
  {
    id: 3,
    name: "Spicy Route",
    location: "Highway Hub",
    cuisine: "North Indian, Thalis",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&h=400&fit=crop",
    type: 'Restaurant',
    priceRange: '₹350 for two',
    distance: '0.5 km',
    time: '15-20 mins',
    offer: 'Free Dessert on orders > ₹500'
  },
  {
    id: 4,
    name: "Green Valley Inn",
    location: "Mountain Pass",
    cuisine: "Local, Heritage",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&h=400&fit=crop",
    type: 'Hostel',
    priceRange: '₹2500 per night',
    distance: '5.0 km',
    time: '45 mins',
    offer: 'Free Breakfast'
  },
  {
    id: 5,
    name: "Route 66 Diner",
    location: "Expressway Exit 12",
    cuisine: "American, Fast Food",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&h=400&fit=crop",
    type: 'Restaurant',
    priceRange: '₹300 for two',
    distance: '0.8 km',
    time: '12-15 mins'
  },
  {
    id: 6,
    name: "Royal Residency",
    location: "Downtown",
    cuisine: "Luxury, Parking",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&h=400&fit=crop",
    type: 'Hostel',
    priceRange: '₹3500 per night',
    distance: '3.4 km',
    time: '30 mins',
    offer: '₹500 OFF on First Stay'
  }
];
