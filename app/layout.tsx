import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

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



export const metadata = {
  title: "CalEasy",
  description: "Work Simplified, Time Amplified!",
  icons: "/logo.png",
  keywords:
    "CalEasy, scheduling, meetings, productivity, time management, calendar",
  author: "Fudail",
  openGraph: {
    title: "CalEasy",
    description: "Work Simplified, Time Amplified!",
    url: "https://calfudail.vercel.app",
    siteName: "StockHub",
    images: [
      {
        url: "https://calfudail.vercel.app/better.png",
        width: 1200,
        height: 630,
        alt: "CalEasy Logo and Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalEasy",
    description: "Work Simplified, Time Amplified!",
    images: ["https://calfudail.vercel.app/better.png"],
  },
  alternates: {
    canonical: "https://calfudail.vercel.app",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
