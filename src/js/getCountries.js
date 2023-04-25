const getCountries = async () => {
    const URL = "https://restcountries.com/v3.1/all"

    try {
        const res = await fetch(URL)
        const countries = await res.json()
        if (countries.length > 0) {
            return countries
        }
    } catch (err) {
        return err
    }
}

const formattedCountries = async () => {
    try {
        const countries = await getCountries()
        if (countries) {
            return countries.map((country) => ({
                flag: country.flags.svg,
                name: country.name.common,
                native_name: country.altSpellings[country.altSpellings.length - 1],
                population: country.population.toLocaleString(),
                region: country.region,
                subregion: country.subregion,
                capital: country.capital ? country.capital[0] : "",
                tld: country.tld ? country.tld[0] : "", //Top Level Domain
                currencies: country.currencies,
                languages: country.languages,
                borders: country.borders,
                code: country.cca3,
            }))
        } else {
            throw new Error("Could not fetch countries!")
        }
    } catch (err) {
        return err
    }
}

export default formattedCountries
