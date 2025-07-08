export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  description: string;
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones with Active Noise Cancelling',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviews: 2847,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    badge: 'Best Seller',
    category: 'Electronics',
    description: 'Experience premium audio quality with our flagship wireless headphones featuring advanced noise cancellation technology.',
  },
  {
    id: '2',
    name: 'Smart Watch with Health Monitoring & GPS',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.6,
    reviews: 1532,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    badge: 'New',
    category: 'Electronics',
    description: 'Stay connected and healthy with our advanced smartwatch featuring comprehensive health monitoring and GPS tracking.',
  },
  {
    id: '3',
    name: 'Designer Leather Handbag - Premium Collection',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 924,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    badge: 'Limited Edition',
    category: 'Fashion',
    description: 'Elevate your style with this exquisite handcrafted leather handbag from our premium designer collection.',
  },
  {
    id: '4',
    name: 'Professional 4K Wireless Camera System',
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.7,
    reviews: 687,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
    badge: 'Sale',
    category: 'Electronics',
    description: 'Capture life in stunning 4K resolution with our professional-grade wireless camera system perfect for content creators.',
  },
  {
    id: '5',
    name: 'Luxury Silk Scarf - Hand Painted Design',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 456,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    badge: 'Artisan Made',
    category: 'Fashion',
    description: 'Add elegance to any outfit with this hand-painted silk scarf featuring unique artistic patterns.',
  },
  {
    id: '6',
    name: 'Smart Home Security Camera with AI Detection',
    price: 179.99,
    rating: 4.5,
    reviews: 1823,
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    category: 'Electronics',
    description: 'Protect your home with intelligent AI-powered security camera featuring facial recognition and smart alerts.',
  },
  {
    id: '7',
    name: 'Premium Coffee Machine with Built-in Grinder',
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.9,
    reviews: 743,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
    badge: 'Editor\'s Choice',
    category: 'Home & Garden',
    description: 'Brew café-quality coffee at home with our premium espresso machine featuring integrated ceramic grinder.',
  },
  {
    id: '8',
    name: 'Wireless Gaming Mouse with RGB Lighting',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 2156,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
    category: 'Electronics',
    description: 'Dominate your games with our precision wireless gaming mouse featuring customizable RGB lighting and ultra-fast response.',
  },
];

export const featuredProducts = sampleProducts.slice(0, 4);
export const bestSellers = sampleProducts.filter(p => p.badge === 'Best Seller' || p.reviews > 1000);