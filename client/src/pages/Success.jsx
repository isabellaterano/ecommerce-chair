import { SlPresent } from "react-icons/sl";

function Success() {
  return (
    <div className="flex justify-center items-center flex-col min-h-dvh m-4">
      <figure>
        <SlPresent className="h-32 w-32" />
      </figure>
      <h1 className="text-3xl mb-11 mt-11 text-primary font-bold">
        Enjoy your new chair!
      </h1>
      <p>
        If you have any further questions or need assistance with your purchase,
        feel free to reach out.
      </p>
    </div>
  );
}

export default Success;
