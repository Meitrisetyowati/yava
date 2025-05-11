// src/data/products.ts

export type Category = 'all' | 'granola' | 'biscuits' | 'bar' | 'popcorn' | 'puffs' | 'cashews';

export interface Product {
  id: number;
  name: string;
  image: string;
  category: Category;
}

export const products: Product[] = [
  { id: 1, name: 'Granola Original', image: '/products/GranolaCocolate.png', category: 'granola' },
  { id: 2, name: 'Biskuit Oat', image: '/products/biscuits1.jpg', category: 'biscuits' },
  { id: 3, name: 'Bar Coklat', image: '/products/bar1.jpg', category: 'bar' },
  { id: 4, name: 'Popcorn Keju', image: '/products/popcorn1.jpg', category: 'popcorn' },
  { id: 5, name: 'Puffs Jagung', image: '/products/puffs1.jpg', category: 'puffs' },
  { id: 6, name: 'Kacang Mede Asin', image: '/products/cashews1.jpg', category: 'cashews' },
];