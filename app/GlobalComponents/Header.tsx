import React from 'react'
import IconButton from './IconButton'

const Header = () => {
  return (
    <header className='absolute top-0 z-40 p-6 w-full flex justify-between items-center'>
      <h1 className='leading-7 text-nav-logo-text text-white font-black'>Heroku</h1>
      <IconButton iconPath='/icons/hamburger_menu.svg'/>
    </header>
  )
}

export default Header