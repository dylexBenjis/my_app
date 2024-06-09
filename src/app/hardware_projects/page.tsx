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
      <div className='relative h-[100px] sm:h-[200px] w-full bg-fixed' style={{ backgroundImage: 'url(/hardware.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', margin: 0 }}>
         <div className='absolute inset-0 backdrop-opacity-20 bg-gradient-to-b  from-transparent from-5% via-transparent via-75% dark:via-85%  to-[rgba(12,12,31,0.9)] dark:to-[#3c3a5270] to-95% dark:to-95%'>
          </div>
        </div>
    <div className='py-[5rem] h-[1600px]'>
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