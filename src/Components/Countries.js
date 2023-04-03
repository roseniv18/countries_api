import { React, useState, useEffect } from "react"
import Country from "./Country"
import "./Countries.css"
import { Link } from "react-router-dom"
import { UilSearch } from "@iconscout/react-unicons"
import { useGlobalContext } from "../context"

function Countries() {
    const { theme, loading, handleOptions, options, countries } = useGlobalContext()
    const { region, query } = options

    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        if (!countries) return

        setFiltered(
            countries
                .filter(
                    (country) =>
                        country.name.toLowerCase().includes(query) &&
                        country.region.includes(region)
                ) // Based on the given query and the selected region filter the corresponding countries
                .map((country, index) => {
                    return (
                        <Link
                            to={`/countries_api/${encodeURI(country.name)}`}
                            className="link"
                            key={index}
                        >
                            <Country country={country} />
                        </Link>
                    )
                })
        )
    }, [countries, query, region])

    return (
        <section id="main" data-theme={theme}>
            <div className="search-div">
                <div className="input-div">
                    <input
                        placeholder="Search for a country..."
                        name="query"
                        value={query}
                        onChange={(e) => handleOptions(e)}
                    />
                    <UilSearch className="search-icon" />
                </div>

                <select onChange={(e) => handleOptions(e)} name="region" value={region}>
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <div className="countries">
                {filtered.length !== 0 && filtered.map((f) => f)}
            </div>
        </section>
    )
}

export default Countries
