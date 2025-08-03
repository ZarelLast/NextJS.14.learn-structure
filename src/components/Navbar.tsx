"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { role, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
        <Button color="inherit" component={Link} href="/blog">
          Blog
        </Button>

        {role === "guest" && (
          <Button color="inherit" component={Link} href="/login">
            Login
          </Button>
        )}

        {role !== "guest" && (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}