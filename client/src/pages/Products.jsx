import ProductCard from "../components/ProductCard";
import { products } from "/src/products";

const Products = () => {
  return (
    <section className="py-32 bg-base-100">
      <h1 className="text-center text-4xl font-extrabold mb-28">
        Chairs Lou<span className="border-b-4 border-primary">nge</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center transition-transform transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
