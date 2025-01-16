import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, options);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const getAllCookie = () => {
  return cookies.getAll();
};

export const deleteCookie = (name: string) => {
  return cookies.remove(name);
};
