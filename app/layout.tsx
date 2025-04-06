import type { Metadata } from "next";
import { Krub } from "next/font/google";
import "./globals.css";

const krub = Krub({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-krub',
});

export const metadata: Metadata = {
  title: "Michelle Wang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${krub.variable} font-krub`}>
        {children}
      </body>
    </html>
  );
}
