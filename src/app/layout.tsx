import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Operações críticas sem improviso | Mosaic Harbor Ventures",
  description:
    "Intervenções curtas e aplicadas para destravar gargalos de operação, dados e legado antes que o caos vire rotina cara demais.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {GOOGLE_ANALYTICS_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      ) : null}
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
