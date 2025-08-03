export function checkRole(
  userRole: "admin" | "user" | "guest",
  allowedRoles: ("admin" | "user" | "guest")[]
) {
  return allowedRoles.includes(userRole);
}

export function redirectByRole(role: "admin" | "user" | "guest") {
  if (role === "admin") return "/admin";
  if (role === "user") return "/user";
  return "/";
}