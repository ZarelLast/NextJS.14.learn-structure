import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function userMiddleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value || "guest";
  if (role !== "user") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}