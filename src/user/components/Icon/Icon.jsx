import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Icon.module.scss";

const Icon = ({ additionalStyles, children }) => {
    return (
        <div className={classNames(styles.icon, additionalStyles)}>
            {children}
        </div>
    );
};

Icon.propTypes = {
    additionalStyles: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Icon;
