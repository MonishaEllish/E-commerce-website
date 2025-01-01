'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '../data/products'

interface CategoryFilterProps {
  products: Product[];
  initialCategory: string;
}

export default function CategoryFilter({ products, initialCategory }: CategoryFilterProps) {
  const [category, setCategory] = useState(initialCategory)
  const router = useRouter()

  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))]

  useEffect(() => {
    const newUrl = new URL(window.location.href);
    if (category === 'All') {
      newUrl.searchParams.delete('category');
    } else {
      newUrl.searchParams.set('category', category);
    }
    newUrl.searchParams.delete('page');
    router.push(newUrl.toString());
  }, [category, router])

  return (
    <div className="mb-8">
      <label htmlFor="category" className="mr-2">Filter by category:</label>
      <select 
        id="category" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )
}

