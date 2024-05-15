import React from 'react'
import { blogHighlights } from '../blog data/blogHighlights'
import Image from 'next/image'

const BlogSection = () => {

    //@ts-ignore
    const BlogSec = (q) => {

        return (
            <div className='flex flex-col py-3 gap-4'>
                <div className='text-gray-400 border-l-2 pl-5'>{q.time}</div>
                <div className='flex gap-5'>
                    <div>
                                
                        <div className='text-lg'>{q.text}</div>
                        <div className='text-gray-400'>{q.description}</div>
                        <div className='text-green-400 cursor-pointer'><a href={`${q.link}`}>read more</a></div>
                            
                    </div>
                    {/* <div className='bg-orange-500'>
                        <Image src='/logo.jpg' alt='' width={400}  height={100}/>
                    </div> */}
                </div>
            </div>
        )
    }


  return (
      <div className='py-10 px-0 lg:px-[10rem]'>
          <div className='flex flex-col gap-4'>
              <div className='pb-3 text-xl'>Blog Posts</div>
              <div className='flex flex-col gap-4 py-3'>
                  {blogHighlights.map((q, index) => {
                      return (<BlogSec key={index} {...q}/>)
                  })}
              </div>
          </div>
    </div>
  )
}

export default BlogSection