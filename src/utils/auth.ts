export function setAccessToken(token: string) {
  localStorage.setItem('accessToken', token);
}

export function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export function setUserType(userType: 'CLIENT' | 'PROVIDER') {
  localStorage.setItem('userType', userType);
}

export function getUserType(): 'CLIENT' | 'PROVIDER' {
  const userType = localStorage.getItem('userType');
  if (userType === 'CLIENT' || userType === 'PROVIDER') {
    return userType;
  }

  return null;
}

export function setUserEmail(email: string) {
  localStorage.setItem('userEmail', email);
}

export function getUserEmail() {
  return localStorage.getItem('userEmail');
}

export function removeUserSessionData() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userType');
  localStorage.removeItem('userEmail');
}
