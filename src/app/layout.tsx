import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/Header";
export const metadata: Metadata = {
  title: "Ulalo",
  description: "The first meme coin to be created on the Ulao network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/logo.png" sizes="32x32" />
      </head>
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
