import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/auth/SignupForm';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { signUp } from '../../apis/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === confirmPassword) {
      fetchWithHandler(() => signUp({ email, password }), {
        onSuccess: (response) => {
          alert(`${response.data.email}로 회원가입이 완료되었습니다.`);
          navigate('/');
        },
        onError: () => {
          alert('회원가입에 실패하였습니다.');
        },
      });

      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('비밀번호와 비밀번호 확인이 다릅니다.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="my-4 text-4xl font-bold">Register</h1>
      <RegisterForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleRegister={handleRegister}
      />
    </div>
  );
}
