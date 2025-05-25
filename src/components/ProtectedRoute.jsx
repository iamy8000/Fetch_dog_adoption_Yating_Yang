import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      setAuthorized(auth);
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return null;
  return authorized ? children : <Navigate to="/" />;
}