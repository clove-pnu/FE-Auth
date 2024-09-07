import axios from 'axios';

export const authInstance = axios.create({
  baseURL: '/auth',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});
