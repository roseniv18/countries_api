import { createContext, useContext, useState } from "react"

const CountriesContext = createContext()

const getLocalStorageTheme = () => {
    let theme = "light"
    if(localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
    return theme
}

const CountriesProvider = ({children}) => { 
    const [theme, setTheme] = useState(getLocalStorageTheme())

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