import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import Billing from "../components/Billing";
import { HiOutlineShoppingBag, HiOutlineArrowLongRight } from "react-icons/hi2";

const Cart = () => {
  const cart = useContext(ShopContext);
  const navigate = useNavigate();

  // Garante uma contagem segura independente da estrutura inicial do array
  const productsCount = cart.items
    ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
    : 0;

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER TITLE */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100/60 shadow-sm">
            Review Order
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight mt-6 leading-tight">
            Shopping{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 font-light italic">
              Bag
            </span>
          </h1>

          <p className="text-zinc-400 text-sm font-medium mt-3">
            You have selected{" "}
            <span className="text-zinc-950 font-bold">{productsCount}</span>{" "}
            architectural item(s)
          </p>
        </div>

        {/* EMPTY STATE ARCHITECTURE */}
        {productsCount === 0 ? (
          <div className="max-w-xl mx-auto bg-white border border-zinc-100 rounded-[2.5rem] p-8 sm:p-16 text-center shadow-xl shadow-zinc-200/30 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 mb-6">
              <HiOutlineShoppingBag className="text-2xl" />
            </div>

            <h2 className="text-2xl font-bold text-zinc-950 tracking-tight mb-3">
              Your bag is empty
            </h2>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
              It looks like you haven’t integrated any architectural seating
              options into your space yet.
            </p>

            <button
              onClick={() => navigate("/chairs")}
              className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-orange-500/10 active:scale-[0.98]"
            >
              Discover Lines
              <HiOutlineArrowLongRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          /* ACTIVE CART MAIN LAYOUT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
            {/* PRODUCTS STREAM (Left Container) */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="space-y-1">
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct
                    key={currentProduct.id || idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                  />
                ))}
              </div>
            </div>

            {/* BILLING / TOTAL SUMMARY (Right Container) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white border border-zinc-100 rounded-[2rem] p-6 sm:p-8 shadow-sm">
                <Billing />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
