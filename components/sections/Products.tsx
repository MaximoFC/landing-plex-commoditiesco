import ProductCard from "../ProductCard";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    title: "Slow Darkening Pinto",
    description:
      "This type has white flowers and, in most cases, is referred to as Phaseolus vulgaris by scientists. They are packed with protein, fiber, and micronutrients that help in growth and development.",
    image: "/images/slow-darkening-pinto.png",
  },
  {
    id: 2,
    title: "Regular Pinto",
    description:
      "Regular Pinto beans are very different because they show different colors when cooked (solid light brown or pale pink when cooked). It has about seven nutritious values: antioxidants, fiber, nutrients, improvement of blood sugar regulation, and aiding heart health.",
    image: "/images/regular-pinto.png",
  },
  {
    id: 3,
    title: "Cranberry",
    description:
      "Cranberries are a superfood because they possess high nutrient and antioxidant content. Research has linked the nutrients in cranberries to a lower risk of urinary tract infection (UTI), the prevention of certain types of cancer, improved immune function, and decreased blood pressure.",
    image: "/images/cranberry.png",
  },
  {
    id: 4,
    title: "Navy Beans",
    description:
      "Navy beans have important micronutrients such as folate, iron, zinc, magnesium, and calcium. It also has approximately 16% of the recommended daily allowance (RDA) for potassium 7 which is very useful in the body’s normal functioning.",
    image: "/images/navy.png",
  },
  {
    id: 5,
    title: "Black Beans",
    description:
      "Science recommends 25-30g per day consumption of Black Beans because of their high nutrient values. They also assist in controlling heart disease, obesity, and many other types of cancer.",
    image: "/images/black.png",
  },
  {
    id: 6,
    title: "Great Northern Beans",
    description:
      "It is one of the common beans in North America which was spread by migrating farmers. Just like other common beans, Great Northern Beans have high nutrient values which are useful in the body such as fiber, potassium, calcium, and folate. They help the body in regulating cancerous diseases, obesity, and blood sugar levels.",
    image: "/images/great-northern.png",
  },
  {
    id: 7,
    title: "Kidney Beans",
    description:
      "Kidney beans are unique because they have all the nutrients required in plants. Also, they provide you with various minerals, vitamins, fibers, and antioxidants. They assist in weight loss and promote colon health in addition to blood sugar level controls.",
    image: "/images/kidney.png",
  },
  {
    id: 8,
    title: "Light Kidney Beans",
    description:
      "Light-Kidney Beans are unique because they have all the nutrients required in plants. Also, they provide you with various minerals such as iron, phosphorus, potassium, vitamins, fibers, and antioxidants. They assist in weight loss and promote colon health in addition to blood sugar level controls.",
    image: "/images/light-kidney.png",
  },
  {
    id: 9,
    title: "Small Red",
    description:
      "Small Red Beans are very useful because they aid in weight loss, promotion of colon health, and protection from many cancerous diseases. They contain minerals such as iron, phosphorus, potassium, vitamins, fibers, and antioxidants, which are also useful in regulating blood sugar levels.",
    image: "/images/small-red.png",
  },
];

export default function Products() {
  return (
    <section 
      className="py-20 bg-gray-50"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">OUR PRODUCTS</h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-16
          "
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
