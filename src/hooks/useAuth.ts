"use client";

import { useAuthStore } from "@/store/useAuthStore";

export function useAuth() {
  const { user, role, setUser, logout } = useAuthStore();
  return { user, role, setUser, logout };
}