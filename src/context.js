import { createContext, useContext, useEffect, useState } from "react"
import Country from "./Components/Country/Country"
import formattedCountries from "./js/getCountries"

const CountriesContext = createContext()

const getLocalStorageTheme = () => {
    let theme = "light"
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
    return theme
}

const CountriesProvider = ({ children }) => {
    const [theme, setTheme] = useState(getLocalStorageTheme())
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState({
        region: "",
        query: "",
    })

    const results = async () => {
        setLoading(true)
        try {
            const res = await formattedCountries()
            if (res instanceof Error) {
                setError(res.toString())
                return
            }
            if (res) {
                setCountries(res)
            }
            setLoading(false)
        } catch (err) {
            setError(err.toString())
            setLoading(false)
        }
    }

    useEffect(() => {
        results()
        if (countries.length > 0) {
            setFiltered(
                countries
                    .filter(
                        (country) =>
                            country.name.toLowerCase().includes(options.query) &&
                            country.region.includes(options.region)
                    ) // Based on the given query and the selected region filter the corresponding countries
                    .map((country, index) => {
                        return <Country country={country} key={index} />
                    })
            )
        }
    }, [countries, options.query, options.region])

    const changeTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
    }

    const handleOptions = (e) => {
        const { name, value } = e.target
        setOptions((options) => {
            return {
                ...options,
                [name]: value,
            }
        })
    }

    return (
        <CountriesContext.Provider
            value={{
                theme,
                changeTheme,
                loading,
                options,
                handleOptions,
                countries,
                filtered,
                error,
            }}
        >
            {children}
        </CountriesContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(CountriesContext)
}

export { CountriesContext, CountriesProvider, useGlobalContext }
