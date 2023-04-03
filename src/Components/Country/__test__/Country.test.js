import { render, screen, fireEvent } from "@testing-library/react"
import Country from "../Country"
import { BrowserRouter } from "react-router-dom"

const countryObj = {
    flag: "https://flagcdn.com/pr.svg",
    name: "Puerto Rico",
    population: "3,194,034",
    region: "Americas",
    capital: "San Juan",
}

const MockCountry = ({ country }) => {
    return (
        <BrowserRouter>
            <Country country={country} />
        </BrowserRouter>
    )
}

describe("Country Card Component", () => {
    it("renders country div on first page load", () => {
        render(<MockCountry country={countryObj} />)
        const countryDiv = screen.getByTestId(/countryDiv/)
        expect(countryDiv).toBeInTheDocument()
    })

    it("renders image of the flag", () => {
        render(<MockCountry country={countryObj} />)
        const countryFlag = screen.getByAltText(countryObj.name)
        expect(countryFlag).toBeInTheDocument()
    })

    it("renders country name", () => {
        render(<MockCountry country={countryObj} />)
        const countryName = screen.getByRole("heading", { name: countryObj.name })
        expect(countryName).toBeInTheDocument()
    })
})
