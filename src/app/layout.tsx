import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "京都や｜京料理のおもてなし",
  description:
    "京都・東本願寺近くの京料理店「京都や」。季節の食材を活かしたお料理でおもてなしいたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={shippori.variable}>
      <body>{children}</body>
    </html>
  );
}
