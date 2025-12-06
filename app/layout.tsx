import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Café VanaBella | Urban Oasis",
  description: "Where Nature Meets Flavor - A nature-inspired café combining excellent cuisine with a serene atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-forest-950 text-cream-50`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
