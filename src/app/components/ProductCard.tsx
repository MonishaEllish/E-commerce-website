import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">{product.description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Link href={`/products/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

