import type { Metadata } from "next";
import "./globals.css";
import { Gilda_Display } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Gilda_Display({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawasena Avenue",
  description: "Bring The Heritage Create The Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
