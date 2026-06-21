import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abhinav Pandey - AI Research Engineer & Software Developer",
    template: "%s | Abhinav Pandey",
  },
  description:
    "AI Research Engineer and Software Developer specializing in AI-powered systems, large language models, and scalable software solutions. Currently working at Margati Inc.",
  keywords: [
    "Abhinav Pandey",
    "AI Research Engineer",
    "Software Developer",
    "Machine Learning",
    "LLM",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Abhinav Pandey" }],
  creator: "Abhinav Pandey",
  publisher: "Abhinav Pandey",
  metadataBase: new URL("https://your-domain.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Update with your actual domain
    siteName: "Abhinav Pandey - Portfolio",
    title: "Abhinav Pandey - AI Research Engineer & Software Developer",
    description:
      "AI Research Engineer and Software Developer specializing in AI-powered systems, large language models, and scalable software solutions.",
    images: [
      {
        url: "/images/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Abhinav Pandey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Pandey - AI Research Engineer & Software Developer",
    description:
      "AI Research Engineer and Software Developer specializing in AI-powered systems, large language models, and scalable software solutions.",
    images: ["/images/avatar.jpeg"],
    creator: "@your_twitter_handle", // Update with your actual Twitter handle
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
  icons: {
    icon: [
      { url: "/images/logo.ico", sizes: "any" },
      { url: "/images/logo.ico", type: "image/x-icon" },
    ],
    shortcut: "/images/logo.ico",
    apple: "/images/logo.ico",
  },
  manifest: "/manifest.json", // Optional: you can create this later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhinav Pandey",
    jobTitle: "AI Research Engineer & Software Developer",
    email: "meronaamabhinav@gmail.com",
    telephone: "+977 9841085450",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banepa-8, Kavrepalanchok, Nepal",
    },
    url: "https://your-domain.com", // Update with your actual domain
    description:
      "AI Research Engineer and Software Developer specializing in AI-powered systems, large language models, and scalable software solutions.",
  };

  return (
    <html lang="en">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

