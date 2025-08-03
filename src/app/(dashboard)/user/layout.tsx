"use client";

import ThemeRegistry from "@/styles/theme";
import SidebarUser from "@/components/SidebarUser";
import { Box } from "@mui/material";
import { useRoleGuard } from "@/hooks/useRoleGuard";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  useRoleGuard(["user"]);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: "flex" }}>
            <SidebarUser />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}