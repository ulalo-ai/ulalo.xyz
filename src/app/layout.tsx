import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/Header";
import { NextIntlClientProvider } from "next-intl";
export const metadata: Metadata = {
  title: "Ulalo",
  description: "ULALO | Your secure HEALTH DATA HUB",
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
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
