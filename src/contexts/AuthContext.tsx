import { createContext } from 'react';
import { Auth } from '../utils/type';

export const AuthContext = createContext<{
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}>({
  auth: null,
  setAuth: null,
});
