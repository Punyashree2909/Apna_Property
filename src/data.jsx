// src/data.js

// Import icons you'll use
import { BiArea, BiBuilding } from 'react-icons/bi';
import { MdOutlineChair } from 'react-icons/md';

export const properties = [
  {
    id: 1,
    title: 'Modern 3BHK',
    price: '1.25 Cr',
    tags: ['Premium'],
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9e191414d?w=600&auto=format&fit=crop',
    photoCount: 12,
    sqft: 1800,
    status: 'Ready to Move',
    floor: '12th of 20 Floors',
    description: 'Spacious 3BHK with panoramic city views, premium amenities, and close proximity to...',
    lister: {
      name: 'Rohan Sharma',
      avatar: 'https://i.pravatar.cc/150?img=11',
      updated: '2 days ago',
    },
    specs: [
      { icon: <BiArea />, text: '1,800 sqft' },
      { icon: <BiBuilding />, text: 'Ready to Move' },
      { icon: <MdOutlineChair />, text: '12th of 20 Floors' },
    ],
  },
  {
    id: 2,
    title: 'Elegant 5BHK Villa',
    price: '3.50 Cr',
    tags: ['Verified'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop',
    photoCount: 8,
    sqft: 3200,
    status: 'Under Construction',
    floor: 'Ground + 1',
    description: 'Luxurious villa with private garden, high-end finishes, and exclusive access to club.',
    lister: {
      name: 'Priya Singh',
      avatar: 'https://i.pravatar.cc/150?img=12',
      updated: '1 week ago',
    },
    specs: [
      { icon: <BiArea />, text: '3,200 sqft' },
      { icon: <BiBuilding />, text: 'Under Construction' },
      { icon: <MdOutlineChair />, text: 'Ground + 1' },
    ],
  },
  // Add 4 more property objects here, copying the structure
];