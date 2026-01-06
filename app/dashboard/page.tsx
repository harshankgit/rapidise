'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import Link from 'next/link';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => router.push('/')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Logout
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Welcome, {user?.username}!</h2>
              <p className="text-gray-600">You are successfully logged in to your account.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/products" className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                <h3 className="text-lg font-medium text-blue-900">Browse Products</h3>
                <p className="mt-2 text-blue-700">View and purchase products from our store</p>
              </Link>

              <Link href="/cart" className="bg-green-50 border border-green-200 rounded-lg p-6 hover:bg-green-100 transition-colors">
                <h3 className="text-lg font-medium text-green-900">Shopping Cart</h3>
                <p className="mt-2 text-green-700">View and manage items in your cart</p>
              </Link>

              <Link href="/orders" className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 hover:bg-yellow-100 transition-colors">
                <h3 className="text-lg font-medium text-yellow-900">Order History</h3>
                <p className="mt-2 text-yellow-700">View your past orders</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}