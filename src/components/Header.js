import { PropTypes } from "prop-types";

const Header = ({title}) => {
    return (
        <header>
            <h2>{title}</h2>
        </header>
    )
}

Header.defaultProps = {
    title: "Transport NSW - Incident and Alert",
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header