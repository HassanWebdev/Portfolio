import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Transtionprovider from "@/components/Custom/TransitionProvider";
import InitialLoadingScreen from "@/components/Custom/intialscreen";
import SmoothScrolling from "@/components/Custom/SmoothScrolling";
import Mouse from "@/components/mouse";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Muhammad Hassan Raza | Full Stack MERN Developer & Web Developer",
  description:
    "Muhammad Hassan Raza - Professional MERN Stack & Full Stack Developer specializing in React, Node.js, Next.js, and modern web development. 2+ years experience building scalable web applications.",
  keywords: [
    "Muhammad Hassan Raza",
    "Hassan Raza",
    "Hassan Raza Developer",
    "Hassan Raza MERN Stack",
    "Hassan Raza Full Stack",
    "Hassan Raza Full Stack Developer",
    "Hassan Raza Web Developer",
    "Hassan Raza React Developer",
    "Hassan Raza Portfolio",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MongoDB",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "NestJS",
    "Full-Stack Development",
    "Web Applications",
    "Professional Web Developer",
  ],
  authors: [{ name: "Muhammad Hassan Raza" }, { name: "Hassan Raza" }],
  creator: "Muhammad Hassan Raza",
  publisher: "Muhammad Hassan Raza",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hassanraza.dev",
  },
  icons: {
    icon: [
      {
        url: "/logoicon.png",
        sizes: "any",
      },
      {
        url: "/logoicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: [{ url: "/logoicon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassanraza.dev",
    title: "Muhammad Hassan Raza | Full Stack MERN Developer & Web Developer",
    description:
      "Muhammad Hassan Raza - Professional MERN Stack & Full Stack Developer specializing in React, Node.js, Next.js, and modern web development. 2+ years experience building scalable web applications.",
    siteName: "Muhammad Hassan Raza - Full Stack Developer Portfolio",
    images: [
      {
        url: "/logoicon.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Hassan Raza - Full Stack MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Raza | Full Stack MERN Developer",
    description:
      "Professional MERN Stack & Full Stack Developer specializing in React, Node.js, Next.js. 2+ years building scalable web applications.",
    images: ["/logoicon.png"],
    creator: "@hassanraza",
  },
  verification: {
    google: "Ie8SsQSMJSKoUZ7CTYGigz_9V8G0ulYG_S7fy-MgiUg",
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
          {/* <InitialLoadingScreen /> */}
          <Mouse>
            <Transtionprovider>{children}</Transtionprovider>
          </Mouse>
        </SmoothScrolling>
      </body>
    </html>
  );
}
