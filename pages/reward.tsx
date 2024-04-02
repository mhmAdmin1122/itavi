import React from "react";
import OpportunityLayout from "./components/OpportunityLayout";

const InvestorRewardPage = () => {
  return (
    <OpportunityLayout>
      <div>
        <h3 className="text-4xl text-center py-4">Investor Rewards</h3>
        <p className="pb-4">
          We value our investors{"'"}s support. As a token of our gratitude, we
          offer following rewards to you:
        </p>
        <ol className="flex items-start gap-4 flex-col pb-4 list-decimal pl-8">
          <li>
            <b>Humanitarian Impact:</b> For every investment of at least $1000,
            a donation will be made in your (the investor{"’"}s) name to the
            impoverished indigenous people of Bolivia. These communities,
            including the Highland Quechua and Armara tribes, provide our labor
            force and contribute to our project.
          </li>

          <li>
            <b>Precious Metals:</b> Depending on the investment level, investors
            will receive:
            <ul className="list-disc pl-4">
              <li>
                <b>Gold Bar</b> (1 gram): For investments of at least $10,000
                but less than $100,000.
              </li>
              <li>
                <b>Gold Bar</b> (1 ounce): For investments of at least $100,000
                but less than $250,000.
              </li>
            </ul>
          </li>

          <li>
            <b>Exploration Adventure:</b> For investments of at least $250,000,
            investors will enjoy an all-expense-paid trip to beautiful modern
            Santa Cruz, Bolivia, and the nearby wine region.
          </li>
        </ol>
        <p>
          Join us in shaping Bolivia{"’"}s mining landscape.{" "}
          <b>Invest with conviction.</b>
        </p>
      </div>
    </OpportunityLayout>
  );
};

export default InvestorRewardPage;
