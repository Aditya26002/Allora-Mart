import React from "react";

const SaleBar = () => {
  return (
    <>
      <div className="w-full bg-black text-gray-100 text-center p-2 font-light text-xs">
        Free delivery on orders over $50 -{" "}
        <span className="underline font-medium cursor-pointer">Shop Now!</span>
      </div>
    </>
  );
};

export default SaleBar;
