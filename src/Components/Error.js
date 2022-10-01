import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
import './CountryDetailsPage.css'

function Error() {
  return (
    <div>
        <h1>404 Not Found.</h1>
        <Link to='/countries_api' className='back-button'>Back Home</Link>
    </div>
    
  )
}

export default Error