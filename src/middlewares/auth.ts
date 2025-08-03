import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value || "guest";

  if (token) {
    if (role === "admin") return NextResponse.redirect(new URL("/admin", req.url));
    if (role === "user") return NextResponse.redirect(new URL("/user", req.url));
  }

  return NextResponse.next();
}