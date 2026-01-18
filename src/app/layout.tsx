import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Transtionprovider from "@/components/Custom/TransitionProvider";
import InitialLoadingScreen from "@/components/Custom/intialscreen";
import SmoothScrolling from "@/components/Custom/SmoothScrolling";
import Mouse from "@/components/mouse";
import ResumeFloat from "@/components/Resumefloat";

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
    canonical: "https://www.hassan-raza.tech",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
      },
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: [{ url: "/favicon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hassan-raza.tech",
    title: "Muhammad Hassan Raza | Full Stack MERN Developer & Web Developer",
    description:
      "Muhammad Hassan Raza - Professional MERN Stack & Full Stack Developer specializing in React, Node.js, Next.js, and modern web development. 2+ years experience building scalable web applications.",
    siteName: "Muhammad Hassan Raza - Full Stack Developer Portfolio",
    images: [
      {
        url: "/favicon.png",
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
    images: ["/favicon.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Hassan Raza",
    alternateName: "Hassan Raza",
    url: "https://www.hassan-raza.tech",
    jobTitle: "Full Stack MERN Developer",
    description:
      "Professional MERN Stack & Full Stack Developer specializing in React, Node.js, Next.js, and modern web development with 2+ years of experience.",
    knowsAbout: [
      "MERN Stack",
      "React",
      "Node.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Full Stack Development",
      "Web Development",
    ],
    sameAs: [
      "https://github.com/yourgithub",
      "https://linkedin.com/in/yourlinkedin",
      "https://twitter.com/hassanraza",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SmoothScrolling>
          <InitialLoadingScreen />
          <Mouse>
            <Transtionprovider>{children}</Transtionprovider>
          </Mouse>
        </SmoothScrolling>
        <ResumeFloat />
      </body>
    </html>
  );
}
