import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import Chatbot from "@/components/Chatbot";
import ConditionalLeaves from "@/components/ConditionalLeaves";

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

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.variable} ${playfair.variable} ${cinzel.variable} font-sans antialiased bg-white text-black`}
      >
        <ConditionalLeaves />
        <Navbar />
        <main className="min-h-screen relative">
          {children}
        </main>
        <FloatingContact />
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
