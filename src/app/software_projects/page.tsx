import React, { useEffect, useState } from 'react'
import { client } from '../../components/sanityclient';
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';



const Page = async () => {

  // Fetch content with GROQ
  async function getContent() {
    const queryContent = `*[_type == "project"]{
  title,
  description,
  repoUrl,
  projectUrl,
  image {
    asset->{url},
  }
}`

    const content = await client.fetch(queryContent)
      .then(content => {
        console.log(content, content[1].image.asset.url);

  
        
        return content
      })
    return content
  }

  // Log content to console
//@ts-ignore
let content: Array = await getContent()

  const ProjectContainer = (data: any) => {
    return (
          <>
            <div className='text-lg'>{data?.title}</div>
        <div className='relative h-[150px] w-full bg-gray-500'>
          <Image src={data.image?.asset?.url} alt='image' fill={true} />
        </div>
        <div className='py-3 px-2'>{data?.description}</div>
          <div className='flex absolute bottom-0 left-0 px-2 pb-2 gap-5 h-fit w-full justify-end text-lg'>
          <div className=''><Link href={data?.repoUrl}><FaGithub/></Link></div>
            <div className=''><Link href={data?.projectUrl}><FaExternalLinkAlt /></Link></div>
          </div>

          </>
        )
  }
// Insert the return component calling `getContent()` below
  return (
    <div>
      <div className='relative h-[100px] sm:h-[150px] w-full bg-fixed' style={{ backgroundImage: 'url(/software.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', margin: 0 }}>
         <div className='absolute inset-0 backdrop-opacity-20 bg-gradient-to-b  from-transparent from-5% via-transparent via-75% dark:via-85%  to-[rgba(12,12,31,0.9)] dark:to-[#3c3a5270] to-95% dark:to-95%'>
          </div>
        </div>
    <div className='py-[5rem]'>
      <div className={styles.container}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max'>      {
          content.map((data: any, index: number) => {
            return (
              <>
                <div className='h-auto relative p-2 shadow-md border-solid border-[1px] overflow-hidden border-gray-300 dark:border-gray-700 rounded-lg'>
                  <ProjectContainer key={index} {...data} />
                </div>
              </>
        )
      })
        }
          </div>

        </div>
      </div>
      </div>

  )
}

export default Page