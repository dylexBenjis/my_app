import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
          <div className='py-10 px-0 lg:px-[10rem]'>
          <div className='flex flex-col gap-4'>
              <div className='pb-3 text-xl'>Projects</div>
              <div className='flex gap-4 py-3 justify-between'>
                  <div className='flex relative text-[1.2rem] cursor-pointer justify-center items-center h-[5rem] w-[calc(100%/2)]' style={{    clipPath: 'polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)'}}>
                       <div className="absolute h-full w-full -z-1" >
                          <Image src='/software.webp' alt='bgImage' fill={true} />
            </div>
                      <div className='absolute inset-0 bg-orange-500/5' />
                      <div className='absolute inset-0 flex justify-center items-center'>Software</div>
               
                  </div>
                  <div className='flex relative text-[1.2rem] cursor-pointer justify-center items-center h-[5rem] w-[calc(100%/2)]' style={{    clipPath: 'polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)'}}>
                       <div className="absolute h-full w-full -z-1" >
                          <Image src='/hardware.png' alt='bgImage' fill={true} />
            </div>
                      <div className='absolute inset-0 bg-gray-500/5' />
                      <div className='absolute inset-0 flex justify-center items-center'>hardware</div>
               
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Projects