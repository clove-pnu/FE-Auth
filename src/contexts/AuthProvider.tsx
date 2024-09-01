import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Auth } from '../utils/type';
import { getExistToken } from '../utils/auth';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<Auth>({ isLogin: false });
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  useEffect(() => {
    const token = getExistToken();

    if (token) {
      setAuth({ isLogin: true });
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
