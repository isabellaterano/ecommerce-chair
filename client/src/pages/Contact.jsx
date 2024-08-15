const Contact = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto mt-20">
        <h1 className="text-center text-4xl font-extrabold mb-12">
          Con<span className="border-b-4 border-primary">tact</span> Us
        </h1>
        <form className="flex justify-center items-center flex-col space-y-6">
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                First Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John"
              className="input input-bordered w-full max-w-md"
            />
          </div>

          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Last Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="input input-bordered w-full max-w-md"
            />
          </div>

          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full max-w-md"
            />
          </div>

          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-lg font-semibold">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32 w-full max-w-md"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button className="btn btn-primary w-full max-w-md mt-8">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
