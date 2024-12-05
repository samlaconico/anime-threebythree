import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Arimo } from 'next/font/google'

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

const arimo = Arimo({weight: "400", subsets: ['latin'], variable: "--font-arimo"})

export const metadata: Metadata = {
  title: "Three by Three",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} bg-zinc-900 m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
