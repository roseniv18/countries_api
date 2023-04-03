const getCountry = async (countryName) => {
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURI(countryName)}?fullText=true`
        )
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getCountry
