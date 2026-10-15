import type { Metadata } from "next";
import { Hanken_Grotesk, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Chinese names and the Chinese report; sliced by unicode range, so only the characters used load.
const notoSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "500"],
  preload: false,
});

export const metadata: Metadata = {
  title: "UCA Massachusetts",
  description:
    "United Chinese Americans, Massachusetts Chapter. Empowering Chinese Americans across Massachusetts through community service, civic engagement, youth leadership and cultural heritage since 2016.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hanken.variable} ${notoSC.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
