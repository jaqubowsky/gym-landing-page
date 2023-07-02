import { ReactNode } from "react";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import clsx from "clsx";
import { Footer } from "@/components/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "palladiumpultusk.com",
  description: "Palladium Gym Pultusk website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <body className={clsx("h-screen w-full", roboto.className)}>
          <Navigation />
          {children}
          <Footer />
        </body>
    </html>
  );
}
