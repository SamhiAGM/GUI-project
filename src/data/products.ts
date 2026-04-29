import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 0,
    name: 'iPhone 17 Pro Max • Ultra',
    price: 1599.99,
    image: '/images/products/iphone-17-pro-max.png',
    description: 'The ultimate flagship. Titanium design, advanced pro camera system, and the most powerful chip ever in a smartphone.',
    category: 'iPhones',
    stock: 5
  },
  {
    id: 1,
    name: 'Aurora Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Comfortable noise-cancelling headphones with premium sound and long battery life.',
    category: 'Audio',
    stock: 24
  },
  {
    id: 2,
    name: 'Luna Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'Track health, messages, and activity with a sleek touchscreen smartwatch.',
    category: 'Wearables',
    stock: 16
  },
  {
    id: 3,
    name: 'Nova Laptop Backpack',
    price: 79.95,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    description: 'Durable, water-resistant backpack with padded laptop sleeve and smart pockets.',
    category: 'Accessories',
    stock: 35
  },
  {
    id: 4,
    name: 'Solstice Desk Lamp',
    price: 54.5,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    description: 'Minimal LED desk lamp with adjustable brightness and warm color modes.',
    category: 'Home',
    stock: 40
  },
  {
    id: 5,
    name: 'Pulse Gaming Mouse',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1527814050087-379381547996?auto=format&fit=crop&w=800&q=80',
    description: 'High-precision RGB mouse built for comfort, speed, and esports control.',
    category: 'Gaming',
    stock: 18
  },
  {
    id: 6,
    name: 'Nova 50W Portable Charger',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80',
    description: 'Fast charging power bank for phones, tablets, and USB-C devices.',
    category: 'Power',
    stock: 50
  },
  {
    id: 7,
    name: 'Asus VivoBook 15',
    price: 649.0,
    image: 'https://images.unsplash.com/photo-xSiQBSq-I0M?auto=format&fit=crop&w=800&q=80',
    description: 'Everyday 15-inch laptop with Intel processor, thin design, and a NanoEdge display.',
    category: 'Laptops',
    stock: 18
  },
  {
    id: 8,
    name: 'Asus ZenBook 14',
    price: 1099.0,
    image: 'https://images.unsplash.com/photo-6RqSDGaNJ5c?auto=format&fit=crop&w=800&q=80',
    description: 'Premium 14-inch ultrabook with sleek metal chassis and long battery life.',
    category: 'Laptops',
    stock: 12
  },
  {
    id: 9,
    name: 'Dell XPS 13',
    price: 1249.0,
    image: 'https://images.unsplash.com/photo-1SAnrIxw5OY?auto=format&fit=crop&w=800&q=80',
    description: 'Compact 13-inch laptop with InfinityEdge display and premium aluminum build.',
    category: 'Laptops',
    stock: 14
  },
  {
    id: 10,
    name: 'Dell Inspiron 16',
    price: 899.0,
    image: 'https://images.unsplash.com/photo-Bd7gNnWJBkU?auto=format&fit=crop&w=800&q=80',
    description: 'Versatile 16-inch laptop for productivity and media with a crisp display.',
    category: 'Laptops',
    stock: 20
  },
  {
    id: 11,
    name: 'HP Spectre x360',
    price: 1399.0,
    image: 'https://images.unsplash.com/photo-nVqRBcNBsno?auto=format&fit=crop&w=800&q=80',
    description: 'Convertible 2-in-1 laptop with powerful performance and a touchscreen display.',
    category: 'Laptops',
    stock: 8
  },
  {
    id: 12,
    name: 'HP Envy 14',
    price: 1099.0,
    image: 'https://images.unsplash.com/photo-RSCirJ70NDM?auto=format&fit=crop&w=800&q=80',
    description: 'Premium 14-inch laptop with bright colors and high-quality speakers.',
    category: 'Laptops',
    stock: 10
  },
  {
    id: 13,
    name: 'Lenovo Yoga Slim 7',
    price: 999.0,
    image: 'https://images.unsplash.com/photo-npxXWgQ33ZQ?auto=format&fit=crop&w=800&q=80',
    description: 'Thin and light laptop with a responsive keyboard and long battery life.',
    category: 'Laptops',
    stock: 16
  },
  {
    id: 14,
    name: 'Lenovo Legion 5',
    price: 1299.0,
    image: 'https://images.unsplash.com/photo-71ig274jGpw?auto=format&fit=crop&w=800&q=80',
    description: 'Gaming laptop with high refresh rate display and powerful graphics.',
    category: 'Laptops',
    stock: 12
  },
  {
    id: 15,
    name: 'MSI Prestige 14',
    price: 1149.0,
    image: 'https://images.unsplash.com/photo-fc1dt-T0JMI?auto=format&fit=crop&w=800&q=80',
    description: 'Professional laptop with lightweight chassis and fast performance.',
    category: 'Laptops',
    stock: 11
  },
  {
    id: 16,
    name: 'MSI Stealth 16',
    price: 1649.0,
    image: 'https://images.unsplash.com/photo-hBuwVLcYTnA?auto=format&fit=crop&w=800&q=80',
    description: 'Powerful gaming laptop with a premium display and advanced cooling system.',
    category: 'Laptops',
    stock: 9
  },
  {
    id: 17,
    name: 'Acer Swift 3',
    price: 749.0,
    image: 'https://images.unsplash.com/photo-j4uuKnN43_M?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight and affordable laptop with all-day battery life.',
    category: 'Laptops',
    stock: 22
  },
  {
    id: 18,
    name: 'Acer Predator Helios',
    price: 1399.0,
    image: 'https://images.unsplash.com/photo-Im7lZjxeLhg?auto=format&fit=crop&w=800&q=80',
    description: 'Gaming laptop with high-end graphics and fast refresh rate display.',
    category: 'Laptops',
    stock: 10
  },
  {
    id: 19,
    name: 'Razer Blade 15',
    price: 1899.0,
    image: 'https://images.unsplash.com/photo-wBPN8aYudjI?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek gaming laptop with premium build and powerful GPU performance.',
    category: 'Laptops',
    stock: 7
  },
  {
    id: 20,
    name: 'Razer Book 13',
    price: 1399.0,
    image: 'https://images.unsplash.com/photo-m_HRfLhgABo?auto=format&fit=crop&w=800&q=80',
    description: 'Productivity-focused laptop with a vibrant display and slim chassis.',
    category: 'Laptops',
    stock: 13
  },
  {
    id: 21,
    name: 'MacBook Air M2',
    price: 1199.0,
    image: 'https://images.unsplash.com/photo-qUJ8fgoaLTg?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-thin laptop with Apple silicon, long battery life, and crisp display.',
    category: 'Laptops',
    stock: 15
  },
  {
    id: 22,
    name: 'MacBook Pro 14',
    price: 1999.0,
    image: 'https://images.unsplash.com/photo-Hin-rzhOdWs?auto=format&fit=crop&w=800&q=80',
    description: 'Powerful professional laptop with a Liquid Retina XDR display.',
    category: 'Laptops',
    stock: 9
  },
  {
    id: 23,
    name: 'Samsung Galaxy Book3',
    price: 1299.0,
    image: 'https://images.unsplash.com/photo-zR6r-CpCnmg?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance Windows laptop with a stunning AMOLED display.',
    category: 'Laptops',
    stock: 14
  },
  {
    id: 24,
    name: 'Huawei MateBook X',
    price: 1399.0,
    image: 'https://images.unsplash.com/photo-mfB1B1s4sMc?auto=format&fit=crop&w=800&q=80',
    description: 'Premium laptop with a lightweight design and a razor-thin bezel display.',
    category: 'Laptops',
    stock: 10
  },
  {
    id: 25,
    name: 'Gigabyte Aero 17',
    price: 2199.0,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80',
    description: 'Creator laptop with a large 17-inch 4K display and high-powered graphics.',
    category: 'Laptops',
    stock: 6
  },
  {
    id: 26,
    name: 'Surface Laptop 5',
    price: 1299.0,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek Microsoft laptop with a PixelSense touchscreen and premium finish.',
    category: 'Laptops',
    stock: 17
  },
  {
    id: 27,
    name: 'iPhone 11',
    price: 499.99,
    image: '/images/products/iphone11.png',
    description: 'Classic iPhone with a dual-camera system and reliable performance.',
    category: 'iPhones',
    stock: 20
  },
  {
    id: 28,
    name: 'iPhone 11 Pro',
    price: 749.99,
    image: '/images/products/iphone-11-pro.jpg',
    description: 'Pro-level iPhone with a triple-camera system and bright OLED display.',
    category: 'iPhones',
    stock: 18
  },
  {
    id: 29,
    name: 'iPhone 11 Pro Max',
    price: 849.99,
    image: '/images/products/iphone-11-pro-max.jpg',
    description: 'Large-screen iPhone with excellent battery life and premium camera features.',
    category: 'iPhones',
    stock: 15
  },
  {
    id: 30,
    name: 'iPhone 12',
    price: 599.99,
    image: '/images/products/iphone-12.jpg',
    description: 'Modern iPhone with 5G support and a gorgeous Super Retina XDR display.',
    category: 'iPhones',
    stock: 21
  },
  {
    id: 31,
    name: 'iPhone 12 Mini',
    price: 549.99,
    image: '/images/products/iphone-12.jpg',
    description: 'Compact iPhone with powerful performance and easy one-handed use.',
    category: 'iPhones',
    stock: 18
  },
  {
    id: 32,
    name: 'iPhone 12 Pro',
    price: 999.99,
    image: '/images/products/iphone-12-pro.jpg',
    description: 'Advanced iPhone with a pro camera system and stainless steel finish.',
    category: 'iPhones',
    stock: 16
  },
  {
    id: 33,
    name: 'iPhone 12 Pro Max',
    price: 1099.99,
    image: '/images/products/iphone-12-pro-max.jpg',
    description: 'Large-screen premium iPhone with outstanding battery life and camera.',
    category: 'iPhones',
    stock: 14
  },
  {
    id: 34,
    name: 'iPhone 13',
    price: 699.99,
    image: '/images/products/iphone-13.jpg',
    description: 'Reliable iPhone with improved battery life and cinematic camera mode.',
    category: 'iPhones',
    stock: 22
  },
  {
    id: 35,
    name: 'iPhone 13 Mini',
    price: 649.99,
    image: '/images/products/iphone-13.jpg',
    description: 'Small form-factor iPhone with powerful internals and compact design.',
    category: 'iPhones',
    stock: 19
  },
  {
    id: 36,
    name: 'iPhone 13 Pro',
    price: 999.99,
    image: '/images/products/iphone-13-pro.jpg',
    description: 'Pro model featuring a triple-camera system and ProMotion display.',
    category: 'iPhones',
    stock: 16
  },
  {
    id: 37,
    name: 'iPhone 13 Pro Max',
    price: 1099.99,
    image: '/images/products/iphone-13-pro-max.jpg',
    description: 'Large-screen iPhone with the best camera system and long-lasting battery.',
    category: 'iPhones',
    stock: 13
  },
  {
    id: 38,
    name: 'iPhone 14',
    price: 799.99,
    image: '/images/products/iphone-14.jpg',
    description: 'Latest generation iPhone with dynamic island and advanced safety features.',
    category: 'iPhones',
    stock: 20
  },
  {
    id: 39,
    name: 'iPhone 14 Plus',
    price: 899.99,
    image: '/images/products/iphone-14.jpg',
    description: 'Bigger iPhone with a large display and all the latest features.',
    category: 'iPhones',
    stock: 18
  },
  {
    id: 40,
    name: 'iPhone 14 Pro',
    price: 1099.99,
    image: '/images/products/iphone-14-pro.jpg',
    description: 'Pro iPhone with Dynamic Island, ProMotion display, and advanced cameras.',
    category: 'iPhones',
    stock: 15
  },
  {
    id: 41,
    name: 'iPhone 14 Pro Max',
    price: 1199.99,
    image: '/images/products/iphone-14-pro-max.jpg',
    description: 'Top-tier large-screen iPhone with premium camera and battery life.',
    category: 'iPhones',
    stock: 12
  },
  {
    id: 42,
    name: 'iPhone 15',
    price: 899.99,
    image: '/images/products/iphone-15.jpg',
    description: 'Newest iPhone with advanced performance and versatile camera upgrades.',
    category: 'iPhones',
    stock: 22
  },
  {
    id: 43,
    name: 'iPhone 15 Plus',
    price: 999.99,
    image: '/images/products/iphone-15.jpg',
    description: 'Large iPhone with long battery life and a bright display.',
    category: 'iPhones',
    stock: 18
  },
  {
    id: 44,
    name: 'iPhone 15 Pro',
    price: 1199.99,
    image: '/images/products/iphone-15-pro.jpg',
    description: 'Professional-level iPhone with a titanium frame and enhanced camera system.',
    category: 'iPhones',
    stock: 14
  },
  {
    id: 45,
    name: 'iPhone 15 Pro Max',
    price: 1299.99,
    image: '/images/products/iphone-15-pro-max.jpg',
    description: 'Top flagship iPhone with the largest display and best camera performance.',
    category: 'iPhones',
    stock: 12
  },
  {
    id: 46,
    name: 'iPhone 16',
    price: 999.99,
    image: '/images/products/iphone-16.jpg',
    description: 'Advanced iPhone with the latest chipset and upgraded camera capabilities.',
    category: 'iPhones',
    stock: 20
  },
  {
    id: 47,
    name: 'iPhone 16 Pro',
    price: 1299.99,
    image: '/images/products/iphone-16-pro.jpg',
    description: 'Cutting-edge iPhone designed for power users with pro photography features.',
    category: 'iPhones',
    stock: 14
  },
  {
    id: 48,
    name: 'iPhone 16 Pro Max',
    price: 1399.99,
    image: '/images/products/iphone-16-pro-max.jpg',
    description: 'Ultimate large-screen iPhone with the longest battery life and top performance.',
    category: 'iPhones',
    stock: 10
  },
  {
    id: 49,
    name: 'iPhone 17',
    price: 1099.99,
    image: '/images/products/iphone-17.jpg',
    description: 'Latest generation iPhone with premium design and improved battery life.',
    category: 'iPhones',
    stock: 20
  },
  {
    id: 50,
    name: 'iPhone 17 Pro',
    price: 1399.99,
    image: '/images/products/iphone-17-pro.jpg',
    description: 'High-end iPhone with next-level camera and pro-grade performance.',
    category: 'iPhones',
    stock: 12
  },
  {
    id: 51,
    name: 'iPhone 17 Pro Max',
    price: 1499.99,
    image: '/images/products/iphone-17-pro-max.png',
    description: 'Flagship iPhone with the largest screen, best battery life, and elite camera.',
    category: 'iPhones',
    stock: 10
  }
]
