import React from 'react'
import styles from '@/app/page.module.css'

const Footer = () => {
  return (
      <div className={styles.container}>
          <hr className='bg-gray-600/[1] border-none h-[1px]'/>
          <div className='flex justify-center items-center text-gray-600 h-[40px]'>&#169; dylexBenji. All rights reserved.</div>
    </div>
  )
}

export default Footer