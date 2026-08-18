import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import { AccentColorHydrator } from "./components/AccentColorPicker";
import "./globals.css";

const krub = Krub({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-krub",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michelle Wang",
  description:
    "Personal website of Michelle Wang - CS + Industrial Engineering student at Northwestern",
  keywords: [
    "Michelle Wang",
    "Northwestern",
    "CS",
    "Industrial Engineering",
    "Portfolio",
    "Student",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${krub.variable} ${inter.variable}`} lang="en">
      <body className="font-body relative" suppressHydrationWarning>
        <AccentColorHydrator />
        {children}
      </body>
    </html>
  );
}
