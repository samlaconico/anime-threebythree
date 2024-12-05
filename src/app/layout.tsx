import type { Metadata } from "next";
import "./globals.css";
import { Arimo } from 'next/font/google'

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
