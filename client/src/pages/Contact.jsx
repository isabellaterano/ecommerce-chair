const Contact = () => {
  return (
    <div className="min-h-dvh">
      <h1 className="text-center text-3xl font-extrabold m-8 ">
        Con<span className="border-b-2 border-b-primary">tact</span>
      </h1>
      <form className="flex justify-center items-center flex-col">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Last Name</span>
          </div>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Message"
          ></textarea>
        </label>
        <button className="btn btn-primary mt-8 w-80">Send</button>
      </form>
    </div>
  );
};

export default Contact;
