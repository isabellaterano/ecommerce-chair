import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiStar } from "react-icons/hi2";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-[#FAFAFA] overflow-hidden sm:pt-8 pb-20 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* BACKGROUND ACCENTS (Decorative & Softer) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-orange-300/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-zinc-300/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-orange-100 shadow-sm text-orange-600 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8">
            <span className="animate-pulse mr-2">✨</span> New Collection 2026
          </span>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-zinc-900"
          >
            Modern Chairs
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              For Modern Living
            </span>
          </h1>

          <p className="mt-6 text-zinc-600 text-base sm:text-lg leading-relaxed max-w-lg">
            Discover premium ergonomic chairs designed for comfort, elegance,
            and long-lasting durability. Upgrade your space with timeless design
            and superior craftsmanship.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
            <button
              onClick={() => navigate("/chairs")}
              className="group flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              aria-label="Shop chairs"
            >
              Shop Now
              <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3.5 rounded-full font-medium bg-white border border-zinc-200 text-zinc-800 hover:border-zinc-900 hover:bg-zinc-50 transition-all duration-300"
              aria-label="Learn more about LuxeChair"
            >
              Learn More
            </button>
          </div>

          {/* TRUST INFO */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 mt-12 sm:mt-16 pt-8 border-t border-zinc-200/60 sm:divide-x sm:divide-zinc-200/60">
            <div className="sm:pr-8">
              <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                10K+
              </p>
              <p className="text-sm font-medium text-zinc-500 mt-1">
                Happy Customers
              </p>
            </div>

            <div className="sm:px-8">
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                  4.9
                </p>
                <HiStar className="text-orange-400 text-xl" />
              </div>
              <p className="text-sm font-medium text-zinc-500 mt-1">
                Average Rating
              </p>
            </div>

            <div className="sm:pl-8">
              <p className="text-3xl font-bold text-zinc-900 tracking-tight">
                50+
              </p>
              <p className="text-sm font-medium text-zinc-500 mt-1">
                Chair Models
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column in Grid */}
            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
              <div className="group relative bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-[2rem] p-6 shadow-sm border border-white/60 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 hover:-translate-y-1">
                <img
                  src="/images/chair7.png"
                  alt="Ergonomic office chair in charcoal"
                  loading="lazy"
                  className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-[2rem] p-6 shadow-sm border border-white/60 hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-1">
                <img
                  src="/images/chair2.png"
                  alt="Modern lounge chair in warm tones"
                  loading="lazy"
                  className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Right Column in Grid */}
            <div className="pt-0">
              <div className="group relative bg-gradient-to-br from-zinc-100 to-zinc-200/50 rounded-[2rem] p-6 h-full min-h-[300px] flex items-center justify-center shadow-sm border border-white/60 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 hover:-translate-y-1">
                <img
                  src="/images/chair5.png"
                  alt="Signature bestseller chair"
                  loading="lazy"
                  className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute top-4 right-0 sm:-right-4 bg-white/80 backdrop-blur-md shadow-lg border border-white px-5 py-2.5 rounded-full flex items-center gap-2 animate-bounce-slow">
            <span className="text-orange-500 text-lg">🔥</span>
            <span className="text-sm font-bold text-zinc-800 tracking-wide">
              Best Seller
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
