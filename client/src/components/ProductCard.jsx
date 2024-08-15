import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="card w-full max-w-xs h-full shadow-xl mb-8 hover:shadow-2xl transition-shadow duration-300">
      <figure className="bg-slate-100 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain"
        />
      </figure>
      <div className="card-body text-slate-900">
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p className="text-xl font-bold text-primary">${product.price}</p>
        {productQuantity > 0 ? (
          <div className="card-actions justify-between mt-4">
            <div className="flex items-center">
              <button
                onClick={() => cart.removeOneFromCart(product.id)}
                className="rounded-l bg-secondary py-1 px-3 hover:bg-primary hover:text-white transition duration-150"
              >
                -
              </button>
              <span className="border-t border-b py-1 px-4 text-sm">
                {productQuantity}
              </span>
              <button
                onClick={() => cart.addOneToCart(product.id)}
                className="rounded-r bg-secondary py-1 px-3 hover:bg-primary hover:text-white transition duration-150"
              >
                +
              </button>
            </div>
            <button
              onClick={() => cart.deleteFromCart(product.id)}
              className="text-gray-500 hover:text-red-600 transition duration-150"
            >
              <FaRegTrashCan className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => cart.addOneToCart(product.id)}
              className="btn btn-primary w-full"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
