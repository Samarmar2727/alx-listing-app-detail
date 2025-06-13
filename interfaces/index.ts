

export interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
} 

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description:string;
  reviews: Review[];
 
}

 export interface PillProps {
  label: string;
}
 
  
  