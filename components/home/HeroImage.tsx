import Image from "next/image";

export function HeroImage() {
    return (
        <div className="relative h-[260px] sm:h-[340px] md:h-[520px] w-full overflow-hidden rounded-xl lg:hidden">
            <Image
                src="/images/hero-1.webp"
                alt="Agricultural commodities supply chain"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-green-900/30 sm:bg-green-900/20"/>
        </div>
    )
}