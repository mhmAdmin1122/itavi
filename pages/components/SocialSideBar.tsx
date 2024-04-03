import React, { useEffect, useState } from "react";
import {
  FaGripfire,
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
    setInterval(() => {
      setShow(false);
    }, 10000);
  };

  return (
    <div className="fixed bottom-0 right-0 forlaptop-ico">
      {show && (
        <div className="social-iconsfor-laptop flex flex-col gap-[4px] py-1">
          <Link
            className="text-[40px] text-[#ca8a04] btnshadow2"
            href="https://www.facebook.com/itavimining"
            target="blank"
          >
            <FaSquareFacebook />
          </Link>
          <Link
            className="text-[40px] text-[#ca8a04] btnshadow2"
            href="https://www.linkedin.com/company/itavi-mining-company"
            target="blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-[40px] text-[#ca8a04] btnshadow2"
            href="https://www.twitter.com/@itavimining"
            target="blank"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            className="w-[38px] btnshadow2 overflow-hidden rounded-md "
            href="https://wefunder.com/itavimining"
            target="blank"
          >
            <Image src={weFunderIco} alt="weFunder-Ico" className="w-[40px]" />
          </Link>
        </div>
      )}
      <div
        className="btntrigger-social-icon-box bg-[#0000009a] text-white rounded-tl-md text-2xl p-2 cursor-pointer"
        onClick={handleShowIcons}
      >
        {show ? <IoClose /> : <FaGripfire />}
      </div>
    </div>
  );
};

export default SocialSideBar;
