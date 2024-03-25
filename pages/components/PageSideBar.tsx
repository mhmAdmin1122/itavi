import React from 'react'
import logo from '@/public/img/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import RouterBack from './RouterBack'

const PageSideBar = () => {
  return (
    <div className='side-bar-section min-h-screen max-h-full w-[30%] py-4 px-2 relative'>
      <Link href="/#home" className="logoBox h-[20%] flex items-center justify-center">
        <Image src={logo} alt='logo-pic-itavi' width={140} height={120} className='logo-pic-side' />
      </Link>
      <div className="sidebar-tabs h-[75%] flex flex-col gap-2 font-normal text-white text-left items-end pt-[55px] pr-4">
        <Link className='shadow-text' href="/contact">Contact</Link>
        <Link className='shadow-text' href="/faqs">FAQs</Link>
        <Link className='shadow-text' href="/disclaimer">Disclaimer</Link>
        <Link className='shadow-text' href="/terms">Terms & Conditions</Link>
        <Link className='shadow-text' href="/privacy">Privacy Policy</Link>
      </div>
      <div className=''>
        <RouterBack />
      </div>
    </div>
  )
}

export default PageSideBar
