import React from "react";
import PageSideBar from "./PageSideBar";

const PageLayout = ({ children }: any) => {
  return (
    <div className="w-full h-full flex items-start gap-10 pagelayout">
      <PageSideBar />
      <div className="section-page-side-box py-6 pr-8 w-[70%] max-h-screen overflow-scroll overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
