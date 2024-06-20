import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const font = Tajawal({subsets: ['arabic','latin'], weight: ['200', '300', '400', '500', '700', '800', '900']});

export const metadata: Metadata = {
  title: "Rawas",
  description: "Rawas where ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
