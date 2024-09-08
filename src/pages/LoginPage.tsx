import { useEffect, useState } from 'react';
import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import useAuth from '../hooks/useAuth';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { LoginResponse } from '../utils/type';
import { login } from '../apis/auth';
import styles from './styles/LoginPage.module.css';
import { setLogin } from '../utils/auth';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLogin) {
      navigate(location.state?.from || '/', { replace: true });
    }
  }, [auth.isLogin, location.state?.from, navigate]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchWithHandler<LoginResponse>(() => login({ email, password }), {
      onSuccess: () => {
        setLogin();
        setAuth({ isLogin: true });
      },
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
    });

    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <div className={styles.container}>
        <Link to="/" className={styles.homeLink}>Clove</Link>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
        <Link to="/signup">회원가입</Link>
      </div>
    </main>
  );
}
