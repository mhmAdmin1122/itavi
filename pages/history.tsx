import React from "react";
import AboutLayout from "./components/AboutLayout";

const HistoryPage = () => {
  return (
    <AboutLayout>
      <div>
        <h3 className="text-4xl text-center py-4">Our History</h3>
        <b className="text-[1.4rem] pb-2">1980</b>
        <p className="pb-4">
          EXPROMIN conducts initial explorations at La Española, including
          surface sampling and local geological mapping.
        </p>
        <b className="text-[1.4rem] pb-2">1990</b>
        <p className="pb-4">
          Initial exploration efforts reveal a resource of 500,000 ounces of
          Gold.
        </p>
        <b className="text-[1.4rem] pb-2">2000</b>
        <p className="pb-4">
          The United States Geological Survey (USGS) confirms high-sulfidation
          epithermal deposit of gold, silver, and copper.
        </p>
        <b className="text-[1.4rem] pb-2">2008</b>
        <p className="pb-4">
          Newmont Gold Corporation enters La Española, implementing systematic
          sampling in the Santa Rosa sector and launching a detailed geological
          exploration program, including drilling diamond core holes.
        </p>
        <b className="text-[1.4rem] pb-2">Today</b>
        <p className="pb-4">
          Itavi Mining Company acquires La Gran Española and initiates a
          comprehensive exploration program using modern technologies and
          drilling techniques. Join us on this quest. Invest in posterity!
        </p>
      </div>
    </AboutLayout>
  );
};

export default HistoryPage;
