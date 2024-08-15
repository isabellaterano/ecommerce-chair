import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const cart = useContext(ShopContext);
  const navigate = useNavigate();

  const checkout = async () => {
    await fetch("https://ecommerce-chair.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <div className="mt-6 rounded-lg border bg-slate-100 p-6 shadow-md md:mt-0">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">$ {cart.getTotalCost().toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">FREE</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <p className="text-lg font-bold">
          $ {cart.getTotalCost().toFixed(2)} USD
        </p>
      </div>
      <button
        onClick={checkout}
        className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-black hover:bg-opacity-80"
      >
        Checkout
      </button>
      <button
        onClick={() => navigate("/chairs")}
        className="mt-2 w-full rounded-md bg-secondary py-1.5 font-medium text-black hover:bg-opacity-80"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Billing;
