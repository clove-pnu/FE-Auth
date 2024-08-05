import { Link } from 'react-router-dom';
import { deleteToken } from '../../utils/auth';
import { useAuth } from '../../hooks/useAuth';
import Divider from '../common/Divider';
import styles from '../styles/UserStatusBar.module.css';

export default function UserStatusBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    deleteToken();
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
      <div>
        사용자 이름
      </div>
      <Divider />
      <Link to="./owner">
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
