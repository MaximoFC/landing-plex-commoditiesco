import { Metadata } from "next";

const siteName = "Plex Commodities Co."
const siteUrl = "https://plexcommodities.com"

export const defaultSEO: Metadata = {
    title: {
        default: `${siteName} | Agricultural Commodities Brokerage & Trading`,
        template: `%s | ${siteName}`
    },
    description:
        "Independent agricultural commodities brokerage providing trading, sourcing and consulting services across global markets.",
    
    metadataBase: new URL(siteUrl),

    openGraph: {
        title: siteName,
        description:
            "Agricultural commodities brokerage and consulting firm connecting global markets.",
        url: siteUrl,
        siteName,
        locale: "en_US",
        type: "website"
    },

    twitter: {
        card: "summary_large_image",
        title: siteName,
        description:
            "Agricultural commodities brokerage and consulting firm connecting global markets."
    },

    robots: {
        index: true,
        follow: true
    }
}