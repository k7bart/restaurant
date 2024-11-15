import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Logo.module.scss";

const Logo = ({ additionalStyles }) => {
    return (
        <Link
            to="/"
            className={classNames(styles.logo, additionalStyles, "logo")}
        >
            b.art
        </Link>
    );
};

Logo.propTypes = {
    additionalStyles: PropTypes.string,
};

export default Logo;
