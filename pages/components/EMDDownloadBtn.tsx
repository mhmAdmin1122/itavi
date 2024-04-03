import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const EMDDownloadBtn = () => {
  const handleDownload = () => {
    const pdfUrl = "/pdf/Emd.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "example.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-[#ca8a04] flex items-center gap-2 w-fit hover:bg-[#ca8b04] text-black font-bold py-2 px-4 relative z-[9999999999]"
    >
      <FaCloudDownloadAlt className="text-xl"/>
      <p>Deck</p>
    </button>
  );
};

export default EMDDownloadBtn;
