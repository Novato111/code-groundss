import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Import Manrope from Google Fonts

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "InstaPilot",
  description: "Automate your Instagram DMs and comments ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${jakarta.className}   antialiased  
min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Footer></Footer>
          <Toaster></Toaster>
        </body>
      </html>
    </ClerkProvider>
  );
}
