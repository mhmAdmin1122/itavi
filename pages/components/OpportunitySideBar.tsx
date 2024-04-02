import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import logo from "@/public/img/Logo.svg";

const OpportunitySideBar = () => {
  const [showTabs, setShowTabs] = useState(false);
  const handleShowTabs = () => {
    setShowTabs((current) => !current);
  };

  return (
    <div className="side-bar-section min-h-screen max-h-full w-[30%] py-4 px-2 relative">
      <Link
        href="/#home"
        className="logoBox h-[20%] flex items-center justify-center"
      >
        <Image
          src={logo}
          alt="logo-pic-itavi"
          width={140}
          height={120}
          className="logo-pic-side"
        />
      </Link>
      <div className="sidebar-tabs h-[75%] flex flex-col gap-2 font-normal text-white text-left items-end pt-[55px] pr-4">
        <Link className="shadow-text" href="/reward">
          Investor Reward
        </Link>
        <Link className="shadow-text" href="/visionaries">
          Visionaries
        </Link>
        <Link className="shadow-text" href="/resources">
          Scale of Resources
        </Link>
        <Link className="shadow-text" href="/market">
          Emerging Markets
        </Link>
        <Link className="shadow-text" href="/copper">
          Copper Concentration
        </Link>
      </div>
      <div className="menu-sidebar-hamburger" onClick={handleShowTabs}>
        <RxHamburgerMenu />
      </div>
      {showTabs && (
        <div className="mobile-sidebar-tabs absolute top-[60px] left-0 w-full bg-[#0000009a] flex flex-col gap-2 font-normal text-white text-right items-end p-4 text-[14px]">
          <Link className="shadow-text" href="/reward">
            Investor Reward
          </Link>
          <Link className="shadow-text" href="/visionaries">
            Visionaries
          </Link>
          <Link className="shadow-text" href="/resources">
            Scale of Resources
          </Link>
          <Link className="shadow-text" href="/market">
            Emerging Markets
          </Link>
          <Link className="shadow-text" href="/copper">
            Copper Concentration
          </Link>
        </div>
      )}
    </div>
  );
};

export default OpportunitySideBar;
