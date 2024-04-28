const About = () => {
  return (
    <section className="mx-8 lg:mx-36 min-h-dvh mb-9">
      <h1 className="text-center text-3xl font-extrabold m-8">
        Ab<span className="border-b-2 border-b-primary">out</span>
      </h1>
      <p className="text-lg font-bold pb-2">Our Mission</p>
      <p className="mb-8">
        Once upon a time in the heart of our bustling city, a vision took root,
        a vision to redefine the way people experience comfort and style. That
        vision materialized into our chair furniture store, where each piece
        tells a story of craftsmanship, innovation, and a passion for
        transforming spaces.
      </p>
      <p className="text-lg font-bold pb-2">Our Jorney</p>
      <p className="card">
        Our journey began with a simple belief: that a chair is not merely an
        object, it's an integral part of your life, witnessing your moments of
        joy, contemplation, and relaxation. We embarked on a quest to curate a
        collection that goes beyond the ordinary, blending form and function
        seamlessly. Every chair in our store carries the essence of thoughtful
        design and meticulous craftsmanship, from classic elegance to
        avant-garde aesthetics. As you step into our showroom, you're not just
        surrounded by furniture, you're entering a realm where comfort meets
        creativity, and every chair has a purpose, to enhance your living space
        and elevate your lifestyle.
      </p>

      <figure className="flex justify-center items-center my-8">
        <img
          src="/images/image.jpg"
          alt="chair"
          width={"560px"}
          className="rounded-md"
        />
      </figure>
      <p className="text-center">
        Our commitment extends beyond selling furniture, it's about creating an{" "}
        <span className="border-b-2 text-orange-700">experience</span>.
      </p>
    </section>
  );
};

export default About;
