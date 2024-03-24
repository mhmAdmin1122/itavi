import React, { useState } from "react";
import Head from "next/head";
import PageLayout from "./components/PageLayout";
import {
  FaLocationDot,
  FaPhone,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaAngleLeft,
} from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/public/img/Logo.svg";
import Link from "next/link";
import MenuLight from "@/public/img/menu-light.svg";
import { useRouter } from "next/navigation";

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
          <form action="post" className="Contact-Form px-20 py-10">
            <h4>Get In touch</h4>
            <p>We{"'"}re open for any suggestion or just to have a chat</p>
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
            <div className="flex justify-center">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </PageLayout>
    </div>
  );
};

export default ContactPage;
