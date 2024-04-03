import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaBellSlash,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import weFunderIco from "@/public/img/wefunder.png";

const SocialSideBar = () => {
  const [show, setShow] = useState(false);

  const handleShowIcons = () => {
    setShow((current) => !current);
  };

  return (
    <div className="fixed bottom-0 right-4 forlaptop-ico z-50">
      {show && (
        <div className="social-iconsfor-laptop flex flex-col items-center gap-[6px] py-2">
          <Link
            className="text-xl text-[#ca8a04] btnshadow2"
            href="https://www.facebook.com/itavimining"
            target="blank"
            onClick={handleShowIcons}
          >
            <FaSquareFacebook />
          </Link>
          <Link
            className="text-xl text-[#ca8a04] btnshadow2"
            href="https://www.linkedin.com/company/itavi-mining-company"
            target="blank"
            onClick={handleShowIcons}
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-xl text-[#ca8a04] btnshadow2"
            href="https://www.twitter.com/@itavimining"
            target="blank"
            onClick={handleShowIcons}
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            className="w-[20px] btnshadow2 overflow-hidden rounded-md "
            href="https://wefunder.com/itavimining"
            target="blank"
            onClick={handleShowIcons}
          >
            <Image src={weFunderIco} alt="weFunder-Ico" className="w-[40px]" />
          </Link>
        </div>
      )}
      <div
        className="btntrigger-social-icon-box bg-[#0000009a] text-white rounded-t-md text-2xl p-2 cursor-pointer"
        onClick={handleShowIcons}
      >
        {show ? <FaBellSlash /> : <FaBell />}
      </div>
    </div>
  );
};

export default SocialSideBar;
