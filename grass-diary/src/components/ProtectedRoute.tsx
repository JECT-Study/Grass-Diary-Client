import { useAuth } from '@state/auth/useAuth';
import { Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Layout /> : <Navigate to="/" />;
};

export default ProtectedRoute;
