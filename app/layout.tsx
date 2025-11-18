import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
import "./globals.scss";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "../components/navigation/Navigation";
import Footer from "./Footer";

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

export const metadata: Metadata = {
  title: "Peter Goodwin Portfolio",
  description: "A website created by Peter Goodwin. Displays portfolio of websites. Showcases css animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation></Navigation>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
