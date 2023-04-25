import "./Countries.css"
import { UilSearch } from "@iconscout/react-unicons"
import { useGlobalContext } from "../../context"
import Error from "../Error/Error"

function Countries() {
    const { theme, handleOptions, options, error, filtered } = useGlobalContext()
    const { region, query } = options

    if (error) {
        return (
            <section id="main" data-theme={theme}>
                <Error />
            </section>
        )
    }

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
