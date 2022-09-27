import React from 'react'
import './Header.css'
import { UilMoon } from '@iconscout/react-unicons'

function Header() {
  return (
    <header>

        <h1 className='header__header-title'>Where in the world?</h1>

        <div className='header__theme-switcher'>

            <UilMoon />
            <span className='header__theme-switcher-text'>Dark Mode</span>
            
        </div>

    </header>
  )
}

export default Header