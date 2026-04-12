import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";

//import "./globals.scss";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalLoadingProvider } from "@/components/global-loading-provider";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Peter Goodwin | Web Developer Portfolio",
    template: "%s | Peter Goodwin",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Peter Goodwin",
    "web developer portfolio",
    "Next.js portfolio",
    "frontend developer",
    "TypeScript",
    "UI engineering",
  ],
  authors: [{ name: "Peter Goodwin", url: siteConfig.url }],
  creator: "Peter Goodwin",
  publisher: "Peter Goodwin",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    title: "Peter Goodwin | Web Developer Portfolio",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Peter Goodwin portfolio social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Goodwin | Web Developer Portfolio",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon" }],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Peter Goodwin",
    url: siteConfig.url,
    sameAs: [siteConfig.links.github],
    jobTitle: "Web Developer",
    description: siteConfig.description,
  };

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <GlobalLoadingProvider>
              <Navigation></Navigation>
              {children}
              <Footer></Footer>
            </GlobalLoadingProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
