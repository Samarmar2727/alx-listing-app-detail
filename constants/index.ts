
import { PropertyProps } from "../interfaces";

export const FILTERS = [
  "Top Villa",
  "Self Check-in",
  "Pet Friendly",
  "Free Cancellation",
  "Luxury Stay",
];


export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image1.jpg",
    discount: "",
    description: "A modern apartment located in the vibrant city center, close to restaurants and attractions. Perfect for business trips or urban getaways.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image2.jpg",
    discount: "30",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "samar",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
  
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image3.jpg",
    discount: "",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Samar",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ahmed",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
    
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image4.jpg",
    discount: "15",
      description: "A modern apartment located in the vibrant city center, close to restaurants and attractions. Perfect for business trips or urban getaways.",
     reviews: [
      {
        name: "Samar",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ahmed",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://example.com/image5.jpg",
    discount: "20",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },

  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://example.com/image6.jpg",
    discount: "",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 

  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image7.jpg",
    discount: "10",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://example.com/image8.jpg",
    discount: "25",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },

  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image9.jpg",
    discount: "",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },

  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image10.jpg",
    discount: "40",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image11.jpg",
    discount: "50",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },

  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image12.jpg",
    discount: "",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
 
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image13.jpg",
    discount: "35",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://example.com/image14.jpg",
    discount: "",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
 
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image15.jpg",
    discount: "20",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://example.com/image16.jpg",
    discount: "25",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },

  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: "",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
 
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60",
    description: "Escape to this charming cottage located in the heart of the countryside. Enjoy cozy evenings, fresh air, and a peaceful environment perfect for relaxation.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: "",
     description: "A modern apartment located in the vibrant city center, close to restaurants and attractions. Perfect for business trips or urban getaways.",
     reviews: [
      {
        name: "Sarah",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ali",
        rating: 4,
        comment: "Very comfortable and quiet.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
  
];

