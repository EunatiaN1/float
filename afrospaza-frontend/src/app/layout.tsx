import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Autonomous Micro-Commerce & XRPL Settlement`,
  description: siteConfig.description,
  icons: {
    icon: "/icons/spaza.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-zinc-100 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
