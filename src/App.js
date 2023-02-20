import './App.css'
import Header from './Components/Header'
import Countries from './Components/Countries'
import Error from './Components/Error'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CountryDetailsPage from './Components/CountryDetailsPage'
import { useState } from 'react'
import { useGlobalContext } from './context'

function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  

  return (
    <Router>
      <Header changeTheme = {changeTheme} theme = {theme}/>
      <Routes>
        <Route path="/countries_api" element = {<Countries theme = {theme}/>}></Route>
        <Route path="/countries_api/:countryName" element = {<CountryDetailsPage theme = {theme} />}></Route>
        <Route path="*" element = {<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
