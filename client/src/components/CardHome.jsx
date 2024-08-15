import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const CardHome = () => {
  return (
    <section className="bg-base-200 py-28 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Why Shop With Us?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-lg">
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body flex flex-col items-center text-center p-6">
            <FaTruckFast className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">
              Enjoy free shipping on all orders, no matter the size or
              destination.
            </p>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body flex flex-col items-center text-center p-6">
            <RiSecurePaymentFill className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Your payment information is encrypted and secure with us.
            </p>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body flex flex-col items-center text-center p-6">
            <MdSupportAgent className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              We're here to assist you anytime, any day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHome;
