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

const siteUrl = "https://portfolio-ruddy-two-44.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Hassan Raza | Full Stack SaaS Engineer",
    template: "%s | Muhammad Hassan Raza",
  },
  description:
    "Muhammad Hassan Raza (Hassan Raza) — Full Stack SaaS Engineer in Pakistan with 3+ years building B2B platforms, Next.js & NestJS APIs, Shopify integrations, and scalable web apps. Portfolio, projects, and resume.",
  applicationName: "Muhammad Hassan Raza Portfolio",
  keywords: [
    "Muhammad Hassan Raza",
    "Hassan Raza",
    "M Hassan Raza",
    "Hassan Raza Developer",
    "Hassan Raza Portfolio",
    "Hassan Raza Full Stack SaaS Engineer",
    "Hassan Raza Full Stack Developer",
    "Hassan Raza Web Developer",
    "Hassan Raza Next.js",
    "Hassan Raza NestJS",
    "Full Stack SaaS Engineer Pakistan",
    "Full Stack Developer Pakistan",
    "Full Stack SaaS Engineer",
    "Solutions Architect",
    "AWS Solutions Architect",
    "B2B SaaS Developer",
    "Next.js Developer",
    "NestJS Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Shopify GraphQL Integration",
    "TikTok Shop Integration",
    "PostgreSQL",
    "MongoDB",
    "GraphQL Developer",
    "Servia Helpdesk",
    "Expert One",
    "VAYAFAC",
    "Career Years",
    "MockMaster",
    "hire full stack developer",
    "portfolio hassan raza",
  ],
  authors: [
    { name: "Muhammad Hassan Raza", url: siteUrl },
    { name: "Hassan Raza", url: siteUrl },
  ],
  creator: "Muhammad Hassan Raza",
  publisher: "Muhammad Hassan Raza",
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
    shortcut: ["/favicon.png"],
  },
  manifest: undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Muhammad Hassan Raza | Full Stack SaaS Engineer",
    description:
      "Portfolio of Muhammad Hassan Raza — Full Stack SaaS Engineer building B2B platforms, NestJS/Next.js APIs, and Shopify integrations. 3+ years experience. Learning AWS Solutions Architect.",
    siteName: "Muhammad Hassan Raza | Full Stack SaaS Engineer",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Hassan Raza - Full Stack SaaS Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Raza | Full Stack SaaS Engineer",
    description:
      "Full Stack SaaS Engineer specializing in Next.js, NestJS, B2B SaaS, and third-party integrations. View projects and download resume.",
    images: ["/favicon.png"],
    creator: "@HassanR089",
    site: "@HassanR089",
  },
  verification: {
    google: "Ie8SsQSMJSKoUZ7CTYGigz_9V8G0ulYG_S7fy-MgiUg",
  },
  other: {
    "google-site-verification": "Ie8SsQSMJSKoUZ7CTYGigz_9V8G0ulYG_S7fy-MgiUg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Muhammad Hassan Raza",
    alternateName: ["Hassan Raza", "M Hassan Raza"],
    url: siteUrl,
    image: `${siteUrl}/favicon.png`,
    jobTitle: "Full Stack SaaS Engineer",
    description:
      "Full Stack SaaS Engineer with 3+ years building scalable B2B platforms, APIs, and third-party integrations. Learning AWS Solutions Architect.",
    email: "mailto:m.hassan.raza.dev@gmail.com",
    telephone: "+92-3265527246",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jhelum",
      addressCountry: "PK",
    },
    nationality: "Pakistani",
    knowsAbout: [
      "Full Stack SaaS",
      "Solutions Architecture",
      "AWS Solutions Architect",
      "React",
      "Node.js",
      "Next.js",
      "NestJS",
      "TypeScript",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Shopify APIs",
      "TikTok Shop",
      "B2B SaaS",
      "Turborepo",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Punjab University",
    },
    worksFor: {
      "@type": "Organization",
      name: "ISS (Servia Helpdesk)",
    },
    sameAs: [
      "https://github.com/HassanWebdev",
      "https://linkedin.com/in/muhammad-hassan-raza-a64b9b306",
      "https://twitter.com/HassanR089",
      "https://instagram.com/hassan__0__1__0",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Muhammad Hassan Raza Portfolio",
    description:
      "Official portfolio of Muhammad Hassan Raza — Full Stack SaaS Engineer.",
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: "en-US",
  };

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: "Muhammad Hassan Raza | Full Stack SaaS Engineer",
    mainEntity: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd, profileJsonLd]),
          }}
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
