import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
