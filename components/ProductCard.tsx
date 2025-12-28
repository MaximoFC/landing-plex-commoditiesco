import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col items-center bg-white rounded-2xl shadow-xl hover:-translate-y-6 transition-transform duration-300 p-8 max-w-sm mx-auto">
      {/* Imagen más grande y centrada */}
      <div className="relative w-48 h-48 mb-6">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Título centrado, mayúsculas y más grande */}
      <h3 className="text-2xl font-bold mb-3 text-center uppercase">
        {product.title}
      </h3>

      {/* Descripción centrada */}
      <p className="text-base text-gray-600 text-center">
        {product.description}
      </p>
    </article>
  );
}
