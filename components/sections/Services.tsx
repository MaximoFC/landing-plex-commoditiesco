import ServiceCard from "../ServiceCard";
import { Service } from "@/types/service";

const services: Service[] = [
    {
        id: 1,
        title: "Brokerage",
        description:
            "Independent brokerage services connecting buyers and sellers of agricultural commodities, facilitating transparent and efficient transactions based on market knowledge."
    },
    {
        id: 2,
        title: "Consulting",
        description:
            "Market-focused consulting services covering pricing strategies, commercial decision-making and risk evaluation, tailored to each client’s specific needs.",
    },
    {
        id: 3,
        title: "Sourcing Agent",
        description:
            "Support in identifying reliable suppliers and sourcing agricultural products, ensuring quality, traceability and alignment with commercial requirements.",
    },
]

export default function Services() {
    return (
        <section
            className="py-20 bg-gray-50"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
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
