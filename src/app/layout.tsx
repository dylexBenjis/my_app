import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Socialmedia from "./components/client components/socialmedia";
import Footer from "./components/footer";
import Nav from "./components/nav";
import ThemeModeProvider from "./components/client components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dylexBenji's",
  description: "my app",
  icons: {
    icon:'logo.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeModeProvider attribute="class" defaultTheme="system" enableSystem>
        <Socialmedia />
        <Nav />
        <div>{children}</div>
        <Footer/>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
