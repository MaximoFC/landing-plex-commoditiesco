'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
    '/images/hero-1.webp',
    '/images/hero-2.webp',
    '/images/hero-3.webp'
]

export function HeroSlider() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const i = setInterval(
            () => setCurrent((c) => (c + 1) % images.length),
            6000
        )
        return () => clearInterval(i)
    }, [])

    return (
        <div className="relative h-[520px] w-full overflow-hidden rounded-xl hidden lg:block">
            {images.map((src, i) => (
                <Image
                    key={src}
                    src={src}
                    alt="Agricultural commodities supply chain"
                    fill
                    sizes="50vw"
                    priority={ i === 0 }
                    className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                        i === current ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-green-900/20"/>
        </div>
    )
}