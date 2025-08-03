"use client";

import ThemeRegistry from "@/styles/theme";
import SidebarAdmin from "@/components/SidebarAdmin";
import { Box } from "@mui/material";
import { useRoleGuard } from "@/hooks/useRoleGuard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  useRoleGuard(["admin"]);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: "flex" }}>
            <SidebarAdmin />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}