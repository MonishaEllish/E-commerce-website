export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Smartphone X",
      description: "Experience the future of mobile technology with Smartphone X. Featuring a stunning 6.5-inch OLED display, 5G capabilities, and an AI-powered camera system that captures professional-quality photos in any lighting condition. With its long-lasting battery and sleek design, Smartphone X is the perfect companion for your digital lifestyle.",
      price: 799.99,
      image: "/item1.webp",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Laptop Pro",
      description: "Unleash your productivity with the Laptop Pro. Powered by the latest Intel Core i7 processor and 16GB of RAM, this high-performance laptop handles demanding tasks with ease. The 15.6-inch 4K display brings your content to life, while the slim and lightweight design ensures portability. Perfect for professionals and creatives alike.",
      price: 1299.99,
      image: "/item2.png",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      description: "Immerse yourself in crystal-clear sound with our Wireless Earbuds. Featuring active noise cancellation, touch controls, and a comfortable fit, these earbuds are perfect for music lovers and podcast enthusiasts. With up to 8 hours of playtime and a compact charging case, you'll never miss a beat.",
      price: 149.99,
      image: "/item3.webp",
      category: "Electronics"
    },
    {
      id: 4,
      name: "4K Smart TV",
      description: "Transform your living room into a home theater with our 55-inch 4K Smart TV. Enjoy stunning picture quality, vibrant colors, and deep blacks thanks to QLED technology. With built-in streaming apps and voice control, accessing your favorite content has never been easier. The sleek, borderless design complements any interior.",
      price: 699.99,
      image: "/item4.webp",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Fitness Tracker",
      description: "Achieve your health and fitness goals with our advanced Fitness Tracker. Monitor your heart rate, sleep patterns, and daily activity levels with precision. The water-resistant design and long battery life make it perfect for all-day wear. Stay connected with smartphone notifications and control your music right from your wrist.",
      price: 79.99,
      image: "/item5.jpg",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Designer Dress",
      description: "Make a statement with our elegant Designer Dress. Crafted from high-quality silk, this dress features a flattering A-line silhouette and intricate embroidery. The versatile design transitions seamlessly from day to night, making it perfect for both office wear and special occasions. Available in sizes XS to XL.",
      price: 199.99,
      image: "/item6.jpg",
      category: "Fashion"
    },
    {
      id: 7,
      name: "Men's Tailored Suit",
      description: "Exude confidence and style with our Men's Tailored Suit. Made from premium Italian wool, this suit offers both comfort and sophistication. The modern slim fit and subtle check pattern make it suitable for various formal occasions. Includes a matching jacket and trousers, available in charcoal gray and navy blue.",
      price: 349.99,
      image: "/item7.avif",
      category: "Fashion"
    },
    {
      id: 8,
      name: "Leather Handbag",
      description: "Elevate your accessories game with our Leather Handbag. Handcrafted from genuine leather, this spacious bag features multiple compartments for organized storage. The adjustable strap allows for versatile carrying options, while the gold-tone hardware adds a touch of luxury. A timeless piece that complements any outfit.",
      price: 129.99,
      image: "/item8.webp",
      category: "Fashion"
    },
    {
      id: 9,
      name: "Smart Home Hub",
      description: "Take control of your home with our Smart Home Hub. This central device connects and manages all your smart home devices, from lights and thermostats to security cameras. With voice control capabilities and an intuitive smartphone app, you can create the perfect ambiance or check on your home from anywhere in the world.",
      price: 129.99,
      image: "/item9.jpg",
      category: "Home & Living"
    },
    {
      id: 10,
      name: "Ergonomic Office Chair",
      description: "Experience comfort during long work hours with our Ergonomic Office Chair. Featuring adjustable lumbar support, breathable mesh back, and customizable armrests, this chair promotes proper posture and reduces fatigue. The sleek design and range of color options ensure it fits seamlessly into any home office or workspace.",
      price: 249.99,
      image: "/item10.jpg",
      category: "Home & Living"
    },
    {
      id: 11,
      name: "Air Purifier",
      description: "Breathe easier with our advanced Air Purifier. Using a multi-stage filtration system, including HEPA and activated carbon filters, it removes 99.97% of airborne particles, allergens, and odors. The quiet operation and sleek design make it perfect for bedrooms, living rooms, or offices. Enjoy cleaner, fresher air and improved overall well-being.",
      price: 179.99,
      image: "/item11.jpg",
      category: "Home & Living"
    }
  ];
  
  