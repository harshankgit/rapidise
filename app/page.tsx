import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ShopEasy</h1>
          <p className="text-xl text-gray-600 mb-8">Your one-stop shop for all your needs</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Wide Selection</h2>
            <p className="text-gray-600">Browse our extensive collection of products from various categories.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Secure Checkout</h2>
            <p className="text-gray-600">Shop with confidence using our secure payment processing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fast Shipping</h2>
            <p className="text-gray-600">Get your products delivered quickly to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
