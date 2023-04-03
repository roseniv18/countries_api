import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { CountriesProvider } from "../../../context"
import Header from "../Header"

const MockHeader = () => {
    return (
        <BrowserRouter>
            <CountriesProvider>
                <Header />
            </CountriesProvider>
        </BrowserRouter>
    )
}

describe("Header", () => {
    it("renders header title", () => {
        render(<MockHeader />)
        const headerTitle = screen.getByText(/where in the world?/i)
        expect(headerTitle).toBeInTheDocument()
    })
})
