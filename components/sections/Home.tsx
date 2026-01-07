'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/images/hero-1.webp',
  '/images/hero-2.webp',
  '/images/hero-3.webp',
]

export default function HomeSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id='home' className="relative overflow-hidden bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* TEXT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
              Independent agricultural commodities brokerage across North America
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Connecting producers and buyers through transparent trading,
              sourcing, and consulting services focused on quality, compliance,
              and long-term value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800"
              >
                Get in touch
              </Link>

              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Explore products
              </Link>
            </div>
          </div>

          {/* IMAGE SLIDER */}
          <div className="relative h-105 w-full overflow-hidden rounded-xl md:h-120">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt="Agricultural commodities supply chain"
                fill
                priority={index === 0}
                className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* green overlay */}
            <div className="absolute inset-0 bg-green-900/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

