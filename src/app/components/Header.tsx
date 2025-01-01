'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  const { cart } = useCart()

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Ellish Mart</Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li>
            <Link href="/cart" className="flex items-center hover:text-gray-300">
            <TiShoppingCart size={35} />
              <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {itemCount}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

