import Image from "next/image";

export default function VisionMission() {
    return (
        <section className="bg-stone-50 py-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro */}
                <div className="max-w-3xl mb-28">
                    <span className="block text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
                        Our Purpose
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                        Guiding principles behind our work
                    </h2>
                </div>

                {/* Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">

                    {/* Image */}
                    <div className="relative w-full h-[420px]">
                        <Image
                            src="/images/about-2.png"
                            alt="Panoramic agricultural fields representing Plex vision"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>

                    {/* Text */}
                    <div className="border-l border-stone-300 pl-10">
                        <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-4">
                            Vision
                        </span>
                        <h3 className="font-serif text-2xl text-neutral-900 mb-6">
                            Building long-term value across agricultural markets
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                            To become a trusted benchmark in the agricultural commodities industry,
                            building collaborative and sustainable ecosystems that connect producers
                            and buyers across North American markets.
                        </p>
                    </div>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* Text */}
                    <div className="border-l border-stone-300 pl-10 md:order-1 order-2">
                        <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-4">
                            Mission
                        </span>
                        <h3 className="font-serif text-2xl text-neutral-900 mb-6">
                            Acting as a reliable partner in every transaction
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                            To serve as a reliable intermediary in commodities trading, empowering
                            businesses with expert brokerage, sourcing, and consulting services that
                            facilitate efficient and compliant transactions across the United States
                            and Canada.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-[420px] md:order-2 order-1">
                        <Image
                            src="/images/about-3.png"
                            alt="Agricultural machinery representing Plex mission"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
