import type { Metadata } from "next";
import "./globals.css";

import QueryProvider from "@/components/providers/QueryProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import TopProgressBar from "@/components/ui/TopProgressBar";
import SplashScreen from "@/components/ui/SplashScreen";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "Vandin Royal Hotel & Suites | Premium Luxury Hotel",
  description: "Experience the ultimate luxury at Vandin Royal Hotel & Suites. Book bespoke suites, fine dining, and wellness retreats.",
  keywords: "Vandin Royal Hotel & Suites, luxury hotel, 5-star suites, fine dining, luxury spa, boutique hotel",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vandin Royal Hotel & Suites | Premium Luxury Hotel",
    description: "Experience the ultimate luxury at Vandin Royal Hotel & Suites.",
    siteName: "Vandin Royal Hotel & Suites",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#060608" />
      </head>
      <body className={`font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-black`}>
        <CustomCursor />
        <TopProgressBar />
        <QueryProvider>
          <SplashScreen>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </SplashScreen>
        </QueryProvider>
      </body>
    </html>
  );
}