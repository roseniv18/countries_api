import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "./CountryDetailsPage.css"
import { UilArrowLeft } from "@iconscout/react-unicons"
import { useGlobalContext } from "../../context"
import getCountry from "../../js/getCountry"
import CountryListItem from "../../Components/CountryListItem/CountryListItem"
import CountryList1 from "../../Components/CountryList/CountryList1"
import CountryList2 from "../../Components/CountryList/CountryList2"

function CountryDetailsPage() {
    const { theme, countries } = useGlobalContext()

    const [country, setCountry] = useState()
    const { countryName } = useParams()

    useEffect(() => {
        getCountry(countryName).then((data) => setCountry(data))
    }, [])

    const handleBorderClick = (borderCode) => {
        const newCountry = countries.find((el) => el.code === borderCode)
        const newCountryName = newCountry.name
        getCountry(newCountryName).then((data) => setCountry(data))
    }

    return (
        <div className="countryDetails" data-theme={theme}>
            <Link to="/countries_api" className="back-button">
                <UilArrowLeft />
                Back
            </Link>

            {country ? (
                country.map((country) => {
                    let borders = []
                    country.borders ? (borders = [...country.borders]) : (borders = [])

                    // Loop over currencies in country object and push each one in array.
                    let currencies = []
                    for (const currency in country.currencies) {
                        currencies.push(currency)
                    }

                    // Loop over languages in country object and push each one in array.
                    let languages = []
                    for (const language in country.languages) {
                        languages.push(country.languages[language])
                    }

                    return (
                        <div className="container" key={country.name}>
                            <img
                                src={country.flags.svg}
                                className="flag"
                                alt="flag"
                            ></img>

                            <div className="list-items-container">
                                <h1>{country.name.common}</h1>

                                <div className="list-container">
                                    <CountryList1
                                        country={country}
                                        languages={languages}
                                        currencies={currencies}
                                    />
                                    <CountryList2
                                        country={country}
                                        languages={languages}
                                        currencies={currencies}
                                    />
                                </div>

                                <div className="border-container">
                                    <span className="span-bold">Border Countries: </span>
                                    {borders.length !== 0
                                        ? borders.map((b, index) => {
                                              return (
                                                  <span
                                                      key={index}
                                                      className="border"
                                                      onClick={() => handleBorderClick(b)}
                                                  >
                                                      {b}{" "}
                                                  </span>
                                              )
                                          })
                                        : "NO LAND BORDERS"}
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                <></>
            )}
        </div>
    )
}

export default CountryDetailsPage
