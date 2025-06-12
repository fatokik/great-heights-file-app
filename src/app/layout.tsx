import { Inter } from "next/font/google";

import Navbar from "@/src/components/NavBar/Navbar";
import AppSidebar from "@/src/components/Sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen `}>
        <SidebarProvider>
          <div className="flex flex-col h-full overflow-hidden w-full">
            <header className="">
              <Navbar />
            </header>
            <div className="flex flex-1 overflow-hidden w-full">
              <AppSidebar />
              <main className="flex-1 overflow-hidden p-4 max-w-full [min-inline-size:0px] bg-gray-100 w-full">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
