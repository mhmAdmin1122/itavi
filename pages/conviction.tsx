import React from "react";
import AboutLayout from "./components/AboutLayout";

const InvestWithConvictionPage = () => {
  return (
    <AboutLayout>
      <div>
        <h3 className="text-4xl py-4 text-center">Invest With Conviction</h3>
        <p className="pb-4">
          At Itavi Mining, we envision a future where responsible mining powers
          progress. Our foundation rests on transparency, ethical practices, and
          an unwavering commitment to responsible mining.
        </p>
        <p className="pb-4">
          <b>Market Presence:</b> The NYSE-listed New Pacific Metals Corp (NEWP)
          operates nearby (market cap of $168M as of 3/12/24.) Their presence
          validates the region{"'"}s vast potential.
        </p>
        <p className="pb-4">
          <b>Expertise:</b> Our team brings decades of experience in successful
          Bolivian mining projects and our flagship La Gran Española prospect
          boasts documented potential validated by past exploration by major
          industry players.
        </p>
        <p className="pb-4">
          <b>Track Record:</b> Our track record is a testament to our dedication to
          both mineral exploration and the well-being of the environment.
        </p>
      </div>
    </AboutLayout>
  );
};

export default InvestWithConvictionPage;
