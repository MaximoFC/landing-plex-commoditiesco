import type { Metadata } from "next";
import "./globals.css";
import { Inter, Source_Serif_4 } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter"
})
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: "Plex Commodities Co. | Agricultural Commodities & Trading",
  description: 
    "Plex Commodities Co. is a trading and consulting company focused on agricultural commodities, brokerage and sourcing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${serif.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
