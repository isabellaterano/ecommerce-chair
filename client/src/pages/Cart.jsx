import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import Billing from "../components/Billing";

const Cart = () => {
  const cart = useContext(ShopContext);
  const navigate = useNavigate();

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-center text-4xl font-extrabold mb-8">
        Shopping<span className="border-b-4 border-b-primary"> Cart</span>
      </h1>
      <div className="container mx-auto">
        {productsCount > 0 ? (
          <div className="flex flex-col md:flex-row justify-between md:gap-12 gap-8">
            <div className="space-y-6 md:w-2/3">
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}
            </div>
            <div className="md:w-1/3">
              <Billing />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center py-12">
            <h2 className="text-xl font-bold mb-4">
              There are no items in your cart!
            </h2>
            <button
              onClick={() => navigate("/chairs")}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
