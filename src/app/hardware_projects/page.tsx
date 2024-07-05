import React, { useEffect, useState } from 'react'
import { client } from '@/components/sanityclient';
import styles from '@/app/page.module.css'
import Image from 'next/image';



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
      .then(content => { console.log(content); return content})
    return content
  }

  // Log content to console
//@ts-ignore
let content: Array = await getContent()

  const ProjectContainer = (data:any) => {
    return (
          <div>
            <div>{data.title}</div>
        <div className='h-[150px] w-full bg-gray-500'></div>
        <div className='border-2 border-solid border-gray-500 py-3 px-2'>
            <div className=''>{data.projectUrl}</div>
            <div className=''>{data.projectUrl}</div>
          <div className=''>{data.projectUrl}</div>
        </div>

          </div>
        )
  }
// Insert the return component calling `getContent()` below
  return (
    <>
      <div className={styles.container}><div className='fixed top-16 sm:top-24 z-[2] font-zenDots border-l-2 border-gray-400 pl-5 text-white font-bold [text-shadow:_-1px_-1px_0_rgb(7_9_4),_-1px_1px_0_rgb(7_9_9),_-1px_1px_0_rgb(7_9_9),_1px_1px_0_rgb(7_9_9)]'>HARDWARE PROJECTS</div></div>       

      <div className='relative h-[100px] sm:h-[150px] w-full bg-fixed overflow-hidden' style={{ backgroundImage: 'url(/hardware.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', margin: 0 }}>

      </div>
      <div className='flex relative z-[3] pt-[2.5rem] sm:pt-[3rem] pb-[5rem] bg-gray-200 dark:bg-[#04050c]' style={{boxShadow:'0px -5px 5px 0px rgba(0, 0, 0, 0.8)'}}>
      <div className={styles.container}>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 '>      {
          content.map((data: any, index: number) => {
            return (
              <>
                <div className='h-auto p-2 border-2 border-solid border-gray-400'>
                  <ProjectContainer key={index} {...data} />
                </div>
              </>
        )
      })
        }
          </div> */}
          nothing found

        </div>
      </div>
      </>

  )
}

export default Page