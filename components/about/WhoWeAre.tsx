import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* Text */}
                    <div className="max-w-xl">
                        <span className="block text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
                            Who We Are
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-8">
                            Independent expertise in agricultural commodities
                        </h2>

                        <p className="text-neutral-600 leading-relaxed mb-6">
                            Plex Commodities Co. is an independent brokerage firm headquartered
                            in Winnipeg, Manitoba, Canada, specializing in agricultural
                            commodities trading. We combine North American operational
                            efficiency with strong market networks and deep industry insight.
                        </p>

                        <p className="text-neutral-600 leading-relaxed">
                            With extensive experience in pulse and grain markets, we support
                            producers, traders and buyers in navigating complex global trade
                            environments, optimizing costs and accessing new commercial
                            opportunities with confidence.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-[520px]">
                        <Image
                            src="/images/about.jpg"
                            alt="Agricultural commodities and grain sourcing"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
