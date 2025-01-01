import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import CategoryFilter from '../components/CategoryFilter'

export default function Products({ searchParams }: { searchParams: { page: string, category: string } }) {
  const page = parseInt(searchParams.page) || 1
  const category = searchParams.category || 'All'
  const pageSize = 8

  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category)

  const totalPages = Math.ceil(filteredProducts.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentProducts = filteredProducts.slice(startIndex, endIndex)


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <CategoryFilter products={products} initialCategory={category} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} category={category} />
    </div>
  )
}

