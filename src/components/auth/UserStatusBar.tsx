import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Divider from '../common/Divider';
import styles from '../styles/UserStatusBar.module.css';
import { logout } from '../../apis/auth';
import { removeUserSessionData } from '../../utils/auth';

export default function UserStatusBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    removeUserSessionData();
    logout();
    setAuth({
      isLogin: false,
      email: null,
      userType: null,
      accessToken: null,
    });
  };

  if (!auth.isLogin) {
    return (
      <div className={styles.container}>
        <Link to={process.env.NODE_ENV === 'production'
          ? 'http://34.47.117.26/page/main/login'
          : 'http://localhost:3000/page/main/login'}
        >
          로그인
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>{auth.email}</div>
      {auth.userType === 'CLIENT' && (
      <Link to={process.env.NODE_ENV === 'production'
        ? 'http://34.47.117.26/page/main/myTicket'
        : 'http://localhost:3000/page/main/myTicket'}
      >
        티켓 관리
      </Link>
      )}
      {auth.userType === 'PROVIDER' && (
      <Link to={process.env.NODE_ENV === 'production'
        ? 'http://34.47.117.26/page/main/owner'
        : 'http://localhost:3000/page/main/owner'}
      >
        공연 관리
      </Link>
      )}
      <Divider />
      <div>
        <button
          className={styles.logout}
          type="button"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
