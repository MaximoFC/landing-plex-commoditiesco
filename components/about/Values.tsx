import { Handshake, ShieldCheck, BarChart3 } from "lucide-react";

export default function Values() {
    return (
        <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-2xl mb-24">
                    <span className="block text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
                        Our Values
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                        Principles that guide every partnership
                    </h2>
                </div>

                {/* Values grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="border-l border-stone-300 pl-8">
                        <Handshake 
                            size={28}
                            strokeWidth={1.5}
                            className="text-neutral-500 mb-6"
                        />

                        <h3 className="font-serif text-xl text-neutral-900 mb-4">
                            Relationships
                        </h3>

                        <p className="text-neutral-600 leading-relaxed">
                            Strong, trust-based relationships are the foundation of our business.
                            We foster open communication and long-term partnerships with suppliers,
                            buyers, and strategic partners across North America.
                        </p>
                    </div>

                <div className="border-l border-stone-300 pl-8">
                    <ShieldCheck
                        size={28}
                        strokeWidth={1.5}
                        className="text-neutral-500 mb-6"
                    />

                    <h3 className="font-serif text-xl text-neutral-900 mb-4">
                        Quality
                    </h3>

                    <p className="text-neutral-600 leading-relaxed">
                        Quality drives every aspect of our operations. Through rigorous
                        evaluation and meticulous documentation, we ensure reliable,
                        traceable and compliant shipments with the highest standards.
                    </p>
                </div>

                <div className="border-l border-stone-300 pl-8">
                    <BarChart3
                        size={28}
                        strokeWidth={1.5}
                        className="text-neutral-500 mb-6"
                    />

                    <h3 className="font-serif text-xl text-neutral-900 mb-4">
                        Expertise
                    </h3>

                    <p className="text-neutral-600 leading-relaxed">
                        Our deep expertise in international commodities markets enables us
                        to provide customized, data-driven solutions that deliver value and
                        competitive advantage for our clients.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}
