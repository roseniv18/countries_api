import PropTypes from "prop-types"

const CountryListItem = ({ title, content }) => {
    return (
        <li>
            <span className="span-bold">{title}: </span>
            {content}
        </li>
    )
}

CountryListItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default CountryListItem
