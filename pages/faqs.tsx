import React, { useState } from "react";
import PageLayout from "./components/PageLayout";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Head from "next/head";

const FaqsPage = () => {
  const [carousal1, setCarousal1] = useState(false);
  const [carousal2, setCarousal2] = useState(false);
  const [carousal3, setCarousal3] = useState(false);
  const [carousal4, setCarousal4] = useState(false);
  const [carousal5, setCarousal5] = useState(false);
  const [carousal6, setCarousal6] = useState(false);
  const [carousal7, setCarousal7] = useState(false);
  const [carousal8, setCarousal8] = useState(false);
  const [carousal9, setCarousal9] = useState(false);
  const [carousal10, setCarousal10] = useState(false);
  const [carousal11, setCarousal11] = useState(false);
  const [carousal, setCarousal] = useState(false);

  const openCarousal1 = () => {
    setCarousal1((current) => !current);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal2 = () => {
    setCarousal1(false);
    setCarousal2((current) => !current);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal3 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3((current) => !current);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal4 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4((current) => !current);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal5 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5((current) => !current);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal6 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6((current) => !current);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal7 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7((current) => !current);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal8 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8((current) => !current);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal9 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9((current) => !current);
    setCarousal10(false);
    setCarousal11(false);
  };
  const openCarousal10 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10((current) => !current);
    setCarousal11(false);
  };
  const openCarousal11 = () => {
    setCarousal1(false);
    setCarousal2(false);
    setCarousal3(false);
    setCarousal4(false);
    setCarousal5(false);
    setCarousal6(false);
    setCarousal7(false);
    setCarousal8(false);
    setCarousal9(false);
    setCarousal10(false);
    setCarousal11((current) => !current);
  };

  return (
    <div>
      <Head>
        <title>FAQs - Itavi Mining</title>
      </Head>
      <PageLayout>
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen max-h-full">
          <h2 className="text-4xl font-medium outline-double px-[10px] py-[6px] rounded-md">
            &#x2022; FAQs
          </h2>

          {/* Carousals */}
          <div className="carousal-body carousal1">
            <div className="carousal-head">
              <h2 onClick={openCarousal1} className="cursor-pointer">
                What is the offering price per share for Itavi Mining Company,
                S.A.?
              </h2>
              <i onClick={openCarousal1} className="cursor-pointer">
                {carousal1 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal1 && (
              <p className="carousal-deatail">
                Itavi Mining Company, S.A., a Wyoming Corporation, is offering
                500,000 shares of Common Stock at $1.00 per share, aiming to
                raise $500,000.
              </p>
            )}
          </div>

          <div className="carousal-body carousal2">
            <div className="carousal-head">
              <h2 onClick={openCarousal2} className="cursor-pointer">
                What sets La Gran Española apart from other mining projects?
              </h2>
              <i onClick={openCarousal2} className="cursor-pointer">
                {carousal2 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal2 && (
              <p className="carousal-deatail">
                La Gran Española stands out due to its significant scale, with
                over 6,000 acres of untapped Bolivian terrain holding potential
                resources of 500,000 ounces of Gold based on drilling and
                sampling data up to 220 m deep. The inclusion of copper
                positions it uniquely amidst the global shift towards green
                energy.
              </p>
            )}
          </div>

          <div className="carousal-body carousal3">
            <div className="carousal-head">
              <h2 onClick={openCarousal3} className="cursor-pointer">
                Where is the La Gran Española Project located?
              </h2>
              <i onClick={openCarousal3} className="cursor-pointer">
                {carousal3 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal3 && (
              <p className="carousal-deatail">
                It{"’"}s located in the Western Cordillera of Bolivia,
                approximately 175 km from La Paz.
              </p>
            )}
          </div>

          <div className="carousal-body carousal4">
            <div className="carousal-head">
              <h2 onClick={openCarousal4} className="cursor-pointer">
                What are the exploration targets of Itavi Mining Company S.A.?
              </h2>
              <i onClick={openCarousal4} className="cursor-pointer">
                {carousal4 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal4 && (
              <p className="carousal-deatail">
                The company has identified four exploration targets in La Gran
                Española, including the Tarutani vein systems, the San Geronimo
                Santa Rosa area, the Mina Kollota area, and a potential buried
                porphyry copper-gold system.
              </p>
            )}
          </div>

          <div className="carousal-body carousal5">
            <div className="carousal-head">
              <h2 onClick={openCarousal5} className="cursor-pointer">
                What are the initial exploration results?
              </h2>
              <i onClick={openCarousal5} className="cursor-pointer">
                {carousal5 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal5 && (
              <p className="carousal-deatail">
                Initial results show an average of 0.49 g/Ton Au and 14.5 g/Ton
                Ag from the first campaign, and 0.19 g/Ton Au and 4.14 g/Ton Ag
                from the second.
              </p>
            )}
          </div>

          <div className="carousal-body carousal6">
            <div className="carousal-head">
              <h2 onClick={openCarousal6} className="cursor-pointer">
                What is the company{"’"}s exploration strategy?
              </h2>
              <i onClick={openCarousal6} className="cursor-pointer">
                {carousal6 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal6 && (
              <p className="carousal-deatail">
                Itavi Mining Company S.A. plans to conduct systematic and
                integrated exploration to outline and quantify resources
                according to NI 43-101 standards, leading to value creation up
                to the potential development stage. They aim to use modern
                methods to characterize and update existing studies.
              </p>
            )}
          </div>

          <div className="carousal-body carousal7">
            <div className="carousal-head">
              <h2 onClick={openCarousal7} className="cursor-pointer">
                What is the potential return on investment for investors?
              </h2>
              <i onClick={openCarousal7} className="cursor-pointer">
                {carousal7 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal7 && (
              <p className="carousal-deatail">
                The untapped nature of La Gran Española offers a ground-floor
                opportunity. Our investors will potentially benefit from
                significant returns, especially considering the strategic
                inclusion of copper in the project.
              </p>
            )}
          </div>

          <div className="carousal-body carousal8">
            <div className="carousal-head text-gray-600 flex items-center justify-between text-xl gap-4">
              <h2 onClick={openCarousal8} className="cursor-pointer">
                How can I trust Itavi Mining with my investment?
              </h2>
              <i onClick={openCarousal8} className="cursor-pointer">
                {carousal8 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal8 && (
              <p className="carousal-deatail">
                Trust is paramount to us. Our track record, commitment to
                ethical practices, and government support provide a solid
                foundation. Joining us is a commitment to responsible mining and
                a sustainable future for posterity.
              </p>
            )}
          </div>

          <div className="carousal-body carousal9">
            <div className="carousal-head text-gray-600 flex items-center justify-between text-xl gap-4">
              <h2 onClick={openCarousal9} className="cursor-pointer">
                What is the minimum subscription amount for investors?
              </h2>
              <i onClick={openCarousal9} className="cursor-pointer">
                {carousal9 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal9 && (
              <p className="carousal-deatail">
                Investors must subscribe to a minimum of 50,000 shares, which is
                equivalent to $50,000.
              </p>
            )}
          </div>

          <div className="carousal-body carousal10">
            <div className="carousal-head text-gray-600 flex items-center justify-between text-xl gap-4">
              <h2 onClick={openCarousal10} className="cursor-pointer">
                How will the proceeds from the offering be used?
              </h2>
              <i onClick={openCarousal10} className="cursor-pointer">
                {carousal10 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal10 && (
              <p className="carousal-deatail">
                Proceeds will be used by the company after deducting certain
                expenses, including legal, accounting, and other miscellaneous
                expenses.
              </p>
            )}
          </div>

          <div className="carousal-body carousal11">
            <div className="carousal-head">
              <h2 onClick={openCarousal11} className="cursor-pointer">
                What are the investor suitability requirements?
              </h2>
              <i onClick={openCarousal11} className="cursor-pointer">
                {carousal11 ? <FaAngleDown /> : <FaAngleUp />}
              </i>
            </div>
            {carousal11 && (
              <p className="carousal-deatail">
                Investors must be part of a select group who have no need for
                liquidity of investment and can afford the high financial risks,
                including the potential for a complete loss of their investment.
              </p>
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default FaqsPage;
