import React from "react";

const PPMDownloadBtn = () => {
  const handleDownload = () => {
    const pdfUrl = "/pdf/ppm.pdf";
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
      className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download PPM
    </button>
  );
};

export default PPMDownloadBtn;
