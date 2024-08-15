import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { getProductData } from "../products";
import { MdClose } from "react-icons/md";

const CartProduct = (props) => {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div>
      <div className="rounded-lg">
        <div className="justify-between mb-6 rounded-lg bg-slate-100 p-6 shadow-md sm:flex sm:justify-start">
          <img
            src={productData.image}
            alt="product-image"
            className="w-full rounded-lg sm:w-40"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <p className="mt-1 text-sm text-gray-700 font-bold">
                {productData.name}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Price: ${productData.price}
              </p>
            </div>

            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100 ">
                <div>
                  <span
                    onClick={() => cart.removeOneFromCart(id)}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary text-zinc-800 hover:text-blue-50"
                  >
                    -
                  </span>
                  <span className="h-w-8 border-none bg-gray-100 text-center text-xs outline-none px-2 text-zinc-800 ">
                    {quantity}
                  </span>
                  <span
                    onClick={() => cart.addOneToCart(id)}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50 text-zinc-800 "
                  >
                    +
                  </span>
                </div>

                <div className="flex items-center space-x-4 ml-40">
                  <button
                    className="lws-removeFromCart"
                    onClick={() => cart.deleteFromCart(id)}
                  >
                    <MdClose
                      color="#fff"
                      className="bg-primary rounded-full p-1 w-7 h-7"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
