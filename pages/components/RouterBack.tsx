import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

const RouterBack = () => {
  
  return (
    <Link href="/#about"
      className="slider-button fixed top-[50%] max-[425px]:top-[115%] left-2 bg-[#00000081] text-[#fff] font-bold px-4 py-2 text-xl hover:bg-[#000000]"
    >
      <FaAngleLeft />
    </Link>
  );
};

export default RouterBack;
