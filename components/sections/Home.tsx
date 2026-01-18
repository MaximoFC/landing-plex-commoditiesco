import Link from 'next/link'
import { HeroImage } from '../home/HeroImage'
import { HeroSlider } from '../home/HeroSlider'

export default function HomeSection() {
  return (
    <section
      id='home'
      className="relative overflow-hidden bg-stone-50 py-20 lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* TEXT CONTENT */}
          <div className="max-w-xl order-1 lg:order-none">
            <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Welcome to Plex Commodities
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              From Manitoba, Canada - We support agrifood companies to confidently seize new opportunities in global
              markets through brokerage, sourcing, and strategic consulting.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-4 text-base sm:text-sm font-medium text-white transition hover:bg-green-800"
              >
                Get in touch
              </Link>

              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-4 sm:text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Explore products
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <HeroImage />
          <HeroSlider />
        </div>
      </div>
    </section>
  )
}

