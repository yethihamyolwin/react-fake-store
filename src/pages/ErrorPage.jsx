import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404 Page Not Found</h1>
        <p className=" w-96 text-gray-400 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          ducimus, quidem atque debitis asperiores ipsam?
        </p>
        <Link to={"/"} className=" border border-black px-4 py-1">
          Return to Home Page
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
