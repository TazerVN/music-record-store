import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import { CartProvider } from "@/components/cartprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarsVinyl",
  description: "by TazerVN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <HeaderComponent></HeaderComponent>
            <main className="flex flex-col items-center justify-between">
              {children}
            </main>
            <FooterComponent></FooterComponent>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
