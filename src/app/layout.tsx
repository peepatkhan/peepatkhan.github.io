import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our 2nd Anniversary",
  description: "This website keep our memories about 2 years together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
