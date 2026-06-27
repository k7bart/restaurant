import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Logo.module.scss";

const Logo = ({ additionalStyles }) => {
    return (
        <Link
            className={classNames(styles.logo, additionalStyles, "logo")}
            data-testid="logo"
            to="/"
        >
            b.art
        </Link>
    );
};

Logo.propTypes = {
    additionalStyles: PropTypes.string,
};

export default Logo;
