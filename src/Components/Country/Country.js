import { Link } from "react-router-dom"

const Country = ({ country }) => {
    const { flag, name, population, region, capital } = country
    return (
        <Link to={`/countries_api/${encodeURI(country.name)}`} className="link">
            <div className="country" data-theme="light" data-testid="countryDiv">
                <img src={flag} alt={name} className="flag" />

                <div className="info">
                    <h1>{name}</h1>
                    <ul>
                        <li>
                            <span className="info__tag">Population: </span> {population}
                        </li>
                        <li>
                            <span className="info__tag">Region: </span> {region}
                        </li>
                        <li>
                            <span className="info__tag">Capital: </span> {capital}
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default Country
