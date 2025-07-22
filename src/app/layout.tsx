import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Transtionprovider from "@/components/Custom/TransitionProvider";
import InitialLoadingScreen from "@/components/Custom/intialscreen";
import SmoothScrolling from "@/components/Custom/SmoothScrolling";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Hassan Raza | MERN Stack Developer",
  description: "Passionate MERN Stack Developer crafting innovative web solutions with cutting-edge technologies. Explore my portfolio to see how I bring digital ideas to life.",
  keywords: ["MERN Stack", "Web Developer", "React Developer", "Node.js", "Portfolio", "Hassan Raza"],
  authors: [{ name: "Hassan Raza" }],
  icons: {
    icon: [
      {
         url: "/logoicon.png",
        sizes: "any",
      },
      {
        url: "/logoicon.png",
        type: "image/svg+xml",
        
      }
    ],
    apple: [
      { url: "/logoicon.png", }
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassanraza.dev",
    title: "Hassan Raza | MERN Stack Developer",
    description: "Passionate MERN Stack Developer crafting innovative web solutions with cutting-edge technologies.",
    siteName: "Hassan Raza Portfolio",
    images: [{
       url: "/logoicon.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Raza | MERN Stack Developer",
    description: "Passionate MERN Stack Developer crafting innovative web solutions with cutting-edge technologies.",
    images: ["/logoicon.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
          <SmoothScrolling>
          <InitialLoadingScreen />
          <Transtionprovider>
            {children}
            </Transtionprovider>
        </SmoothScrolling> 
      </body>
    </html>
  );
}
