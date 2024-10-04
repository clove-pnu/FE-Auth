import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/auth/SignupForm';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { signUp } from '../apis/auth';
import styles from './styles/SignupPage.module.css';
import useTitle from '../hooks/useTitle';

export default function SignupPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [userType, setUserType] = useState<'CLIENT' | 'PROVIDER'>('CLIENT');
  const navigate = useNavigate();

  useTitle('회원가입');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === confirmPassword) {
      fetchWithHandler(() => signUp({
        email, password, userType,
      }), {
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
    <main>
      <div className={styles.container}>
        <Link to="/" className={styles.homeLink}>
          <svg width="91" height="32" viewBox="0 0 91 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7179 9.576C11.8699 9.576 10.4539 10.14 9.46991 11.268C8.48591 12.396 7.99391 13.992 7.99391 16.056C7.99391 18.144 8.53391 19.752 9.61391 20.88C10.7179 22.008 12.1939 22.572 14.0419 22.572C15.0259 22.572 15.8539 22.44 16.5259 22.176C17.2219 21.912 17.8819 21.612 18.5059 21.276C18.9139 21.612 19.2259 22.02 19.4419 22.5C19.6819 22.956 19.8019 23.496 19.8019 24.12C19.8019 25.104 19.2499 25.944 18.1459 26.64C17.0659 27.312 15.4099 27.648 13.1779 27.648C11.5699 27.648 10.0579 27.42 8.64191 26.964C7.22591 26.508 5.98991 25.812 4.93391 24.876C3.87791 23.916 3.03791 22.716 2.41391 21.276C1.81391 19.812 1.51391 18.072 1.51391 16.056C1.51391 14.184 1.80191 12.54 2.37791 11.124C2.97791 9.684 3.78191 8.472 4.78991 7.488C5.82191 6.504 7.02191 5.76 8.38991 5.256C9.75791 4.752 11.2219 4.5 12.7819 4.5C14.9899 4.5 16.6939 4.86 17.8939 5.58C19.1179 6.3 19.7299 7.224 19.7299 8.352C19.7299 8.976 19.5739 9.516 19.2619 9.972C18.9499 10.428 18.5899 10.788 18.1819 11.052C17.5579 10.644 16.8859 10.296 16.1659 10.008C15.4699 9.72 14.6539 9.576 13.7179 9.576ZM28.9203 26.964C28.6563 27.012 28.2603 27.072 27.7323 27.144C27.2283 27.24 26.7123 27.288 26.1843 27.288C25.6563 27.288 25.1763 27.252 24.7443 27.18C24.3363 27.108 23.9883 26.964 23.7003 26.748C23.4123 26.532 23.1843 26.244 23.0163 25.884C22.8723 25.5 22.8003 25.008 22.8003 24.408V3.528C23.0643 3.48 23.4483 3.42 23.9523 3.348C24.4803 3.252 25.0083 3.204 25.5363 3.204C26.0643 3.204 26.5323 3.24 26.9403 3.312C27.3723 3.384 27.7323 3.528 28.0203 3.744C28.3083 3.96 28.5243 4.26 28.6683 4.644C28.8363 5.004 28.9203 5.484 28.9203 6.084V26.964ZM50.8902 18.252C50.8902 19.74 50.6622 21.072 50.2062 22.248C49.7502 23.4 49.1022 24.372 48.2622 25.164C47.4462 25.956 46.4622 26.556 45.3102 26.964C44.1582 27.372 42.8742 27.576 41.4582 27.576C40.0422 27.576 38.7582 27.36 37.6062 26.928C36.4542 26.496 35.4582 25.884 34.6182 25.092C33.8022 24.276 33.1662 23.292 32.7102 22.14C32.2542 20.988 32.0262 19.692 32.0262 18.252C32.0262 16.836 32.2542 15.552 32.7102 14.4C33.1662 13.248 33.8022 12.276 34.6182 11.484C35.4582 10.668 36.4542 10.044 37.6062 9.612C38.7582 9.18 40.0422 8.964 41.4582 8.964C42.8742 8.964 44.1582 9.192 45.3102 9.648C46.4622 10.08 47.4462 10.704 48.2622 11.52C49.1022 12.312 49.7502 13.284 50.2062 14.436C50.6622 15.588 50.8902 16.86 50.8902 18.252ZM38.2902 18.252C38.2902 19.716 38.5662 20.844 39.1182 21.636C39.6942 22.404 40.4862 22.788 41.4942 22.788C42.5022 22.788 43.2702 22.392 43.7982 21.6C44.3502 20.808 44.6262 19.692 44.6262 18.252C44.6262 16.812 44.3502 15.708 43.7982 14.94C43.2462 14.148 42.4662 13.752 41.4582 13.752C40.4502 13.752 39.6702 14.148 39.1182 14.94C38.5662 15.708 38.2902 16.812 38.2902 18.252ZM65.1189 26.532C64.7829 26.796 64.2909 27.012 63.6429 27.18C62.9949 27.348 62.2629 27.432 61.4469 27.432C60.5109 27.432 59.6949 27.312 58.9989 27.072C58.3269 26.832 57.8589 26.448 57.5949 25.92C57.3789 25.512 57.1149 24.948 56.8029 24.228C56.5149 23.484 56.2029 22.668 55.8669 21.78C55.5309 20.868 55.1829 19.896 54.8229 18.864C54.4629 17.832 54.1149 16.812 53.7789 15.804C53.4669 14.796 53.1789 13.824 52.9149 12.888C52.6509 11.952 52.4349 11.124 52.2669 10.404C52.6029 10.068 53.0469 9.78 53.5989 9.54C54.1749 9.276 54.7989 9.144 55.4709 9.144C56.3109 9.144 56.9949 9.324 57.5229 9.684C58.0749 10.02 58.4829 10.668 58.7469 11.628L60.1509 17.136C60.4149 18.216 60.6669 19.2 60.9069 20.088C61.1469 20.952 61.3269 21.624 61.4469 22.104H61.6269C62.0829 20.328 62.5629 18.36 63.0669 16.2C63.5709 14.04 64.0269 11.916 64.4349 9.828C64.8429 9.612 65.2989 9.444 65.8029 9.324C66.3309 9.204 66.8349 9.144 67.3149 9.144C68.1549 9.144 68.8629 9.324 69.4389 9.684C70.0149 10.044 70.3029 10.668 70.3029 11.556C70.3029 11.94 70.2069 12.504 70.0149 13.248C69.8469 13.968 69.6189 14.796 69.3309 15.732C69.0669 16.644 68.7429 17.616 68.3589 18.648C67.9989 19.68 67.6269 20.688 67.2429 21.672C66.8589 22.656 66.4749 23.58 66.0909 24.444C65.7309 25.284 65.4069 25.98 65.1189 26.532ZM82.1123 27.576C80.6963 27.576 79.3763 27.384 78.1523 27C76.9523 26.592 75.8963 25.992 74.9843 25.2C74.0963 24.408 73.3883 23.412 72.8603 22.212C72.3563 21.012 72.1043 19.608 72.1043 18C72.1043 16.416 72.3563 15.06 72.8603 13.932C73.3883 12.78 74.0723 11.844 74.9123 11.124C75.7523 10.38 76.7123 9.84 77.7923 9.504C78.8723 9.144 79.9763 8.964 81.1043 8.964C82.3763 8.964 83.5283 9.156 84.5603 9.54C85.6163 9.924 86.5163 10.452 87.2603 11.124C88.0283 11.796 88.6163 12.6 89.0243 13.536C89.4563 14.472 89.6723 15.492 89.6723 16.596C89.6723 17.412 89.4443 18.036 88.9883 18.468C88.5323 18.9 87.8963 19.176 87.0803 19.296L78.1883 20.628C78.4523 21.42 78.9923 22.02 79.8083 22.428C80.6243 22.812 81.5603 23.004 82.6163 23.004C83.6003 23.004 84.5243 22.884 85.3883 22.644C86.2763 22.38 86.9963 22.08 87.5483 21.744C87.9323 21.984 88.2563 22.32 88.5203 22.752C88.7843 23.184 88.9163 23.64 88.9163 24.12C88.9163 25.2 88.4123 26.004 87.4043 26.532C86.6363 26.94 85.7723 27.216 84.8123 27.36C83.8523 27.504 82.9523 27.576 82.1123 27.576ZM81.1043 13.428C80.5283 13.428 80.0243 13.524 79.5923 13.716C79.1843 13.908 78.8483 14.16 78.5843 14.472C78.3203 14.76 78.1163 15.096 77.9723 15.48C77.8523 15.84 77.7803 16.212 77.7563 16.596L83.9123 15.588C83.8403 15.108 83.5763 14.628 83.1203 14.148C82.6643 13.668 81.9923 13.428 81.1043 13.428Z" fill="black" />
          </svg>
        </Link>
        <RegisterForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          handleRegister={handleRegister}
          userType={userType}
          setUserType={setUserType}
        />
      </div>
    </main>
  );
}
