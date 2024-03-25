import React from "react";
import PageLayout from "./components/PageLayout";
import Head from "next/head";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div>
      <Head>
        <title>Terms & Condition - Itavi Mining</title>
      </Head>
      <PageLayout>
        <div className="termsCondition-box">
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to the Itavi Mining Company {"("}
            {'"'}Itavi,{'"'} {'"'}the Company,{'"'} {'"'}we,{'"'}
            {'"'}us{'"'}
            {")"} website and related services. By accessing or using our
            website, you agree to be legally bound by these Terms and Conditions
            {"("}
            {'"'}Terms{'"'}
            {")"}.
          </p>

          <h3>Use of Website</h3>
          <ul>
            <li>You must be at least 18 years old to use our website.</li>
            <li>
              You may not use our website for illegal purposes or in ways that
              could harm the Company, the website, or others.
            </li>
            <li>
              We may suspend or terminate your access to the website for
              violating these Terms.
            </li>
          </ul>

          <h3>Intellectual Property</h3>
          <ul>
            <li>
              All content on the website, including text, images, logos, and
              software is the Company's property and protected by copyright and
              trademark laws.
            </li>
            <li>
              You may not reproduce, distribute, or commercially exploit the
              content without our express written consent.
            </li>
          </ul>

          <h3>Investment Information</h3>
          <ul>
            <li>
              Investment information presented on the website is for
              informational purposes only and does not constitute investment
              advice.
            </li>
            <li>
              Before investing, please carefully review offering documents such
              as the Private Placement Memorandum, and consult your own
              financial advisor.
            </li>
          </ul>

          <h3>User-Generated Content</h3>
          <ul>
            <li>
              The website may allow you to submit comments or other content. You
              grant us a non-exclusive, worldwide, royalty-free license to use,
              reproduce, and distribute your content.
            </li>
            <li>
              You are responsible for ensuring your content does not violate any
              laws, infringe intellectual property rights, or harm others.
            </li>
          </ul>

          <h3>Disclaimer of Warranties</h3>
          <ul>
            <li>
              THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL
              WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </li>
          </ul>

          <h3>Limitation of Liability</h3>
          <ul>
            <li>
              THE COMPANY WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
              INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR
              USE OF THE WEBSITE OR RELIANCE ON ITS INFORMATION.
            </li>
          </ul>

          <h3>Indemnification</h3>
          <ul>
            <li>
              You agree to indemnify and hold the Company harmless from any
              claims, losses, or damages arising from your use of the website or
              violation of these Terms.
            </li>
          </ul>

          <h3>Changes to Terms</h3>
          <ul>
            <li>
              We may update these Terms from time to time. Your continued use of
              the website indicates your acceptance of the revised Terms.
            </li>
          </ul>

          <h3>Governing Law and Jurisdiction</h3>
          <ul>
            <li>
              These Terms will be governed by and construed in accordance with
              the laws of United States. Disputes shall be resolved in the
              courts of United States States.
            </li>
          </ul>

          <h3>Severability</h3>
          <ul>
            <li>
              If any part of these Terms is found unenforceable, the remaining
              portions will remain valid and in full force and effect.
            </li>
          </ul>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Disclaimer, please contact at{" "}
            <Link href="/contact">itavimining.com/contact</Link>
          </p>
        </div>
      </PageLayout>
    </div>
  );
};

export default TermsPage;
