import type { Metadata } from "next";
import "./globals.css";
import Socialmedia from "@/components/client components/socialmedia";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import ThemeModeProvider from "@/components/client components/themeProvider";
import { Inter, Zen_Dots } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; //to get analytics on site in vercel
import { SpeedInsights } from "@vercel/speed-insights/react"; //to get analytics on site in vercel

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const zen_dots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-zen-dots",
});

export const metadata: Metadata = {
  title: "dylexBenji's",
  description: "my app",
  icons: {
    icon: "logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${zen_dots.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeModeProvider>
          <Socialmedia />
          <Nav />
          <div className="w-auto flex justify-center overflow-hidden">
            {children}
          </div>

          <Footer />
          <ThemeModeProvider />
        </ThemeModeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
