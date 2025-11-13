import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children, redirectTo = '/dashboard' }) => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading state while verifying authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Redirect authenticated users to dashboard
  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Render public content (login/register)
  return children;
};

export default PublicRoute;
