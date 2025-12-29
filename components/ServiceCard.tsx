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
        <div className="relative pl-10">
            <span className="absolute left-0 top-0 h-full w-px bg-stone-300"/>.

            {/* Icon background */}
            {Icon && (
                <div className="absolute -top-6 -right-6 text-emerald-900/10">
                    <Icon
                        size={120}
                        strokeWidth={1}
                    />
                </div>
            )}

            {/* Content */}
            <h3 className="font-serif text-xl text-neutral-900 mb-4">
                {service.title}
            </h3>

            <p className="text-neutral-900 leading-relaxed">
                {service.description}
            </p>
        </div>
    )
}