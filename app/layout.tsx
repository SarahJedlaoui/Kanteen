// app/layout.tsx
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
      <title>Kanteen</title>
      </Head>

      {/* Next.js Script component for Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HPVVV7N9XM"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HPVVV7N9XM');
        `}
      </Script>

      <body className={` ${inter.className}`}>
        <Providers>
         
          {children}
         
          <ScrollToTop />
        </Providers>
      </body>
    </>
  );
}

import { Providers } from "./providers";
