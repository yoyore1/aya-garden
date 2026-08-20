import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aya-garden-mauritius.bestm27.chatgpt.site"),
  title: "Aya Garden | Commercial Landscaping in Mauritius",
  description: "Large-scale landscape installation and grounds maintenance for hotels, malls, residential developments and institutions across Mauritius.",
  openGraph: {
    title: "Aya Garden | Commercial Landscaping in Mauritius",
    description: "Grounds that make an entrance. Large-scale landscape delivery and long-term care across Mauritius.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Aya Garden commercial landscaping in Mauritius" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aya Garden | Commercial Landscaping in Mauritius",
    description: "Grounds that make an entrance. Large-scale landscape delivery and long-term care across Mauritius.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/aya-logo.png",
    shortcut: "/aya-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MU">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
