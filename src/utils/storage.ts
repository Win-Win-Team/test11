import Cookies from "js-cookie";

const TokenKey = "token";

export const get = (key: string, defaultValue?: undefined) =>
  Cookies.get(key) ? JSON.parse(Cookies.get(key)) : defaultValue;

export const set = (key: string, value: any) =>
  Cookies.set(key, JSON.stringify(value));

export const removeCookies = (key: string) => Cookies.remove(key);

export const getToken = () => get(TokenKey);

export const setToken = (token: any) => set(TokenKey, token);

export const removeToken = () => removeCookies(TokenKey);
