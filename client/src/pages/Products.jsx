import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "/src/products";

const Products = () => {
  // Estado mockado para os botões de filtro rápido
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Lounge", "Office", "Executive", "Ergonomic"];

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100/60 shadow-sm">
            Architectural Catalog
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight mt-6 leading-tight">
            Chairs For{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 font-light italic">
              Modern Spaces
            </span>
          </h1>

          <p className="text-zinc-500 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our complete portfolio of elite seating. Engineering
            meticulously balanced for orthopedic support, premium durability,
            and minimalist aesthetics.
          </p>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-200/60 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-zinc-950 text-white shadow-md shadow-zinc-950/10"
                  : "bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-900 hover:text-zinc-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
          {products.map((product, idx) => (
            <div
              key={product.id || idx}
              className="group transform hover:-translate-y-1.5 transition-all duration-500 ease-out"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* EMPTY STATE COMPONENT (Opcional - caso filtros retornem vazio) */}
        {products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-zinc-100 shadow-sm mt-8">
            <p className="text-zinc-400 font-medium">
              No items found in this architectural line.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
