import ThemeRegistry from "@/styles/theme";
import { Container } from "@mui/material";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Container maxWidth="sm" sx={{ py: 6 }}>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}