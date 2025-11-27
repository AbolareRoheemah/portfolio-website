import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { AppProvider } from "./state/AppContext";
import Footer from "./components/Footer";
import CustomCursor from "@/app/components/CustomCursor";
import StructuredData from "./components/StructuredData"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Roheemah Abolare | Frontend & Blockchain Developer",
    template: "%s | Roheemah Abolare"
  },
  description: "Frontend and Blockchain Developer specializing in React, Next.js, Vue, Solidity, and Rust. Building user-centric web applications and secure smart contracts. Based in Lagos, Nigeria.",
  keywords: ["Frontend Developer", "Blockchain Developer", "React", "Next.js", "Vue", "Nuxt", "Solidity", "Rust", "Smart Contracts", "Web3", "DApps", "Lagos Nigeria", "Portfolio"],
  authors: [{ name: "Roheemah Abolare", url: "https://github.com/AbolareRoheemah" }],
  creator: "Roheemah Abolare",
  publisher: "Roheemah Abolare",
  metadataBase: new URL('https://abolare-roheemah.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abolare-roheemah.vercel.app",
    title: "Roheemah Abolare | Frontend & Blockchain Developer",
    description: "Frontend and Blockchain Developer specializing in React, Next.js, Vue, Solidity, and Rust. Building user-centric web applications and secure smart contracts.",
    siteName: "Roheemah Abolare Portfolio",
    images: [
      {
        url: "/profile-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roheemah Abolare - Frontend & Blockchain Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Roheemah Abolare | Frontend & Blockchain Developer",
    description: "Frontend and Blockchain Developer specializing in React, Next.js, Vue, Solidity, and Rust.",
    creator: "@Rhorheeymarh",
    images: ["/profile-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <AppProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw] overflow-x-hidden min-h-screen flex flex-col`}
        >
          <CustomCursor />
          <div>
            <Header />
          </div>
          <div className="flex-grow pt-[12vh]">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </body>
      </AppProvider>
    </html>
  );
}
