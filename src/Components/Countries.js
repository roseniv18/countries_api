import {React, useState, useEffect} from 'react'
import formattedCountries from '../js/getCountries'
import Country from './Country'
import './Countries.css'
import { Link } from 'react-router-dom'
import { UilSearch } from '@iconscout/react-unicons'
import { useGlobalContext } from '../context'

function Countries() {
  const {theme} = useGlobalContext()

  const [countries, setCountries] = useState()
  
  const [filtered, setFiltered] = useState()
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')

  const handleRegionChange = (e) => {
    setRegion(e.target.value)
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const results = async () => {
      await formattedCountries().then(data => setCountries(data))
    }

    results()
  }, [query, region])

  useEffect(() => {
    
    if(countries === undefined) return 

    if(countries !== undefined) {
      setFiltered(countries
                    .filter(country => (country.name.toLowerCase().includes(query) && country.region.includes(region))) // Based on the given query and the selected region filter the corresponding countries
                    .map((country, index) => {
                      
                      return (
                        <Link to = {`/countries_api/${encodeURI(country.name)}`} className='link' key = {index}>
                          <Country country = {country} />
                        </Link>  
                      )
                  }))
      
    }

    return
    
  }, [countries, query, region])

  return (
    <section id="main" data-theme={theme}>
      <div className='search-div' >
        <div className='input-div'>
          <input
            placeholder="Search for a country..."
            name="country"
            value={query}
            onChange={(e) => handleInputChange(e)}
          />
          <UilSearch className='search-icon' />
        </div>
        

        <select onChange={(e) => handleRegionChange(e)} value={region}>
            <option value=''>Filter By Region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
      </div>

      <div className='countries'>
        
          {filtered !== undefined ? filtered.map(f => f) : ''}
            
      </div>
    </section>
  )
}

export default Countries