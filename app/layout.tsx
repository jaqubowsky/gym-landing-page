import { ReactNode } from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "palladiumpultusk.com",
  description: "Palladium Gym Pultusk website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Navigation />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
