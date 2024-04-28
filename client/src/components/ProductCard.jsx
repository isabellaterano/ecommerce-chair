import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="card w-96 h-96 shadow-xl mb-8">
      <figure className="bg-slate-200">
        <img src={product.image} alt={product.name} className="w-52" />
      </figure>
      <div className="card-body text-slate-900">
        <h2 className="card-title text-lg">{product.name}</h2>
        <p>${product.price}</p>
        {productQuantity > 0 ? (
          <div className="card-actions justify-between">
            <div className="flex ">
              <span
                onClick={() => cart.removeOneFromCart(product.id)}
                className="cursor-pointer rounded-l bg-secondary py-1 px-3.5 duration-100 hover:bg-primary hover:text-purple-50"
              >
                -
              </span>
              <span className="h-w-8 border bg-white text-center text-xs outline-none py-[5px] px-3.5 ">
                {productQuantity}
              </span>

              <span
                onClick={() => cart.addOneToCart(product.id)}
                className="cursor-pointer rounded-r bg-secondary py-1 px-3 duration-100 hover:bg-primary hover:text-purple-50"
              >
                +
              </span>
            </div>
            <div>
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="btn-white"
              >
                <FaRegTrashCan className="w-6 h-6 hover:text-primary" />
              </button>
            </div>
          </div>
        ) : (
          <div className="card-actions justify-end">
            <button
              onClick={() => cart.addOneToCart(product.id)}
              className="btn btn-primary"
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
