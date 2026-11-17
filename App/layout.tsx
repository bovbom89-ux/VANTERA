
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTERA — Everything You Build. One Platform.",
  description:
    "Build, deploy and manage bots, websites and applications with VANTERA.",
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

