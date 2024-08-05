export interface Auth {
  isLogin: boolean;
}

export interface SignUpResponse {
  email: string;
}

export interface LoginResponse {
  grantType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
}
