import React from 'react'
import './Header.css'
import { UilMoon } from '@iconscout/react-unicons'

function Header( {changeTheme, theme} ) {
  return (
    <header data-theme = {theme}>

        <h1 className='header__header-title'>Where in the world?</h1>

        <div className='header__theme-switcher'>

            <UilMoon />
            <span className='header__theme-switcher-text' onClick = {changeTheme}>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            
        </div>

    </header>
  )
}

export default Header