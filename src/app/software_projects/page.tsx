import React, { useEffect, useState } from 'react'
import { client } from './sanityclient';



const Page = async () => {

  // Fetch content with GROQ
  async function getContent() {
    const queryContent = `*[_type == "project"]{
  title,
  description,
  repoUrl,
  projectUrl,
  image {
    ...,
    asset->
  }
}`


    const content = await client.fetch(queryContent)
      .then(content => { console.log(content); return content})
    return content
  }

  // Log content to console
//@ts-ignore
let content: Array = await getContent()

// Insert the return component calling `getContent()` below
  return (
  <>
      {
      content.map((data: any, index: number) => {
        return (
          <div key={index} className='pt-[10rem]'>{data.projectUrl}</div>
        )
      })
      }
  </>
  )
}

export default Page