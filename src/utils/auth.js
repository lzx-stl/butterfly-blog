import Cookies from "js-cookie";

//token
const TokenKey = "token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getItem(key) {
  return window.localStorage.getItem(key);
}

export function setItem(key, value) {
  return window.localStorage.setItem(key, value);
}

export function removeItem(key) {
  return window.localStorage.removeItem(key);
}
