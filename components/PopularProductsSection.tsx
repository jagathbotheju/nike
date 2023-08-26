import { products } from "@/lib/constants";
import PopularProductCard from "./PopularProductCard";

const PopularProductsSection = () => {
  return (
    <section className="flex w-full mt-28 mx-auto px-5 lg:px-32">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold">
          Our <span className="text-orange-500">Popular</span> Products
        </h2>
        <p className="text-slate-500">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-4">
          {products.map((product, index) => (
            <PopularProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
