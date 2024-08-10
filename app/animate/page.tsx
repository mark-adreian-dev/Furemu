'use client'

import { useState } from 'react'

const page = () => {
  const [isContentClicked, setIsContentClicked] = useState<boolean>(false)
  const handleClick = () => {
    setIsContentClicked(!isContentClicked)
  }
  return (
    <>
        <div className='w-full h-fit sticky top-0 z-[100]'>
            <div className={`loader-bar bg-accent h-1 ${isContentClicked ? "w-screen" : "w-0"} transition-[width] duration-[2000ms] ease-in-out`}></div>
        </div>
        <button className='btn bg-accent text-dark-blue hover:bg-white mt-10' onClick={handleClick}>Click me</button>
    </>
  )
}

export default page