import type { Metadata } from "next";
import { Epilogue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ShinobiCursor from "@/components/ShinobiCursor";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue", weight: ["700", "800", "900"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", weight: ["400", "500", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Sandeep Vaid | Shinobi Portfolio",
  description: "Software Engineer II — Building scalable backend, cloud, and agentic AI systems with precision and resilience.",
  keywords: ["Sandeep Vaid", "Software Engineer", "Backend", "Agentic AI", "RAG", "Node.js", "React", "AWS"],
  authors: [{ name: "Sandeep Vaid" }],
  openGraph: {
    title: "Sandeep Vaid | Shinobi Portfolio",
    description: "Building scalable systems with precision and resilience.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${epilogue.variable} ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply saved theme before paint to avoid a flash of the default palette */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='sasuke')document.documentElement.setAttribute('data-theme','sasuke');}catch(e){}`,
          }}
        />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif" }}>
        <ShinobiCursor />
        {children}
      </body>
    </html>
  );
}
