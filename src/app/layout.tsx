import type { Metadata } from "next";
import "./globals.css";
import Socialmedia from "@/components/client components/socialmedia";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import ThemeModeProvider from "@/components/client components/themeProvider";
import { Inter, Roboto_Mono, Zen_Dots } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-inter',
})
 
const zen_dots = Zen_Dots({
  subsets: ['latin'],
  weight:'400',
  display: 'swap',
  variable:'--font-zen-dots',
})


export const metadata: Metadata = {
  title: "dylexBenji's",
  description: "my app",
  icons: {
    icon:'logo.jpg'
  }
};


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>)
{
  return (
    <html lang="en" className={`${inter.variable} ${zen_dots.variable}`} suppressHydrationWarning>
      <body  className='bg-gray-400/30 dark:bg-[#04050c]'>
        
        <ThemeModeProvider>
        <Socialmedia />
        <Nav />
        <div>{children}</div>
        <Footer/>
        <ThemeModeProvider/>
        </ThemeModeProvider>

      </body>
    </html>
  );
}
