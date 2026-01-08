"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import Image from "next/image";

const products: Product[] = [
  {
    id: 1,
    title: "Slow Darkening Pinto",
    description: "",
    image: "/images/slow-darkening-pinto.png",
  },
  {
    id: 2,
    title: "Regular Pinto",
    description: "",
    image: "/images/regular-pinto.png",
  },
  {
    id: 3,
    title: "Cranberry",
    description: "",
    image: "/images/cranberry.png",
  },
  {
    id: 4,
    title: "Navy Beans",
    description: "",
    image: "/images/navy.png",
  },
  {
    id: 5,
    title: "Black Beans",
    description: "",
    image: "/images/black.png",
  },
  {
    id: 6,
    title: "Great Northern Beans",
    description: "",
    image: "/images/great-northern.png",
  },
  {
    id: 7,
    title: "Kidney Beans",
    description: "",
    image: "/images/kidney.png",
  },
  {
    id: 8,
    title: "Light Kidney Beans",
    description: "",
    image: "/images/light-kidney.png",
  },
  {
    id: 9,
    title: "Small Red",
    description: "",
    image: "/images/small-red.png",
  },
];

export default function Products() {
  return (
    <section 
      className="py-32 bg-stone-50"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">
            OUR PRODUCTS
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            We specialize in sourcing and trading high-quality pulses and
            agricultural commodities, meeting international standards for
            food-grade quality, traceability and reliability.
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-24 animate-products-marquee">
            {[...products, ...products].map((product, index) => (
              <Link
                key={`${product.id}-${index}`}
                href="/products"
                className="flex-shrink-0 w-56 text-center group"
              >
                <div className="relative w-full h-40 mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <span className="block text-sm uppercase tracking-widest text-neutral-700 group-hover:text-neutral-900 transition">
                  {product.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/products"
            className="inline-block text-sm uppercase tracking-widest text-neutral-900 border-b border-neutral-900 pb-1 hover:opacity-70 transition"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
