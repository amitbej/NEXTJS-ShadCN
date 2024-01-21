import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import { ThemeProvider } from "@/components/theme-provider";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNB Technology",
  description: "Created By AmitBej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
