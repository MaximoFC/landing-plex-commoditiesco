import { Service } from "@/types/service";
import { Handshake, BarChart3, Search } from "lucide-react"

type Props = {
    service: Service
}

const icons = {
    Brokerage: Handshake,
    Consulting: BarChart3,
    "Sourcing Agent": Search
}

export default function ServiceCard({ service }: Props) {
    const Icon = icons[service.title as keyof typeof icons]

    return (
        <div className="relative bg-white rounded-lg p-8 pt-12 shadow-sm hover:shadow-md transition overflow-hidden">
            {/* Icon background */}
            {Icon && (
                <div className="absolute -top-1 -right-1 opacity-80">
                    <Icon
                        size={96}
                        strokeWidth={1}
                    />
                </div>
            )}

            {/* Content */}
            <h3 className="text-lg font-semibold mb-4">
                {service.title}
            </h3>

            <p className="leading-relaxed text-sm">
                {service.description}
            </p>
        </div>
    )
}