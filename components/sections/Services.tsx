import ServiceCard from "../ServiceCard";
import { Service } from "@/types/service";

const services: Service[] = [
    {
        id: 1,
        title: "Brokerage",
        description:
            "We facilitate efficient and transparent transactions between buyers and sellers of agricultural commodities across North America, Latin America and Asia. Leveraging strong market networks and regulatory expertise, we manage negotiations, contracts and logistics to ensure compliant and competitive trade operations."
    },
    {
        id: 2,
        title: "Consulting",
        description:
            "We provide strategic consulting services for companies involved in international trade, supporting market entry, pricing strategies and regulatory compliance. Our data-driven approach helps clients optimize operations, reduce risks and improve profitability across global markets.",
    },
    {
        id: 3,
        title: "Sourcing Agent",
        description:
            "Acting as a sourcing agent, we identify and secure reliable suppliers of pulses, grains and agricultural commodities. We support supplier evaluation, negotiations and logistics coordination, ensuring quality, traceability and cost-efficient supply chains.",
    },
]

export default function Services() {
    return (
        <section
            className="py-20 bg-gray-50"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="font-serif text-3xl font-bold text-center mb-12">
                    OUR SERVICES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {services.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
