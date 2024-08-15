import { useNavigate } from "react-router-dom";
import CardHome from "../components/CardHome";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <CardHome />
      <FeaturedProducts />

      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="lg:ml-24">
              <h3 className="text-3xl font-bold mb-6 text-center md:text-left text-primary">
                Where Every Piece Tells a Story of Comfort and Design
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Every chair in our store carries the essence of thoughtful
                design and meticulous craftsmanship, from classic elegance to
                avant-garde aesthetics. Each piece is crafted to enhance your
                living space and elevate your lifestyle.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="btn btn-secondary hover:bg-secondary-focus transition-colors"
              >
                More About Us
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/image2.jpg"
                alt="Chair"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
