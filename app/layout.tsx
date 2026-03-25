import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: "Senior AI & Cloud Engineer specializing in Generative AI, LangChain, AWS, and Full-Stack Development. Building production LLM systems, RAG architectures, and cloud-native applications.",
  keywords: [
    "AI Engineer",
    "Cloud Engineer",
    "LangChain",
    "AWS",
    "Python",
    "Generative AI",
    "RAG",
    "LangGraph",
    "Full Stack Developer",
    "Machine Learning",
    "DevOps",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashdeep.dev",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: "Senior AI & Cloud Engineer specializing in Generative AI, LangChain, AWS, and Full-Stack Development",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.profileImage,
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: "Senior AI & Cloud Engineer specializing in Generative AI, LangChain, AWS, and Full-Stack Development",
    images: [personalInfo.profileImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// Made with Bob
