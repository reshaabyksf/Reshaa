import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reshaabags",
  description: "Reshaa — Bonded for Bags. Premium non-woven packaging and sustainable manufacturing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}