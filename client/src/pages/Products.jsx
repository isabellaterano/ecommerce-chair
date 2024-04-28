import ProductCard from "../components/ProductCard";
import { products } from "/src/products";

const Products = () => {
  return (
    <section className="">
      <h1 className="text-center text-3xl font-extrabold p-8">
        Chairs Lou<span className="border-b-2 border-b-primary">nge</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2">
        {products.map((product, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
