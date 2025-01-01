import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products } from '../../data/products'
import AddToCartButton from '../../components/AddToCartButton'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={500} 
            height={500} 
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-lg mb-4">Category: {product.category}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

