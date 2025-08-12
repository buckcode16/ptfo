import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxygen_Mono, Oxygen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxygenSans = Oxygen({
  variable: "--font-oxygen-sans",
  weight: "400",
  subsets: ["latin"],
});

const oxygenMono = Oxygen_Mono({
  variable: "--font-oxygen-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bucky Wong | Portfolio",
  description: "Resume can be downloaded",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxygenSans.variable} ${oxygenMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
