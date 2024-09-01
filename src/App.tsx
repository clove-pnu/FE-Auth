import { BrowserRouter } from 'react-router-dom';
import UserStatusBar from './components/auth/UserStatusBar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthProvider from './contexts/AuthProvider';

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
