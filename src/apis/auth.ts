import { AxiosResponse } from 'axios';
import { authInstance } from './instance';
import { LoginResponse, SignUpResponse } from '../utils/type';

interface LoginParams {
  email: string;
  password: string;
}

interface ReissueParams {
  accessToken: string;
}

export async function signUp({
  email,
  password,
}: LoginParams): Promise<AxiosResponse<SignUpResponse>> {
  return authInstance.post('/signup', {
    email, password,
  });
}

export async function login({
  email,
  password,
}: LoginParams): Promise<AxiosResponse<LoginResponse>> {
  return authInstance.post('/login', {
    email, password,
  });
}

export async function reissue({
  accessToken,
}: ReissueParams): Promise<AxiosResponse<LoginResponse>> {
  return authInstance.post('/reissue', {
    accessToken,
  });
}
