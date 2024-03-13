import ProductCard from "../components/ProductCard";
import { products } from "/src/products";

const Products = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-extrabold m-8">
        Chairs<span className="border-b-2 border-b-primary"> Lounge</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1 mx-2">
        {products.map((product, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
