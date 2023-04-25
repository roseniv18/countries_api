import "./App.css"
import Header from "./Components/Header/Header"
import Countries from "./Components/Countries/Countries"
import CountryDetailsPage from "./pages/CountryDetailsPage/CountryDetailsPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "./context"

function App() {
    const { theme } = useGlobalContext()

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <Router>
            <Header theme={theme} />
            <Routes>
                <Route path="/countries_api" element={<Countries />}></Route>
                <Route
                    path="/countries_api/:countryName"
                    element={<CountryDetailsPage />}
                ></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    )
}

export default App
