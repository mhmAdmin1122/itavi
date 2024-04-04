import Link from "next/link";
import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import weFunderIco from "@/public/img/wefunder.png";
import Image from "next/image";

const VerticalNavbar = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [mobHomeTab, setMobHomeTab] = useState(false);
  const [mobAboutTab, setMobAboutTab] = useState(false);
  const [mobOppertunityTab, setMobOppertunityTab] = useState(false);
  const [mobDocumentationTab, setMobDocumentationTab] = useState(false);
  const [mobLegalTab, setMobLegalTab] = useState(false);
  const handleShowTabs = () => {
    setShowTabs((current) => !current);
  };
  const mobHomeTabOpen = () => {
    setMobHomeTab((current: any) => !current);
  };
  const mobAboutTabOpen = () => {
    setMobAboutTab((current: any) => !current);
  };
  const mobOppertunityTabOpen = () => {
    setMobOppertunityTab((current: any) => !current);
  };
  const mobDocumentationTabOpen = () => {
    setMobDocumentationTab((current: any) => !current);
  };
  const mobLegalTabOpen = () => {
    setMobLegalTab((current: any) => !current);
  };
  const handle1Download = () => {
    const pdfUrl = "/pdf/ppm.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "privateplacement.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handle2Download = () => {
    const pdfUrl = "/pdf/Emd.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "pitchdeck.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handle3Download = () => {
    const pdfUrl = "/pdf/TR.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "technicalreport.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex items-center gap-8 fornot-moblaptab-navbar">
        <div className="documentation-dropdown">
          <Link
            href="/#home"
            className="documentation-dropbtn hover:underline !text-[#000] flex items-center gap-2"
          >
            <p>Home</p>
            <FaAngleDown className="down-drop-ico" />
            <FaAngleRight className="right-drop-ico" />
          </Link>
          <div className="documentation-dropdown-content">
            <Link href="https://wefunder.com/itavimining" target="blank">
              Invest
            </Link>
            <Link href="/Investment">Investment Details</Link>
          </div>
        </div>

        <div className="about-dropdown">
          <Link
            href="/#about"
            className="about-dropbtn hover:underline !text-[#000] flex items-center gap-2"
          >
            <p>About</p>
            <FaAngleDown className="down-drop-ico" />
            <FaAngleRight className="right-drop-ico" />
          </Link>
          <div className="about-dropdown-content">
            <Link href="/values">Our Values</Link>
            <Link href="/history">History</Link>
            <Link href="/conviction">Invest With Conviction</Link>
          </div>
        </div>

        <div className="opportunity-dropdown">
          <Link
            href="/#opportunity"
            className="opportunity-dropbtn hover:underline !text-[#000] flex items-center gap-2"
          >
            <p>Opportunity</p>
            <FaAngleDown className="down-drop-ico" />
            <FaAngleRight className="right-drop-ico" />
          </Link>
          <div className="opportunity-dropdown-content">
            <Link href="/reward">Investor Rewards</Link>
            <Link href="/visionaries">Visionaries</Link>
            <Link href="/resources">Scale of Resources</Link>
            <Link href="/market">Emerging Markets</Link>
            <Link href="/copper">Copper Concentration</Link>
          </div>
        </div>

        <div className="documentation-dropdown">
          <Link
            href="/#documentation"
            className="documentation-dropbtn hover:underline !text-[#000] flex items-center gap-2"
          >
            <p className="cursor-pointer">Documentation</p>
            <FaAngleDown className="down-drop-ico" />
            <FaAngleRight className="right-drop-ico" />
          </Link>
          <div className="documentation-dropdown-content">
            <div onClick={handle1Download}>Private Placement Memorandum</div>
            <div onClick={handle2Download}>Company Pitch Deck</div>
            <div onClick={handle3Download}>Property Technical Report</div>
          </div>
        </div>

        <div className="legal-dropdown">
          <div className="legal-dropbtn !text-[#000] flex items-center gap-2">
            <p className="cursor-pointer">Legal</p>
            <FaAngleDown className="down-drop-ico" />
            <FaAngleRight className="right-drop-ico" />
          </div>
          <div className="legal-dropdown-content">
            <Link href="/faqs">FAQs</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <Link
          href="/#contact"
          className="hover:underline text-[16px] contact-btn-tabs"
        >
          Contact
        </Link>
      </div>
      {/* for-mobile-navbar */}
      <div className="relative">
        <div
          className="menu-verticalsidebar-hamburger-main-page flex w-full justify-end items-end text-4xl"
          onClick={handleShowTabs}
        >
          {showTabs ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </div>
        {showTabs && (
          <div className="w-full flex items-end justify-end absolute mob-verticaltabs-box">
            <div className="vert-mob-tabs-box w-[300px] bg-[#000] text-[#fff] p-6 rounded-b-md rounded-tl-md rounded-tr-sm">
              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobHomeTabOpen}>Home</button>
                  {mobHomeTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobHomeTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="https://wefunder.com/itavimining">
                        Invest
                      </Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/Investment">Inestment Details</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobAboutTabOpen}>About</button>
                  {mobAboutTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobAboutTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/values">Our Value</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/history">History</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="conviction">Invest With Conviction</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobOppertunityTabOpen}>Oppertunity</button>
                  {mobOppertunityTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobOppertunityTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/reward">Investor Rewards</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/visionaries">Visionaries</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/resources">Scale of Resources</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/market">Emerging Markets</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/copper">Copper Concentration</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobDocumentationTabOpen}>
                    Documentation
                  </button>
                  {mobDocumentationTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobDocumentationTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/#documentation">
                        Private Placement Memorandum
                      </Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/#documentation">Company Pitch Deck</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/#documentation">
                        Property Technical Report
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobLegalTabOpen}>Legal</button>
                  {mobLegalTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobLegalTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/faqs">FAQs</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/disclaimer">Disclaimer</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/terms">Terms & Condition</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/privacy">Privacy Policy</Link>
                    </div>
                  </div>
                )}
              </div>

              <div onClick={handleShowTabs}>
                <Link
                  href="/#contact"
                  className="hover:underline flex flex-col items-end pr-4"
                >
                  Contact
                </Link>
              </div>

              <div className="flex items-center justify-end gap-4 pt-12">
                <p>Follow us :</p>
                <div className="flex items-center justify-end gap-4">
                  <Link
                    className="text-xl text-[#ca8a04] btnshadow2"
                    href="https://www.facebook.com/itavimining"
                    target="blank"
                  >
                    <FaSquareFacebook />
                  </Link>
                  <Link
                    className="text-xl text-[#ca8a04] btnshadow2"
                    href="https://www.linkedin.com/company/itavi-mining-company"
                    target="blank"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    className="text-xl text-[#ca8a04] btnshadow2"
                    href="https://www.twitter.com/@itavimining"
                    target="blank"
                  >
                    <FaSquareXTwitter />
                  </Link>
                  <Link
                    className="text-xl btnshadow2 "
                    href="https://wefunder.com/itavimining"
                    target="blank"
                  >
                    <Image
                      src={weFunderIco}
                      alt="weFunder-Ico"
                      className="w-[20px] rounded-[2px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalNavbar;
