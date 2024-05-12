'use client'
import React, { useEffect } from 'react'
import { FaThreads, FaGithub, FaFacebook, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Socialmedia = () => {

    useEffect(() => {
        Aos.init({
            easing: 'ease-in-sine',
            duration: 700,
        })
    },[])

  return (
      <div className='fixed h-screen right-1 sm:right-3 z-[1] '>
        <div className='flex flex-col text-xl sm:text-2xl gap-y-5 sm:gap-y-5 absolute right-0 inset-y-0 -translate-y-[50%] justify-center ' data-aos='fade-in' data-aos-once='true'>
            <a className=' cursor-pointer' href='https://github.com/dylexBenjis' target='_blank' data-aos='fade-left' data-aos-delay='200' data-aos-once='true'><FaGithub/></a>
            <a className=' cursor-pointer' href='https://facebook.com/benji.tentacion' target='_blank' data-aos='fade-left' data-aos-delay='300' data-aos-once='true'><FaFacebook/></a>
            <a className=' cursor-pointer' href='https://twitter.com/benjichukwudile' target='_blank' data-aos='fade-left' data-aos-delay='400' data-aos-once='true'><FaXTwitter/></a>
            <a className=' cursor-pointer' href='https://www.instagram.com/_dylexbenjis/' target='_blank' data-aos='fade-left' data-aos-delay='200' data-aos-once='true'><FaInstagram/></a>
            {/*threads.net*/}
            <a className=' cursor-pointer' href='https://www.threads.net/@_dylexbenjis' target='_blank' data-aos='fade-left' data-aos-delay='300' data-aos-once='true' rel="noreferrer" ><FaThreads /></a>  
            <a className=' cursor-pointer' href='https://www.youtube.com/channel/UCnWtQg6qkHjREjELCelAfzA' target='_blank' data-aos='fade-left' data-aos-delay='500' data-aos-once='true'><FaYoutube /></a>
      </div>
    </div>
  )
}

export default Socialmedia