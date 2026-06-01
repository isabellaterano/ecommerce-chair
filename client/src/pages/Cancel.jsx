import { useNavigate } from "react-router-dom";
import { HiOutlineArrowPath, HiOutlineArrowLongLeft } from "react-icons/hi2";

function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FAFAFA] px-6 py-12 text-center">
      <div className="max-w-md w-full bg-white border border-zinc-100 rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-zinc-200/40 flex flex-col items-center">
        {/* ICON CONTAINER */}
        <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100/60 flex items-center justify-center text-orange-500 mb-6">
          <HiOutlineArrowPath className="text-2xl animate-spin-slow" />
        </div>

        {/* STATUS HEADER */}
        <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
          Checkout Incomplete
        </span>
        <h1 className="text-2xl font-black text-zinc-950 tracking-tight mt-3">
          Operation Canceled
        </h1>

        {/* EXPLANATORY TEXT */}
        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          Your transaction was safely paused and no charges were made. If you
          experienced an issue or wish to modify your architectural items, our
          team is ready to assist you.
        </p>

        <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 mt-6 w-full text-xs text-zinc-500 font-medium leading-normal">
          Need direct help? Contact our desk at{" "}
          <a
            href="mailto:support@luxechair.com"
            className="text-zinc-950 font-bold hover:text-orange-500 transition-colors underline"
          >
            support@luxechair.com
          </a>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 space-y-3 w-full">
          <button
            onClick={() => navigate("/cart")}
            className="w-full bg-zinc-950 text-white py-3.5 px-6 rounded-2xl font-semibold text-sm tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-orange-500/10 active:scale-[0.99]"
          >
            Return to Cart
          </button>

          <button
            onClick={() => navigate("/chairs")}
            className="w-full bg-transparent text-zinc-600 hover:text-zinc-950 py-2 px-6 rounded-xl font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
          >
            <HiOutlineArrowLongLeft className="text-lg" />
            Back to Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
