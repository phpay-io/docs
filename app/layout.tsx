import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";

import dynamic from "next/dynamic";

const VersionContextProvider = dynamic(
  () => import("@/components/context/version"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "PHPay - Integração de Gateways de Pagamento.",
  metadataBase: new URL("https://phpay.io/"),
  description:
    "O PHPay é uma biblioteca PHP que tem o objetivo tornar o trabalho de integrações com gateways de pagamento mais simples e descomplicadas, facilitando a conexão entre tecnologia e negócios em produtos de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VersionContextProvider>
            <Navbar />
            <main className="sm:container mx-auto w-[88vw] h-auto">
              {children}
            </main>
            <Footer />
          </VersionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
