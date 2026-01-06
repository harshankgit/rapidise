'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PublicRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export default function PublicRoute({ 
  children, 
  redirectPath = '/dashboard' 
}: PublicRouteProps) {
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push(redirectPath);
    }
  }, [isAuthenticated, loading, redirectPath, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null; 
  }

  return <>{children}</>;
}