import type { Metadata } from "next";
import { Epilogue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ShinobiCursor from "@/components/ShinobiCursor";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue", weight: ["700", "800", "900"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", weight: ["400", "500", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Sandeep Vaid | Shinobi Portfolio",
  description: "Senior Software Developer — Building scalable systems with precision and resilience.",
  keywords: ["Sandeep Vaid", "Software Developer", "Full Stack", "Node.js", "React", "AWS"],
  authors: [{ name: "Sandeep Vaid" }],
  openGraph: {
    title: "Sandeep Vaid | Shinobi Portfolio",
    description: "Building scalable systems with precision and resilience.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${epilogue.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: "Inter, sans-serif" }}>
        <ShinobiCursor />
        {children}
      </body>
    </html>
  );
}
