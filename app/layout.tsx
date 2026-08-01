import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import FloatingCall from "@/components/ui/FloatingCall";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehndi Élan – Artistry Etched in Tradition | Luxury Bridal Henna Artist London",
  description:
    "Discover intricate, personalized, and elegant bridal henna designs and contemporary patterns by artist Priya Sharma. Premium mehndi services across London and the UK.",
  metadataBase: new URL('https://mehndi-elan.com'),
  openGraph: {
    title: "Mehndi Élan – Luxury Bridal Henna Artist",
    description: "Intricate bridal mehndi designs and contemporary henna patterns by Priya Sharma. Serving London & UK-wide.",
    type: "website",
    locale: "en_GB",
    siteName: "Mehndi Élan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Élan – Luxury Bridal Henna Artist",
    description: "Intricate bridal mehndi designs by Priya Sharma. London & UK-wide.",
  },
};

export const viewport = {
  themeColor: "#4A121A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#FDFBF7] text-[#3D2B1F] antialiased" suppressHydrationWarning>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCall />
      </body>
    </html>
  );
}
