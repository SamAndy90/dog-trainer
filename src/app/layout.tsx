import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "CorgiMom",
  description: "Welcome to Victoria's website 'CorgiMom'",
  metadataBase: new URL(process.env.DEPLOY_URL ?? ""),
  openGraph: {
    title: "Dog-trainer Victoria",
    description: "Welcome to Victoria's website 'CorgiMom'",
    images: "./opengraph-image.png",
  },
  icons: {
    icon: [
      {
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={"ua"}
      className={`${inter.variable} ${caveat.variable} scroll-smooth`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
