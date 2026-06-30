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
  metadataBase: new URL("https://example.com"),

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
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
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
      <body className="min-h-full flex flex-col bg-[#09090B] text-white">
        {children}
      </body>
    </html>
  );
}