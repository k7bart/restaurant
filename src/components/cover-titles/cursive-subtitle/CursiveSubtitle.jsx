import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./CursiveSubtitle.module.scss";

const CursiveSubtitle = ({ additionalStyles, text }) => {
    return (
        <h2 className={classNames(styles.cursiveSubtitle, additionalStyles)}>
            {text}
        </h2>
    );
};

CursiveSubtitle.propTypes = {
    additionalStyles: PropTypes.string,
    text: PropTypes.string.isRequired,
};

CursiveSubtitle.defaultProps = {
    additionalStyles: undefined,
};

export default CursiveSubtitle;
