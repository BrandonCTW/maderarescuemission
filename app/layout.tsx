import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maderarescuemission.org"),
  verification: { google: "FKqA1EL1Wh-x6u8yiVyYfZrBXJ--y3BL73ya8jn4tW8" },
  title: "Madera Rescue Mission - Serving the Least, the Last, and the Lost",
  description:
    "Madera Rescue Mission is a faith-based nonprofit in Madera, CA serving the homeless community since 1987. Emergency shelter, discipleship programs, behavioral health housing, case management, and job training for up to 147 guests nightly.",
  keywords:
    "Madera Rescue Mission, homeless shelter Madera CA, faith-based nonprofit, emergency shelter, discipleship program",
  openGraph: {
    title: "Madera Rescue Mission",
    description:
      "Serving the least, the last, and the lost with radical hospitality since 1987.",
    url: "https://maderarescuemission.org",
    siteName: "Madera Rescue Mission",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/gallery/homepage_lighthouse.jpg",
        width: 1200,
        height: 630,
        alt: "Madera Rescue Mission - A beacon of hope in Madera County since 1987",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madera Rescue Mission",
    description:
      "Serving the least, the last, and the lost with radical hospitality since 1987.",
    images: ["/assets/gallery/homepage_lighthouse.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
