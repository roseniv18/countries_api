import { createContext, useContext, useEffect, useState } from "react"
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
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState({
        region: "",
        query: "",
    })

    const results = async () => {
        setLoading(true)
        try {
            const res = await formattedCountries()
            setCountries(res)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        results()
    }, [options.query, options.region])

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
