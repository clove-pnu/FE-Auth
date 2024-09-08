import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Auth } from '../utils/type';
import { AuthContext } from './AuthContext';
import { getLoginFlag } from '../utils/auth';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<Auth>({ isLogin: false });
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  useEffect(() => {
    const token = getLoginFlag();

    if (token === 'true') {
      setAuth({ isLogin: true });
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
