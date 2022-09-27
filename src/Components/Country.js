import React from 'react'

function Country({ country }) {
    
    const {flag, name, population, region, capital} = country

    return (
        <div className='country'>
            <img src={flag} alt='' className='flag'/>

            <div className='info'>
                <h1>{name}</h1>
                <ul>
                    <li><span className='info__tag'>Population: </span> {population}</li>
                    <li><span className='info__tag'>Region: </span> {region}</li>
                    <li><span className='info__tag'>Capital: </span> {capital}</li>
                </ul>
            </div>
                
        </div>
    )
    }

export default Country