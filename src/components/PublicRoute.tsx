import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  return accessToken ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;