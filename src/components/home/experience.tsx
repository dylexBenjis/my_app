import Image from 'next/image'
import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa6'
import {SiCloudflare, SiExpress, SiGit, SiGithub, SiMongodb, SiTypescript, SiVercel,} from 'react-icons/si'

const Experience = () => {
  return (
    <div className='py-10'>
        
          <div className='grid grid-cols-1 lg:grid-cols-2 px-0 sm:px-[5rem] lg:px-0 gap-5'>
              <div className='flex flex-col items-center border-solid border-2 rounded-[1rem] border-gray-600/50 p-4 gap-4 w-full h-full'>
                  <div>Software Development Tech Stack</div>
                  <div className='grid grid-cols-2 lg:grid-cols-3 w-full gap-5 h-fit'>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>react</p><FaReact className='text-blue-400'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>node.js</p><FaNodeJs className='text-yellow-400'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>express.js</p><SiExpress className='text-white'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>cloudflare</p><SiCloudflare className='text-orange-400'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>typescript</p><SiTypescript className='text-blue-900'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>mongoDb</p><SiMongodb className='text-green-400'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>vercel</p><SiVercel className='text-black'/></div>
                      <div className='flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2'><p>Git</p><SiGit className='text-orange-700'/></div>
                  </div>
              </div>
              <div className='flex flex-col p-4 gap-4 border-solid border-2 rounded-[1rem] border-gray-600/50 w-full h-full items-center'>
                  <div>work</div>
                  <div className='flex flex-col w-full gap-5 px-5 pr-[10rem]'>
                      <div className='flex gap-5'>
                          <div className='flex w-fit overflow-hidden'><Image src='/logo.jpg' alt='' width={50} height={50}/></div>
                          <div className='flex flex-col'>
                              <div title='experience company'>Mbelu Consulting</div>
                              <div className='text-gray-500' title='role in company'>I.T personnel</div>
                          </div>
                    </div>
                      <div className='flex gap-5'>
                          <div className='flex w-fit overflow-hidden '><Image src='/logo.jpg' alt='' width={50} height={50} objectFit=''/></div>
                          <div className='flex flex-col'>
                              <div title='experience company'>Tizeti Networks</div>
                              <div title='role in company' className='text-gray-500'>Field Service Engineer</div>
                          </div>
                    </div>
                  </div>
                  <div className='cursor-pointer mt-5'><button className='h-full w-full bg-gray-600/30 dark:bg-gray-600 px-5 py-3'>download cv</button></div>
              </div>
          </div>
    </div>
  )
}

export default Experience