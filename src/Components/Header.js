import React from 'react'
import './Header.css'
import { UilMoon, UilSun } from '@iconscout/react-unicons'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

function Header() {
  const {theme, changeTheme} = useGlobalContext()

  const icon = theme === "light" ? <UilSun onClick={changeTheme}/> : <UilMoon onClick={changeTheme}/>

  return (
    <header data-theme={theme}>
      <Link to="/countries_api" className='header-title'>Where in the world?</Link>
      <div className='theme-switcher'>
          {icon}
          <span className='theme-switcher-text' onClick={changeTheme}>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>    
      </div>
    </header>
  )
}

export default Header