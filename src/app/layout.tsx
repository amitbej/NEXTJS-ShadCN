import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
