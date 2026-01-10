
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  dob: string;
  address: string;
}

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  cuisine: string;
  rating: number;
  image: string;
}
