'use client'
import React, { use, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ThemeSwitch from './client components/themeSwitch'
import { Link } from 'react-scroll';
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'
 
gsap.registerPlugin(useGSAP);

const Nav = () => {
  
  //logic to set projects button route right
  const router = usePathname();
  const [home, setHome] = useState(false);
  useEffect(() => {
    if (router === '/') {
      setHome(true)
    } else {
      setHome(false)
    }
  }, []);


  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const positionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {


    let prevScrollPos = 0;

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

      const isScrollingUp = currentScrollPos > prevScrollPos ;
      const isScrollingDown = currentScrollPos < prevScrollPos ;
      let topp = currentScrollPos * 0.3;
      if (isScrollingUp&&positionRef.current) {
        positionRef.current.style.top = `-${topp}px`;
      }
      if(isScrollingDown&&positionRef.current){
        positionRef.current.style.top = `0px`;

      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

  //mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  return (

      <div className={`w-screen fixed pt-4 h-auto transition-all duration-100 z-[10]`} ref={positionRef}  >
      <div className={styles.container}>
                <div className='flex justify-between'>
                    {/* <div className={`w-fit h-auto rounded-full overflow-hidden  bg-orange-500`}>
            <a className='flex bg-orange-600 w-[50px] h-[50px] relative'><Image src='/logo.jpg' alt='logo' fill={true}  fetchPriority='high' /></a>
            </div>
      */}
          <a href='/'>
                      <div style={{transform:scrolled?'scale(1)':'scale(1.2)', transition:scrolled?'0.1s ease-in-out':'0.1s'}}className='text-lg lg:text-2xl font-bold mix-blend-difference text-orange-600 italic font-zenDots text-shadow-lg [text-shadow:_-1px_-1px_0_rgb(71_89_194),_-1px_1px_0_rgb(71_89_194),_-1px_1px_0_rgb(71_89_194),_1px_1px_0_rgb(71_89_194)] transition'>dylexBenji</div>

          </a>

          <div className='hidden  backdrop-blur bg-gray-500/30 sm:flex w-fit gap-x-10 px-6 items-center justify-center border-solid border-2 border-gray-500/50 rounded-full z-[10]'>
                  <div className='cursor-pointer hover:text-gray-400'><a href='/'>Home</a></div>
            <div className='cursor-pointer hover:text-gray-400'>
{home? <Link
                to='projects'
                spy={true}
                smooth={true}
                offset={0}
                hashSpy={true}
                delay={200}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>Projects</Link> : <a href='/#projects'>Projects</a>}
            </div>
                  <div className='cursor-pointer hover:text-gray-400'><a href='/blog'>Blog</a></div>
                </div>
              <div className='flex  backdrop-blur bg-gray-500/30 sm:hidden w-fit gap-x-10 px-3 items-center justify-center  border-solid border-2 border-gray-500/50 rounded-full z-[10]'>
                  <div className='flex flex-row items-center justify-center gap-1 cursor-pointer w-fit' onClick={()=>setMobileOpen(!mobileOpen)}><p>menu</p> <IoIosArrowDown/></div>
              </div>                


            <ThemeSwitch/>
        </div>   
      
      </div>
      {mobileOpen &&
        <div className='flex  flex-col h-fit w-fit py-3 justify-center items-center border-[1px] shadow-xl border-gray-500 bg-gray-300 dark:bg-[#04050c]/50 absolute left-[50%] mt-2 gap-3' style={{transform:'translate(-18%,0)'}}>
        <div className='flex justify-center items-center px-5'><a href='/'>Home</a></div><hr className='bg-black h-[1px] w-[100%]'/>
        <div className='flex justify-center items-center px-5'>{home? <Link
                to='projects'
                spy={true}
                smooth={true}
                offset={0}
                hashSpy={true}
                delay={200}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}>Projects</Link> : <a href='/#projects'>Projects</a>}</div><hr className='bg-black h-[1px] w-[100%]'/>
        <div className='flex justify-center items-center px-5'><a href='/blog'>Blog</a></div>
      </div>}

      </div>


 
  )
}

export default Nav

// <div className="top-0 z-10 h-16 pt-6" style={{ position: 'sticky' }}>
//         <div className={`sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full  transition-transform ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`} ref={positionRef}>
//           <div className="mx-auto w-full max-w-7xl lg:px-8">
//             <div className="relative px-4 sm:px-8 lg:px-12">
//               <div className="mx-auto max-w-2xl lg:max-w-5xl">
//                 <div className="relative flex gap-4">
//                   <div className="flex flex-1"></div>
//                   <div className="flex flex-1 justify-end md:justify-center">
//                     <div className="pointer-events-auto md:hidden" data-headlessui-state="">
//                       <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R2miqla:">Menu
//                         <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
//                           <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
//                     </div>
//                     <div style={{ position: 'fixed', top: '1px', left: '1px', width: '1px', height: 0, padding: 0, margin: '-1px', overflow: 'hidden', whiteSpace: 'nowrap', borderWidth: 0, display: 'none' }}>
//                     </div>
//                     <nav className="pointer-events-auto hidden md:block">
//                       <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
//                         <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a></li>
//                         <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a></li>
//                         <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a></li>
//                         <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a></li>
//                         <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a></li>
//                       </ul>
//                     </nav>
//                   </div>
//                   <div className="flex justify-end md:flex-1">
//                     <div className="pointer-events-auto">
//                       <button type="button" aria-label="Switch to light theme" className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
//                         <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
//                           <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
//                           <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
//                         </svg>
//                         <svg viewBox="0 0 24 24" aria-hidden="true" className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
//                           <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>