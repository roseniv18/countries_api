const getCountries = async () => {
    const URL = 'https://restcountries.com/v3.1/all'

    const countries = await fetch(URL).then(res => res.json())
    return countries
}

const formattedCountries = async () => {
   const formattedCountries = await getCountries().then(data => data.map(country => {
    return (
        {
            flag: country.flags.svg,
            name: country.name.common,
            native_name: country.altSpellings[country.altSpellings.length - 1],
            population: country.population.toLocaleString(),
            region: country.region,
            subregion: country.subregion,
            capital: country.capital ? country.capital[0] : '',
            tld: country.tld ? country.tld[0] : '',    //Top Level Domain
            currencies: country.currencies,
            languages: country.languages,
            borders: country.borders,
            code: country.cca3
        }
    )
    
   }))

   return formattedCountries
}

formattedCountries()

export default formattedCountries