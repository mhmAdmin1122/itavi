import React from "react";
import RouterBack from "./RouterBack";
import OpportunitySideBar from "./OpportunitySideBar";

const OpportunityLayout = ({children}:any) => {
  return (
    <div className="w-full h-full relative flex items-start gap-10 pagelayout">
      <OpportunitySideBar />
      <div className="section-page-side-box py-6 pr-8 w-[70%] max-h-screen overflow-scroll overflow-x-hidden">
        {children}
      </div>
      <div className="fixed mob-router-back-link-toster">
        <RouterBack />
      </div>
    </div>
  );
};

export default OpportunityLayout;
