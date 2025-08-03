"use client";

import Link from "next/link";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

export default function SidebarUser() {
  return (
    <Box sx={{ width: 250, bgcolor: "#f0f0f0", height: "100vh", p: 2 }}>
      <List>
        <ListItemButton component={Link} href="/user">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} href="/user/orders">
          <ListItemText primary="Pesanan" />
        </ListItemButton>
        <ListItemButton component={Link} href="/user/profile">
          <ListItemText primary="Profil" />
        </ListItemButton>
      </List>
    </Box>
  );
}