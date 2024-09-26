import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Badge.module.scss";

const Badge = ({ additionalStyles, text }) => {
    return (
        <span className={classNames(styles.badge, additionalStyles)}>
            {text}
        </span>
    );
};

Badge.propTypes = {
    additionalStyles: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default Badge;
