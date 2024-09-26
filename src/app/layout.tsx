import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import theme from '../theme';
import "../styles/globals.css";
import "../styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Peak Engineering",
  description: "At Global Peak Engineering, we recognize the critical role these pillars play in the success of modern enterprises. Our purpose is clear: to empower businesses through a comprehensive suite of services that enhance security, optimize software infrastructure, and ensure access to top-tier talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
