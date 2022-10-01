import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import './CountryDetailsPage.css'
import { UilArrowLeft } from '@iconscout/react-unicons' 

function CountryDetailsPage( { theme }) {

  const [country, setCountry] = useState()
  const {countryName} = useParams()

  useEffect(() => {
    const getCountry = async () => {
      try {

        if (countryName) {
          await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then(res => res.json())
          .then(data => setCountry(data))
        }
        else {
          console.log('countryName is empty!' + countryName)
        } 

      } catch (error) {
        console.log(error)
      }
      
    }

    getCountry()
    
  }, [])  
  
  return (
    
    <div className='countryDetails' data-theme = {theme}>
      
      <Link to='/' className='back-button'>
          <UilArrowLeft />Back
      </Link>

      { country !== undefined ? country.map((country, index) => {

        let currencies = []
        let languages = []
        let borders = []
        country.borders ? borders = [...country.borders] : borders = []

        for(const currency in country.currencies) {
          currencies.push(currency)
        }

        for(const language in country.languages) {
          languages.push(country.languages[language])
        }

        return (
          <div className='container' key = {index}>
            <img src={country.flags.svg} className='flag' alt ='flag'></img>
            

            <div className='list-items-container'>
              <h1>{country.name.common}</h1>

              <div className='list-container'>
                <ul className='list'>
                  <li><span className='span-bold'>Native Name: </span>{country.altSpellings[country.altSpellings.length - 1]}</li>
                  <li><span className='span-bold'>Population: </span>{country.population.toLocaleString()}</li>
                  <li><span className='span-bold'>Region: </span>{country.region}</li>
                  <li><span className='span-bold'>Sub Region: </span>{country.subregion}</li>
                  <li><span className='span-bold'>Capital: </span>{country.capital[0]}</li>
                </ul>
                
                <ul className='list'>
                  <li><span className='span-bold'>Top Level Domain: </span>{country.tld[0]}</li>
                  <li><span className='span-bold'>Currencies: </span>
                        {
                          currencies.length !== 0 ? 
                          currencies.map((c, index) => {
                            return <span key = {index}>{c}</span>
                          }) : <span>NO CURRENCIES FOUND</span>
                        }
                  </li>

                  <li><span className='span-bold'>Languages: </span>
                        {
                          languages.length !== 0 ?
                          languages.map((l, index) => {
                            return <span key = {index}>{l}</span>
                          }) : <span>NO LANGUAGES FOUND</span>
                        }
                  </li>

                </ul>
              </div>

              <div className='border-container'>
                <span className='span-bold'>Border Countries: </span>
                {
                  borders.length !== 0 ?
                  borders.map((b, index) => {
                    return <span key = {index} className='border'>{b} </span>
                  }) : 'NO LAND BORDERS'
                }
              </div>
            </div>
          </div>
        )
      }) : ''}
    </div>
  )
}

export default CountryDetailsPage