import ProductsHero from "@/components/products/ProductsHero";
import ProductsList from "@/components/products/ProductsList";

export const metadata = {
  title: "Products | Plex Commodities Co.",
  description: 
    "Explore the full range of pulses and agricultural commodities offered by Plex Commodities Co."
};

export default function ProductsPage() {
  return(
    <>
      <ProductsHero />
      <ProductsList />
    </>
  )
}