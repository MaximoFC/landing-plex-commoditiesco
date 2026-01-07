import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import VisionMission from "@/components/about/VisionMission";
import Values from "@/components/about/Values";

export const metadata = {
    title: "About Us | Plex Commodities Co.",
    description:
        "Learn more about Plex Commodities Co., an independent agricultural commodities brokerage based in Manitoba, Canada, serving the United States and Canada with expert brokerage, sourcing, and consulting services.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <WhoWeAre />
            <VisionMission />
            <Values />
        </>
    );
}
