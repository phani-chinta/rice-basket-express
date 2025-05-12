
import { Product } from '@/components/ProductCard';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Jasmine Rice",
    description: "Fragrant, long-grain Thai jasmine rice with a subtle floral aroma. Perfect for Asian dishes and everyday meals.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "White Rice",
    weight: "5 kg",
    origin: "Thailand",
    inStock: true
  },
  {
    id: 2,
    name: "Organic Basmati Rice",
    description: "Extra-long grain basmati rice with an exquisite aroma. Ideal for biryanis, pilafs, and other Indian cuisine.",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1594646867534-0c09b6de9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "White Rice",
    weight: "2 kg",
    origin: "India",
    inStock: true
  },
  {
    id: 3,
    name: "Japanese Sushi Rice",
    description: "Short-grain rice with a sticky, slightly sweet texture. Perfect for sushi, rice bowls, and Japanese dishes.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Short-Grain Rice",
    weight: "1 kg",
    origin: "Japan",
    inStock: true
  },
  {
    id: 4,
    name: "Italian Arborio Rice",
    description: "Medium-grain rice that's perfect for risotto due to its high starch content and creamy texture when cooked.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1594646867534-0c09b6de9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Medium-Grain Rice",
    weight: "1 kg",
    origin: "Italy",
    inStock: true
  },
  {
    id: 5,
    name: "Brown Jasmine Rice",
    description: "Whole grain version of jasmine rice with a nuttier flavor and more nutrients. A healthier alternative to white jasmine rice.",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Brown Rice",
    weight: "2 kg",
    origin: "Thailand",
    inStock: true
  },
  {
    id: 6,
    name: "Wild Rice Blend",
    description: "A nutritious blend of wild rice, brown rice, and other whole grains. Rich in flavor with a pleasant chewy texture.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1594646867534-0c09b6de9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Specialty Rice",
    weight: "1 kg",
    origin: "USA",
    inStock: true
  },
  {
    id: 7,
    name: "Spanish Paella Rice",
    description: "Short to medium grain rice that absorbs flavors well while maintaining its shape. Essential for authentic paella.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Medium-Grain Rice",
    weight: "1 kg",
    origin: "Spain",
    inStock: false
  },
  {
    id: 8,
    name: "Red Cargo Rice",
    description: "Unpolished long-grain rice with a reddish-brown color. High in nutrients with a slightly chewy texture and nutty flavor.",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1594646867534-0c09b6de9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Specialty Rice",
    weight: "1 kg",
    origin: "Thailand",
    inStock: true
  },
  {
    id: 9,
    name: "Black Rice",
    description: "Also known as forbidden rice, this is a rare and nutritious grain with a deep black color and sweet, nutty flavor.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Specialty Rice",
    weight: "500 g",
    origin: "China",
    inStock: true
  },
  {
    id: 10,
    name: "Glutinous Rice",
    description: "Extremely sticky rice when cooked, used in many Asian desserts and dishes where a sticky texture is desired.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1594646867534-0c09b6de9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Sticky Rice",
    weight: "1 kg",
    origin: "Thailand",
    inStock: true
  },
  {
    id: 11,
    name: "Long-Grain White Rice",
    description: "Versatile, everyday white rice that stays fluffy and separate when cooked. Perfect for a wide variety of dishes.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "White Rice",
    weight: "5 kg",
    origin: "Various",
    inStock: true
  },
  {
    id: 12,
    name: "Parboiled Rice",
    description: "Partially boiled in the husk, resulting in a firmer, less sticky rice. Nutritionally superior to regular white rice.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1594646867534-0c09b6de9f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "White Rice",
    weight: "2 kg",
    origin: "Various",
    inStock: true
  }
];

export const categories = [
  "All",
  "White Rice",
  "Brown Rice",
  "Short-Grain Rice",
  "Medium-Grain Rice",
  "Sticky Rice",
  "Specialty Rice"
];
