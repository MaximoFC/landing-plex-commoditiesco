import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plex Commodities Co. | Agricultural Commodities & Trading",
  description: "Plex Commodities Co. is a trading and consulting company focused on agricultural commodities, brokerage and sourcing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
