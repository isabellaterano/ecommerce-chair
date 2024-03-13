import { FaSadCry } from "react-icons/fa";

function Cancel() {
  return (
    <div className="flex justify-center items-center flex-col min-h-dvh m-4">
      <figure>
        <FaSadCry className="h-32 w-32" />
      </figure>
      <h1 className="mt-11">
        If you need to cancel your purchase, please provide me with your order
        details, and I'll assist you in processing the cancellation as quickly
        as possible.
      </h1>
    </div>
  );
}

export default Cancel;
