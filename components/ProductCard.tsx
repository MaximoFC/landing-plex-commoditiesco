import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col border-l border-stone-300 pl-8">
      {/* Imagen más grande y centrada */}
      <div className="relative w-full h-56 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Título centrado, mayúsculas y más grande */}
      <h3 className="font-serif text-xl text-neutral-900 mb-3 text-center">
        {product.title}
      </h3>

      {/* Descripción centrada */}
      <p className="text-neutral-600 leading-relaxed">
        {product.description}
      </p>
    </article>
  );
}
