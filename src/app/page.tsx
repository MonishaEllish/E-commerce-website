import Link from 'next/link'
import Image from 'next/image'
import { products } from './data/products'

export default function Home() {
  const categories = ['Electronics', 'Fashion', 'Home & Living'];
  const featuredProducts = categories.map(category => {
    return products.filter(product => product.category === category).slice(0, 3);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to E-Shop</h1>
          <p className="text-xl mb-6">Discover amazing products at unbeatable prices!</p>
          <div className="space-x-4">
            <Link href="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link href="/contact" className=" bg-blue-500 text-white hover:bg-blue-600  px-4 py-2 rounded-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/herosection.jpeg"
            alt="E-commerce hero image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div className="space-y-4">
                {featuredProducts[index].map(product => (
                  <div key={product.id} className="flex items-center space-x-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={`/products?category=${category}`} className="mt-4 inline-block text-blue-500 hover:underline">
                View All {category}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12 px-4 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with our latest products and exclusive offers!</p>
          <form className="flex flex-col md:flex-row justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto rounded-lg text-gray-800"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

