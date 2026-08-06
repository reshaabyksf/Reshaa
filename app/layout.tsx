import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Reshaabags",
  description: "Reshaa — Bonded for Bags. Premium non-woven packaging and sustainable manufacturing solutions.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}