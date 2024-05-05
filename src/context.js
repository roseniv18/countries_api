import { createContext, useContext, useEffect, useState } from "react"
import Country from "./Components/Country/Country"
import formattedCountries from "./js/getCountries"

const CountriesContext = createContext()

const getLocalStorageTheme = () => {
    let theme = localStorage.getItem("theme")
    return theme ? theme : "light"
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
        // Fetch countries
        ;(async () => {
            setLoading(true)
            try {
                const res = await formattedCountries()
                if (res) {
                    setCountries(res)
                }
                setLoading(false)
            } catch (err) {
                setError(err.toString())
                setLoading(false)
            }
        })()

        if (countries.length > 0) {
            const newCountries = countries
                .filter(
                    (country) =>
                        country.name.toLowerCase().includes(options.query) &&
                        country.region.includes(options.region)
                ) // Based on the given query and the selected region filter the corresponding countries
                .map((country) => {
                    return <Country country={country} key={country.name} />
                })
            setFiltered(newCountries)
        }
    }, [countries, options.query, options.region])

    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    const handleOptions = (e) => {
        const { name, value } = e.target
        setOptions((prevOptions) => {
            return {
                ...prevOptions,
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
