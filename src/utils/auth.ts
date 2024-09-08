export function setLogin() {
  localStorage.setItem('isLogin', 'true');
}

export function setLogout() {
  localStorage.setItem('isLogin', 'false');
}

export function getLoginFlag() {
  const flag = localStorage.getItem('isLogin');
  return flag === null ? 'false' : flag;
}
