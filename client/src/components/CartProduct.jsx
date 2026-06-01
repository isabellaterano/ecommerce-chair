import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { getProductData } from "../products";
import { MdClose } from "react-icons/md";
import { HiMinus, HiPlus } from "react-icons/hi2";

const CartProduct = (props) => {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  // Fallback caso o produto não seja encontrado para evitar quebras de renderização
  if (!productData) return null;

  const formattedPrice =
    typeof productData.price === "string" && productData.price.includes("$")
      ? productData.price
      : `$${productData.price}`;

  return (
    <div className="group relative bg-white border border-zinc-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* PRODUCT DETAILS GROUP */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* IMAGE CONTAINER */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-b from-zinc-50 to-zinc-100/50 border border-zinc-100 rounded-xl flex items-center justify-center p-2 flex-shrink-0 overflow-hidden">
            <img
              src={productData.image}
              alt={productData.name}
              className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* TEXT SPECS */}
          <div>
            <h3 className="text-zinc-950 font-bold text-sm sm:text-base tracking-tight leading-snug">
              {productData.name}
            </h3>
            <p className="text-zinc-400 text-xs mt-0.5">Premium Line</p>
            <p className="text-zinc-950 font-extrabold text-sm sm:text-base tracking-tight mt-2">
              {formattedPrice}
            </p>
          </div>
        </div>

        {/* CONTROLS & DELETION GROUP */}
        <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-100/80">
          {/* STEPPER QUANTITY CONTROLLER */}
          <div className="flex items-center bg-zinc-50 border border-zinc-200/80 rounded-full p-1 shadow-inner">
            <button
              onClick={() => cart.removeOneFromCart(id)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:bg-white hover:text-zinc-900 active:scale-95 transition-all"
              aria-label="Decrease quantity"
            >
              <HiMinus className="w-3 h-3" />
            </button>

            <span className="w-8 text-center text-zinc-900 font-bold text-xs select-none">
              {quantity}
            </span>

            <button
              onClick={() => cart.addOneToCart(id)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:bg-white hover:text-zinc-900 active:scale-95 transition-all"
              aria-label="Increase quantity"
            >
              <HiPlus className="w-3 h-3" />
            </button>
          </div>

          {/* ACTION DELETE BUTTON */}
          <button
            onClick={() => cart.deleteFromCart(id)}
            className="text-zinc-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors duration-200 flex items-center justify-center"
            aria-label={`Remove all ${productData.name} from cart`}
          >
            <MdClose className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
