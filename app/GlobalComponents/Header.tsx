import React from 'react'
import Link from 'next/link'
import IconButton from './IconButton'

const menu = [
  {
    menuTitle: "Home",
    destination: "/"
  },

  {
    menuTitle: "About",
    destination: "/"
  },

  {
    menuTitle: "Anime",
    destination: "/"
  },

  {
    menuTitle: "manga",
    destination: "/"
  },
]

const Header = () => {
  return (
    <header className='absolute top-0 z-40 p-6 w-full flex justify-between items-center tablet:p-8 desktop:px-16 desktop:py-8'>
      <h1 className='leading-7 text-nav-logo-text text-white font-black'>Heroku</h1>
      <nav className='hidden tablet:block bg-dark-blue px-1 py-[0.375rem] rounded-xl' style={{background: 'rgba(15, 23, 42, 0.2)'}}>
        <ul className='flex'>
          
          {
            menu.map(item =>  
            <li key={item.menuTitle}>
              <Link href={item.destination}>
                <p className='text-white text-sm font-semibold py-4 px-[0.875rem]'>{item.menuTitle}</p>
              </Link>
            </li>
            )
          }
         
         
     
          
          
        </ul>
      </nav>
      <IconButton iconPath='/icons/hamburger_menu.svg' className='tablet:hidden'/>
      <IconButton iconPath='/icons/search_icon.svg' className='hidden desktop:block'/>
    </header>
  )
}

export default Header