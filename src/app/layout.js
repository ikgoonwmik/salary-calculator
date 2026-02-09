import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "연봉 실수령액 계산기 | 2025년 월급 세후 계산",
  description:
    "연봉을 입력하면 4대보험과 세금을 제외한 월 실수령액을 계산해주는 연봉 실수령액 계산기입니다. 2025년 최신 요율 반영.",
  keywords: [
    "연봉 실수령액 계산기",
    "월급 계산기",
    "세후 월급",
    "연봉 세금 계산",
    "실수령액 계산",
  ],
  openGraph: {
    title: "연봉 실수령액 계산기",
    description: "연봉만 입력하면 실제 월급을 바로 계산해보세요.",
    url: "https://yourdomain.com",
    siteName: "연봉 계산기",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <head>
          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9819687643821802"
            crossorigin="anonymous"
          ></script>
        </head>
        {children}
      </body>
    </html>
  );
}
