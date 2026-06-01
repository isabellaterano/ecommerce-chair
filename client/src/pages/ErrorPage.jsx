import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-black mb-4">Oops!</h1>
      <p className="text-gray-600 mb-6">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm text-gray-500">
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
    </div>
  );
}
