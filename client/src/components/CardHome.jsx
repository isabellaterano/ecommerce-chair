import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const CardHome = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1 my-12 md:mx-8 place-items-center py-8">
      <div className="card w-80 bg-primary text-primary-content shadow-xl ">
        <div className="card-body items-center text-center">
          <FaTruckFast className="w-8 h-10" />
          <h2 className="card-title">Free Shipping</h2>
          <p>
            Our free shipping policy applies to all orders, regardless of order
            value or destination.
          </p>
        </div>
      </div>

      <div className="card w-80 bg-primary text-primary-content shadow-xl">
        <div className="card-body items-center text-center">
          <RiSecurePaymentFill className="w-10 h-10" />
          <h2 className="card-title">Secure Payments</h2>
          <p>
            Your payments is always safe, secure, and protected at all times.
          </p>
        </div>
      </div>

      <div className="card w-80 bg-primary text-primary-content shadow-xl">
        <div className="card-body items-center text-center">
          <MdSupportAgent className="w-10 h-10" />
          <h2 className="card-title">Free Shipping</h2>
          <p>
            Our free shipping policy applies to all orders, regardless of order
            value or destination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
