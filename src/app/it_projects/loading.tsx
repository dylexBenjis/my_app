import React from 'react'
import { FaCircle } from 'react-icons/fa'
import {ImSpinner2} from 'react-icons/im'

const loading = () => {
  return (
    <div className='flex h-[100vh] w-full justify-center items-center'>
          {/* <div className='absolute text-5xl animate-ping'><FaCircle/></div>
          <div className='relative text-3xl'><FaCircle /></div> */}
          <div className='flex gap-4 justify-center items-center'><ImSpinner2 className='text-5xl animate-spin'/><div className='text-lg'>Loading...</div></div>

      </div>
  )
}

export default loading