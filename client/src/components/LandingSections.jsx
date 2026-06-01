import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLongRight, HiOutlineEye } from "react-icons/hi2";

const LandingSections = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      image: "/images/chair1.png",
      price: "$149.00",
      tag: "Trending",
    },
    {
      id: 2,
      name: "Luxury Recliner",
      image: "/images/chair2.png",
      price: "$299.00",
      tag: "New",
    },
    {
      id: 3,
      name: "Executive Office Chair",
      image: "/images/chair4.png",
      price: "$199.00",
      tag: "Best Seller",
    },
  ];

  return (
    <>
      {/* FEATURED PRODUCTS */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Curated Selection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight mt-4">
                Crafted for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                  Modern Living
                </span>
              </h2>
            </div>
            <p className="text-zinc-500 text-sm sm:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
              Premium seating designed with ergonomics, durability, and timeless
              architectural aesthetics.
            </p>
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate("/chairs")}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-zinc-200/60 transition-all duration-500 border border-zinc-100/80 flex flex-col justify-between"
              >
                {/* Image Wrapper */}
                <div className="relative bg-gradient-to-b from-zinc-50 to-zinc-100/50 p-8 pt-12 flex items-center justify-center overflow-hidden aspect-[4/3]">
                  {p.tag && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-zinc-100 text-zinc-900 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {p.tag}
                    </span>
                  )}

                  {/* Quick View Icon Overlay */}
                  <div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-zinc-900 p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <HiOutlineEye className="text-xl" />
                    </span>
                  </div>

                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-48 sm:h-56 object-contain mix-blend-multiply transform group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Info Text */}
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors duration-300 tracking-tight text-lg">
                        {p.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-1">
                        Premium Finish
                      </p>
                    </div>
                    <p className="text-zinc-900 font-bold text-lg tracking-tight">
                      {p.price}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                    Explore Details
                    <HiOutlineArrowLongRight className="text-lg transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS (Refined Minimalist) */}
      <section className="bg-zinc-50/60 border-y border-zinc-100 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="flex flex-col items-start">
              <div className="p-3.5 bg-orange-100/60 rounded-2xl text-orange-600 mb-5">
                <FaTruckFast className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                Complimentary Shipping
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Enjoy reliable premium worldwide delivery on all orders over
                $100.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3.5 bg-orange-100/60 rounded-2xl text-orange-600 mb-5">
                <RiSecurePaymentFill className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                Secure Transactions
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Your data security is paramount. Checkout confidently with fully
                encrypted gate systems.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="p-3.5 bg-orange-100/60 rounded-2xl text-orange-600 mb-5">
                <MdSupportAgent className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                Dedicated Concierge
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Our customer solutions team is ready to assist you around the
                clock, 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND ABOUT */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
              Our Paradigm
            </span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-950 mt-2">
              Where pure anatomy meets architectural{" "}
              <span className="text-orange-500 font-light italic">comfort</span>
              .
            </h3>

            <p className="text-zinc-500 mt-6 text-sm sm:text-base leading-relaxed">
              Every curve, choice of premium textile, and internal chassis
              structure is meticulously balanced. We treat utility as artwork,
              translating ergonomic spine support into standard minimal luxury
              for everyday environments.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="mt-8 inline-flex items-center gap-2 bg-zinc-950 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-orange-500 transition-all shadow-md hover:shadow-lg hover:shadow-orange-500/20"
            >
              Learn More About Us
            </button>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center relative">
            {/* Design geometric accent layer behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-[2.5rem] -rotate-2 transform scale-95 pointer-events-none" />
            <img
              src="/images/image2.jpg"
              alt="Architectural chair staging setup"
              loading="lazy"
              className="rounded-[2.5rem] shadow-2xl z-10 w-full max-w-md lg:max-w-xl object-cover aspect-[4/3] border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* NEWSLETTER (Modern Seamless Bar) */}
      <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Stay In The Loop
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            Subscribe to receive exclusive access to early product launches,
            private seasonal sales, and design insights.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 max-w-md mx-auto"
          >
            <div className="relative flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 focus-within:border-orange-500/50 focus-within:ring-2 focus-within:ring-orange-500/10 transition-all">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-transparent text-white text-sm pl-5 pr-4 py-3 outline-none placeholder:text-zinc-500"
              />
              <button
                type="submit"
                className="bg-white text-zinc-950 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LandingSections;
