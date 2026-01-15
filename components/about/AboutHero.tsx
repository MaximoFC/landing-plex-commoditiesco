import Image from "next/image";
import Navbar from "../Navbar";

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full">
      <Navbar />
      {/* Background image */}
      <Image
        src="/images/about-1.png"
        alt="Agricultural commodities trading and sourcing"
        fill
        priority
        sizes="100vw"
        quality={85}
        placeholder="blur"
        blurDataURL="/images/about-1-blur.png"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/4" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="block text-sm uppercase tracking-[0.25em] text-stone-200 mb-6">
              About Plex Commodities
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Driving growth and trust in agricultural commodities
            </h1>

            <p className="text-stone-200 text-lg leading-relaxed">
              Plex Commodities Co. is an independent brokerage firm based in
              Manitoba, Canada, serving the United States and Canada with
              expertise in trading, sourcing, and consulting for agricultural
              commodities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
