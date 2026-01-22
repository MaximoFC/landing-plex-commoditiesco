import { Metadata } from "next";

const siteName = "Plex Commodities Co."
const siteUrl = "https://plexcommodities.com"

export const defaultSEO: Metadata = {
    title: {
        default: `${siteName} | Agricultural Commodities Brokerage`,
        template: `%s | ${siteName}`
    },

    description:
        "Plex Commodities Co. is an independent agricultural commodities brokerage based in Manitoba, Canada, providing trading, sourcing and consulting services across the United States and Canada.",
    
    metadataBase: new URL(siteUrl),

    openGraph: {
        title: `${siteName} | Agricultural Commodities Brokerage`,
        description:
            "Independent agricultural commodities brokerage offering trading, sourcing and consulting services across global markets.",
        url: siteUrl,
        siteName,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://plexcommodities.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Plex Commodities Co. – Agricultural Commodities Brokerage"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: `${siteName} | Agricultural Commodities Brokerage`,
        description:
            "Agricultural commodities brokerage based in Canada, serving U.S. and Canadian markets.",
        images: ["https://plexcommodities.com/og-image.png"]
    },

    robots: {
        index: true,
        follow: true
    }
}