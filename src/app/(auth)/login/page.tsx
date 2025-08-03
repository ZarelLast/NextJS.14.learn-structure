"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { redirectByRole } from "@/lib/auth";

export default function LoginPage() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");

  const handleLogin = () => {
    const fakeUser = {
      id: "1",
      name: "Ilham",
      email,
      role,
    };
    setUser(fakeUser);
    document.cookie = `token=12345; path=/`;
    window.location.href = redirectByRole(role);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value as any)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}