import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sakhinool.com'),
  title: "Sakhinool • Handcrafted Sarees & Women's Wear | Kerala",
  description: "Woven in Tradition, Styled for You. Discover handpicked Kerala Kasavu, royal Kanchipuram silk, shimmer tissue, and bridal sarees delivered across all 14 districts in Kerala.",
  keywords: [
    "Sakhinool",
    "Kerala Sarees",
    "Kasavu Sarees Kochi",
    "Kanchipuram Silk Kerala",
    "Wedding Sarees Trivandrum",
    "Onam Sarees",
    "Handloom Sarees Kerala",
    "Balaramapuram Kasavu",
    "Sakhinool Sarees"
  ],
  openGraph: {
    title: "Sakhinool • Woven in Tradition, Styled for You",
    description: "Delivering handpicked authentic sarees across Kerala. Direct orders via WhatsApp & Instagram @sakhinool.",
    url: "https://sakhinool.com",
    siteName: "Sakhinool",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sakhinool Signature Saree Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
