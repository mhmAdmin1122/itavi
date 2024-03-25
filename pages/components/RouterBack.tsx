import { useRouter } from "next/router";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const RouterBack = () => {
  const router = useRouter();

  const handlePreviousClick = () => {
    router.back();
  };
  return (
    <button
      onClick={handlePreviousClick}
      className="slider-button fixed top-[50%] max-[425px]:top-[115%] left-2 bg-[#00000081] text-[#fff] font-bold px-4 py-2 rounded-md text-xl"
    >
      <FaAngleLeft />
    </button>
  );
};

export default RouterBack;
