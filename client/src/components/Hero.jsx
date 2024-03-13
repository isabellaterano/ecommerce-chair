import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/image.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Elevate Your Space, Redefine Your Style
          </h1>
          <p className="mb-5">
            Browse through our curated collection of chairs, meticulously
            selected to cater to every taste and style. From sleek and modern
            designs to timeless classics, we offer a diverse range of options to
            suit your aesthetic preferences.
          </p>
          <button
            onClick={() => navigate("/chairs")}
            className="btn btn-primary"
          >
            Shop Now
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
