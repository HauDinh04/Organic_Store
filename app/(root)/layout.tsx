import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Top from "../components/Top";
import NavBar from "../components/NavBar";
import ToasterProvider from "../lib/provider/ToasterProvider";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic Foods",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Top />
          <NavBar />
          <ToasterProvider />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
