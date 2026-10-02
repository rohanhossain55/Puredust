export interface Variation {
  weight: string;
  price: number;
  note?: string;
}

export interface Product {
  id: string;
  name: string;
  nameBn: string;
  description: string;
  image: string;
  tags: string[];
  variations: Variation[];
}

export interface CartItem {
  productId: string;
  name: string;
  nameBn: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
  note?: string;
}

export type DeliveryLocation = 'meherpur' | 'dhaka' | 'rest_of_bd';

export type PaymentMethod = 'cod' | 'bkash' | 'nagad';

export interface DeliveryOption {
  id: DeliveryLocation;
  label: string;
  fee: number;
}

export interface OrderData {
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  delivery_location: string;
  delivery_fee: number;
  subtotal: number;
  total: number;
  payment_method: string;
  items: CartItem[];
}
