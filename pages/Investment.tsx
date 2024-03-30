// import React from "react";
// import PageLayout from "./components/PageLayout";
// import Head from "next/head";

// const InvestmentPage = () => {
//   return (
//     <div>
//       <Head>
//         <title>Investment - Itavi Mining</title>
//       </Head>
//       <PageLayout>
//         <div>Investment</div>
//       </PageLayout>
//     </div>
//   );
// };

// export default InvestmentPage;

import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectImage1 from "@/public/img/ProjectImage1.jpeg";
import ProjectImage2 from "@/public/img/ProjectImage2.jpeg";
import ProjectImage3 from "@/public/img/ProjectImage3.jpeg";
import ProjectImage4 from "@/public/img/ProjectImage4.jpeg";
import RouterBack from "./components/RouterBack";

const InvestmentPage = () => {
  const [button01, setButton01] = useState(true);
  const [button02, setButton02] = useState(false);
  const [button03, setButton03] = useState(false);

  const btn01click = () => {
    setButton01(true);
    setButton02(false);
    setButton03(false);
  };

  const btn02click = () => {
    setButton01(false);
    setButton02(true);
    setButton03(false);
  };

  const btn03click = () => {
    setButton01(false);
    setButton02(false);
    setButton03(true);
  };

  return (
    <div>
      <Head>
        <title>Investment Opportunity - Itavi Mining</title>
      </Head>
      <div className="main-container-investment">
        <div className="bg-[#212121] text-[#ffffff] flex items-center max-[900px]:flex-wrap px-[60px] py-[40px] max-[900px]:px-[30px]">
          <div className="hero-Box-investment flex flex-col gap-6">
            <h1 className="text-6xl font-bold w-[52%] max-[900px]:w-full max-[550px]:text-4xl">
              Invest In Bolivian Gold & Copper Mining
            </h1>
            <p className="w-[82%] text-justify  max-[550px]:text-[14px]">
              <b>This is a high-potential investment with inherent risk.</b>
              <br />
              Join Itavi Mining as we unlock the potential of La Gran Española,
              a project poised to become a major gold, silver, and copper
              producer.
              <br />
              <br />
              <b>Invest in Posterity</b>
              <br />
              Be part of Bolivia{"'"}s mineral revolution.{" "}
              <b>Invest with conviction.</b> <br />
              <br />
              <b>Location</b> <br />
              Volcanic chain: Cordillera Occidental of Bolivia (part of the
              Andes Mountain Range) <br />
              Region: La Paz Department, northwestern Bolivia <br />
              Distance: Approximately 175 km from La Paz city <br />
            </p>
            <p>
              <b>NOTE:</b> Thorough due diligence is recommended before
              investing, as with any mining venture.
            </p>
            <button className="w-fit bg-[#ca8a04] px-6 py-2 text-[#fff] font-bold rounded-sm hover:text-[#ca8a04] hover:bg-[#000] hover:border-[#ca8a04] transition-all ease-in-out duration-700 border-2 border-[#ca8a04]">
              <a href="https://wefunder.com/itavimining">
                <p className="btn-txt-desctop">Invest Now!</p>
                <p className="btn-txt-mob">Invest</p>
              </a>
            </button>
          </div>

          <div className="flex justify-center max-[900px]:w-full">
            <div className="max-[900px]:mt-[50px] min-w-[220px] min-[1600px]:h-[220px] border border-[#ca8a04] rounded-md px-[20px]">
              <div className="flex justify-center mt-[-22px]">
                <h4 className="w-[90%] text-white border-2 bg-[#212121] border-[#ca8a04] text-center py-[10px] rounded-md font-semibold">
                  Share Details
                </h4>
              </div>
              <p className="mt-[-7px] min-[1600px]:text-[20px] min-[1600px]:leading-[35px] pb-3">
                <br />
                Share Price: <b>$1.00 USD per share</b>
                <br />
                Total Number of Shares: <b>500,000</b>
                <br />
                Minimum Investment: <b>$1,000 USD</b>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="details-handle-box px-[60px] w-full max-[450px]:px-[10px]">
          <div className="flex items-center gap-4 justify-center">
            <div className="opner-btn-tabs bg-[#ca8a04] mt-[-25px] w-full px-[30px] py-[10px] flex items-center justify-around gap-12 text-[#fff] font-bold rounded-md">
              <button
                onClick={btn01click}
                className={`!w-fit px-6 py-2 text-[#ffffff] font-bold rounded-md hover:text-[#fff] transition-all ease-in-out duration-700 ${
                  button01 ? "bg-[#212121]" : ""
                }`}
              >
                <p className="btn-txt-desctop">The Opportunity</p>
                <p className="btn-txt-mob">Opportunity</p>
              </button>
              |
              <button
                onClick={btn02click}
                className={`!w-fit px-6 py-2 text-[#ffffff] font-bold rounded-md hover:text-[#fff] hover:bg-[#212121] transition-all ease-in-out duration-700 ${
                  button02 ? "bg-[#212121]" : ""
                }`}
              >
                <p className="btn-txt-desctop">Leadership & Governance</p>
                <p className="btn-txt-mob">Leadership</p>
              </button>
              |
              <button
                onClick={btn03click}
                className={`!w-fit px-6 py-2 text-[#ffffff] font-bold rounded-md hover:text-[#fff] hover:bg-[#212121] transition-all ease-in-out duration-700 ${
                  button03 ? "bg-[#212121]" : ""
                }`}
              >
                <p className="btn-txt-desctop">Invest With Conviction</p>
                <p className="btn-txt-mob">Invest</p>
              </button>
            </div>
          </div>

          {button01 && (
            <div className="text-shower-box flex flex-col items-start gap-2 pt-10">
              <h2>
                <b>The La Gran Española Project</b>
              </h2>
              <p>
                Situated in the volcanic chain of the Cordillera Occidental of
                Bolivia, our flagship project, La Gran Española, encompasses
                over 6000 acres of highly prospective Bolivian terrain.
                <br />
                <b>Historic exploration</b> suggests a potential resource of
                over 500,000 ounces of gold, along with significant silver and
                copper deposits.
                <br />
                This puts La Gran Española in a prime position to capitalize on
                Bolivia{"'"}s pro-mining stance and the growing global demand
                for precious and strategic metals for upcoming{" "}
                <b>green economy.</b>
              </p>
              <p className="pt-5">
                Past exploration efforts by reputable companies, including
                Newmont Gold, have confirmed the site{"'"}s potential.
                Systematic sampling and drilling data point to significant
                precious metal deposits, along with promising indications of
                copper. <br />
                In an era of supply chain concerns and the global energy
                transition, La Gran Española{"'"}s resources align with growing
                market demand. <br />
                Beyond confirmed historical findings, modern exploration
                techniques and geological modeling suggest the potential for
                even greater resource definition at La Gran Española. <br />
                <a href="#">
                  <b>We invite you to explore this Possibility!</b>
                </a>
                <br />
                <br />
                <b>Coordinates</b> <br />
                Latitude: 17{"°"}14{"'"} 13{'"'} South <br />
                Longitude: 69{"°"} 31{"'"} 01{'"'} West
              </p>
              <div>
                <h2 className="font-bold text-[24px]">Our Projects:</h2>
                <div className="flex gap-5 flex-wrap btn-image-proj">
                  <Image
                    src={ProjectImage2}
                    alt=""
                    className="w-[350px] h-[350px]"
                  />
                  <Image
                    src={ProjectImage3}
                    alt=""
                    className="w-[350px] h-[350px]"
                  />
                  <Image
                    src={ProjectImage4}
                    alt=""
                    className="w-[350px] h-[350px]"
                  />
                  <Image
                    src={ProjectImage1}
                    alt=""
                    className="w-[350px] h-[350px]"
                  />
                </div>
              </div>
            </div>
          )}

          {button02 && (
            <div className="text-shower-box flex flex-col items-start gap-2 pt-10">
              <h2>
                <b>Meet The Experts</b>
              </h2>
              <p>
                Our leadership team combines Bolivian mining expertise, deep
                geological knowledge, and international financial acumen to
                guide Itavi Mining{"'"}s strategic development. <br />
                They oversaw discovery of a resource exceeding 2 million ounces
                of gold and joined Itavi Mining Company.
              </p>
              <p>
                <b>Lourdes Beatriz Gallardo</b> (Chairman)
                <br />
                Lourdes Beatriz Gallardo currently serves as Vice Chairman of
                Group Belamora. In 2021, joined Empresa Minera Itavi S.A. as
                Head of Mining in Bolivia. With over{" "}
                <b>10 years of experience</b> in financial services, investment
                banking, and mergers and acquisitions (M&A), Lourdes manages
                transactions for clients ranging from exploration and
                development companies to global metals and mining giants.
                <br /> She also serves as an <b>advisor to Inventa Capital.</b>
                <br />
                <br />
                <b>Carlos Johnny Thompson</b> (Director and Exploration Chief)
                <br />
                Carlos Johnny Thompson, a professional geological engineer,
                brings{" "}
                <b>
                  30+ years of experience in mining operations and project
                  management.
                </b>{" "}
                His expertise lies in exploration, particularly in gold, silver,
                copper, and antimony projects. Carlos has worked within the
                geological provinces of the Altiplano, Western Cordillera, and
                Precambrian Shield in Bolivia. <br />
                Notably, he was the head of geology at <b>Inti Raymi S.A.</b>,
                the Bolivian developer of the Kori Kollu-Kori Chaca gold-copper
                project.
                <br />
                <br />
                <b>William Cabrera</b> (Chief Executive Officer)
                <br />
                William Cabrera boasts a broad background in stock markets,
                investment banking, and M&A. He has worked for{" "}
                <b>Network 1 Financial Securities, Inc.</b>, as an Investment
                Banker, and has experience in Merchant Banking with TT Capital
                and as a Marketing agent with Davies Group. William{"’"}s global
                exposure in various business transactions and education includes
                graduating from Yale University and being an alumnus of the
                London School of Economics.
                <br />
                <br />
                <b>Samuel Lopez</b> (Director)
                <br />
                Samuel Lopez, a geologist with over{" "}
                <b>10 years of experience,</b> specializes in evaluating
                deposits of gold, copper, antimony, zinc, lead, silver, and tin.
                His work history includes Comibol, Bigicorp, and Grupo Minero
                Bolivar. Samuel’s expertise contributes significantly to our
                exploration endeavors.
                <br />
                <br />
              </p>
              <Link href="/">
                <b>Learn More About Our Project</b>
              </Link>
            </div>
          )}

          {button03 && (
            <div>
              <div className="text-shower-box flex flex-col items-start gap-5 pt-10">
                <p>
                  <h2>
                    <b>Investment Options</b>
                  </h2>
                  Investors can participate in our campaign by purchasing shares
                  of Itavi Mining Company, S.A. Each share represents ownership
                  in the company and a stake in the future success of our
                  projects. <br />
                  With a minimum subscription amount of 50,000 shares, investors
                  can tailor their investment to suit their financial goals and
                  risk tolerance.
                  <br />
                  <br />
                  <h2>
                    <b>Investor Rewards</b>
                  </h2>
                  As a token of appreciation for their support, investors may be
                  eligible for exclusive rewards based on their level of
                  investment. <br />
                  From donations to local communities to gold bars and
                  all-expense-paid trips, we aim to provide meaningful
                  incentives for our valued investors.
                </p>
                <h2>
                  <b>How to Invest</b>
                </h2>
                <p>
                  Investing in our flagship project La Gran Española is a
                  strategic decision. Here{"’"}s how you can participate:
                  <br />
                  <b>Review the Opportunity:</b> Explore our website and
                  understand the potential of La Gran Española.
                  <br />
                  <b>Contact Us:</b> Reach out to our team for detailed
                  investment information.
                  <br />
                  <b>Invest:</b> Make your investment and become part of Bolivia
                  {"’"}s mineral revolution.
                  <br />
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="trigerring-btn-box px-[60px] py-[12px] flex items-center gap-4 justify-end">
          <button className="w-fit bg-[#fff] px-6 py-2 text-[#212121] font-bold rounded-sm hover:text-[#fff] hover:bg-[#212121] hover:border-[#fff] transition-all ease-in-out duration-700 border-2">
            <Link href="https://wefunder.com/itavimining">Invest</Link>
          </button>
          <button className="w-fit bg-[#fff] px-6 py-2 text-[#212121] font-bold rounded-sm hover:text-[#fff] hover:bg-[#212121] hover:border-[#fff] transition-all ease-in-out duration-700 border-2">
            <Link href="/">La Gran Española</Link>
          </button>
          <button className="w-fit bg-[#fff] px-6 py-2 text-[#212121] font-bold rounded-sm hover:text-[#fff] hover:bg-[#212121] hover:border-[#fff] transition-all ease-in-out duration-700 border-2">
            <Link href="/contact">
              <p className="btn-txt-desctop">Contact Us</p>
              <p className="btn-txt-mob">Contact</p>
            </Link>
          </button>
        </div>
      </div>

      <div className="fixed mob-router-back-link-toster">
        <RouterBack />
      </div>
    </div>
  );
};

export default InvestmentPage;
