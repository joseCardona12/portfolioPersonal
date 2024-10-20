import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header, Contact } from "@/components";
import { DarkMode } from "@/components/atoms";

const groteskFontBold = localFont({
  src: "./fonts/Fontspring-DEMO-rocgrotesk-bold.otf",
  variable: "--font-grotesk-bold",
});
const groteskFontLight = localFont({
  src: "./fonts/Fontspring-DEMO-rocgrotesk-light.otf",
  variable: "--font-grotesk-light",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${groteskFontBold.variable} ${groteskFontLight.variable} antialiased`}
      >
        <Header />
        <Contact />
        <DarkMode />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
