import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminMiddleware } from "./middlewares/admin";
import { userMiddleware } from "./middlewares/user";
import { authMiddleware } from "./middlewares/auth";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/admin")) return adminMiddleware(req);
  if (path.startsWith("/user")) return userMiddleware(req);
  if (["/login", "/register"].includes(path)) return authMiddleware(req);

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/login", "/register"],
};