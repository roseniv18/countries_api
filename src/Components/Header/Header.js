import "./Header.css"
import { Link } from "react-router-dom"
import ThemeBtn from "./ThemeBtn/ThemeBtn"

function Header() {
    return (
        <header>
            <Link to="/countries_api" className="header-title">
                Where in the world?
            </Link>
            <ThemeBtn />
        </header>
    )
}

export default Header
