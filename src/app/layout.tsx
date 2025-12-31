import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SectionIndicator from "@/components/SectionIndicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title:
    "M. Daffa Riyadlussalam — IT Student & President of BEM FILKOM UB 2026",
  description:
    "Information Technology student and President of BEM FILKOM UB 2026, focused on leadership, execution, and building impactful initiatives at the intersection of technology and people.",
  openGraph: {
    title: "M. Daffa Riyadlussalam",
    description:
      "IT student & President of BEM FILKOM UB 2026. Bridging technology, leadership, and execution to create real impact.",
    url: "https://riyadlussalam-portfolio.vercel.app",
    siteName: "Daffa Riyadlussalam Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M. Daffa Riyadlussalam Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Daffa Riyadlussalam",
    description:
      "IT student & President of BEM FILKOM UB 2026. Leadership, execution, and impact.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} ${spaceGrotesk.className} bg-slate-950 text-white`}
      >
        <Navbar />
        <SectionIndicator />
        {children}
      </body>
    </html>
  );
}
