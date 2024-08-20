import type { Metadata } from "next";
import "./globals.css"; // 引入全局 CSS，包含了自定义字体的定义

export const metadata: Metadata = {
  title: "Yongping",
  description: "Yongping's personal website",
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