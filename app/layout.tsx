import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav Pandey - Portfolio",
  description: "AI Research Engineer & Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

