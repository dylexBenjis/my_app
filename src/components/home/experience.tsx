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
                  <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-5 h-fit'>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>react</p><FaReact className='text-blue-400'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>node.js</p><FaNodeJs className='text-yellow-400'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>express.js</p><SiExpress className='text-white'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>cloudflare</p><SiCloudflare className='text-orange-400'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2'><p>typescript</p><SiTypescript className='text-blue-900'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>mongoDb</p><SiMongodb className='text-green-400'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>vercel</p><SiVercel className='text-black'/></div>
                      <div className='flex w-full bg-gray-900/50 items-center justify-center gap-2 h-[3rem]'><p>Git</p><SiGit className='text-orange-700'/></div>
                  </div>
              </div>
              <div className='flex flex-col p-4 gap-4 border-solid border-2 rounded-[1rem] border-gray-600/50 w-full h-full items-center'>
                  <div>work</div>
                  <div className='flex flex-col w-full gap-4'>
                      <div className='grid grid-cols-[20%_60%_20%]'>
                          <div className='flex rounded-full w-fit overflow-hidden'><Image src='/logo.jpg' alt='' width={50} height={50}/></div>
                          <div className='flex flex-col'>
                              <div>header</div>
                              <div className='text-gray-500'>role</div>
                          </div>
                          <div className='text-gray-500'>dates</div>
                    </div>
                      <div className='grid grid-cols-[20%_60%_20%]'>
                          <div className='flex rounded-full w-fit overflow-hidden'><Image src='/logo.jpg' alt='' width={50} height={50}/></div>
                          <div className='flex flex-col'>
                              <div>header</div>
                              <div className='text-gray-500'>role</div>
                          </div>
                          <div className='text-gray-500'>dates</div>
                    </div>
                  </div>
                  <div className='cursor-pointer'>download cv</div>
              </div>
          </div>
    </div>
  )
}

export default Experience