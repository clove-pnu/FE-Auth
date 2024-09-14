import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Divider from '../common/Divider';
import styles from '../styles/UserStatusBar.module.css';
import { setLogout } from '../../utils/auth';
import { logout } from '../../apis/auth';

export default function UserStatusBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setLogout();
    logout();
    setAuth({ isLogin: false });
  };

  if (!auth.isLogin) {
    return (
      <div className={styles.container}>
        <Link to="/login">로그인</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to={process.env.NODE_ENV === 'production'
        ? 'http://34.47.117.26/page/main/myTicket'
        : 'http://localhost:3000/myTicket'}
      >
        티켓 관리
      </Link>
      <Link to={process.env.NODE_ENV === 'production'
        ? 'http://34.47.117.26/page/main/owner'
        : 'http://localhost:3000/owner'}
      >
        공연 관리
      </Link>
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
