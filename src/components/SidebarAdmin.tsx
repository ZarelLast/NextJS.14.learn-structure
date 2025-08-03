"use client";

import Link from "next/link";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

export default function SidebarAdmin() {
  return (
    <Box sx={{ width: 250, bgcolor: "#f0f0f0", height: "100vh", p: 2 }}>
      <List>
        <ListItemButton component={Link} href="/admin">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} href="/admin/users">
          <ListItemText primary="Manajemen User" />
        </ListItemButton>
        <ListItemButton component={Link} href="/admin/settings">
          <ListItemText primary="Pengaturan" />
        </ListItemButton>
        <ListItemButton component={Link} href="/admin/websocket">
          <ListItemText primary="WebSocket" />
        </ListItemButton>
      </List>
    </Box>
  );
}