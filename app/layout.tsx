import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}