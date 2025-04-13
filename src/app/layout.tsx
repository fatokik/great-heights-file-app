import { Inter } from "next/font/google";

import Navbar from "@/src/components/NavBar/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-hidden">{children}</main>
          <footer className="shrink-0">Made by a Real One</footer>
        </div>
      </body>
    </html>
  );
}
