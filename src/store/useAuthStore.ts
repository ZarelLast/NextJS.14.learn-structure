import { create } from "zustand";
import Cookies from "js-cookie";

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
};

type AuthState = {
  user: User | null;
  role: "admin" | "user" | "guest";
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: "guest",
  setUser: (user) => {
    set({ user, role: user?.role || "guest" });
    if (user) {
      Cookies.set("role", user.role);
    } else {
      Cookies.remove("role");
    }
  },
  logout: () => {
    set({ user: null, role: "guest" });
    Cookies.remove("token");
    Cookies.remove("role");
    window.location.href = "/login";
  },
}));
