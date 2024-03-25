import Head from "next/head";
import React from "react";
import PageLayout from "./components/PageLayout";
import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Itavi Mining</title>
      </Head>
      <PageLayout>
        <div className="privacy-Policy-box">
          <h2>Privacy Policy</h2>
          <p></p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <p>
                <b>Contact Information: </b>Name, email address, mailing
                address, phone number.
              </p>
            </li>
            <li>
              <p>
                <b>Investment Information: </b>Investment amounts, securities
                you hold, banking details for distributions.
              </p>
            </li>
            <li>
              <p>
                <b>Investor Questionnaire Data: </b>Financial background,
                investment goals, risk tolerance.
              </p>
            </li>
            <li>
              <p>
                <b>Website Usage: </b>IP address, pages visited, actions taken
                on our website.
              </p>
            </li>
            <li>
              <p>
                <b>Communications: </b>Content of emails, calls, or other
                communications with the Company.
              </p>
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>
              <p>
                <b>Providing Services:</b>Processing investments, communicating
                with shareholders, fulfilling legal reporting obligations.
              </p>
            </li>
            <li>
              <p>
                <b>Improving Our Services:</b>Analyzing website usage data to
                enhance user experience.
              </p>
            </li>
            <li>
              <p>
                <b>Marketing and Communications: </b>Sending updates on the
                Company, with your consent.
              </p>
            </li>
            <li>
              <p>
                <b>Security and Compliance: </b>Detecting fraud, complying with
                laws.
              </p>
            </li>
          </ul>

          <h2>How We Share Your Information</h2>
          <ul>
            <li>
              <p>
                <b>Service Providers: </b>With third parties necessary to
                process transactions, provide customer support, or for website
                analytics.
              </p>
            </li>
            <li>
              <p>
                <b>Legal Compliance: </b>If required by law, court order, or to
                protect the rights and safety of the Company or others.
              </p>
            </li>
            <li>
              <p>
                <b>Business Transactions: </b>In the event of a merger,
                acquisition, or sale of assets.
              </p>
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We maintain safeguards to protect your personal information.
            However, no transmission or storage of data online is 100% secure.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>
              <p>
                <b>Accessing/Updating Your Information:</b> Contact us to
                request access or make changes to your personal information.
              </p>
            </li>
            <li>
              <p>
                <b>Opting-Out of Marketing Communications:</b>
                Follow unsubscribe instructions in marketing emails or contact
                us to opt-out.
              </p>
            </li>
          </ul>

          <h2>Children{"'"}s Privacy</h2>
          <p>
            Our website and services are not intended for those under 18 years
            of age. We do not knowingly collect information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy. Please review it periodically.
            The {'"'}Effective Date{'"'} at the top indicates the last revision
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

export default PrivacyPage;
