import { BrowserRouter } from 'react-router-dom';
import UserStatusBar from './components/auth/UserStatusBar';
import { AuthProvider } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <LoginPage />
        <SignupPage />
        <UserStatusBar />
      </BrowserRouter>
    </AuthProvider>
  );
}
