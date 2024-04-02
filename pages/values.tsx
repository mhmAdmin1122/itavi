import React from "react";
import AboutLayout from "./components/AboutLayout";

const OurValuesPage = () => {
  return (
    <AboutLayout>
      <div>
        <h3 className="text-4xl py-4 text-center">Our Values</h3>
        <p className="pb-4">
          At the core of Itavi Mining lie our values, the bedrock of our
          commitment to responsible mining.{" "}
        </p>
        <p className="pb-4">
          <b>Ambition:</b> To reach beyond the horizon. Our passion fuels our
          pursuit of mineral treasures and our ambition knows no bounds.
        </p>
        <p className="pb-4">
          <b>Investor Focus:</b> We believe in delivering strong returns through
          the strategic development of our assets.
        </p>
        <p className="pb-4">
          <b>Sustainability:</b> We respect the land, leaving a legacy of
          responsible mining. We have a strong commitment to minimizing our
          environmental footprint.
        </p>
        <p className="pb-4">
          <b>Innovation:</b> Pioneering modern methods to explore, delineate,
          and develop with a sustainable touch.
        </p>
        <p className="pb-4">
          <b>Integrity:</b> We uphold the highest standards navigating the
          mining industry and Bolivian legislation with transparency, ethical
          practices, and a steadfast commitment to legal compliance.
        </p>
      </div>
    </AboutLayout>
  );
};

export default OurValuesPage;
