import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function adminMiddleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value || "guest";
  if (role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
