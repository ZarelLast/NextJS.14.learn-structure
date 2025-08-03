"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

export function useRoleGuard(allowedRoles: ("admin" | "user" | "guest")[]) {
  const { role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!allowedRoles.includes(role)) {
      router.push("/login");
    }
  }, [role, allowedRoles, router]);
}