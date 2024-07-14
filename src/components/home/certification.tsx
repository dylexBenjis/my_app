import React from 'react'
import { client } from '../../components/sanityclient';
import Image from 'next/image';
import Link from 'next/link';


async function Certification() {

    type sanityQueriedContent = {
        name: string,
        issued_on: string,
        expired_on: string,
        expired: string,
        cert_external_link: string,
        certificationImage: {
            asset: {
                url: string,
            },
        },
    } 

    // Fetch content with GROQ
   async function getContent() {
    const queryContent = `*[_type == "featured_certification"]{
                            name,
                            issued_on,
                            expired_on,
                            expired,
                            cert_external_link,
                            certificationImage {
                                asset->{url},
                            }
                        }`

    const queried_content = await client.fetch(queryContent)
      .then(queried_content => {
        console.log(queried_content, queried_content[0].certificationImage.asset.url, queried_content[0].name);

  
        
        return queried_content
      })
       return queried_content;
  }

  // Log content to console
    let content: sanityQueriedContent[] = await getContent()
    
    const ProjectContainer = (data: sanityQueriedContent) => {

        const DataExpired = () => {
            if (data?.expired === 'false') {
                return (
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                )
            }
        };
        
    return (
          <div className='flex flex-col'>
            <div className='text-sm text-center mt-2'>{data?.name}</div>
        <div className='relative h-[150px] w-full bg-gray-900/[0.2] my-2'>
                <Image src={data.certificationImage?.asset?.url} alt='image' fill objectFit='contain'/>
        </div>
        <div className='flex justify-between'>
            <div className='text-sm'>issued: {data?.issued_on}</div>
            <div className='text-sm'>expires: {data?.expired_on}</div>

        </div>
          <div className='flex bottom-0 left-0 px-2 gap-2 h-auto w-full justify-end text-lg'>
            <div className='py-2'><DataExpired/></div>
            <div className=''><Link href={data?.cert_external_link}>link</Link></div>
          </div>
        </div>
        )
    }
    
   return (
    <div className='py-10 mt-5'>
        
          <div className='px-0 sm:px-[5rem] lg:px-0 gap-5'>
              <div className='flex flex-col items-center p-4 gap-4 w-full h-full'>
                  <div className='flex justify-center text-center text-2xl py-2'>Certifications</div>
                   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max'>
                       {
                        content.map((data: sanityQueriedContent, index: number) => {
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

export default Certification