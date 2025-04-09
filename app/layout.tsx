import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cute Registration Form",
  description: "A multi-step registration form with validation",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            <header className="container mx-auto py-4 px-4 flex justify-end">
              <ThemeToggle />
            </header>
            <main className="container mx-auto py-6 px-4">{children}</main>
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
