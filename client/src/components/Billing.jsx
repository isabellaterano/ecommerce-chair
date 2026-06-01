import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { HiOutlineLockClosed, HiOutlineArrowLongLeft } from "react-icons/hi2";

const Billing = () => {
  const cart = useContext(ShopContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const totalCost = cart.getTotalCost();

  const checkout = async () => {
    if (isLoading || totalCost <= 0) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://ecommerce-chair.onrender.com/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cart.items }),
        },
      );

      const data = await response.json();
      if (data.url) {
        window.location.assign(data.url);
      }
    } catch (error) {
      console.error("Checkout redirection failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full text-zinc-900">
      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
        Summary
      </h3>

      {/* FEES TABLE */}
      <div className="space-y-4 text-sm font-medium">
        <div className="flex justify-between items-center">
          <p className="text-zinc-500">Subtotal</p>
          <p className="text-zinc-950 font-bold">${totalCost.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-zinc-500">Standard Shipping</p>
          <p className="text-orange-600 font-bold uppercase text-xs tracking-wider bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
            Free
          </p>
        </div>
      </div>

      <hr className="my-5 border-zinc-100" />

      {/* TOTAL VALUE */}
      <div className="flex justify-between items-baseline mb-8">
        <p className="font-bold text-base tracking-tight">Total</p>
        <div className="text-right">
          <p className="text-2xl font-black tracking-tight text-zinc-950">
            ${totalCost.toFixed(2)}
          </p>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">
            USD (Taxes incl.)
          </p>
        </div>
      </div>

      {/* ACTION SYSTEM BUTTONS */}
      <div className="space-y-3">
        <button
          onClick={checkout}
          disabled={isLoading || totalCost === 0}
          className="group w-full bg-zinc-950 text-white py-4 px-6 rounded-2xl font-semibold text-sm tracking-wide hover:bg-orange-500 disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-orange-500/10 flex items-center justify-center gap-2"
        >
          <HiOutlineLockClosed className="text-base group-hover:scale-110 transition-transform" />
          {isLoading ? "Processing Gateway..." : "Proceed to Checkout"}
        </button>

        <button
          onClick={() => navigate("/chairs")}
          disabled={isLoading}
          className="w-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-zinc-700 py-3.5 px-6 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
        >
          <HiOutlineArrowLongLeft className="text-lg" />
          Continue Shopping
        </button>
      </div>

      {/* ENCRYPTION BADGE */}
      <div className="mt-6 text-center">
        <p className="text-[10px] text-zinc-400 font-medium">
          🔒 Secure 256-bit SSL encrypted checkout connection.
        </p>
      </div>
    </div>
  );
};

export default Billing;
