import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

//@ts-ignore
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Generador de casos",
  description: "Desarrollado por Sebastian Albornoz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-black flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}
