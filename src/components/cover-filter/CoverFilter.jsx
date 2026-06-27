import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./CoverFilter.module.scss";

const CoverFilter = ({ additionalStyles }) => {
    return <div className={classNames(additionalStyles, styles.filter)}></div>;
};

CoverFilter.propTypes = {
    additionalStyles: PropTypes.string,
};

export default CoverFilter;
