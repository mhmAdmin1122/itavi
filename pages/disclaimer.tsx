import React from "react";
import PageLayout from "./components/PageLayout";
import Head from "next/head";
import Link from "next/link";

const DisclaimerPage = () => {
  return (
    <div>
      <Head>
        <title>Disclaimer - Itavi Mining</title>
      </Head>
      <PageLayout>
        <div className="disclaimer-box">
          <h2>Disclaimer</h2>
          <h2>Investment Risk</h2>
          <p>
            Investing in Itavi Mining Company {"("}
            {'"'}Itavi,{'"'} {'"'}the Company{'"'}
            {")"} carries significant risk. The value of investments can
            fluctuate, and you may lose part or all of your invested capital.
            Past performance is not indicative of future results. Factors that
            could adversely affect the Company{"'"}s business and financial
            performance include, but are not limited to:
          </p>
          <ul>
            <li>
              Exploration risks: No assurance that exploration will result in
              the discovery of commercially viable mineral deposits.
            </li>
            <li>
              Development risks: Challenges in obtaining permits, financing,
              completing construction on time and within budget.
            </li>
            <li>
              Operational risks: Accidents, unexpected geological formations,
              commodity price fluctuations, changes in government regulations,
              labor disputes.
            </li>
            <li>
              Political and legal risks: Expropriation, changing laws,
              environmental regulations.
            </li>
            <li>
              Global economic risks: Market downturns, inflation, currency
              fluctuations.
            </li>
          </ul>
          <h2>Forward-Looking Statements</h2>
          <p>
            This website, investor presentations, and other Company
            communications may contain forward-looking statements regarding
            future events or performance. These statements are based on current
            expectations and assumptions that are subject to change. Actual
            results may differ materially. We undertake no obligation to update
            forward-looking statements to reflect subsequent events or
            circumstances.
          </p>
          <h2>No Investment Advice</h2>
          <p>
            The information provided does not constitute investment advice or a
            solicitation to buy or sell securities. Before making any investment
            decision, consult with a qualified financial advisor to assess your
            individual risk tolerance, objectives, and suitability.
          </p>
          <h2>Use of Information</h2>
          <p>
            Information on this website is provided {'"'}as is{'"'} without warranty of
            any kind. The Company makes no representations about the
            suitability, reliability, timeliness, or accuracy of the information
            for any purpose. The Company will not be liable for any losses or
            damages arising from the use of this website.
          </p>
          <h2>Third-Party Content</h2>
          <p>
            This website may contain links to third-party websites. The Company
            does not endorse and is not responsible for the content of any
            linked sites. Your use of third-party sites is at your own risk and
            subject to their terms.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the Company, its officers,
            directors, employees, and agents shall not be liable for any direct,
            indirect, incidental, special, or consequential damages arising from
            or in connection with the use of or inability to use this website or
            the information contained herein.
          </p>
          <h2>Changes to Disclaimer</h2>
          <p>
            The Company reserves the right to update this Disclaimer at any
            time. Please review it periodically.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact at{" "}
            <Link href="/contact">itavimining.com/contact</Link>
          </p>
        </div>
      </PageLayout>
    </div>
  );
};

export default DisclaimerPage;
