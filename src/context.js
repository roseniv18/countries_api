import { createContext, useContext, useState } from "react"

const CountriesContext = createContext()

const CountriesProvider = ({children}) => { 
    const [theme, setTheme] = useState("light")

    return <CountriesContext.Provider value={{
        
    }}>
        {children}
    </CountriesContext.Provider>
}

const useGlobalContext = () => {
    return useContext(CountriesContext)
}

export {CountriesContext, CountriesProvider, useGlobalContext}