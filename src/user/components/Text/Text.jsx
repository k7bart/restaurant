import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Text.module.scss";

const Text = ({ align, color, children, className, fontWeight, size }) => {
    return (
        <span
            className={classNames(
                styles.text,
                styles[align],
                styles[color],
                styles[fontWeight],
                styles[size],
                className
            )}
        >
            {children}
        </span>
    );
};

Text.propTypes = {
    align: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    fontWeight: PropTypes.string,
    size: PropTypes.string,
};

Text.defaultProps = {
    align: "left",
    color: "grey",
    className: undefined,
    fontWeight: "thin",
    size: "small",
};

export default Text;
