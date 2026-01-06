'use client';

import { useRouter } from 'next/navigation';

export default function OrderConfirmationPage() {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push('/products');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Order Confirmed!</h1>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <p className="mt-4 text-gray-600">
            A confirmation email has been sent to your email address.
          </p>
          <div className="mt-8">
            <button
              onClick={handleContinueShopping}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}