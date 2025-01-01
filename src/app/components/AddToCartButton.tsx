"use client"
import { useState } from 'react'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 3000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`px-4 py-2 rounded ${
        isAdded ? 'bg-green-500' : 'bg-blue-500'
      } text-white hover:bg-opacity-80`}
    >
      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  )
}


