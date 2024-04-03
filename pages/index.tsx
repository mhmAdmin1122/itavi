import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import { Montserrat } from "next/font/google";
import TRDownloadBtn from "./components/TRDownloadBtn";
import EMDDownloadBtn from "./components/EMDDownloadBtn";
import PPMDownloadBtn from "./components/PPMDownloadBtn";
import weFunderIco from "@/public/img/wefunder.png";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./components/Button";
import SocialSideBar from "./components/SocialSideBar";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [mobHomeTab, setMobHomeTab] = useState(false);
  const [mobAboutTab, setMobAboutTab] = useState(false);
  const [mobOppertunityTab, setMobOppertunityTab] = useState(false);
  const [mobDocumentationTab, setMobDocumentationTab] = useState(false);
  const [mobLegalTab, setMobLegalTab] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
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
    <div className={`relative ${montserrat.className}`}>
      <Head>
        <title>Itavi Mining</title>
      </Head>

      {/* Header */}
      <header className="bg-transparent navbar text-white flex items-center justify-between fixed top-0 !z-[999999] right-0 w-full py-4 px-[40px]">
        <Link href="#about" className="w-[110px] logo-main-page">
          <Image src={Logo} alt="logo-pic" className="logo-pic" />
        </Link>

        <div className="menu-sidebar-hamburger-main-page text-4xl" onClick={handleShowTabs}>
          {showTabs ? "" : <RxHamburgerMenu />}
        </div>

        {showTabs && (
          <div className="mobile-sidebar-tabs-main absolute top-0 min-h-screen left-0 w-full bg-[#0000009a] flex flex-col gap-2 font-normal text-white text-right items-end px-4 pt-7 text-[0.85rem]">
            <div className="text-4xl flex justify-end text-[#fff]" onClick={handleShowTabs}>
              <IoCloseOutline />
            </div>

            <div className="hover:underline shadow-text flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <button onClick={mobHomeTabOpen}>Home</button>
                {mobHomeTab ? <FaAngleDown /> : <FaAngleRight />}
              </div>
              {mobHomeTab && (
                <div className="flex flex-col gap-2 items-end text-[10px]">
                  <div onClick={handleShowTabs}>
                    <Link href="https://wefunder.com/itavimining">Invest</Link>
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
                <button onClick={mobDocumentationTabOpen}>Documentation</button>
                {mobDocumentationTab ? <FaAngleDown /> : <FaAngleRight />}
              </div>
              {mobDocumentationTab && (
                <div className="flex flex-col gap-2 items-end text-[10px]">
                  <div onClick={handleShowTabs}>
                    <Link href="#documentation">
                      Private Placement Memorandum
                    </Link>
                  </div>
                  <div onClick={handleShowTabs}>
                    <Link href="#documentation">Company Pitch Deck</Link>
                  </div>
                  <div onClick={handleShowTabs}>
                    <Link href="#documentation">Property Technical Report</Link>
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
              <Link href="#contact" className="hover:underline shadow-text">
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
        )}

        <div className="flex justify-center gap-4 main-tabs">
          <div className="documentation-dropdown">
            <Link
              href="#home"
              className="documentation-dropbtn hover:underline shadow-text flex items-center gap-2"
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
              href="#about"
              className="about-dropbtn hover:underline shadow-text flex items-center gap-2"
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
              href="#opportunity"
              className="opportunity-dropbtn hover:underline shadow-text flex items-center gap-2"
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
              href="#documentation"
              className="documentation-dropbtn hover:underline shadow-text flex items-center gap-2"
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
            <div className="legal-dropbtn shadow-text flex items-center gap-2">
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
            href="#contact"
            className="hover:underline shadow-text text-[16px] contact-btn-tabs"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4 socail-icons-screen social-icons-notfor-laptop">
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
      </header>
      {/* Header */}

      {/* sections-snaper */}
      <div className="conatiner-box">
        {/* home-hero-section */}
        <section className="Home-Section sections relative" id="home">
          <Link
            href="#about"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <TfiAngleDown />
          </Link>
          <div className="heading-deatilBox-home-Section !gap-14 justify-around h-full">
            <div className="flex gap-6 items-center flex-col">
              <h2 className="shadow-text">Seize The Opportunity</h2>
              <p className="w-[70%]">
                Invest in Bolivia{"'"}s next major gold, silver, and copper
                discovery with Itavi Mining Company{"'"}s Flagship Project -{" "}
                <b>La Gran Española</b>
              </p>
            </div>
            <div className="btn-box-Home-Section">
              <Button
                url="https://wefunder.com/itavimining"
                btnText="Invest Now"
                btnText2="Invest"
              />
              <Button
                url="/Investment"
                btnText="Investment Details"
                btnText2="Details"
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <form className="newlatter-form">
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    className="newlatter-input2"
                    placeholder="Email"
                  />
                  <button
                    type="submit"
                    className="bg-[#ca8a04] !text-[#000] px-6 py-2 !font-bold"
                  >
                    Get Updates
                  </button>
                </div>
                <h3 className="text-center">
                  Enter your email to keep up with investor information.
                </h3>
              </form>
            </div>
          </div>
        </section>
        {/* home-hero-section */}

        {/* About-Us-section */}
        <section
          className="slider-container bg-[#121212] text-[#fff] flex items-center justify-center sections relative"
          id="about"
        >
          {/* <section
          className="slider-container About-Section sections relative"
          id="about"
        > */}
          <Link
            href="#home"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <TfiAngleUp />
          </Link>
          <Link
            href="#opportunity"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <TfiAngleDown />
          </Link>
          <div className="About-content-container px-10 flex flex-col items-center gap-6 text-center justify-center">
            <h2 className="shadow-text text-6xl">About Us</h2>
            <div className="About-Content-Box flex flex-col items-center w-full justify-center pb-2">
              <h3 className="numbers shadow-text">02</h3>
              <div className="w-[70%] text-left about-us-para flex flex-col gap-4">
                <p>
                  We are more than prospectors; We are visionaries. Our journey
                  begins where the Andean peaks kiss the sky and the earth
                  cradles untold riches. We are a Bolivian mining company driven
                  by a passion for discovery and a commitment to responsible
                  development.
                </p>
                <p>
                  Our flagship project, La Gran Española,
                  <b>spans over 6,000 acres</b>, boasting a rich history of
                  exploration and the potential to become a major gold, silver,
                  and copper producer.
                </p>
                <p className="not-for-mob">
                  Our pursuit of Bolivia{"'"}s mineral wealth is guided by our
                  dedication to sustainable and ethical practices.
                </p>
              </div>
            </div>
            <Button url="/values" btnText="Our Values" btnText2="Our Values" />
          </div>
        </section>
        {/* About-Us-section */}

        {/* Opportunity-section */}
        <section
          className="slider-container sections WWeDo-Section relative"
          id="opportunity"
        >
          <Link
            href="#about"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <TfiAngleUp />
          </Link>
          <Link
            href="#documentation"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <TfiAngleDown />
          </Link>
          <div>
            {/* <div className="video-container">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
              >
                <source src="/video/dron2video.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full object-cover z-4 bg-[#0000009a]"></div>
            </div> */}

            <div className="flex items-center gap-6 relative flex-col justify-center">
              <h2 className="shadow-text text-center">The Opportunity</h2>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-start gap-6">
                  <h3 className="numbers shadow-text">03</h3>
                </div>
                <p className="w-[70%] opportunity-para">
                  Tap into Bolivia{"'"}s growing mining sector, supported by a
                  pro-development government. Itavi Mining{"'"}s strategic
                  approach and commitment to ethical practices mitigate risk and
                  position the company for long-term success. This ground-floor
                  opportunity offers investors the potential for future
                  partnerships, acquisitions, and significant returns on their
                  investment. Join us. Invest in La Gran Española with
                  conviction.
                </p>
              </div>
              <Button
                url="/reward"
                btnText="Opportunity Details"
                btnText2="Details"
              />
            </div>
          </div>
        </section>
        {/* Opportunity-section */}

        {/* Documentation-section */}
        <section
          className="slider-container sections bg-[#121212] text-white flex flex-col items-center justify-center relative"
          id="documentation"
        >
          {/* <section
          className="slider-container sections TeamWork-Section relative"
          id="documentation"
        > */}
          <Link
            href="#opportunity"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <TfiAngleUp />
          </Link>
          <Link
            href="#contact"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <TfiAngleDown />
          </Link>

          <div className="flex flex-col items-center justify-center gap-6 px-10">
            <h2 className="shadow-text !w-full text-center text-6xl documentaion-heading">
              Documentation
            </h2>

            <div className="flex flex-col items-center justify-center w-full">
              <p className="w-[70%] documentation-para pb-2">
                We provide full-transparency with our documentation to our
                Investors. In the next pages you{"'"}ll find a Memorándum
                Agreement, Pitch Deck, and Technical Report.
              </p>
              <PPMDownloadBtn />
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <p className="w-[70%] documentation-para pb-2">
                We provide full-transparency with our documentation to our
                Investors. In the next pages you{"'"}ll find a Memorándum
                Agreement, Pitch Deck, and Technical Report.
              </p>
              <EMDDownloadBtn />
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <p className="w-[70%] documentation-para pb-2">
                We provide full-transparency with our documentation to our
                Investors. In the next pages you{"'"}ll find a Memorándum
                Agreement, Pitch Deck, and Technical Report.
              </p>
              <TRDownloadBtn />
            </div>
          </div>
        </section>
        {/* Documentation-section */}

        {/* contact-section */}
        <section
          className="Contact-Section !w-full sections relative"
          id="contact"
        >
          <Link
            href="#updates"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <TfiAngleUp />
          </Link>
          <div className="Text-Box contact-content-box flex items-center gap-6 justify-between relative z-10 px-[10%]">
            <div className="w-[60%] contact-content-container">
              <h2 className="w-full text-[68px] shadow-text">Contact</h2>
              <div className="flex items-start gap-4 py-5 contact-para">
                <h3 className="text-9xl shadow-text contact-number numbers">
                  06
                </h3>
                <p className="contact-content-box-para">
                  Got any question about our project? Want to know more about
                  us? Please fill out the form, email us at:{" "}
                  <b>
                    <Link
                      href="mailto:william@itavimining.com"
                      target="blank"
                      className="hover:underline"
                    >
                      william@itavimining.com
                    </Link>
                  </b>{" "}
                  or contact us here:{" "}
                  <b>
                    <Link
                      href="tel:6467700628"
                      target="blank"
                      className="hover:underline"
                    >
                      {"("}646{")"} 770-0628
                    </Link>
                  </b>
                </p>
              </div>
            </div>

            <form className="mt-2 flex flex-col items-center justify-center gap-6 w-[40%] text-[#000] contact-Form-Box">
              <h5 className="w-full text-white text-lg">Get In Touch</h5>
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  className="outline-none px-6 py-2 rounded-md w-1/2"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="outline-none px-6 py-2 rounded-md w-1/2"
                  placeholder="Email"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="outline-none px-6 py-2 rounded-md w-full"
              />
              <textarea
                rows={4}
                cols={30}
                placeholder="Message"
                className="outline-none px-6 py-2 rounded-md w-full"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#d98700] font-bold"
              >
                Message
              </button>
            </form>
          </div>
        </section>
        {/* contact-section */}
      </div>
      {/* sections-snaper */}

      {/* social icons for laptop */}
      <SocialSideBar />
      {/* social icons for laptop */}
    </div>
  );
}
