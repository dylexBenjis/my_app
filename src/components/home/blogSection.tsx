import React from 'react'
import { blogHighlights } from '../blog data/blogHighlights'
import Image from 'next/image'

import { formatDate, getBlogPosts } from '@/app/blog/utils'

const BlogSection = () => {

  let allBlogs = getBlogPosts()
    //@ts-ignore
    const BlogSec = (post) => {

        return (
            <div className='flex flex-col py-3 gap-4'>
                <div className='text-gray-400 border-l-2 pl-5'>{formatDate(post.metadata.publishedAt, false)}</div>
                <div className='flex gap-5'>
                    <div>
                                
                        <div className='text-lg'>{post.metadata.title}</div>
                        <div className='text-gray-400'>{post.metadata.summary}</div>
                        <div className='text-green-400 cursor-pointer'><a href={`/blog/${post.slug}`}>read more</a></div>
                            
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
                  {allBlogs
                    .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                    ) {
                        return -1
                    }
                    return 1
                    }).map((post) => {
                      return (<BlogSec key={post.slug} {...post}/>)
                  })}
              </div>
          </div>
    </div>
  )
}

export default BlogSection
