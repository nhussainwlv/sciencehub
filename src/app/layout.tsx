import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { ThemeScript } from "@/components/theme-script";
import { AppBackground } from "@/components/ui/app-background";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Science Hub — AI-Powered UK Science Learning",
    template: "%s | Science Hub",
  },
  description:
    "Master UK science from KS2 to GCSE with AI tutoring, adaptive quizzes, exam practice, and gamified learning.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-theme text-theme`}>
        <Providers>
          <AppBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
