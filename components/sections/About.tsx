import Link from "next/link";

export default function About() {
    return (
        <section
            className="scroll-mt-24 py-32 bg-stone-50"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl font-medium text-neutral-900 mb-6">
                        ABOUT US
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed">
                        Plex Commodities Co. is an independent brokerage firm headquartered in Winnipeg, Manitoba, Canada - 
                        at the heart of North America´s leading pulse and grain production areas.
                        <br />
                        <br />
                        We combine strong local expertise and operational efficiency with extensive global market networks
                        to support producers and buyers in navigating international trade with confidence. Our focus is on
                        optimizing costs, ensuring traceability and compliance, and unlocking new commercial opportunities
                        across continents.
                    </p>
                </div>

                {/* Vision and mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
                    <div className="border-l border-stone-300 pl-8">
                        <h3 className="font-serif text-xl text-neutral-900 mb-4">
                            OUR VISION
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                            To be the world´s trusted benchmark in agricultural commodities, driven by superior quality, flawless
                            processes, and obsessive attention to detail.
                        </p>
                    </div>

                    <div className="border-l border-stone-300 pl-8">
                        <h3 className="font-serif text-xl text-neutral-900 mb-4">
                            OUR MISSION
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                            To serve as the partner of excellence, providing brokerage, sourcing, and consulting with unmatched
                            quality in products and processes, rigorous precision in every detail, and absolute trust in every
                            global transaction.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div>
                    <Link
                        href="/about-us"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-700 border-b border-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition"
                    >
                        Read more about us
                        <span aria-hidden>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
