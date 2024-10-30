import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2 className="text-red-500 text-3xl font-bold text-center mt-8">
        Oops!!!
      </h2>
      <p className="text-2xl font-bold text-center mt-3">
        {error.statusText || error.message}
      </p>
      {error.status === 404 && (
        <div>
          <h3 className="text-center mt-2">Pge not found</h3>
          <p className="text-center mt-2">Go back where you from</p>
          <div className="flex justify-center items-center">
            <Link to="/">
              <button className="mt-2">Home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
