import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const Gambarino = localFont({
  src: "../../public/assets/fonts/Gambarino-Regular.woff",
  variable: "--font-gambarino",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ANT Website",
  description: "The official website for Alpha Next Tech",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
   
    ],
    apple: {
      url: "/favicon.ico",
      sizes: "180x180",
      type: "image/x-icon",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Gambarino.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}