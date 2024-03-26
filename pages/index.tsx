import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Prisma from "@/public/img/goldQuartz.png";
import OurValueBG from "@/public/img//Our-Value-BG.png";
import WorkImage from "@/public/img/InvestWithConviction.jpg";
import bolivia from "@/public/img/Bolivia Map Image.png";
import VisionariesImage from "@/public/img/leftopp.jpg";
import ResoucesImage from "@/public/img/rightopp.jpg";
import CopperImage from "@/public/img/Copper-Image.png";
import TRDownloadBtn from "./components/TRDownloadBtn";
import EMDDownloadBtn from "./components/EMDDownloadBtn";
import PPMDownloadBtn from "./components/PPMDownloadBtn";
import ScaleRes from "@/public/img/LaGranEspañolaleft.png";
import EmergingMarket from "@/public/img/LaGranEspañolaright.png";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const handleClick = (event: any) => {
    const elementId = event.target.id;
    console.log("Clicked Element ID:", elementId);
  };

  {
    /* About-Us-section */
  }
  const [currentSection, setCurrentSection] = useState(1);
  const [container1, setContainer1] = useState(false);
  const [container2, setContainer2] = useState(false);
  const [container3, setContainer3] = useState(false);
  const [container4, setContainer4] = useState(false);

  const totalSections = 4;

  const handleNext = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
    }
  };
  const handleFirst = () => {
    setCurrentSection(1);
    setContainer1(true);
    setContainer2(false);
    setContainer3(false);
    setContainer4(false);
  };
  const handleSecond = () => {
    setCurrentSection(2);
    setContainer1(false);
    setContainer2(true);
    setContainer3(false);
    setContainer4(false);
  };
  const handleThird = () => {
    setCurrentSection(3);
    setContainer1(false);
    setContainer2(false);
    setContainer3(true);
    setContainer4(false);
  };
  const handleForth = () => {
    setCurrentSection(4);
    setContainer1(false);
    setContainer2(false);
    setContainer3(false);
    setContainer4(true);
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };
  {
    /* About-Us-section */
  }
  {
    /* Opportunity-section */
  }
  const [current2Section, setCurrent2Section] = useState(1);
  const total2Sections = 6;

  const handleNext2 = () => {
    if (current2Section < total2Sections) {
      setCurrent2Section(current2Section + 1);
    }
  };
  const handleFirst2 = () => {
    setCurrent2Section(1);
  };
  const handleSecond2 = () => {
    setCurrent2Section(3);
  };
  const handleSixth2 = () => {
    setCurrent2Section(2);
  };
  const handleThird2 = () => {
    setCurrent2Section(4);
  };
  const handleFourth2 = () => {
    setCurrent2Section(5);
  };
  const handleFifth2 = () => {
    setCurrent2Section(6);
  };

  const handlePrevious2 = () => {
    if (current2Section > 1) {
      setCurrent2Section(current2Section - 1);
    }
  };

  {
    /* Opportunity-section */
  }

  {
    /* Documentaion-section */
  }
  const [current3Section, setCurrent3Section] = useState(1);
  const total3Sections = 4;

  const handle3Next = () => {
    if (current3Section < total3Sections) {
      setCurrent3Section(current3Section + 1);
    }
  };
  const handleFirst3 = () => {
    setCurrent3Section(1);
  };
  const handleSecond3 = () => {
    setCurrent3Section(2);
  };
  const handleThird3 = () => {
    setCurrent3Section(3);
  };
  const handlefour3 = () => {
    setCurrent3Section(4);
  };

  const handle3Previous = () => {
    if (current3Section > 1) {
      setCurrent3Section(current3Section - 1);
    }
  };
  {
    /* Documentaion-section */
  }

  return (
    <div className="relative">
      <Head>
        <title>Itavi Mining</title>
      </Head>

      {/* Header */}
      <header className="bg-transparent navbar text-white flex items-center justify-between fixed top-0 !z-[999999] right-0 w-full py-4 px-[90px]">
        <Link href="#home" className="w-[90px]">
          <Image src={Logo} alt="logo-pic" className="logo-pic" />
        </Link>

        <div className="flex justify-center space-x-4">
          <Link href="#home" className="hover:underline shadow-text">
            Home
          </Link>

          <Link href="#about" className="hover:underline shadow-text">
            About
          </Link>

          <Link href="#opportunity" className="hover:underline shadow-text">
            Opportunity
          </Link>

          <Link href="#documentation" className="hover:underline shadow-text">
            Documentation
          </Link>

          <Link href="#contact" className="hover:underline shadow-text">
            Contact
          </Link>
        </div>

        <div className="flex items-center justify-end gap-8">
          <Link
            className="text-xl hover:text-[#ca8a04] transition-all duration-700 ease-in-out btnshadow2"
            href="https://www.facebook.com/itavimining"
            target="blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className="text-xl hover:text-[#ca8a04] transition-all duration-700 ease-in-out btnshadow2"
            href="https://www.linkedin.com/company/itavi-mining-company"
            target="blank"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </header>

      <div className="conatiner-box">
        {/* Home-hero-section */}
        <section className="Home-Section sections relative" id="home">
          <Link
            href="#about"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <FaAngleDown />
          </Link>
          <div className="heading flex flex-col gap-4">
            <h2>Seize Opportunity</h2>
            <p>
              Invest in Bolivia{"'"}s Next Major Gold, Silver, and Copper
              Discovery with Itavi Mining Company{"'"}s Flagship Project -{" "}
              <b>La Gran Española</b>
            </p>
            <Link
              href="/Investment"
              className="bg-yellow-600 w-fit px-4 py-2 rounded-sm font-medium"
            >
              Invest Now
            </Link>
          </div>
          <div className="pr-[15%] mt-[-15%] w-fit">
            <Image src={Prisma} alt="Prisma" height={"250"} width={"250"} />
          </div>
        </section>
        {/* Home-hero-section */}

        {/* About-Us-section */}
        <section className="slider-container sections relative" id="about">
          <Link
            href="#home"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <FaAngleUp />
          </Link>
          <Link
            href="#opportunity"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <FaAngleDown />
          </Link>
          <div className="Side-Nav" id="Side-Nav">
            <div className="Uper-div">
              <h3 className="shadow-text">02</h3>
              <h2 onClick={handleFirst} className="shadow-text">
                ABOUT US
              </h2>
            </div>
            <div className="Progress-Bar">
              <div
                className="slider-progress"
                style={{ width: `${(currentSection - 1) * 33.33}%` }}
              ></div>
            </div>
            <div className="Lower-div">
              <p onClick={handleSecond} className="shadow-text">
                OUR VALUES
              </p>
              <p onClick={handleThird} className="shadow-text">
                HISTORY
              </p>
              <p onClick={handleForth} className="shadow-text">
                INVEST WITH CONVICTION
              </p>
            </div>
          </div>
          <div className="slider">
            <div
              className="slider-content"
              style={{
                transform: `translateX(-${(currentSection - 1) * 100}vw)`,
              }}
            >
              <div className="slider-section">
                <section className="About-Section">
                  <div className="About-Box">
                    <h2>About Us</h2>
                    <div className="Second-div">
                      <h3>02</h3>
                      <p>
                        We{"'"}re more than prospectors; we{"'"}re visionaries.
                        Our journey begins where the Andean peaks kiss the sky,
                        and the earth cradles untold riches. We are a Bolivian
                        mining company driven by a passion for discovery and a
                        commitment to responsible development. Our flagship
                        project, La Gran Española, <b>spans over 6,000 acres</b>
                        , boasting a rich history of exploration and the
                        potential to become a major gold, silver, and copper
                        producer. <br /> Our pursuit of Bolivia{"'"}s mineral
                        wealth is guided by our dedication to sustainable and
                        ethical practices.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="slider-section">
                <section className="Our-Value-Section">
                  <div className="w-fit">
                    <Image
                      src={OurValueBG}
                      alt="Background-Image"
                      className="h-screen"
                    />
                  </div>
                  <div className="Text-Box">
                    <h4>Our values</h4>
                    <p>
                      At the core of Itavi Mining lie our values, the bedrock of
                      our commitment to responsible mining. <br />
                      <b>Ambition:</b> To reach beyond the horizon. Our passion
                      fuels our pursuit of mineral treasures, and our ambition
                      knows no bounds. <br />
                      <b>Investor Focus:</b> We believe in delivering strong
                      returns through the strategic development of our assets.{" "}
                      <br />
                      <b>Sustainability:</b> We respect the land, leaving a
                      legacy of responsible mining. We{"'"}ve a strong
                      commitment to minimizing our environmental footprint.{" "}
                      <br />
                      <b>Innovation:</b> Pioneering modern methods to explore,
                      delineate, and develop with a sustainable touch. <br />
                      <b>Integrity:</b> Navigating the mining industry and
                      Bolivian legislation with transparency, ethical practices,
                      and a steadfast commitment to legal compliance. We uphold
                      the highest standards. <br />
                    </p>
                  </div>
                </section>
              </div>
              <div className="slider-section">
                <section className="History-Section">
                  <div className="Text-Box">
                    <div className="Evolution">
                      <h4>1980</h4>
                      <p className="pl-[12px]">
                        EXPROMIN conducts initial explorations at La Española,
                        including surface sampling and local geological mapping.
                      </p>
                    </div>
                    <div className="Evolution">
                      <h4>1990</h4>
                      <p className="pl-[12px]">
                        Initial exploration efforts reveal a resource of 500,000
                        ounces of Gold.
                      </p>
                    </div>
                    <div className="Evolution">
                      <h4>2000</h4>
                      <p className="pl-[6px]">
                        The United States Geological Survey (USGS) confirms
                        high-sulfidation epithermal deposit of gold, silver, and
                        copper.
                      </p>
                    </div>
                    <div className="Evolution">
                      <h4>2008</h4>
                      <p className="pl-[8px]">
                        Newmont Gold Corporation enters La Española,
                        implementing systematic sampling in the Santa Rosa
                        sector and launching a detailed geological exploration
                        program, including drilling diamond core holes.
                      </p>
                    </div>
                    <div className="Evolution">
                      <h4>Today</h4>
                      <p>
                        Itavi Mining Company acquires La Gran Española and
                        initiates a comprehensive exploration program using
                        modern technologies and drilling techniques. Join us on
                        this quest. Invest in posterity!
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="slider-section">
                <section className="Invest-Con-Section">
                  <div className="Text-Box">
                    <h4>Invest with conviction</h4>
                    <p>
                      At Itavi Mining, we envision a future where responsible
                      mining powers progress. Our foundation rests on
                      transparency, ethical practices, and an unwavering
                      commitment to responsible mining.
                    </p>
                    <p>
                      Market Presence: The NYSE-listed New Pacific Metals Corp
                      (NEWP) operates nearby (market cap of $168M as of
                      3/12/24.) Their presence validates the region{"'"}s vast
                      potential.
                    </p>
                    <p>
                      Expertise: Our team brings decades of experience in
                      successful Bolivian mining projects, and our flagship La
                      Gran Española prospect boasts documented potential
                      validated by past exploration by major industry players.
                    </p>
                    <p>
                      Track Record: Our track record is a testament to our
                      dedication to both mineral exploration and the well-being
                      of the environment.
                    </p>
                  </div>
                  <div className="w-full imgebox">
                    <Image
                      src={WorkImage}
                      alt="Background-Image"
                      className="h-screen w-full"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <button
            className="slider-button btn-design-right btn-design"
            onClick={handlePrevious}
            style={{ visibility: currentSection === 1 ? "hidden" : "visible" }}
          >
            <FaAngleLeft />
          </button>
          <button
            className="slider-button btn-design-left btn-design"
            onClick={handleNext}
            style={{
              visibility:
                currentSection === totalSections ? "hidden" : "visible",
            }}
          >
            <FaAngleRight />
          </button>
        </section>
        {/* About-Us-section */}

        {/* Opportunity-section */}
        <section
          className="slider-container sections relative"
          id="opportunity"
        >
          <Link
            href="#about"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <FaAngleUp />
          </Link>
          <Link
            href="#documentation"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <FaAngleDown />
          </Link>
          <div className="Side-Nav" id="Side-Nav">
            <div className="Uper-div">
              <h3 className="shadow-text">03</h3>
              <h2 onClick={handleFirst2} className="shadow-text">
                THE OPPORTUNITY
              </h2>
            </div>
            <div className="Progress-Bar">
              <div
                className="slider-progress"
                style={{ width: `${(current2Section - 1) * 25}%` }}
              ></div>
            </div>
            <div className="Lower-div">
              <p className="shadow-text" onClick={handleSixth2}>
                INVESTOR REWARDS
              </p>
              <p className="shadow-text" onClick={handleSecond2}>
                VISIONARIES
              </p>
              <p className="shadow-text" onClick={handleThird2}>
                SCALE OF RESOURCES
              </p>
              <p className="shadow-text" onClick={handleFourth2}>
                EMERGING MARKETS
              </p>
              <p className="shadow-text" onClick={handleFifth2}>
                HUGE COPPER CONCENTRATION
              </p>
            </div>
          </div>
          <div className="slider">
            <div
              className="slider-content"
              style={{
                transform: `translateX(-${(current2Section - 1) * 100}vw)`,
              }}
            >
              <div className="slider-section">
                <section className="WWeDo-Section">
                  <div className="video-container">
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover z-0"
                      autoPlay
                      loop
                      muted
                    >
                      <source src="/video/dron2video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full object-cover z-4 bg-[#0000009a]"></div>
                  </div>
                  <div className="WWeDo-Box relative z-10">
                    <h2>The Opportunity</h2>
                    <div className="Second-div">
                      <h3>03</h3>
                      <p>
                        Tap into Bolivia{"'"}s growing mining sector, supported
                        by a pro-development government. Itavi Mining{"'"}s
                        strategic approach and commitment to ethical practices
                        mitigate risk and position the company for long-term
                        success. This ground-floor opportunity offers investors
                        the potential for future partnerships, acquisitions, and
                        significant returns on their investment. Join us. Invest
                        in La Gran Española with conviction.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="investorReward-Section h-screen px-[70px] pt-[150px] max-[650px]:pt-[100px] flex flex-col items-center justify-center">
                  <div className="Text-Box flex flex-col gap-4 text-[#fff] ">
                    <h4 className="text-5xl text-wrap  max-[650px]:text-4xl">
                      Investor Rewards
                    </h4>
                    <p className=" w-[60%] max-[800px]:w-[90%] max-[651px]:w-full">
                      We value our investors{"'"}s support. As a token of our
                      gratitude, we offer following rewards to you:
                    </p>
                    <ol className="list-decimal w-[60%] listbox max-[800px]:w-[90%] max-[651px]:w-[100%]">
                      <li>
                        <b>Humanitarian Impact:</b> For every investment of at
                        least $500, a donation will be made in your (the
                        investor{"’"}s) name to the impoverished indigenous
                        people of Bolivia. These communities, including the
                        Highland Quechua and Armara tribes, provide our labor
                        force and contribute to our project.
                      </li>

                      <li>
                        <b>Precious Metals:</b> Depending on the investment
                        level, investors will receive:
                        <ul className="list-disc pl-8">
                          <li>
                            <b>Gold Bar</b> (1 gram): For investments of at
                            least $10,000 but less than $100,000.
                          </li>
                          <li>
                            <b>Gold Bar</b> (1 ounce): For investments of at
                            least $100,000 but less than $250,000.
                          </li>
                        </ul>
                      </li>

                      <li>
                        <b>Exploration Adventure:</b> For investments of at
                        least $250,000, investors will enjoy an all-expense-paid
                        trip to beautiful modern Santa Cruz, Bolivia, and the
                        nearby wine region.
                      </li>

                      <p>
                        Join us in shaping Bolivia{"’"}s mining landscape.{" "}
                        <b>Invest with conviction.</b>
                      </p>
                    </ol>
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="Visionaries-Section">
                  <div className="Text-Box !w-full flex !flex-row items-center justify-start gap-10">
                    <Image src={bolivia} alt="vis-pic" />
                    <div className="w-[700px]">
                      <h4>Visionaries</h4>
                      <p className="w-[60%] max-[650px]:w-[90%] !text-white">
                        Our vision extends beyond the current project, subtly
                        suggesting potential future acquisitions and/or
                        partnerships with industry giants.
                      </p>
                      <p className="!text-white">
                        Join us. Invest in La Gran Española with conviction.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="ScaleRes-Section">
                  <div className="Text-Box">
                    <h4>Scale of Resources</h4>
                    <p className="text-white">
                      Picture 6,000 acres of untamed Bolivian terrain—a canvas
                      for mineral riches waiting to be unearthed. Our past
                      exploration efforts revealed a tantalizing resource of
                      500,000 ounces of Gold. But that{"’"}s just the beginning.
                      Beneath the surface, copper veins pulse with promise.
                      Investors, this is your ground-floor opportunity. Join us.
                      Invest in La Gran Española with conviction.
                    </p>
                  </div>
                  <div className="w-1/2 imagebox">
                    <Image
                      src={ScaleRes}
                      alt=""
                      className="h-full w-full select-none object-fill"
                    />
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="EmergingMarket-Section">
                  <div className="w-1/3 imagebox">
                    <Image
                      src={EmergingMarket}
                      alt=""
                      className="h-full w-full select-none object-fill"
                    />
                  </div>
                  <div className="Text-Box">
                    <h4>Emerging Markets</h4>
                    <p className="text-white">
                      Yes, Bolivia is emerging. But we{"’"}re not novices. Our
                      team brings decades of experience. We navigate Bolivian
                      regulations with finesse. Plus, government support fuels
                      our drive.
                    </p>
                    <p className="text-white">
                      Join us. Invest in La Gran Española with conviction.
                    </p>
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="HugeConcentration-Section">
                  <div className="Text-Box">
                    <h4>Huge Copper Concentration</h4>
                    <p className="text-white">
                      While gold and silver glitter on the horizon, it{"'"}s the
                      prominent mention of copper that truly sets this
                      opportunity apart. As the world pivots towards a green
                      energy transition, the strategic inclusion of copper
                      positions your investment at the forefront of this
                      essential shift.
                    </p>
                    <p className="text-white">
                      Join us. Invest in La Gran Española with conviction.
                    </p>
                  </div>
                  <div className="w-1/2 imagebox">
                    <Image
                      src={CopperImage}
                      alt=""
                      className="h-full w-full select-none"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <button
            className="slider-button btn-design-right btn-design"
            onClick={handlePrevious2}
            style={{ visibility: current2Section === 1 ? "hidden" : "visible" }}
          >
            <FaAngleLeft />
          </button>
          <button
            className="slider-button btn-design-left btn-design"
            onClick={handleNext2}
            style={{
              visibility:
                current2Section === total2Sections ? "hidden" : "visible",
            }}
          >
            <FaAngleRight />
          </button>
        </section>
        {/* Opportunity-section */}

        {/* Documentation-section */}
        <section
          className="slider-container sections relative"
          id="documentation"
        >
          <Link
            href="#opportunity"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <FaAngleUp />
          </Link>
          <Link
            href="#contact"
            className="absolute bottom-0 z-[999999] btn-design-bottom btn-design"
          >
            <FaAngleDown />
          </Link>
          <div className="Side-Nav" id="Side-Nav">
            <div className="Uper-div">
              <h3 className="shadow-text">04</h3>
              <h2 onClick={handleFirst3} className="shadow-text">
                Documentation for Investors
              </h2>
            </div>
            <div className="Progress-Bar">
              <div
                className="slider-progress"
                style={{ width: `${(current3Section - 1) * 33.5}%` }}
              ></div>
            </div>
            <div className="Lower-div">
              <p onClick={handleSecond3} className="shadow-text">
                Private Placement Memorándum
              </p>
              <p onClick={handleThird3} className="shadow-text">
                Company PitchDeck
              </p>
              <p onClick={handlefour3} className="shadow-text">
                Property Technical Report
              </p>
            </div>
          </div>
          <div className="slider">
            <div
              className="slider-content"
              style={{
                transform: `translateX(-${(current3Section - 1) * 100}vw)`,
              }}
            >
              <div className="slider-section">
                <section className="TeamWork-Section">
                  <div className="TeamWork-Box">
                    <h2 className="shadow-text">Documentation</h2>
                    <div className="Second-div">
                      <h3 className="shadow-text">04</h3>
                      <p className="shadow-text-2">
                        We provide full-transparency with our documentation to
                        our Investors. Make sure you go-through the important
                        information highlighted in the documents. In the next
                        pages you{"'"}ll find Memorándum and Subscription
                        Agreement, Pitch Deck, and Technical Report.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="Expert-Team-Section">
                  <div className="Text-Box !w-[100%]">
                    <h4>Private Placement Memorándum</h4>
                    <p className="!text-white">
                      Itavi Mining Company, S.A., a Wyoming Corporation, is
                      offering a unique investment opportunity in the form of
                      500,000 shares of Common Stock, valued at $1.00 per share,
                      with a minimum subscription of 50,000 shares.
                    </p>
                    <PPMDownloadBtn />
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="Celebrating-Section">
                  <div className="Text-Box !w-[100%]">
                    <h4>Company PitchDeck</h4>
                    <p className="!text-white !w-[550px]">
                      Our flagship project, {'"'}La Gran Española,{'"'}
                      holds the promise of becoming one of Bolivia{"'"}s largest
                      gold, copper, and silver mines, with a potential 500,000
                      ounces of gold in resources. Join us in venture!
                    </p>
                    <EMDDownloadBtn />
                  </div>
                </section>
              </div>

              <div className="slider-section">
                <section className="Expert-Team-Section">
                  <div className="Text-Box !w-[100%]">
                    <h4>Property Technical Report</h4>
                    <p className="!text-white">
                      The La Gran Española Project is strategically located in
                      Bolivia{"'"}s Western Cordillera, past explorations
                      underscored its geological significance.
                    </p>
                    <p className="!text-white">
                      Based on drilling and sampling data, an inferred resource
                      of 500,000 ounces of gold has been estimated.
                    </p>
                    <TRDownloadBtn />
                  </div>
                </section>
              </div>
            </div>
          </div>
          <button
            className="slider-button btn-design-right btn-design"
            onClick={handle3Previous}
            style={{ visibility: current3Section === 1 ? "hidden" : "visible" }}
          >
            <FaAngleLeft />
          </button>
          <button
            className="slider-button btn-design-left btn-design"
            onClick={handle3Next}
            style={{
              visibility:
                current3Section === total3Sections ? "hidden" : "visible",
            }}
          >
            <FaAngleRight />
          </button>
        </section>
        {/* Documentation-section */}

        {/* contact-section */}
        <section
          className="Contact-Section !w-full sections relative"
          id="contact"
        >
          <Link
            href="#documentation"
            className="absolute top-0 z-[999999] btn-design-top btn-design"
          >
            <FaAngleUp />
          </Link>
          <div className="video-container">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
            >
              <source src="/video/ilamavideodron4.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full object-cover z-4 bg-[#0000009a]"></div>
          </div>
          <div className="Text-Box relative z-10">
            <h2>Contact</h2>
            <div className="Second-div">
              <h3>05</h3>
              <p className="!text-white">
                Do you have an urgent question or request? This{" "}
                <Link href={"/contact"} className="underline cursor-pointer">
                  <b>Contact Form</b>
                </Link>{" "}
                is the fastest way to get in touch. You can also check{" "}
                <Link href={"/faqs"} className="underline cursor-pointer">
                  <b>FAQ{"'"}s</b>
                </Link>{" "}
                to get your answers.
              </p>
            </div>
          </div>
        </section>
        {/* contact-section */}
      </div>
    </div>
  );
}
