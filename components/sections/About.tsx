export default function About() {
    return (
        <section
            className="scroll-mt-24 py-28 bg-white"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl md:text-4xl font-medium mb-6">
                        ABOUT US
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Plex Co. is a brokerage firm headquartered in Winnipeg, Manitoba, Canada, specializing in commodities trading.
                        We combine North American operational efficiency with strong connections in Latin America and Asia,
                        backed by over seven years of experience in market expansion, supply chain optimization, and regulatory
                        compliance. At Plex Co., we offer comprehensive commodities brokerage, sourcing agency, and strategic
                        consulting services, ensuring our clients achieve revenue growth, significant cost reductions, and seamless
                        navigation of global trade challenges.
                    </p>
                </div>

                {/* Vision and mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            OUR VISION
                        </h3>
                        <p className="leading-relaxed">
                            To become a leading benchmark in the commodities brokerage industry, building a collaborative and
                            sustainable ecosystem that connects producers and buyers worldwide. We aim to redefine global supply
                            chains in the agri-food sector through innovative practices that prioritize quality, resilience,
                            and long-term value, integrating diverse market perspectives to foster lasting partnerships and mutual
                            prosperity.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            OUR MISSION
                        </h3>
                        <p className="leading-relaxed">
                            To serve as a trusted intermediary in commodities trading, empowering small and medium-sized enterprises
                            with expert brokerage, sourcing, and consulting services. Specializing in pulses and raw materials,
                            we facilitate efficient cross-border transactions, optimize logistics and financing, and ensure full
                            compliance with international standards such as USMCA, FDA, and CFIA, delivering measurable cost savings,
                            reduced delivery times, and market expansion opportunities.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h3 className="text-xl font-semibold mb-10">
                        OUR VALUES
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-medium mb-3">
                                Relationships
                            </h4>
                            <p className="leading-relaxed">
                                Strong, trust-based relationships are the foundation of our business.
                                We foster open communication and long-term partnerships with suppliers, buyers,
                                and partners across North America, Latin America, and Asia.
                                By prioritizing respect and collaboration, we create bonds that extend beyond individual transactions,
                                providing reliable support and shared success in every deal.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-3">
                                Quality
                            </h4>
                            <p className="leading-relaxed">
                                Quality drives every aspect of our operations. We are committed to the highest standards in
                                commodity selection, supplier evaluation, and process execution, ensuring full compliance and
                                reliability in food-grade shipments. Through rigorous audits, precise documentation,
                                and meticulous attention to detail, we deliver premium products that strengthen our client´s 
                                operations and market position.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-3">Expertise</h4>
                            <p className="leading-relaxed">
                                Our deep expertise in international trade enables us to address complex challenges with customized,
                                data-driven solutions. Supported by successful market entries,
                                management of multimillion-dollar budgets, 12-15% cost reductions, and optimized multimodal logistics,
                                we provide specialized guidance that drives innovation, efficiency, and competitive advantage in
                                global commodities markets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
