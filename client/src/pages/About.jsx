import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FAFAFA] min-h-screen py-12 ">
      {/* HERO HEADER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24">
        <span className="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100/60 shadow-sm">
          Our Philosophy
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight mt-6 leading-tight">
          Crafting Identity{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 font-light italic">
            Through Comfort
          </span>
        </h1>

        <p className="mt-6 text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We design and engineer premium architectural seating that redefines
          anatomical balance, timeless elegance, and daily living.
        </p>
      </div>

      {/* FEATURED COVER IMAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/30 rounded-[2.5rem] -rotate-1 transform scale-[0.99] pointer-events-none" />
        <img
          src="/images/image.jpg"
          alt="Architectural chair crafting process overview"
          loading="lazy"
          className="w-full max-h-[550px] object-cover rounded-[2.5rem] shadow-2xl relative z-10 border border-white"
        />
      </div>

      {/* MANIFESTO / CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* MISSION */}
        <div className="flex flex-col justify-start">
          <span className="text-[10px] uppercase font-bold text-orange-500 tracking-wider mb-2">
            01 / Intent
          </span>
          <h2 className="text-2xl font-bold text-zinc-950 tracking-tight mb-4">
            Our Mission
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            We believe a chair is never just a piece of furniture — it is an
            active component of your creative focus and daily well-being. Our
            baseline intent is to organically merge pure anatomical support with
            a clean structural aesthetic, turning function into art.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="flex flex-col justify-start">
          <span className="text-[10px] uppercase font-bold text-orange-500 tracking-wider mb-2">
            02 / Heritage
          </span>
          <h2 className="text-2xl font-bold text-zinc-950 tracking-tight mb-4">
            Our Journey
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            What started as a simple search for the perfect workspace posture
            evolved into a meticulous design atelier. By source-selecting elite
            raw textiles and collaborating directly with orthopedic engineers,
            we balance physical relief with minimalism.
          </p>
        </div>
      </div>

      {/* HIGH-END QUOTE SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36">
        <div className="relative bg-white border border-zinc-100 p-8 sm:p-12 rounded-[2rem] shadow-sm text-center">
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-zinc-950 text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-2xl shadow-md">
            “
          </span>
          <p className="text-xl sm:text-2xl font-medium text-zinc-800 leading-relaxed font-sans italic">
            A masterfully designed chair doesn’t demand attention through loud
            shapes; it commands space by supporting your quietest, most
            productive daily moments.
          </p>
          <div className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
            LuxeChair Design Lab
          </div>
        </div>
      </div>

      {/* CLOSING CTA */}
      <div className="text-center mt-20 sm:mt-28">
        <button
          onClick={() => navigate("/chairs")}
          className="group inline-flex items-center justify-center gap-3 bg-zinc-950 text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Explore Our Portfolio
          <HiOutlineArrowLongRight className="text-lg group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default About;
