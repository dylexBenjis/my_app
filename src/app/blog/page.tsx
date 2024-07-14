import BlogSection from '@/components/home/blogSection'
import React from 'react'
import styles from '@/app/page.module.css'


export const metadata = {
  title: 'Blog',
  description: 'I try to document everything.',
}


const Page = () => {
    return (
                <div className='py-[5rem]'>
      <div className={styles.container } style={{display:'flex', justifyContent:'center'}}>
                <BlogSection />
      </div>
    </div>
  )
}

export default Page