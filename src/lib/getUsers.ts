import Cookies from "js-cookie";

export function getUserFromCookie() {
  const user = Cookies.get("user");
  return user ? JSON.parse(user) : null;
}