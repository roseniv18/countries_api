import { useGlobalContext } from "../../context"

const Error = () => {
    const { error } = useGlobalContext()
    return <h2>{error}</h2>
}

export default Error
