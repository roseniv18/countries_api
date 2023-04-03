import { render, screen, fireEvent } from "@testing-library/react"
import ThemeBtn from "../ThemeBtn"
import { CountriesProvider } from "../../../../context"

// MOCK LOCAL STORAGE
global.localStorage = {
    setItem(key, item) {
        this.state[key] = item
    },
    getItem(key) {
        return this.state[key]
    },
}

// Initial theme
global.localStorage.setItem("theme", "light")

const MockThemeBtn = () => {
    return (
        <CountriesProvider>
            <ThemeBtn />
        </CountriesProvider>
    )
}

describe("Theme Switcher", () => {
    it("renders theme btn on load", () => {
        render(<MockThemeBtn />)
        const themeBtn = screen.getByTestId(/theme-btn/i)
        expect(themeBtn).toBeInTheDocument()
    })

    it("body class should not be empty on click", () => {
        render(<MockThemeBtn />)
        const themeBtn = screen.getByTestId(/theme-btn/i)
        fireEvent.click(themeBtn)
        expect(document.body.classList).not.toBe("")
    })

    it("local storage theme should be not be empty on initial page load", () => {
        render(<MockThemeBtn />)
        const localStorageTheme = global.localStorage.getItem("theme")
        expect(localStorageTheme).toBeTruthy()
    })
})
