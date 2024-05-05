import CountryListItem from "../CountryListItem/CountryListItem"

const CountryList1 = ({ country, languages, currencies }) => {
    return (
        <ul className="list">
            <CountryListItem
                title={"Native Name"}
                content={country.altSpellings[country.altSpellings.length - 1]}
            />
            <CountryListItem
                title={"Population"}
                content={country.population.toLocaleString()}
            />
            <CountryListItem title={"Region"} content={country.region} />
            <CountryListItem title={"Sub Region"} content={country.subregion} />
            <CountryListItem title={"Capital"} content={country.capital[0]} />
        </ul>
    )
}

export default CountryList1
