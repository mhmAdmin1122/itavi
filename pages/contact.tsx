import React, { useState } from "react";
import Head from "next/head";
import PageLayout from "./components/PageLayout";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import cover from "@/public/img/InvestWithConviction.jpg";
import ImageWithTextMask from "./components/ImageWithTextMask";
import Link from "next/link";

const ContactPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const router = useRouter();

  const handlePreviousClick = () => {
    router.back();
  };

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };

  const handleNavbar = (event: any) => {
    setIsActive((current) => !current);
  };

  return (
    <div>
      <Head>
        <title>Contact - Itavi Mining</title>
      </Head>
      <PageLayout>
        <div className="flex items-center flex-col justify-center">
          {/* <ImageWithTextMask imageUrl={cover} /> */}

          <form className="Contact-Form px-20 py-10">
            <h4>Get In touch</h4>
            <p className="!text-gray-600">We{"'"}re open for any suggestion or just to have a chat</p>
            <div className="Input-Div">
              <input type="text" placeholder="Name" />{" "}
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" /> <br />
            <textarea
              name=""
              id=""
              cols={15}
              rows={3}
              placeholder="Message"
              className=""
            ></textarea>
            <div className="flex justify-center ">
              <button className="bg-[#ca8a04] w-fit hover:bg-[#ca8b04] text-white font-bold py-1 px-6 rounded relative z-[9999999999]" type="submit">
                Send Message
              </button>
            </div>
          </form>

          <div className="flex items-center gap-10 flex-wrap w-full justify-center">
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-7xl p-2 border-2 border-black rounded-full" />
              <p className="cursor-context-menu">
                99 Wall Street, Suite <br /> #5014 New York,
                <br /> NY 10005
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="tel:(646) 770-0628"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaPhone className="text-4xl p-2 border-2 border-black rounded-full cursor-pointer" />
                <p>
                  {"("}646{")"} 770-0628
                </p>
              </Link>
              <Link
                href="mailto:william@itavimining.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaEnvelope className="text-4xl p-1 border-2 border-black rounded-full cursor-pointer" />
                <p>william@itavimining.com</p>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default ContactPage;
