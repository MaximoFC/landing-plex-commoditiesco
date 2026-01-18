import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  reverse?: boolean; // si true, la imagen va a la izquierda
}

export default function ProductCard({
  product,
  reverse = false,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto mb-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Imagen grande */}
      <div className="relative w-full md:w-1/2 h-64 md:h-96 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 90vw, 45vw"
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Línea vertical de separación */}
      <div className="hidden md:block w-px bg-gray-300 h-96 mx-6"></div>

      {/* Texto al lado */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
          {product.title}
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
