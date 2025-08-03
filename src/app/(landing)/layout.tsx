import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeRegistry from "@/styles/theme";
import { Container } from "@mui/material";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {children}
          </Container>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}