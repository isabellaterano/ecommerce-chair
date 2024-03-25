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
    <div className="container mx-auto px-4 mb-8 w-full min-h-screen">
      <h1 className="text-center text-3xl font-extrabold m-8">
        Shopping<span className="border-b-2 border-b-primary"> Cart</span>
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          {productsCount > 0 ? (
            <>
              <div className="space-y-6 md:w-2/3">
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct
                    key={idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                  ></CartProduct>
                ))}
              </div>
              <div className="md:w-1/3">
                <Billing />
              </div>
            </>
          ) : (
            <div className="flex flex-wrap flex-col items-center justify-center h-screen">
              <h1 className="font-bold mb-4">
                There are no items in your cart!
              </h1>
              <button
                onClick={() => navigate("/chairs")}
                className="btn bg-primary"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
