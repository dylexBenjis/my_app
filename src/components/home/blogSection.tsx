import React from 'react'
import Image from 'next/image'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import { FaFaceSmile, FaRegFaceSmile } from 'react-icons/fa6'

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
                            <Link href={`/blog/${post.slug}`} prefetch={true}>{post.metadata.title}</Link>
                        </div>
                        <div className='text-gray-400'>
                            {post.metadata.summary}
                        </div>
                        <div className='text-blue-700 dark:text-green-400 hover:text-orange-500 cursor-pointer pt-3 w-fit'>
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
              <span className='flex-wrap items-center'># I document my experiences and anything i find fascinating. <span className='inline-flex h-[18px] w-[18px] bg-black  items-center justify-center rounded-full'><FaFaceSmile className='text-yellow-500 rounded-sm text-base'/></span></span>
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
