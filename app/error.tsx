'use client'

import Header from '@/app/GlobalComponents/Header'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const error = ({ error }: {error: Error, reset: ()=> void}) => {
 
  return (
    <>
      <Header />
      <div className='w-screen h-screen flex justify-center items-center'>
          <div className='flex justify-center items-center flex-col'>
              <p className='text-red-400 italic'>"{error.message}"</p>
              <h6 className='text-center text-9xl text-white leading-[8rem] font-black mb-6'>Ops Sorry!</h6>
   
              <p className='text-center w-80 text-accent leading-7 text-xl font-normal mb-12'>Something went wrong! Please try refreshing the page</p>
              

              <Link href="/" scroll={false}>
                <button className='btn bg-transparent text-accent border-accent hover:text-darker-blue  hover:bg-accent'>
                  Homepage
                </button>
              </Link> 
          </div>
      </div>
    </>
  )
}

export default error