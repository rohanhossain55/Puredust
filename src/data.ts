import type { Product, DeliveryOption } from './types';

export const products: Product[] = [
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    nameBn: 'বিটমূলের পাউডার',
    description:
      'A vibrant superfood powder made from premium beetroots, rich in iron and antioxidants. Perfect for natural skincare, smoothies, and boosting your daily nutrition.',
    image:
      '/images/products/bitroot-powder.png',
    tags: ['Superfood', 'Natural Lip & Skin Care', 'Rich in Iron'],
    variations: [
      { weight: '250g', price: 450 },
      { weight: '500g', price: 850 },
      { weight: '1kg', price: 1600, note: 'Will be delivered as 2 packets of 500g' },
    ],
  },
  {
    id: 'raw-banana-powder',
    name: 'Raw Banana Powder',
    nameBn: 'কাঁচা কলার পাউডার',
    description:
      'Made from sun-dried raw bananas, finely ground into a versatile powder. Perfect for baby food, baking, and traditional recipes.',
    image:
      '/images/products/raw-banana-powder.png',
    tags: ['100% Organic', 'Gut Health', 'Baby Food Friendly'],
    variations: [
      { weight: '250g', price: 180 },
      { weight: '500g', price: 250 },
      { weight: '1kg', price: 450, note: 'Will be delivered as 2 packets of 500g' },
    ],
  },
  {
    id: 'natural-date-powder',
    name: 'Natural Date Powder',
    nameBn: 'খেজুরের পাউডার',
    description:
      'A natural sweetener made from premium dried dates, ground into a fine powder. Rich in iron and fiber, ideal for healthy cooking.',
    image:
      '/images/products/date-powder.png',
    tags: ['Natural Sweetener', 'Energy Booster', 'Fiber Rich'],
    variations: [
      { weight: '250g', price: 300 },
      { weight: '500g', price: 600 },
      { weight: '1kg', price: 1100, note: 'Will be delivered as 2 packets of 500g' },
    ],
  },
  {
    id: 'lemon-peel-powder',
    name: 'Lemon Peel Powder',
    nameBn: 'লেবুর পাউডার',
    description:
      'Zesty lemon peel dried and ground to perfection. Packed with Vitamin C for skincare, teas, and culinary uses.',
    image:
      '/images/products/Lime-powder.png',
    tags: ['Vitamin C Rich', 'Immunity & Skincare'],
    variations: [
      { weight: '250g', price: 170 },
      { weight: '500g', price: 320 },
      { weight: '1kg', price: 620, note: 'Will be delivered as 2 packets of 500g' },
    ],
  },
];

export const deliveryOptions: DeliveryOption[] = [
  { id: 'meherpur', label: 'Inside Meherpur', fee: 70 },
  { id: 'dhaka', label: 'Dhaka City', fee: 110 },
  { id: 'rest_of_bd', label: 'Outside Dhaka / Rest of Bangladesh', fee: 130 },
];
