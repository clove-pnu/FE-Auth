import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Auth } from '../utils/type';
import { AuthContext } from './AuthContext';
import {
  getAccessToken, getUserEmail, getUserType, removeUserSessionData,
} from '../utils/auth';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<Auth>({
    isLogin: false,
    email: null,
    userType: null,
    accessToken: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const value = useMemo(() => ({ auth, setAuth, loading }), [auth, setAuth, loading]);

  useEffect(() => {
    const accessToken = getAccessToken();

    if (accessToken !== null) {
      const email = getUserEmail();
      const userType = getUserType();
      setAuth({
        isLogin: true,
        email,
        userType,
        accessToken,
      });
    } else {
      removeUserSessionData();
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
