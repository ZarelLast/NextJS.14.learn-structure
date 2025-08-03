import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
      <Typography variant="body2">© {new Date().getFullYear()} My Website</Typography>
    </Box>
  );
}