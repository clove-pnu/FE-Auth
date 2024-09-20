import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute() {
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.isLogin) {
      const loginURL = process.env.NODE_ENV === 'production'
        ? 'http://34.47.117.26/page/main/login'
        : 'http://localhost:3000/page/main/login';

      window.location.href = loginURL;
    }
  }, [auth.isLogin]);

  if (!auth.isLogin) {
    return null;
  }

  return <Outlet />;
}
