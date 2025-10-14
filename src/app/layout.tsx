import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PeleGoal",
  description: "Sports insights and analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
