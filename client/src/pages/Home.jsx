import { useNavigate } from "react-router-dom";
import CardHome from "../components/CardHome";
import Hero from "../components/Hero";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <CardHome />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mx-10 my-12 py-12">
          <div>
            <h4 className="text-2xl mb-4 font-bold ">
              Where Every Piece Tells a Story of Comfort and Design
            </h4>
            <p>
              Every chair in our store carries the essence of thoughtful design
              and meticulous craftsmanship, from classic elegance to avant-garde
              aesthetics. Every chair has a purpose, to enhance your living
              space and elevate your lifestyle.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="btn btn-secondary mt-4 mb-8"
            >
              More about
            </button>
          </div>
          <div>
            <img
              src="/images/image2.jpg"
              alt="chair"
              className="w-[350px] rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
