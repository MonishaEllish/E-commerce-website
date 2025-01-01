import Link from 'next/link'

export default function OrderConfirmation() {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>
      <p className="mb-4">Thank you for your order! Your order has been received and is being processed.</p>
      <p className="mb-8">You will receive an email confirmation shortly.</p>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Continue Shopping
      </Link>
    </div>
  )
}

