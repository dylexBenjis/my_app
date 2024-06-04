import React from 'react'
import Image from 'next/image'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'

const BlogSection = () => {

  let allBlogs = getBlogPosts()
    //@ts-ignore
    const BlogSec = (post) => {

        return (
            <div className='flex flex-col py-3 gap-4' >
                <div className='text-gray-400 border-gray-400 border-l-2 pl-5'>{formatDate(post.metadata.publishedAt, false)}</div>
                <div className='grid grid-cols-1 lg:grid-cols-[67.5%_30%] justify-between'>
                    <div>         
                        <div className='text-lg'>
                            {post.metadata.title}
                        </div>
                        <div className='text-gray-400'>
                            {post.metadata.summary}
                        </div>
                        <div className='text-green-400 hover:text-orange-500 cursor-pointer pt-3 w-fit'>
                            <Link href={`/blog/${post.slug}`} prefetch={true}>read post</Link>
                        </div>
                    </div>
                    <div className='hidden lg:flex relative h-full w-full shadow-md rounded-r-3xl overflow-hidden bg-gray-100'>
                        <Image src={post.metadata.image} alt='' fill={true}/>
                    </div>
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
