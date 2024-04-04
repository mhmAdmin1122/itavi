import React, { useState } from 'react'
import logo from '@/public/img/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import weFunderIco from "@/public/img/wefunder.png";
import { IoCloseOutline } from 'react-icons/io5'
import { FaAngleDown, FaAngleRight, FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6'

const PageSideBar = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [mobHomeTab, setMobHomeTab] = useState(false);
  const [mobAboutTab, setMobAboutTab] = useState(false);
  const [mobOppertunityTab, setMobOppertunityTab] = useState(false);
  const [mobDocumentationTab, setMobDocumentationTab] = useState(false);
  const [mobLegalTab, setMobLegalTab] = useState(false);
  const handleShowTabs = () => {
    setShowTabs((current) => !current);
  };
  const mobHomeTabOpen = () => {
    setMobHomeTab((current: any) => !current);
  };
  const mobAboutTabOpen = () => {
    setMobAboutTab((current: any) => !current);
  };
  const mobOppertunityTabOpen = () => {
    setMobOppertunityTab((current: any) => !current);
  };
  const mobDocumentationTabOpen = () => {
    setMobDocumentationTab((current: any) => !current);
  };
  const mobLegalTabOpen = () => {
    setMobLegalTab((current: any) => !current);
  };
  
  return (
    <div className='side-bar-section min-h-screen max-h-full w-[30%] py-4 px-2 relative'>
      <Link href="/#home" className="logoBox h-[20%] flex items-center justify-center">
        <Image src={logo} alt='logo-pic-itavi' width={140} height={120} className='logo-pic-side' />
      </Link>
      <div className="sidebar-tabs h-[75%] flex flex-col gap-2 font-normal text-white text-left items-end pt-[55px] pr-4">
        <Link className='shadow-text' href="/faqs">FAQs</Link>
        <Link className='shadow-text' href="/disclaimer">Disclaimer</Link>
        <Link className='shadow-text' href="/terms">Terms & Conditions</Link>
        <Link className='shadow-text' href="/privacy">Privacy Policy</Link>
      </div>
      <div className="relative">
        <div className="menu-sidebar-hamburger" onClick={handleShowTabs}>
        {showTabs ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </div>
        {showTabs && (
          <div className="w-full flex items-end justify-end top-[44px] -right-2 absolute mob-hederverticaltabs-box">
            <div className="vert-mob-tabs-box w-[320px] bg-[#000] text-[#fff] p-6 rounded-b-md">
              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobHomeTabOpen}>Home</button>
                  {mobHomeTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobHomeTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="https://wefunder.com/itavimining">
                        Invest
                      </Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/Investment">Inestment Details</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobAboutTabOpen}>About</button>
                  {mobAboutTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobAboutTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/values">Our Value</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/history">History</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="conviction">Invest With Conviction</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobOppertunityTabOpen}>Oppertunity</button>
                  {mobOppertunityTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobOppertunityTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/reward">Investor Rewards</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/visionaries">Visionaries</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/resources">Scale of Resources</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/market">Emerging Markets</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/copper">Copper Concentration</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobDocumentationTabOpen}>
                    Documentation
                  </button>
                  {mobDocumentationTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobDocumentationTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/#documentation">
                        Private Placement Memorandum
                      </Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/#documentation">Company Pitch Deck</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/#documentation">
                        Property Technical Report
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="hover:underline shadow-text flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={mobLegalTabOpen}>Legal</button>
                  {mobLegalTab ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {mobLegalTab && (
                  <div className="flex flex-col gap-2 items-end text-[10px]">
                    <div onClick={handleShowTabs}>
                      <Link href="/faqs">FAQs</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/disclaimer">Disclaimer</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/terms">Terms & Condition</Link>
                    </div>
                    <div onClick={handleShowTabs}>
                      <Link href="/privacy">Privacy Policy</Link>
                    </div>
                  </div>
                )}
              </div>

              <div onClick={handleShowTabs}>
                <Link
                  href="/#contact"
                  className="hover:underline flex flex-col items-end pr-4"
                >
                  Contact
                </Link>
              </div>

              <div className="flex items-center justify-end gap-4 pt-12">
                <p>Follow us :</p>
                <div className="flex items-center justify-end gap-4">
                  <Link
                    className="text-xl text-[#ca8a04] btnshadow2"
                    href="https://www.facebook.com/itavimining"
                    target="blank"
                  >
                    <FaSquareFacebook />
                  </Link>
                  <Link
                    className="text-xl text-[#ca8a04] btnshadow2"
                    href="https://www.linkedin.com/company/itavi-mining-company"
                    target="blank"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    className="text-xl text-[#ca8a04] btnshadow2"
                    href="https://www.twitter.com/@itavimining"
                    target="blank"
                  >
                    <FaSquareXTwitter />
                  </Link>
                  <Link
                    className="text-xl btnshadow2 "
                    href="https://wefunder.com/itavimining"
                    target="blank"
                  >
                    <Image
                      src={weFunderIco}
                      alt="weFunder-Ico"
                      className="w-[20px] rounded-[2px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageSideBar
