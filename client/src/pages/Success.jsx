import { useNavigate } from "react-router-dom";
import { HiOutlineCheckCircle, HiOutlineArrowLongRight } from "react-icons/hi2";

function Success() {
  const navigate = useNavigate();

  // Gera um número de pedido fictício apenas para fins de amostragem visual de alta fidelidade
  const fakeOrderId = "LX-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FAFAFA] px-4 sm:px-6 py-12 text-center">
      <div className="max-w-md w-full bg-white border border-zinc-100 rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-zinc-200/40 flex flex-col items-center">
        {/* SUCCESS ICON CONTAINER */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center text-emerald-600 mb-6 animate-bounce-short">
          <HiOutlineCheckCircle className="text-3xl" />
        </div>

        {/* RECEIPT STATUS */}
        <span className="text-xs uppercase tracking-widest font-bold text-orange-600">
          Payment Confirmed
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight mt-3">
          Enjoy Your New Chair!
        </h1>

        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          Your order has been successfully processed. An architectural piece is
          officially being prepared to elevate your space.
        </p>

        {/* METADATA SUMMARY */}
        <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 mt-6 w-full text-left space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400 font-medium">Order Number:</span>
            <span className="text-zinc-950 font-mono font-bold">
              {fakeOrderId}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400 font-medium">Delivery Est:</span>
            <span className="text-zinc-950 font-bold">5 - 7 Business Days</span>
          </div>
        </div>

        {/* ASSISTANCE INSTRUCTIONS */}
        <p className="mt-6 text-xs text-zinc-400 leading-normal">
          A digital invoice and tracking link have been dispatched to your
          email. For immediate concierge assistance, reach out to{" "}
          <a
            href="mailto:support@luxechair.com"
            className="text-zinc-950 font-bold hover:text-orange-500 transition-colors underline"
          >
            support@luxechair.com
          </a>
          .
        </p>

        {/* RETURN ACTIONS */}
        <div className="mt-8 space-y-3 w-full">
          <button
            onClick={() => navigate("/chairs")}
            className="group w-full bg-zinc-950 text-white py-3.5 px-6 rounded-2xl font-semibold text-sm tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-orange-500/10 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            Continue Exploring
            <HiOutlineArrowLongRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-transparent text-zinc-500 hover:text-zinc-900 py-2 px-6 rounded-xl font-semibold text-xs uppercase tracking-widest transition-colors"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
