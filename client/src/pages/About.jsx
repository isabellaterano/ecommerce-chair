import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 py-32 bg-base-100">
      <h1 className="text-center text-4xl font-extrabold mb-8">
        Ab<span className="border-b-4 border-primary">out</span> Us
      </h1>

      <figure className="flex justify-center items-center mb-12">
        <img
          src="/images/image.jpg"
          alt="chair"
          width="560px"
          className="rounded-lg shadow-lg"
        />
      </figure>

      <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
        <div className="mb-12 lg:mb-0 lg:w-1/2">
          <p className="text-2xl font-bold pb-4">Our Mission</p>
          <p className="text-lg leading-relaxed">
            Once upon a time in the heart of our bustling city, a vision took
            root, a vision to redefine the way people experience comfort and
            style. That vision materialized into our chair furniture store,
            where each piece tells a story of craftsmanship, innovation, and a
            passion for transforming spaces.
          </p>
        </div>

        <div className="lg:w-1/2">
          <p className="text-2xl font-bold pb-4">Our Journey</p>
          <p className="text-lg leading-relaxed">
            Our journey began with a simple belief: that a chair is not merely
            an object, it's an integral part of your life, witnessing your
            moments of joy, contemplation, and relaxation. We embarked on a
            quest to curate a collection that goes beyond the ordinary, blending
            form and function seamlessly. Every chair in our store carries the
            essence of thoughtful design and meticulous craftsmanship, from
            classic elegance to avant-garde aesthetics.
          </p>
        </div>
      </div>

      <p className="text-center text-xl mt-12">
        Our commitment extends beyond selling furniture, it's about creating an{" "}
        <span className="border-b-2 border-orange-700 text-primary font-semibold">
          experience
        </span>
        .
      </p>

      <div className="mt-16 text-center">
        <button
          onClick={() => navigate("/chairs")}
          className="btn btn-primary px-8 py-3 text-lg"
        >
          Explore Our Collection
        </button>
      </div>
    </section>
  );
};

export default About;
