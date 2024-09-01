import React from 'react'

const HeroIntroduction = () => {
  return (
      <div className='hero'>
          <div className="max-w-4xl">
              <h1 className="text-3xl py-6 font-bold tracking-tight sm:text-5xl sm:leading-tight">
            
              Sustainable Renewable Energy Engineering, Computer Networking, IoT, Telecommunication, Software deveolpment, Youtube.
              
              </h1>
              <p className="pb-6 text-base sm:text-lg text-gray-900 dark:text-gray-300">
                  I’m benji, and i am based in Lagos Nigeria. Engineering and Computer have been things i always do.
              </p>
              <div className='pt-1 pb-3'>
                  <a href='mailto:benjichukwudile@gmail.com' target='_blank'>
                      <button className='rounded-xl bg-gray-600/30 dark:bg-gray-600 py-3 w-fit px-4 cursor-pointer hover:bg-gray-700/50 dark:hover:bg-gray-700'>Contact me</button>
                  </a>
              </div>
          </div>
          </div>
  )
}

export default HeroIntroduction
