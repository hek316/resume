import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "홍길동 | Backend Developer",
  description: "4년차 백엔드 개발자 홍길동의 이력서",
  openGraph: {
    title: "홍길동 | Backend Developer",
    description: "4년차 백엔드 개발자 홍길동의 이력서",
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
