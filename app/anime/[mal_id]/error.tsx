'use client'

import Header from '@/app/Components/Header'
import React from 'react'
 
const Error = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    // === "TypeError" ? "Failed to fetch resource" : "Something went wrong!"
    <>
      <Header /> 
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
          <h6 className='text-center text-white text-6xl font-black mb-6 tablet:text-8xl desktop:text-9xl desktop:leading-[8rem]'>Ops Sorry!</h6>
          <p className='text-center text-lg text-accent w-80 font-normal mb-12 desktop:text-xl desktop:leading-7'>Rate limit exceed, Please try refreshing the page</p>
          <div className='buttons'>    
            <a href="/">
              <button className='btn bg-transparent text-accent border-accent hover:text-darker-blue hover:bg-accent mr-4'>
                Homepage
              </button>
            </a>    
            <button onClick={() => location.reload()} className='btn bg-accent border-accent text-darker-blue hover:bg-white'>Refresh</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error