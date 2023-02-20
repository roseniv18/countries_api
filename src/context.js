import { createContext, useContext, useState } from "react"

const CountriesContext = createContext()

const CountriesProvider = ({children}) => { 
    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        setTheme(theme => theme === "light" ? "dark" : "light")
    }

    return <CountriesContext.Provider value={{
        theme,
        changeTheme
    }}>
        {children}
    </CountriesContext.Provider>
}

const useGlobalContext = () => {
    return useContext(CountriesContext)
}

export {CountriesContext, CountriesProvider, useGlobalContext}