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
              <h6 className='text-center text-white text-6xl font-black mb-6 tablet:text-8xl desktop:text-9xl desktop:leading-[8rem]'>Ops Sorry!</h6>
              <p className='text-center text-lg text-accent w-80 font-normal mb-12 desktop:text-xl desktop:leading-7'>Something went wrong! Please try refreshing the page</p>
              

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