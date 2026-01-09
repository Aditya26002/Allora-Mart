import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
