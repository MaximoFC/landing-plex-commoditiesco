import { defaultSEO } from "@/lib/seo";
import "./globals.css";
import { Inter, Source_Serif_4, Anton } from "next/font/google"

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

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

export const metadata = defaultSEO

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
          ${anton.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
