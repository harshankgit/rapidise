'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OrderDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);

  const order = {
    id: parseInt(id as string),
    date: '2023-05-15',
    items: [
      {
        id: 1,
        title: 'Wireless Headphones',
        price: 49.99,
        quantity: 1,
        thumbnail: 'https://via.placeholder.com/100x100',
      },
      {
        id: 2,
        title: 'Phone Case',
        price: 19.99,
        quantity: 2,
        thumbnail: 'https://via.placeholder.com/100x100',
      },
    ],
    total: 89.97,
    status: 'Delivered',
    shippingAddress: '123 Main St, City, State 12345',
    paymentMethod: 'Credit Card ending in 1234',
  };
  const mockOrders: Record<number, any> = {
    1: {
      id: 1,
      date: '2023-05-15',
      items: [
        {
          id: 1,
          title: 'Wireless Headphones',
          price: 49.99,
          quantity: 1,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
        {
          id: 2,
          title: 'Phone Case',
          price: 19.99,
          quantity: 2,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
      ],
      total: 89.97,
      status: 'Delivered',
      shippingAddress: '123 Main St, City, State 12345',
      paymentMethod: 'Credit Card ending in 1234',
    },
    2: {
      id: 2,
      date: '2023-06-22',
      items: [
        {
          id: 3,
          title: 'Laptop Stand',
          price: 39.99,
          quantity: 1,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
        {
          id: 4,
          title: 'USB Cable',
          price: 12.99,
          quantity: 2,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
        {
          id: 5,
          title: 'Wireless Mouse',
          price: 25.50,
          quantity: 1,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
        {
          id: 6,
          title: 'Keyboard',
          price: 47.02,
          quantity: 1,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
      ],
      total: 145.50,
      status: 'Shipped',
      shippingAddress: '456 Oak Ave, Town, State 67890',
      paymentMethod: 'PayPal',
    },
    3: {
      id: 3,
      date: '2023-07-30',
      items: [
        {
          id: 7,
          title: 'Coffee Mug',
          price: 12.99,
          quantity: 1,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
        {
          id: 8,
          title: 'Notebook',
          price: 33.00,
          quantity: 1,
          thumbnail: 'https://via.placeholder.com/100x100',
        },
      ],
      total: 45.99,
      status: 'Processing',
      shippingAddress: '789 Pine Rd, Village, State 54321',
      paymentMethod: 'Debit Card ending in 5678',
    },
  };

  const orderDetails = mockOrders[parseInt(id as string)] || order;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Orders
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
            <div></div> 
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Order #{orderDetails.id}</h2>
                <p className="text-gray-700">Placed on {orderDetails.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                orderDetails.status === 'Delivered'
                  ? 'bg-green-100 text-green-800'
                  : orderDetails.status === 'Shipped'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
              }`}>
                {orderDetails.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Shipping Address</h3>
                <p className="text-gray-800">{orderDetails.shippingAddress}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Payment Method</h3>
                <p className="text-gray-800">{orderDetails.paymentMethod}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {orderDetails.items.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-gray-700">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium">${orderDetails.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Tax</span>
                <span className="font-medium">${(orderDetails.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">${(orderDetails.total * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}