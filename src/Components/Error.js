import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>404 Not Found.</h1>
        <Link to='/'>Back Home</Link>
    </div>
    
  )
}

export default Error