import type { Metadata } from "next";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";

import "./globals.css";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";


export const metadata: Metadata = {
  title: "Ardhi App",
  description: "Ardhi simplifies geospatial analysis, enabling users to visualize and download data effortlessly, supporting data-driven decisions across diverse industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body>
          <SignedIn>
            <Header />
          </SignedIn>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
