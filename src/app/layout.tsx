import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "../styles/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  manifest: "/site.webmanifest",

  title: {
    default: "Saswata | Cybersecurity Research",
    template: "%s | Saswata",
  },

  description:
    "Cybersecurity Research, OSINT, Bug Bounty, Linux, Networking, Web Security and personal technical notes.",

  keywords: [
    "Cybersecurity",
    "Ethical Hacking",
    "OSINT",
    "Bug Bounty",
    "Linux",
    "Networking",
    "Web Security",
    "CTF",
    "Penetration Testing",
  ],

  authors: [
    {
      name: "Saswata",
    },
  ],

  creator: "Saswata",

  applicationName: "Cyber Journal",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://your-domain.com",
  },

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Cyber Journal",

    title: "Saswata | Cybersecurity Research",

    description:
      "Cybersecurity Research, OSINT, Bug Bounty, Linux, Networking and Web Security.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyber Journal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cyber Journal",

    description:
      "Cybersecurity Research & Personal Notes.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090B] text-white antialiased selection:bg-green-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}