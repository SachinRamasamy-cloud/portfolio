import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if our fake token exists
  const isAuthenticated = localStorage.getItem('authToken');

  if (!isAuthenticated) {
    // If no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the dashboard
  return children;
};

export default ProtectedRoute;