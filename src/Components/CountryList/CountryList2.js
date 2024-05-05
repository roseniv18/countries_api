import CountryListItem from "../CountryListItem/CountryListItem"

const CountryList2 = ({ country, languages, currencies }) => {
    return (
        <ul className="list">
            <CountryListItem title={"Top Level Domain"} content={country.tld[0]} />
            <CountryListItem
                title={"Currencies"}
                content={
                    currencies.length !== 0 ? (
                        currencies.map((c) => {
                            return <span key={c}>{c}</span>
                        })
                    ) : (
                        <span>NO CURRENCIES FOUND</span>
                    )
                }
            />

            <CountryListItem
                title={"Languages"}
                content={
                    languages.length !== 0 ? (
                        languages.map((l) => {
                            return <span key={l}>{l}</span>
                        })
                    ) : (
                        <span>NO LANGUAGES FOUND</span>
                    )
                }
            />
        </ul>
    )
}

export default CountryList2
