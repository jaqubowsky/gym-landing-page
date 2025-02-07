import { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/embla.css";
import "react-tooltip/dist/react-tooltip.css";
import { Roboto } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import clsx from "clsx";
import { Footer } from "@/components/Footer";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "palladiumpultusk.com",
  description: "Palladium Gym Pultusk website",
  icon: {
    icon: ['./icon.ico']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("", roboto.className)}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
