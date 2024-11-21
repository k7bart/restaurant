import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Row.module.scss";

const Row = ({ additionalStyles, children, onClick }) => {
    return (
        <div
            className={classNames(styles.row, additionalStyles)}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

Row.propTypes = {
    additionalStyles: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

Row.defaultProps = {
    additionalStyles: undefined,
    onClick: undefined,
};

export default Row;
