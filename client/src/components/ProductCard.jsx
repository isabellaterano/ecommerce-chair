import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiMinus, HiPlus } from "react-icons/hi2";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  // Tratamento preventivo para garantir exibição correta do preço
  const formattedPrice =
    typeof product.price === "string" && product.price.includes("$")
      ? product.price
      : `$${product.price}`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 h-full flex flex-col justify-between">
      {/* PRODUCT IMAGE CONTAINER */}
      <div className="relative bg-gradient-to-b from-zinc-50 to-zinc-100/50 p-8 flex items-center justify-center aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-40 sm:h-44 object-contain mix-blend-multiply transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>

      {/* PRODUCT DETAILS & ACTIONS */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-zinc-900 font-bold text-lg tracking-tight group-hover:text-orange-500 transition-colors duration-300">
            {product.name}
          </h2>
          <p className="text-zinc-400 text-xs mt-1">Premium Ergonomics</p>
          <p className="text-zinc-900 font-black text-xl tracking-tight mt-3">
            {formattedPrice}
          </p>
        </div>

        {/* INTERACTION FOOTER */}
        <div className="mt-6 pt-4 border-t border-zinc-100/80">
          {productQuantity > 0 ? (
            <div className="flex items-center justify-between gap-3 animate-fade-in">
              {/* QUANTITY TOGGLE BAR */}
              <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-full p-1 shadow-inner">
                <button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:bg-white hover:text-zinc-900 active:scale-95 transition-all"
                  aria-label="Decrease quantity"
                >
                  <HiMinus className="w-3 h-3" />
                </button>

                <span className="w-10 text-center text-zinc-900 font-bold text-sm select-none">
                  {productQuantity}
                </span>

                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 hover:bg-white hover:text-zinc-900 active:scale-95 transition-all"
                  aria-label="Increase quantity"
                >
                  <HiPlus className="w-3 h-3" />
                </button>
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                aria-label={`Remove all ${product.name} from cart`}
              >
                <FaRegTrashCan className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* ADD TO CART ACTION */
            <button
              onClick={() => cart.addOneToCart(product.id)}
              className="w-full bg-zinc-950 text-white py-3 px-5 rounded-full text-sm font-semibold tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-orange-500/10 active:scale-[0.98]"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
