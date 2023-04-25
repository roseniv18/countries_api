import React from "react"
import "./ErrorPage.css"
import { Link } from "react-router-dom"
import "../CountryDetailsPage/CountryDetailsPage.css"
import { useGlobalContext } from "../../context"

function Error() {
    const { theme } = useGlobalContext()

    return (
        <div className="error-page" data-theme={theme}>
            <h1>Oops! The page you requested was not found.</h1>
            <Link to="/countries_api" className="back-button">
                Back Home
            </Link>
        </div>
    )
}

export default Error
