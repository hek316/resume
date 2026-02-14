import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backend Developer Resume",
  description: "3년차 백엔드 개발자 이력서",
  openGraph: {
    title: "Backend Developer Resume",
    description: "3년차 백엔드 개발자 이력서",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
