import { useGlobalContext } from "../../context"
import { UilMoon, UilSun } from "@iconscout/react-unicons"

const ThemeBtn = () => {
    const { theme, changeTheme } = useGlobalContext()

    const icon =
        theme === "light" ? (
            <UilSun onClick={changeTheme} data-testid="theme-btn" />
        ) : (
            <UilMoon onClick={changeTheme} data-testid="theme-btn" />
        )

    return (
        <div className="theme-switcher">
            {icon}
            <span className="theme-switcher-text" onClick={changeTheme}>
                {theme === "dark" ? "Light" : "Dark"} Mode
            </span>
        </div>
    )
}

export default ThemeBtn
