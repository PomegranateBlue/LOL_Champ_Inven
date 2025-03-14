import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Provider from "./provider";
export const metadata: Metadata = {
  title: "LoL 챔피언 정보",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={` antialiased`}>
        <Provider>
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  );
}
