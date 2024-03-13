import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(ShopContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="card w-96 shadow-xl bg-slate-100 mb-8">
      <figure>
        <img src={product.image} alt="Chair" className="w-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>
        {productQuantity > 0 ? (
          <div className="flex justify-between items-center">
            <div className="flex">
              <span
                onClick={() => cart.removeOneFromCart(product.id)}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
              >
                -
              </span>
              <span className="h-w-8 border bg-white text-center text-xs outline-none py-[5px] px-3.5 ">
                {productQuantity}
              </span>

              <span
                onClick={() => cart.addOneToCart(product.id)}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
              >
                +
              </span>
            </div>
            <div>
              {" "}
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="btn-white"
              >
                <FaRegTrashCan className="w-6 h-6 " />
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
