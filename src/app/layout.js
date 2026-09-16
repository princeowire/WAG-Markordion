
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://wag-markordion.vercel.app"),

  title: {
    default: "Maccordion Studio | Crafted Accordion Interfaces",
    template: "%s | Maccordion Studio",
  },

  description:
    "Maccordion Studio is a frontend project by Prince Owire for creating reusable, responsive, and beautifully crafted React and Tailwind CSS accordion interfaces.",

  keywords: [
    "Maccordion Studio",
    "Prince Owire",
    "React accordion generator",
    "Tailwind CSS accordion",
    "JavaScript frontend developer",
    "Accordion UI components",
    "Reusable React components",
  ],

  authors: [
    {
      name: "Prince Owire",
    },
  ],

  creator: "Prince Owire",

  applicationName: "Maccordion Studio",

  openGraph: {
    title: "Maccordion Studio | Crafted Accordion Interfaces",
    description:
      "Explore Maccordion Studio, a collection of thoughtfully crafted accordion interfaces built with React and Tailwind CSS.",
    url: "https://wag-markordion.vercel.app",
    siteName: "Maccordion Studio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maccordion Studio | Crafted Accordion Interfaces",
    description:
      "A frontend project by Prince Owire exploring beautiful and reusable accordion interfaces.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}